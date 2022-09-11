import {join} from 'path'

const homeController = (request, response)=>{
    response.sendFile(join(process.cwd(), 'views', 'index.html'));
    // response.render(join(process.cwd(), 'views', 'index'));
}

export{homeController}