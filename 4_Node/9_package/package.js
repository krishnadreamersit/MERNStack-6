// npm init
// npm init -y
// Explore the package.json
// npm install upper-case
// npm uninstall upper-case
// npm update
// npm list
// npm list-g
// npm view package_name version

// https://www.npmjs.com/

// Example-1
// npm install upper-case
var uc = require('upper-case');
console.log(uc.upperCase("Hello World!"));

// Example-2
// npm install package-list
var packages = require('package-list');
packages(function(err, pkgs) {
    if (err) throw err;   
    console.log('Result is', pkgs);
});

// Example-3
// npm install -g nodemon
// npm audit fix --force
// npm audit