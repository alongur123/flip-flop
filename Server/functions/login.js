const logindb = require("./mongo/login").login

module.exports.login = async function login(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = logindb(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 
}
