var fs = require("fs");

const buffer_data = Buffer.from(fs.readFileSync('./image1.jpg'));
console.log(buffer_data);

let filename = "image2.jpg";
fs.writeFile(filename, buffer_data, "binary", (err) => {
    if (!err) console.log(`${filename} created successfully!`);
});