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



module.exports.getAllFlightTicketsDetails = async function getAllFlightTicketsDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightTicketsCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })
 });
    let res = await promise
    return res;
}

module.exports.getAllHistoriesDetailes = async function getAllHistoriesDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })
 });

    let res = await promise
    return res;


}
module.exports.getAllClassesTicketTypes = async function getAllClassesTicketTypes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let classesTicketTypeCollection = getCollection(dbObject,CLASS_TICKET_TYPES_COLLECTION_NAME);
        classesTicketTypeCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })
 });

    let res = await promise
    return res;

}
module.exports.getAllAirlinesDetails = async function getAllAirlinesDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let airlinesCollecrion = getCollection(dbObject,AIRLINES_COLLECTION_NAME);
        airlinesCollecrion.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })
 });

    let res = await promise
    return res;


}
module.exports.getAllCountriesDetails = async function getAllCountriesDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let countriesCollection = getCollection(dbObject,COUNTRIES_COLLECTION_NAME);
        countriesCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })

 });

    let res = await promise
    return res;

}
module.exports.getAllDestinationsDetails = async function getAllDestinationsDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let destinationsCollection = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationsCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })

 });

    let res = await promise
    return res;



}
module.exports.getAllComplaintStatusTypes = async function getAllComplaintStatusTypes(dbObject,data)
{ 
    let promise = new Promise((resolve,reject)=>{

    console.log(COMPLAINT_STATUS_TYPES_COLLECTION_NAME)
    let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
    complaintsStatusCollection.find({},{"_id":0}).toArray(function(err,result){
        resolve(result)
    })
});

let res = await promise
return res;

}
module.exports.getAllComplaints = async function getAllComplaints(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);
        complaintsCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })

 });

    let res = await promise
    return res;


}
module.exports.getAllUsers = async function getAllUsers(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let complaintsCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
        complaintsCollection.find({},{"_id":0}).toArray(function(err,result){
            resolve(result)
        })

 });

    let res = await promise
    return res;

}