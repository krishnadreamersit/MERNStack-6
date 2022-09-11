import {join} from 'path' 

const displayController=(request, response)=>{
    // response.send("<h2>About Us</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\about.html');
    // response.sendFile(join(process.cwd(), 'views', 'about.html'));
    var data={'value1':56}
    //data from file, xml, ini, pdf, database, excel, csv
    response.render('display', {data});
}

export {displayController}