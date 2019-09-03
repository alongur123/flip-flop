const getFlightTicket = require("./mongo/get_mongo").getFlightTicketDetails;
const getHistory = require("./mongo/get_mongo").getHistoryDetailes;
const getClass = require("./mongo/get_mongo").getClassesTicketType
const getAirline = require("./mongo/get_mongo").getAirlineDetails
const getCountry = require("./mongo/get_mongo").getCountryDetails
const getDestination = require("./mongo/get_mongo").getDestinationDetails
const getComplaintStatus = require("./mongo/get_mongo").getComplaintStatusType
const getComplaintdb = require("./mongo/get_mongo").getComplaint
const getUserdb = require("./mongo/get_mongo").getUser

module.exports.getFlightTicketDetails = async function getFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getFlightTicket(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}

module.exports.getHistoryDetailes = async function getHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getHistory(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;
}
module.exports.getClassesTicketType = async function getClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getClass(dbObject,data)
        resolve(answer)


 });

    let res = await promise
    return res;
}
module.exports.getAirlineDetails = async function getAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
    let answer = getAirline(dbObject,data)

        resolve(answer)

 });

    let res = await promise
    return res;
}
module.exports.getCountryDetails = async function getCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

     let answer = getCountry(dbObject,data)
     resolve(answer)
        

 });

    let res = await promise
    return res;
}
module.exports.getDestinationDetails = async function getDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getDestination(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;

}
module.exports.getComplaintStatusType = async function getComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getComplaintStatus(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;


}
module.exports.getComplaint = async function getComplaint(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getComplaintdb(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;


}
module.exports.getUser = async function getUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = getUserdb(dbObject,data)
        resolve(answer)
 });

 let res = await promise
 return res;

}



