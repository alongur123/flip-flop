const USERS_COLLECTION_NAME = require("./collections_names").USERS_COLLECTION_NAME;
const getCollection = require("./get_collection").getCollection


module.exports.login = async function login(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let usersCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
        usersCollection.findOne({"username":data.username,"Password":data.password},{"_id":0}).then(function(result){
            console.log(result);
            resolve(result)
        })
 });

    let res = await promise
    return res;
}