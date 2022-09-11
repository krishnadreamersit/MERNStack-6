// Write on ini file

//Read ini file
const fs = require('fs');
const ini = require('ini');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
console.log(config);

//write on ini file
//update on ini file
//read fron ini - section and key