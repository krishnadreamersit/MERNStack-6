import jwt from 'jsonwebtoken';
function getToken(email) {
    return jwt.sign(email, '3ac11b93fc641073ad1f68955be84c7752a2c7e29aa6ae6579f6a63fefc4de18a3f53d04310a1a99ef4e29975caf9832eabe83262772fda9d738e5c8354d8860', { expiresIn: '1800s' });
}

export default getToken;