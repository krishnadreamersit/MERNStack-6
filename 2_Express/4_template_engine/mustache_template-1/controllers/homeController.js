import {join} from 'path' 
const homeController=(request, response)=>{
    // response.send("<h2>Welcome to MySite.com</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\index.html');
    // response.sendFile(join(process.cwd(), 'views', 'index.html'));
    var objPerson = {
        id:1,
        name:'Raj Rai',
        address:'KTM'
    }
    response.render('index.html',{id:1, name:'Raj Rai', address:'KTM'});
}
export {homeController}