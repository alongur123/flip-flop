const updateFlightTicket = require("./mongo/update_mongo").updateFlightTicketDetails;
const updateHistory = require("./mongo/update_mongo").updateHistoryDetailes;
const updateClass = require("./mongo/update_mongo").updateClassesTicketType
const updateAirline = require("./mongo/update_mongo").updateAirlineDetails
const updateCountry = require("./mongo/update_mongo").updateCountryDetails
const updateDestination = require("./mongo/update_mongo").updateDestinationDetails
const updateComplaintStatus = require("./mongo/update_mongo").updateComplaintStatusType
const updateComplaintdb = require("./mongo/update_mongo").updateComplaint
const updateUserdb = require("./mongo/update_mongo").updateUser

module.exports.updateFlightTicketDetails = async function updateFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = updateFlightTicket(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}

module.exports.updateHistoryDetailes = async function updateHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateHistory(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;
}
module.exports.updateClassesTicketType = async function updateClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateClass(dbObject,data)
        resolve(answer)


 });

    let res = await promise
    return res;
}
module.exports.updateAirlineDetails = async function updateAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
    let answer = updateAirline(dbObject,data)

        resolve(answer)

 });

    let res = await promise
    return res;
}
module.exports.updateCountryDetails = async function updateCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

     let answer = updateCountry(dbObject,data)
     resolve(answer)
        

 });

    let res = await promise
    return res;
}
module.exports.updateDestinationDetails = async function updateDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateDestination(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;

}
module.exports.updateComplaintStatusType = async function updateComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateComplaintStatus(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;


}
module.exports.updateComplaint = async function updateComplaint(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateComplaintdb(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;


}
module.exports.updateUser = async function updateUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = updateUserdb(dbObject,data)
        resolve(answer)
 });

 let res = await promise
 return res;

}


