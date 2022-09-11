import {join} from 'path'

const homeController = (request, response)=>{
    response.sendFile(join(process.cwd(), 'views', 'index.html'));
}

export{homeController}