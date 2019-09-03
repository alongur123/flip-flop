const FLIGHT_TICKETS_COLLECTION_NAME = require("./collections_names").FLIGHT_TICKETS_COLLECTION_NAME;
const HISTORY_COLLECTION_NAME = require("./collections_names").HISTORY_COLLECTION_NAME;
const COUNTRIES_COLLECTION_NAME = require("./collections_names").COUNTRIES_COLLECTION_NAME;
const DESTINATION_COLLECTION_NAME = require("./collections_names").DESTINATION_COLLECTION_NAME;
const AIRLINES_COLLECTION_NAME = require("./collections_names").AIRLINES_COLLECTION_NAME;
const CLASS_TICKET_TYPES_COLLECTION_NAME = require("./collections_names").CLASS_TICKET_TYPES_COLLECTION_NAME;
const COMPLAINT_STATUS_TYPES_COLLECTION_NAME = require("./collections_names").COMPLAINT_STATUS_TYPES_COLLECTION_NAME;
const COMPLAINTS_COLLECTION_NAME = require("./collections_names").COMPLAINTS_COLLECTION_NAME;
const USERS_COLLECTION_NAME = require("./collections_names").USERS_COLLECTION_NAME;
const SETTINGS = require("./collections_names").SETTINGS;
const getCollection = require("./get_collection").getCollection

const getFlightTicket = require("./get_mongo").getFlightTicketDetails;
const getHistory = require("./get_mongo").getHistoryDetailes;
const getClass = require("./get_mongo").getClassesTicketType
const getAirline = require("./get_mongo").getAirlineDetails
const getCountry = require("./get_mongo").getCountryDetails
const getDestination = require("./get_mongo").getDestinationDetails
const getComplaintStatus = require("./get_mongo").getComplaintStatusType
const getComplaintdb = require("./get_mongo").getComplaint
const getUserdb = require("./get_mongo").getUser


module.exports.inseretFlightTicketDetails = async function inseretFlightTicketDetails(dbObject,data)
{
    data.id = await incIdFlight(dbObject);
    let promise = new Promise((resolve,reject)=>{
            let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
             flightTicketsCollection.insertOne(data,function(err, res) {
                if (err)
                { 
                    resolve (err);
                }
                else{resolve(getFlightTicket(dbObject,data))}
            } );
        });
    let res = await promise
    return res
    
 
}


module.exports.inseretHistoryDetailes = async function inseretHistoryDetailes(dbObject,data){
    data.id = await incIdHistory(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getHistory(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 
}
module.exports.inseretClassesTicketType = async function inseretClassesTicketType(dbObject,data)
{
    data.id = await incIdClasses(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let classesTicketTypeCollection = getCollection(dbObject,CLASS_TICKET_TYPES_COLLECTION_NAME);
        classesTicketTypeCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getClass(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 
 

}
module.exports.inseretAirlineDetails = async function inseretAirlineDetails(dbObject,data)
{
    data.id = await incIdAirline(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let airlinesCollecrion = getCollection(dbObject,AIRLINES_COLLECTION_NAME);
        airlinesCollecrion.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getAirline(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 

}
module.exports.inseretCountryDetails = async function inseretCountryDetails(dbObject,data)
{
    data.id = await incIdCountry(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let countriesCollection = getCollection(dbObject,COUNTRIES_COLLECTION_NAME)
        countriesCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getCountry(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 

}
module.exports.inseretDestinationDetails = async function inseretDestinationDetails(dbObject,data)
{
    data.id = await incIdDestination(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let destinationCollection = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getDestination(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 

}
module.exports.inseretComplaintStatusType = async function inseretComplaintStatusType(dbObject,data)
{
    data.id = await incIdComplaintStatusType(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
        complaintsStatusCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getComplaintStatus(dbObject,data))}
        } );
    });
    let res = await promise
    return res

}
module.exports.inseretComplaint = async function inseretComplaint(dbObject,data)
{
    data.id = await incIdComplaint(dbObject);
    let promise = new Promise((resolve,reject)=>{
        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);
        complaintsCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getComplaintdb(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 

}
module.exports.inseretUser = async function inseretUser(dbObject,data)
{
    data.id = await incIdUser(dbObject);
    let promise = new Promise((resolve,reject)=>{
      
        let usersCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
        usersCollection.insertOne(data,function(err, res) {
            if (err)
            { 
                resolve (err);
            }
            else{resolve(getUserdb(dbObject,data))}
        } );
    });
    let res = await promise
    return res
 

}



async function  incIdFlight(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"flightId":1}}).then(function(result) {
           
            settingsCollection.findOne({}).then(function(res){
                resolve(res.flightId);
            })
            
           
    })});
    let res = await promise
    return res


}
async function  incIdHistory(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"historyId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.historyId);
            })
        });
    });
    let res = await promise
    return res

}
async function  incIdClasses(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"classId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.classId);
            })
        });
    });
    let res = await promise
    return res

}
async function  incIdAirline(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"airlineId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.airlineId);
            })
        });
    });
    let res = await promise
    return res
    
}
async function  incIdCountry(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"countryId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.countryId);
            })
        });
    });
    let res = await promise
    return res
    
}
async function  incIdDestination(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"destinationId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.destinationId);
            })
        });
    });
    let res = await promise
    return res
    
}
async function  incIdComplaintStatusType(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"complaintStatusId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.complaintStatusId);
            })
        });
    });
    let res = await promise
    return res
    
}
async function  incIdComplaint(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"complaintId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.complaintId);
            })
        });
    });
    let res = await promise
    return res
    
}
async function  incIdUser(dbObject)
{
    let promise = new Promise((resolve,reject)=>{
        let settingsCollection = getCollection(dbObject,SETTINGS);
        settingsCollection.updateOne({},{$inc:{"userId":1}}).then(function(result) {
            settingsCollection.findOne({}).then(function(res){
                resolve(res.userId);
            })
        });
    });
    let res = await promise
    return res
    
}

