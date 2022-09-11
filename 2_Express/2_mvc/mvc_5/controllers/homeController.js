import {join} from 'path' 
const homeController=(request, response)=>{
    // response.send("<h2>Welcome to MySite.com</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\index.html');
    response.render(join(process.cwd(), 'views', 'index'), {title:'Home Page..!'});
}
export {homeController}