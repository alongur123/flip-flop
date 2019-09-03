const FLIGHT_TICKETS_COLLECTION_NAME = require("./collections_names").FLIGHT_TICKETS_COLLECTION_NAME;
const HISTORY_COLLECTION_NAME = require("./collections_names").HISTORY_COLLECTION_NAME;
const COUNTRIES_COLLECTION_NAME = require("./collections_names").COUNTRIES_COLLECTION_NAME;
const DESTINATION_COLLECTION_NAME = require("./collections_names").DESTINATION_COLLECTION_NAME;
const AIRLINES_COLLECTION_NAME = require("./collections_names").AIRLINES_COLLECTION_NAME;
const CLASS_TICKET_TYPES_COLLECTION_NAME = require("./collections_names").CLASS_TICKET_TYPES_COLLECTION_NAME;
const COMPLAINT_STATUS_TYPES_COLLECTION_NAME = require("./collections_names").COMPLAINT_STATUS_TYPES_COLLECTION_NAME;
const COMPLAINTS_COLLECTION_NAME = require("./collections_names").COMPLAINTS_COLLECTION_NAME;
const USERS_COLLECTION_NAME = require("./collections_names").USERS_COLLECTION_NAME;
const getCollection = require("./get_collection").getCollection



module.exports.getFlightTicketDetails = async function getFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightTicketsCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })
 });

    let res = await promise
    return res;
}
module.exports.getHistoryDetailes = async function getHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })
 });

    let res = await promise
    return res;
}
module.exports.getClassesTicketType = async function getClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let classesTicketTypeCollection = getCollection(dbObject,CLASS_TICKET_TYPES_COLLECTION_NAME);
        classesTicketTypeCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })
 });

    let res = await promise
    return res;
}
module.exports.getAirlineDetails = async function getAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let airlinesCollecrion = getCollection(dbObject,AIRLINES_COLLECTION_NAME);
        airlinesCollecrion.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })
 });

    let res = await promise
    return res;
}
module.exports.getCountryDetails = async function getCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let countriesCollection = getCollection(dbObject,COUNTRIES_COLLECTION_NAME);
        countriesCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })

 });

    let res = await promise
    return res;
}
module.exports.getDestinationDetails = async function getDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let destinationCollection = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })

 });

    let res = await promise
    return res;

}
module.exports.getComplaintStatusType = async function getComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        console.log(COMPLAINT_STATUS_TYPES_COLLECTION_NAME)
        let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
        complaintsStatusCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })
 });

    let res = await promise
    return res;


}
module.exports.getComplaint = async function getComplaint(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);
        complaintsCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })

 });

    let res = await promise
    return res;


}
module.exports.getUser = async function getUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let usersCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
        usersCollection.findOne({"id":Number(data.id)},{"_id":0}).then(function(result){
            resolve(result)
        })

 });

 let res = await promise
 return res;

}



