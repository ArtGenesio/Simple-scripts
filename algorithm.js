
/*const { path } = require('main.js')*/

function getPath(path)
    document.getElementById("toinject").innerHTML = path;
    console.log(path)



var fs = require("fs");
const readline = require('readline');
async function processLineByLine() {
    var writeStream = fs.createWriteStream("output.txt");
    const fileStream = fs.createReadStream('./kat.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        var new_line = deletefromBracket(line)
        writeStream.write(new_line + "\n");
    }
    writeStream.end();
    }


function deletefromBracket(str) {
    var indexOfLeftBracket = str.indexOf('(')
    //var indexOfLeftBrace = str.indexOf('{')
    str = str.substring(0, indexOfLeftBracket-1)
    //-1 deletes also a space behind a bracket
    return str;
}


deletefromBracket(str)
processLineByLine()



//npm run start to start  electron