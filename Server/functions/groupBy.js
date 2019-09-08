
const groupBy_Destination = require("./mongo/groupBy_mongo").groupBy_Destination
const groupBy_Buyer = require("./mongo/groupBy_mongo").groupBy_Buyer


module.exports.groupByDestination = async function groupByDestination(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = groupBy_Destination(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}

module.exports.groupByBuyer = async function groupByBuyer(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = groupBy_Buyer(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}



