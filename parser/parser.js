// parser for generating railroad diagrams
// developed by jaiditya (marc13000 on github)

// console.log's added as comments for future developers

import fs from 'fs';
import readLine from 'readline';
import rr, { Diagram } from "./generator/railroad.js";

import { promisify } from 'util';
import { resolve } from 'path';
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

getFiles("documentation/")
  .then(files => {
    console.log(files)
    console.log(files.includes("/Users/marc13000/RailroadDiagrams/documentation/PolySQL/Syntax.md"));
    for (var i = 0; i < files.length; i++) {
      editFile(files[i]);
    }
  })
  .catch(e => console.error(e));

// Sample code for better understanding file accessing by just changing one

/* fs.readdir('documentation/PolySQL/', (err, files) => {
  if (err) {
    return console.error(err);
  }
  console.log(files.includes("Syntax.md"));
  for (var i = 0; i < files.length; i++) {
    var file = 'documentation/PolySQL/' + files[i];
    editFile(file);
  }
  // done
}); */

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
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
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
<div style="overflow: auto;">
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
      const d = generate_diagram(bnf_code.trim() + "\n");
      var diag = eval("rr.Diagram(" + d + ")");
      result = result.replace(bnf_code, css_var + diag.toString() + "</div></html>\n{:/}\n\n");
      result = result.replace("<!--- BNF end --->\n", "\n{% highlight sql %}\n");
      
      //code sample for single diagram and checking

      /* const diagram = changeToDiagram(bnf_code);
      result = result.replace(bnf_code, diagram); */

      read_flag = false;
    }
    if (read_flag) {
      if (text.endsWith(":")) {
        console.log(text);
        if (bnf_code !== "") {
          console.log(bnf_code.trim());
          const d = generate_diagram(bnf_code.trim() + "\n");
          var diag = eval("rr.Diagram(" + d + ")");
          result = result.replace(bnf_code, css_var + diag.toString() + "</div></html>\n{:/}\n\n");
        }
        result = result.replace(text, "### " + text + "\n{::nomarkdown}\n");
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
  var bnf_lines = bnf_code.trim().split("\n");
  var choice_flag = 0;
  var s = "";
  for (let i = 0; i < bnf_lines.length; i++) {
    if (bnf_lines[i] == "" || bnf_lines[i] == undefined) {
      continue;
    }
    s += "rr.Sequence(";
    bnf_lines[i] = bnf_lines[i].trim();
    var bnf_words = bnf_lines[i].split(" ");
    var recursed_flag = 0;
    for (var j = 0; j < bnf_words.length; j++) {
      if (bnf_words[j] == "|") {
        if (choice_flag == 0) {
          s = "rr.Choice(0," + s;
        }
        if (j != 0) {
          s = s.substring(0, s.length - 1) + "),rr.Sequence("
        }
        choice_flag = 1;
        continue;
      }
      else {
        if (choice_flag == 1 && j == 0) {
          choice_flag = 2;
        }
      }
      if (bnf_words[j] !== "" && bnf_words[j] !== undefined) {
        if (bnf_words[j] == "(" || bnf_words[j] == "{" || bnf_words[j] == "[" || (j != bnf_words.length - 1 && bnf_words[j + 1].indexOf("[,") !== -1)) {
          var s_temp = "";
          var s_end = "";
          if (bnf_words[j] == "(" || bnf_words[j] == "{") {
            s_temp += "rr.Sequence(";
          }
          else if (bnf_words[j] == "[") {
            s_temp += "rr.Optional(";
          }
          else {
            j++;
            s_temp += "rr.OneOrMore(";
            s_end = ", rr.Terminal2(',')";
          }
          j++;
          var bnf_code_recurs = "";
          var ct = 0;
          while ((bnf_words[j] !== ")" && bnf_words[j] !== ")*" && bnf_words[j] !== "}" && bnf_words[j] !== "]" && bnf_words[j] !== "]*") || ct !== 0) {
            if (bnf_words[j] == "(" || bnf_words[j] == "{" || bnf_words[j] == "[" || (j < bnf_words.length - 1 && bnf_words[j + 1].indexOf("[,") !== -1)) {
              ct++;
            }
            if (bnf_words[j] == ")" || bnf_words[j] == ")*" || bnf_words[j] == "}" || bnf_words[j] == "]" || bnf_words[j] == "]*") {
              if (ct > 0) {
                ct--;
              }
            }
            bnf_code_recurs += bnf_words[j] + " ";
            j++;
            if (j > bnf_words.length) {
              i++;
              bnf_lines[i] = bnf_lines[i].trim();
              var bnf_words = bnf_lines[i].split(" ");
              j = 0;
              bnf_code_recurs += "\n";
            }
          }
          if(bnf_words[j] == ")*") {
            s_temp = "rr.OneOrMore(";
          } 
          s += s_temp + generate_diagram(bnf_code_recurs);
          if (i == bnf_lines.length - 1 && j == bnf_words.length - 1) {
            recursed_flag = 1;
            s += s_end + "))";
          }
          else {
            s += s_end + "),"
          }
          continue;
        }
        else {
          if (bnf_words[j].charAt(0) == "'") {
            bnf_words[j] = bnf_words[j].substring(1, bnf_words[j].length - 1);
          }
          if (bnf_words[j].charAt(0) == "<") {
            bnf_words[j] = bnf_words[j].substring(1, bnf_words[j].length - 1);
            s += "rr.Terminal3('" + bnf_words[j];
          }
          else if (bnf_words[j].toUpperCase() == bnf_words[j] && bnf_words[j].length > 1) {
            s += "rr.NonTerminal('" + bnf_words[j];
          }
          else if (bnf_words[j].length == 1) {
            s += "rr.Terminal2('" + bnf_words[j];
          }
          else {
            s += "rr.Terminal('" + bnf_words[j];
          }
        }
        if (j == bnf_words.length - 1) {
          s += "')";
        }
        else {
          s += "'),";
        }
      }
    }
    if (recursed_flag != 1) {
      if (i != bnf_lines.length - 1) {//as last line has no words
        s += "),";
      }
      else {
        s += ")";
      }
    }
    if (choice_flag == 2) {
      s += "),";
      choice_flag = 0;
    }
    if (choice_flag == 1 && i == bnf_lines.length - 1) {
      s += ")";
    }
  }
  // if (recursed_flag !== 1) {
  //   s += ")";
  // }
  console.log(s);
  return "rr.Stack(" + s + ")";
}