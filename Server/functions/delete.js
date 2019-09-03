const deleteFlightTicket = require("./mongo/delete_mongo").deleteFlightTicketDetails;
const deleteHistory = require("./mongo/delete_mongo").deleteHistoryDetailes;
const deleteClass = require("./mongo/delete_mongo").deleteClassesTicketType
const deleteAirline = require("./mongo/delete_mongo").deleteAirlineDetails
const deleteCountry = require("./mongo/delete_mongo").deleteCountryDetails
const deleteDestination = require("./mongo/delete_mongo").deleteDestinationDetails
const deleteComplaintStatus = require("./mongo/delete_mongo").deleteComplaintStatusType
const deleteComplaintdb = require("./mongo/delete_mongo").deleteComplaint
const deleteUserdb = require("./mongo/delete_mongo").deleteUser

module.exports.deleteFlightTicketDetails = async function deleteFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = deleteFlightTicket(dbObject,data)
        resolve(answer)
 });
 
    let res = await promise
    return res;
}

module.exports.deleteHistoryDetailes = async function deleteHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteHistory(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;
}
module.exports.deleteClassesTicketType = async function deleteClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteClass(dbObject,data)
        resolve(answer)


 });

    let res = await promise
    return res;
}
module.exports.deleteAirlineDetails = async function deleteAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
    let answer = deleteAirline(dbObject,data)

        resolve(answer)

 });

    let res = await promise
    return res;
}
module.exports.deleteCountryDetails = async function deleteCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

     let answer = deleteCountry(dbObject,data)
     resolve(answer)
        

 });

    let res = await promise
    return res;
}
module.exports.deleteDestinationDetails = async function deleteDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteDestination(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;

}
module.exports.deleteComplaintStatusType = async function deleteComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteComplaintStatus(dbObject,data)
        resolve(answer)
 });

    let res = await promise
    return res;


}
module.exports.deleteComplaint = async function deleteComplaint(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteComplaintdb(dbObject,data)
        resolve(answer)

 });

    let res = await promise
    return res;


}
module.exports.deleteUser = async function deleteUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let answer = deleteUserdb(dbObject,data)
        resolve(answer)
 });

 let res = await promise
 return res;

}



