const inseretFlightTicket = require("./mongo/inseret_mongo").inseretFlightTicketDetails;
const inseretHistory = require("./mongo/inseret_mongo").inseretHistoryDetailes;
const inseretClass = require("./mongo/inseret_mongo").inseretClassesTicketType
const inseretAirline = require("./mongo/inseret_mongo").inseretAirlineDetails
const inseretCountry = require("./mongo/inseret_mongo").inseretCountryDetails
const inseretDestination = require("./mongo/inseret_mongo").inseretDestinationDetails
const inseretComplaintStatus = require("./mongo/inseret_mongo").inseretComplaintStatusType
const inseretComplaintdb = require("./mongo/inseret_mongo").inseretComplaint
const inseretUserdb = require("./mongo/inseret_mongo").inseretUser

module.exports.inseretFlightTicketDetails = async function inseretFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretFlightTicket(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 
}


module.exports.inseretHistoryDetailes = async function inseretHistoryDetailes(dbObject,data){
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretHistory(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 
}
module.exports.inseretClassesTicketType = async function inseretClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretClass(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretAirlineDetails = async function inseretAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretAirline(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretCountryDetails = async function inseretCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretCountry(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretDestinationDetails = async function inseretDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretDestination(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretComplaintStatusType = async function inseretComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretComplaintStatus(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretComplaint = async function inseretComplaint(dbObject,data)
{
        let promise = new Promise((resolve,reject)=>{
        let answer = inseretComplaintdb(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}
module.exports.inseretUser = async function inseretUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = inseretUserdb(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
 

}