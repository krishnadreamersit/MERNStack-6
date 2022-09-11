import fs from 'fs';

var photoFile = 'C:\\Users\\Administrator\\Desktop\\JS\\MERNStack-6\\2_Express\\10_REST_api\\rest_api_1\\public\\images\\image1.png';
const file = fs.readFileSync(photoFile);

// get file path
// get file name
// get file extension
// new file exist or not?
// file compress - quality?
/*
{
    id:1, //number
    name:'Mitra', //string
    address:'Ktm', //string
    photo: binary_data, //type file
    file_name: image1,  //string 
    file_extension: jpg, //string
} -> insert on collection (persons) -> api (POST http://127.0.0.1/v1/persons/)
*/

// image file to binary code-1
const buf1 = Buffer.from(file);
console.log(buf1);

// buf1 -> encrypt -> database (key -> public, private)
// buf2 <- decrypt <- database

// buffer to file code-1
fs.writeFile("test3.jpg", buf1, 'binary', function (err) {
    if (err) throw err;
    console.log('File saved.')
});