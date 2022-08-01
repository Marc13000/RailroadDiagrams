import fs from 'fs';
import readLine from 'readline';
import rr, { Diagram } from "./generator/railroad.js";

fs.readdir('../documentation/PolySQL/', (err, files) => {
    if (err) {
        return console.error(err);
    }
    console.log(files.includes("Syntax.md"));
    for (var i = 0; i < files.length; i++) {
        var file = '../documentation/PolySQL/' + files[i];
        editFile(file);
    }
    // done
});

function editFile(file) {
    const css_var = `<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
`
    const data = fs.readFileSync(file, 'utf8');
    var lines = data.split("\n");
    var result = data;
    // console.log(lines.length);
    var read_flag = false;
    var bnf_code = "";
    for (var j = 0; j < lines.length; j++) {
        var text = lines[j];
        if (text.includes("BNF end")) {
            //console.log(bnf_code);//add function here to convert to rd's
            //console.log(d.toSVG);
            console.log(bnf_code.trim());
            const d = generate_diagram(bnf_code.trim()+"\n");
            result = result.replace(bnf_code, css_var+d.toString()+"</html>\n{:/}\n\n");
            result = result.replace("<!--- BNF end --->\n","\n{:/}\n{% highlight sql %}\n");
            // const diagram = changeToDiagram(bnf_code);
            // result = result.replace(bnf_code, diagram);
            read_flag = false;
        }
        if (read_flag) {
            if(text.endsWith(":")) {
              if(bnf_code !== ""){
                console.log(bnf_code.trim());
                const d = generate_diagram(bnf_code.trim()+"\n");
                result = result.replace(bnf_code, css_var+d.toString()+"</html>\n{:/}\n\n");
              }
              result = result.replace(text,"## "+text+"\n{::nomarkdown}\n");
              console.log(text);
              bnf_code = "";
            } else {
              bnf_code += text + "\n";
            }
        }
        if (text.includes("BNF start")) {
            result = result.replace("<!--- BNF start --->\n", `{% endhighlight %}\n`);
            read_flag = true;
        }
    }
    fs.writeFileSync(file, result, 'utf8');
}

function generate_diagram(bnf_code) {
    var bnf_lines = bnf_code.split("\n");
    var choice_flag = false;
    var s = "";
    for(let i = 0; i < bnf_lines.length - 1; i++) {
        s += "rr.Sequence(";
        bnf_lines[i] = bnf_lines[i].trim() + ' ';
        var j = 0;
        var bnf_words = bnf_lines[i].split(" ");
        if (bnf_words[j] == "" || bnf_words[j] == undefined) {
          j++;
        }
        if(bnf_words[j] !== "|") {
          if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
            s += "rr.NonTerminal('"+bnf_words[j++];
          }
          else {
            s += "rr.Terminal('"+bnf_words[j++];
          }
          if(i !== 0) {
            choice_flag = false;
          }
        }
        else {
          j++;
          while (bnf_words[j] == "" || bnf_words[j] == undefined) {
            j++;
          }
          if(bnf_words[j].charAt(0) == "'") {
            bnf_words[j] = bnf_words[j].substring(1,bnf_words[j].length - 1);
          }
          if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
            s += "rr.NonTerminal('"+bnf_words[j++];
          }
          else {
            s += "rr.Terminal('"+bnf_words[j++];
          }
          choice_flag = true;
        }
        // console.log(bnf_words.length);
        for(; j < bnf_words.length; j++) {
          if(bnf_words[j] !== "" && bnf_words[j] !== undefined) {
            if(bnf_words[j].charAt(0) == "'") {
              bnf_words[j] = bnf_words[j].substring(1,bnf_words[j].length - 1);
              if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
                s += "'),rr.NonTerminal('"+bnf_words[j] && bnf_words[j].length > 1;
              }
              else {
                s += "'),rr.Terminal('"+bnf_words[j];
              }
            }
            else if(bnf_words[j] == "(" || bnf_words[j] == "{" || bnf_words[j].indexOf("[") !== -1 || bnf_words[j+1].indexOf("[") !== -1) {
              var recursion_result = recursive_helper(s, bnf_words, j);
              s = recursion_result.s;
              j = recursion_result.j
              j++;
              if(j == bnf_words.length - 1) {
                s = s.substring(0, s.length - 2);
                j+=2;
                break;
              }
              if(bnf_words[j].charAt(0) == "'") {
                bnf_words[j] = bnf_words[j].substring(1,bnf_words[j].length - 1);
              }
              if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
                s += "rr.NonTerminal('"+bnf_words[j];
              }
              else {
                s += "rr.Terminal('"+bnf_words[j];
              }
            }
            else {  
              if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
                s += "'),rr.NonTerminal('"+bnf_words[j];
              }
              else {
                s += "'),rr.Terminal('"+bnf_words[j];
              }
            }
          }
        }
        if(j == bnf_words.length + 1){
          if(i != bnf_lines.length - 2) {//as last line has no words
            s += "))";
            if(choice_flag == false && i !== 1) {
              s = "rr.Choice(0,"+s+")),"
            }
          }
          else {
            s += "))";
            if(choice_flag == true && i !== 1) {
              s = "rr.Choice(0,"+s+")"
            }
          }
        }
        else{
          if(i != bnf_lines.length - 2) {//as last line has no words
            s += "')),";
            if(choice_flag == false && i !== 0) {
              s = "rr.Choice(0,"+s+")),"
            }
          }
          else {
            s += "'))";
            if(choice_flag == true && i !== 0) {
              s = "rr.Choice(0,"+s+")"
            }
          }
        }
    }
    console.log(s);
    var d = eval("rr.Diagram("+s+")");
    return d;
}

function recursive_helper(s, bnf_words, j) {
  var s_temp = "'),";
  var s_end = "')),";
  if(bnf_words[j] == "(" || bnf_words[j] == "{") {
    s_temp += "rr.Choice(1,";
  }
  else if(bnf_words[j] == "[") {
    s_temp += "rr.Optional(rr.Choice(1,";
    s_end = "'))),";
  }
  else {
    j++;
    s_temp += "rr.OneOrMore(rr.Sequence(";
    s_end = "'))),";
  }
  j++;
  if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
    s_temp += "rr.NonTerminal('"+bnf_words[j++];
  }
  else {
    s_temp += "rr.Terminal('"+bnf_words[j++];
  }
  for(; j < bnf_words.length; j++) {
    if(bnf_words[j] == "(" || bnf_words[j].indexOf("[") != -1) {
      var recursion_result = recursive_helper(s + s_temp, bnf_words, j);
      s_temp = recursion_result.s;
      j = recursion_result.j;
    }
    if(bnf_words[j] == ")" || bnf_words[j] == "}" || bnf_words[j].indexOf("]") != -1) {
      s = s + s_temp + s_end;
      return {s, j};
    }
    else if(bnf_words[j] !== "|"){
      if(bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
        s_temp += "'),rr.NonTerminal('"+bnf_words[j];
      }
      else {
        s_temp += "'),rr.Terminal('"+bnf_words[j];
      }
    }
  }
}