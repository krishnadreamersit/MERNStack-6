import { join } from 'path'
// import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {    
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    response.cookie('tmpUser', 'Raj Rai');
    response.send('cookie create successfully');
}

const displayController = async (request, response) => {
    response.send(request.cookies);
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };