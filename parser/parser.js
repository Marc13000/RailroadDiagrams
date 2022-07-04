import fs from 'fs';
import readLine from 'readline';
import rr from "./generator/railroad.js";

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
            console.log(bnf_code);//add function here to convert to rd's
            const d = rr.Diagram("foo", rr.Choice(0, "bar", "baz"));
            console.log(d.toSVG);
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

