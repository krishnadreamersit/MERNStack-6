import fs from "fs";
import { parse } from "csv-parse";

fs.createReadStream("./data.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        console.log(row);
    })

// Task
    // Write data on csv
    // Update data on csv
    // Delete data on csv
    // Filter data on csv
    // Export/Import in database 