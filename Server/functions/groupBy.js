
const groupBy_Destination = require("./mongo/groupBy_mongo").groupBy_Destination

module.exports.groupByDestination = async function groupByDestination(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = groupBy_Destination(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}


