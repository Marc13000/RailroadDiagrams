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
    const css_var = `{% endhighlight %}
{::nomarkdown}
<html>
<style>
     svg.railroad-diagram {
       background-color: hsl(30,20%,95%);
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
       fill: hsl(120,100%,90%);
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
       fill: #eee;
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
            console.log(text);
            //console.log(bnf_code);//add function here to convert to rd's
            const d = generate_diagram(bnf_code);
            //console.log(d.toSVG);
            result = result.replace(bnf_code, css_var+d.toString()+"</html> \n{:/}\n{% highlight sql %}\n");
            // const diagram = changeToDiagram(bnf_code);
            // result = result.replace(bnf_code, diagram);
            bnf_code = "";
            read_flag = false;
        }
        if (read_flag) {
            bnf_code += text + "\n";
        }
        if (text.includes("BNF start")) {
            read_flag = true;
        }
    }
    fs.writeFileSync(file, result, 'utf8');
}

function generate_diagram(bnf_code) {
    var bnf_lines = bnf_code.split("\n");
    for(let i = 1; i < 2; i++) {
        bnf_lines[i] = bnf_lines[i].trim() + ' ';
        var s = "rr.NonTerminal('";
        for(let j = 0; j < bnf_lines[i].length; j++) {
            var c = bnf_lines[i].charAt(j);
            if(c == ' ' && j != bnf_lines[i].length - 1) {
              s += "'),rr.NonTerminal('"
            }
            else {
                s = s+c;
            }
            if(j == bnf_lines[i].length - 1){
                s += "')";
                var d = eval("rr.Diagram(rr.Sequence("+s+"))");
            }
        }
    }
    return d;
}

function process(input) {
	if(!input) input = find('.input').value;
	// const standalone = find('#option-standalone').checked;
	// rrOptions.VS = parseInt(find("#option-vs").value, 10);
	// rrOptions.AR = parseInt(find("#option-ar").value, 10);
	// rrOptions.STROKE_ODD_PIXEL_LENGTH = find("#option-odd-stroke").checked;
	// rrOptions.CHAR_WIDTH = parseInt(find("#option-char-width").value, 10);
	// rrOptions.COMMENT_CHAR_WIDTH = parseInt(find("#option-comment-width").value, 10);
	// rrOptions.INTERNAL_ALIGNMENT = find("#option-alignment").value;
	try {
		var result = eval(input).format();
		// location.hash = "#" + encodeURIComponent(input);
	} catch (e) {
		find('.output-text').textContent = "Invalid input.\n" + e
		throw e;
	}
	// find('.output-image').innerHTML = '';
	// result.addTo(find('.output-image'));
	// find('.output-text').textContent = standalone ? result.toStandalone() : result.toString();
	console.log(result);
}

