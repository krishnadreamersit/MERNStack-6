// Installing Libs
/*
npm init -y
npm i express
npm i ejs
*/

// Importing Libs
const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.port || '8000'

// Example-1
/*
app.get('/', function(request, response){
    response.send("Hello world of express");
});
app.listen(port);
*/

// Example-2
/*
app.get('/', (request, response)=>{
    response.send("Hello world of express");
});
app.listen(port);
*/

// Example-2 - Methods
/*
app.get('/', (request, response)=>{
    response.send("Hello world of express");
});
*/

/*
app.get('/students', (request, response)=>{
    response.send("Hello world of student");
});
*/

/*
app.get('/students/*', (request, response)=>{
    response.send("Hello world of student");
});
*/

/*
app.get('*', (request, response)=>{
    response.send("404 Page not found!");
});
*/
/*
app.all('*', (request, response)=>{
    response.send("404 Page not found!");
});
app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});
*/

// Example-3 - String Path
// app.get('/students/', ()=>{});
// app.get('/students/add', ()=>{});

// Example-4 - String Pattern
/*
app.get('/ab?xy', (request, response)=>{
    response.send("Hello world of express");
});
app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});
*/

// Example-5 - Regular Exression
/*
app.get('/a/', (request, response)=>{
    response.send("Hello world of express");
});
app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});
*/

// Example-6 - Single/More than one callback
/*
app.get('/cbf1', (request, response, next)=>{
    console.log("first callback");
    next();
}, (request, response)=>{
    console.log("second callback");
    response.send("Hello world of express-2");
});
app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});
*/

// Example-7 - Array of Callback
/*
const cbf1=(request, respnse, next)=>{
    console.log("first cbf-1");  
    next();  
}
const cbf2=(request, respnse, next)=>{
    console.log("second cbf-2");
    next();
}
const cbf3=(request, respnse)=>{
    console.log("third cbf-3");
    response.send("third cbf-3");
}
app.get('/', [cbf1, cbf2, cbf3]);
*/

// Example-8 - Combination of Independent Function and Array of Functions
/*
const cbf1=(request, response, next)=>{
    console.log("cbf-1");  
    next();  
}
const cbf2=(request, response, next)=>{
    console.log("cbf-2");
    next();
}
app.get('/cbf3', [cbf1, cbf2],(request, response, next)=>{
    console.log("cbf-3")
    next();
}, (request, response)=>{
    console.log("cbf-4");
    respnse.send("cbf-4");
});
*/

// Example 9-1 - Chained Route Callback
/*
app.route('/person')
    .get((request, response)=>{
        response.send("get function");
    })
    .post((request, response)=>{
        response.send("post function");
    })
    .put((request, response)=>{
        response.send("put function");
    })
*/

// Example 9-2 - Chained Route Callback
/*
app.route('/person')
    .all((request, response, next)=>{
        response.send("all method");
        next();
    })
    .get((request, response)=>{
        response.send("get method");
    })
    .post((request, response)=>{
        response.send("post method");
    })
    .put((request, response)=>{
        response.send("put function");
    })
*/
/*
app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});
*/