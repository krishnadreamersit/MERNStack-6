const  {create}  = require('xmlbuilder2');
const fs = require('fs');

let req_name = 'post-request';                    
const root = create({ version: '1.0', encoding: "UTF-8", standalone: "yes" })                        
            .ele('Javascript', { async: 'false', continueOnError: "false", enabled: "true", timeLimit: "200", name:req_name})                        
            .ele('DisplayName').txt(req_name).up()                        
            .ele('Properties').up()                        
            .ele('ResourceURL').txt('jsc://'+req_name+'.js').up()                    
            .up();              
const xml = root.end({ prettyPrint: true });
console.log(xml);
let full_file_name = "./" + req_name + ".xml";
fs.writeFileSync(full_file_name, xml, function(err) {
    if (err) throw err;
});

//read xml file (tags)
//update xml file (tags)