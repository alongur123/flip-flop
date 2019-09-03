const getAllFlightTickets = require("./mongo/get_all_mongo").getAllFlightTicketsDetails;
const getAllHistories = require("./mongo/get_all_mongo").getAllHistoriesDetailes;
const getAllClassesTicket = require("./mongo/get_all_mongo").getAllClassesTicketTypes
const getAllAirlines = require("./mongo/get_all_mongo").getAllAirlinesDetails
const getAllCountries = require("./mongo/get_all_mongo").getAllCountriesDetails
const getAllDestinations = require("./mongo/get_all_mongo").getAllDestinationsDetails
const getAllComplaintStatus = require("./mongo/get_all_mongo").getAllComplaintStatusTypes
const getAllComplaintsdb = require("./mongo/get_all_mongo").getAllComplaints
const getAllUsersdb = require("./mongo/get_all_mongo").getAllUsers

module.exports.getAllFlightTicketsDetails = async function getAllFlightTicketsDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllFlightTickets(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}
module.exports.getAllHistoriesDetailes = async function getAllHistoriesDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllHistories(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;


}
module.exports.getAllClassesTicketTypes = async function getAllClassesTicketTypes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllClassesTicket(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;

}
module.exports.getAllAirlinesDetails = async function getAllAirlinesDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllAirlines(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;


}
module.exports.getAllCountriesDetails = async function getAllCountriesDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllCountries(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;

}
module.exports.getAllDestinationsDetails = async function getAllDestinationsDetails(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllDestinations(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;

}
module.exports.getAllComplaintStatusTypes = async function getAllComplaintStatusTypes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllComplaintStatus(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}
module.exports.getAllComplaints = async function getAllComplaints(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllComplaintsdb(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;
}
module.exports.getAllUsers = async function getAllUsers(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let answer = getAllUsersdb(dbObject,data)
        resolve(answer)
 });
    let res = await promise
    return res;

}