"use strict";

const fs = require("fs");
const replace = require('replace-in-file');

if (process.argv.length !== 4)
    return console.error("Usage: [symbol map] [source file]");

let map = (fs.readFileSync(process.argv[2], "utf8")).split("\n");
fs.writeFile("backup.c", fs.readFileSync(process.argv[3], "utf8"), (err) => {
    let counter = 0;
    for(let i = 0; i < map.length; i++) {
        const item = map[i].split(" ");

        const location = "function_" + item[0];
        const function_name = item[1].replace('\r', '');

        let changedFiles = replace.sync({
            files: process.argv[3],
            from: (new RegExp(location, 'g')),
            to: function_name,
        });

        const success = !!(changedFiles.length)
        console.log(`${i}/${map.length}`, success, location, function_name);

        if(success) counter += 1;
    }

    console.log(`Successfully converted ${counter} out of ${map.length} function names`);
});