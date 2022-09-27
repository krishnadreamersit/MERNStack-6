import jwt from "jsonwebtoken";
try{
    console.log(jwt.sign({username: 'info.karyal@gmail.com'}, '3ac11b93fc641073ad1f68955be84c7752a2c7e29aa6ae6579f6a63fefc4de18a3f53d04310a1a99ef4e29975caf9832eabe83262772fda9d738e5c8354d8860', { expiresIn: '1800s' }));
}
catch(ex){
    console.log(`Error ${ex}`);
}
