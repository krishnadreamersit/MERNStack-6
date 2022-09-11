const fs = require('fs');

const encrypt = require('node-file-encrypt');

let filePath = 'image1.png'; // source file path
let encryptPath = '';

var enc_file = function(){  // encrypt file
    // to FileEncrypt can be passed 4 Arguments
    // filePath     - the path of the file that should be encrypted
    // outPath      - this is optional  - the Path for the encrypted file
    // fileEnding   - this is optional  - a custom fileEnding like '.myFile', default is '.crypt'
    // cryptFileName - this is optional - boolean if the filename should be hashed, default is true
    let f = new encrypt.FileEncrypt(filePath);
    f.openSourceFile();
    f.encrypt('111111'); //key
    encryptPath = f.encryptFilePath;
    console.log("file encrypt successfully");
}

var dec_file=function(){ // decrypt file
    fs.unlink(filePath, function() {});
    let f = new encrypt.FileEncrypt(encryptPath);
    f.openSourceFile();
    f.decrypt('111111');
    console.log("file decrypt successfully");
}

enc_file();
dec_file();

/*
{ // get original file name from encrypted file
    let f = new encrypt.FileEncrypt(encryptPath);
    f.openSourceFile();
    console.log(f.info('111111'));
}

{ // encrypt & decrypt file async
    let f = new encrypt.FileEncrypt(filePath);
    f.openSourceFile();
    f.encryptAsync('111111').then(function() {
        encryptPath = f.encryptFilePath;
        console.log("encrypt async done");
        fs.unlink(filePath, function() {});
        let d = new encrypt.FileEncrypt(encryptPath);
        d.openSourceFile();
        d.decryptAsync('111111').then(function() {
            console.log("decrypt async done");
        });
    });
}
*/