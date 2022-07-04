const fs = require('fs');
const readLine = require('readline');
import rr from "./railroad.js";
const d = rr.Diagram("foo", rr.Choice(0, "bar", "baz"));
console.log(d);

fs.readdir('../documentation/PolySQL/', (err, files) => {
    if (err) {
        return console.error(err);
    }
    console.log(files.includes("Syntax.md"));
    for (i in files) {
        var file = '../documentation/PolySQL/' + files[i];
        var rl = readLine.createInterface({
            input: fs.createReadStream(file),
            output: process.stdout,
            terminal: false
        });
        var read_flag = false;
        var bnf_code = "";
        rl.on('line', function (text) {
            if (text.includes("BNF end")) {
                console.log(bnf_code);//add function here to convert to rd's
                bnf_code = "";
                read_flag = false;
            }
            if(read_flag) {
                bnf_code += text + "\n";
            }
            if (text.includes("BNF start")) {
                read_flag = true;
            }
        });
    }
    // done
});


