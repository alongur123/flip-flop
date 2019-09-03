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



module.exports.updateFlightTicketDetails = async function updateFlightTicketDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightTicketsCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });
    let res = await promise
    return res;
}
module.exports.updateHistoryDetailes = async function updateHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });

    let res = await promise
    return res;
}
module.exports.updateClassesTicketType = async function updateClassesTicketType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let classesTicketTypeCollection = getCollection(dbObject,CLASS_TICKET_TYPES_COLLECTION_NAME);
        classesTicketTypeCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });

    let res = await promise
    return res;
}
module.exports.updateAirlineDetails = async function updateAirlineDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let airlinesCollecrion = getCollection(dbObject,AIRLINES_COLLECTION_NAME);
        airlinesCollecrion.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });

    let res = await promise
    return res;
}
module.exports.updateCountryDetails = async function updateCountryDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let countriesCollection = getCollection(dbObject,COUNTRIES_COLLECTION_NAME);
        countriesCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })

 });

    let res = await promise
    return res;
}
module.exports.updateDestinationDetails = async function updateDestinationDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let destinationsCollections = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationsCollections.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });

    let res = await promise
    return res;

}
module.exports.updateComplaintStatusType = async function updateComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        console.log(COMPLAINT_STATUS_TYPES_COLLECTION_NAME)
        let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
        complaintsStatusCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })
 });

    let res = await promise
    return res;


}
module.exports.updateComplaint = async function updateComplaint(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);
        complaintsCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })

 });

    let res = await promise
    return res;


}
module.exports.updateUser = async function updateUser(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let usersCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
        usersCollection.updateOne({"id":Number(data.id)},{$set: data}).then(function(result){
            resolve(data)
        })

 });

 let res = await promise
 return res;

}






