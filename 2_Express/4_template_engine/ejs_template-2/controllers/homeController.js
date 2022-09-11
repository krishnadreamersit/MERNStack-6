import {join} from 'path' 
const homeController=(request, response)=>{
    // response.send("<h2>Welcome to MySite.com</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\index.html');
    // response.sendFile(join(process.cwd(), 'views', 'index.html'));
    response.render('index');
}
export {homeController}