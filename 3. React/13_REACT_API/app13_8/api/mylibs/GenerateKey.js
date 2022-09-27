import crypto from 'crypto';
function getKey(){
    return crypto.randomBytes(64).toString('hex');
}
export default getKey;