const UPDATE_FILGHT_TICKET_DETAILS = require("./messages_type/commands").UPDATE_FILGHT_TICKET_DETAILS;
const UPDATE_HISTORY_DETAILS = require("./messages_type/commands").UPDATE_HISTORY_DETAILS;
const UPDATE_CLASS_TICKET_TYPE=require("./messages_type/commands").UPDATE_CLASS_TICKET_TYPE;
const UPDATE_AIRLINE_DETAILS = require("./messages_type/commands").UPDATE_AIRLINE_DETAILS;
const UPDATE_COUNTRY_DETAILS = require("./messages_type/commands").UPDATE_DESTINATION_DETAILS;
const UPDATE_DESTINATION_DETAILS = require("./messages_type/commands").UPDATE_DESTINATION_DETAILS;
const UPDATE_COMPLAINT_STATUS_TYPE=require("./messages_type/commands").UPDATE_COMPLAINT_STATUS_TYPE;
const UPDATE_COMPLAINT=require("./messages_type/commands").UPDATE_COMPLAINT;
const UPDATE_USER=require("./messages_type/commands").UPDATE_USER;

const INSERET_FILGHT_TICKET_DETAILS = require("./messages_type/commands").INSERET_FILGHT_TICKET_DETAILS;
const INSERET_HISTORY_DETAILS = require("./messages_type/commands").INSERET_HISTORY_DETAILS;
const INSERET_CLASS_TICKET_TYPE=require("./messages_type/commands").INSERET_CLASS_TICKET_TYPE;
const INSERET_AIRLINE_DETAILS = require("./messages_type/commands").INSERET_AIRLINE_DETAILS ;
const INSERET_COUNTRY_DETAILS = require("./messages_type/commands").INSERET_COUNTRY_DETAILS;
const INSERET_DESTINATION_DETAILS = require("./messages_type/commands").INSERET_DESTINATION_DETAILS ;
const INSERET_COMPLAINT_STATUS_TYPE=require("./messages_type/commands").INSERET_COMPLAINT_STATUS_TYPE;
const INSERET_COMPLAINT=require("./messages_type/commands").INSERET_COMPLAINT;
const INSERET_USER=require("./messages_type/commands").INSERET_USER;

const DELETE_FILGHT_TICKET_DETAILS = require("./messages_type/commands").DELETE_FILGHT_TICKET_DETAILS;
const DELETE_HISTORY_DETAILS = require("./messages_type/commands").DELETE_HISTORY_DETAILS;
const DELETE_CLASS_TICKET_TYPE=require("./messages_type/commands").DELETE_CLASS_TICKET_TYPE;
const DELETE_AIRLINE_DETAILS = require("./messages_type/commands").DELETE_AIRLINE_DETAILS;
const DELETE_COUNTRY_DETAILS = require("./messages_type/commands").DELETE_COUNTRY_DETAILS;
const DELETE_DESTINATION_DETAILS = require("./messages_type/commands").DELETE_DESTINATION_DETAILS;
const DELETE_COMPLAINT_STATUS_TYPE=require("./messages_type/commands").DELETE_COMPLAINT_STATUS_TYPE;
const DELETE_COMPLAINT=require("./messages_type/commands").DELETE_COMPLAINT;
const DELETE_USER=require("./messages_type/commands").DELETE_USER;

const GET_FILGHT_TICKET_DETAILS = require("./messages_type/commands").GET_FILGHT_TICKET_DETAILS;
const GET_HISTORY_DETAILS = require("./messages_type/commands").GET_HISTORY_DETAILS;
const GET_CLASS_TICKET_TYPE=require("./messages_type/commands").GET_CLASS_TICKET_TYPE;
const GET_AIRLINE_DETAILS = require("./messages_type/commands").GET_AIRLINE_DETAILS;
const GET_COUNTRY_DETAILS = require("./messages_type/commands").GET_COUNTRY_DETAILS;
const GET_DESTINATION_DETAILS = require("./messages_type/commands").GET_DESTINATION_DETAILS;
const GET_COMPLAINT_STATUS_TYPE=require("./messages_type/commands").GET_COMPLAINT_STATUS_TYPE;
const GET_COMPLAINT=require("./messages_type/commands").GET_COMPLAINT;
const GET_USER=require("./messages_type/commands").GET_USER;


const GET_ALL_FILGHT_TICKETS_DETAILS = require("./messages_type/commands").GET_ALL_FILGHT_TICKETS_DETAILS;
const GET_ALL_HISTORIES_DETAILS = require("./messages_type/commands").GET_ALL_HISTORIES_DETAILS;
const GET_ALL_CLASS_TICKET_TYPES=require("./messages_type/commands").GET_ALL_CLASS_TICKET_TYPES;
const GET_ALL_AIRLINES_DETAILS = require("./messages_type/commands").GET_ALL_AIRLINES_DETAILS;
const GET_ALL_COUNTRIES_DETAILS = require("./messages_type/commands").GET_ALL_COUNTRIES_DETAILS;
const GET_ALL_DESTINATIONS_DETAILS = require("./messages_type/commands").GET_ALL_DESTINATIONS_DETAILS;
const GET_ALL_COMPLAINT_STATUSES_TYPE=require("./messages_type/commands").GET_ALL_COMPLAINT_STATUSES_TYPE;
const GET_ALL_COMPLAINTS=require("./messages_type/commands").GET_ALL_COMPLAINTS;
const GET_ALL_USERS=require("./messages_type/commands").GET_ALL_USERS;
const GROUPBY_DESTINATION = require("./messages_type/commands").GROUPBY_DESTINATION;

const LOGIN = require("./messages_type/commands").LOGIN;



const TEL_UPDATE_FILGHT_TICKET_DETAILS = require("./messages_type/telemetries").TEL_UPDATE_FILGHT_TICKET_DETAILS;
const TEL_UPDATE_HISTORY_DETAILS =  require("./messages_type/telemetries").TEL_UPDATE_HISTORY_DETAILS;
const TEL_UPDATE_CLASS_TICKET_TYPE= require("./messages_type/telemetries").TEL_UPDATE_CLASS_TICKET_TYPE;
const TEL_UPDATE_AIRLINE_DETAILS =  require("./messages_type/telemetries").TEL_UPDATE_AIRLINE_DETAILS;
const TEL_UPDATE_COUNTRY_DETAILS =  require("./messages_type/telemetries").TEL_UPDATE_COUNTRY_DETAILS;
const TEL_UPDATE_DESTINATION_DETAILS =  require("./messages_type/telemetries").TEL_UPDATE_DESTINATION_DETAILS;
const TEL_UPDATE_COMPLAINT_STATUS_TYPE= require("./messages_type/telemetries").TEL_UPDATE_COMPLAINT_STATUS_TYPE;
const TEL_UPDATE_COMPLAINT= require("./messages_type/telemetries").TEL_UPDATE_COMPLAINT;
const TEL_UPDATE_USER= require("./messages_type/telemetries").TEL_UPDATE_USER;

const TEL_INSERET_FILGHT_TICKET_DETAILS =  require("./messages_type/telemetries").TEL_INSERET_FILGHT_TICKET_DETAILS;
const TEL_INSERET_HISTORY_DETAILS =  require("./messages_type/telemetries").TEL_INSERET_HISTORY_DETAILS;
const TEL_INSERET_CLASS_TICKET_TYPE= require("./messages_type/telemetries").TEL_INSERET_CLASS_TICKET_TYPE;
const TEL_INSERET_AIRLINE_DETAILS =  require("./messages_type/telemetries").TEL_INSERET_AIRLINE_DETAILS;
const TEL_INSERET_COUNTRY_DETAILS =  require("./messages_type/telemetries").TEL_INSERET_COUNTRY_DETAILS;
const TEL_INSERET_DESTINATION_DETAILS =  require("./messages_type/telemetries").TEL_INSERET_DESTINATION_DETAILS;
const TEL_INSERET_COMPLAINT_STATUS_TYPE= require("./messages_type/telemetries").TEL_INSERET_COMPLAINT_STATUS_TYPE;
const TEL_INSERET_COMPLAINT= require("./messages_type/telemetries").TEL_INSERET_COMPLAINT;
const TEL_INSERET_USER= require("./messages_type/telemetries").TEL_INSERET_USER;

const TEL_DELETE_FILGHT_TICKET_DETAILS = require("./messages_type/telemetries").TEL_DELETE_FILGHT_TICKET_DETAILS;
const TEL_DELETE_HISTORY_DETAILS =  require("./messages_type/telemetries").TEL_DELETE_HISTORY_DETAILS;
const TEL_DELETE_CLASS_TICKET_TYPE= require("./messages_type/telemetries").TEL_DELETE_CLASS_TICKET_TYPE;
const TEL_DELETE_AIRLINE_DETAILS = require("./messages_type/telemetries").TEL_DELETE_AIRLINE_DETAILS;
const TEL_DELETE_COUNTRY_DETAILS =  require("./messages_type/telemetries").TEL_DELETE_COUNTRY_DETAILS;
const TEL_DELETE_DESTINATION_DETAILS =  require("./messages_type/telemetries").TEL_DELETE_DESTINATION_DETAILS;
const TEL_DELETE_COMPLAINT_STATUS_TYPE= require("./messages_type/telemetries").TEL_DELETE_COMPLAINT_STATUS_TYPE;
const TEL_DELETE_COMPLAINT= require("./messages_type/telemetries").TEL_DELETE_COMPLAINT;
const TEL_DELETE_USER = require("./messages_type/telemetries").TEL_DELETE_USER;

const TEL_GET_FILGHT_TICKET_DETAILS =  require("./messages_type/telemetries").TEL_GET_FILGHT_TICKET_DETAILS;
const TEL_GET_HISTORY_DETAILS =  require("./messages_type/telemetries").TEL_GET_HISTORY_DETAILS;
const TEL_GET_CLASS_TICKET_TYPE= require("./messages_type/telemetries").TEL_GET_CLASS_TICKET_TYPE;
const TEL_GET_AIRLINE_DETAILS =  require("./messages_type/telemetries").TEL_GET_AIRLINE_DETAILS;
const TEL_GET_COUNTRY_DETAILS =  require("./messages_type/telemetries").TEL_GET_COUNTRY_DETAILS;
const TEL_GET_DESTINATION_DETAILS =  require("./messages_type/telemetries").TEL_GET_DESTINATION_DETAILS;
const TEL_GET_COMPLAINT_STATUS_TYPE= require("./messages_type/telemetries").TEL_GET_COMPLAINT_STATUS_TYPE;
const TEL_GET_COMPLAINT= require("./messages_type/telemetries").TEL_GET_COMPLAINT;
const TEL_GET_USER= require("./messages_type/telemetries").TEL_GET_USER;


const TEL_GET_ALL_FILGHT_TICKETS_DETAILS =  require("./messages_type/telemetries").TEL_GET_ALL_FILGHT_TICKETS_DETAILS;
const TEL_GET_ALL_HISTORIES_DETAILS =  require("./messages_type/telemetries").TEL_GET_ALL_HISTORIES_DETAILS;
const TEL_GET_ALL_CLASS_TICKET_TYPES= require("./messages_type/telemetries").TEL_GET_ALL_CLASS_TICKET_TYPES;
const TEL_GET_ALL_AIRLINES_DETAILS =  require("./messages_type/telemetries").TEL_GET_ALL_AIRLINES_DETAILS;
const TEL_GET_ALL_COUNTRIES_DETAILS =  require("./messages_type/telemetries").TEL_GET_ALL_COUNTRIES_DETAILS;
const TEL_GET_ALL_DESTINATIONS_DETAILS =  require("./messages_type/telemetries").TEL_GET_ALL_DESTINATIONS_DETAILS;
const TEL_GET_ALL_COMPLAINT_STATUSES_TYPE= require("./messages_type/telemetries").TEL_GET_ALL_COMPLAINT_STATUSES_TYPE;
const TEL_GET_ALL_COMPLAINTS= require("./messages_type/telemetries").TEL_GET_ALL_COMPLAINTS;
const TEL_GET_ALL_USERS= require("./messages_type/telemetries").TEL_GET_ALL_USERS;
const TEL_GROUPBY_DESTINATION =require("./messages_type/telemetries").TEL_GROUPBY_DESTINATION;

const TEL_LOGIN = require("./messages_type/telemetries").TEL_LOGIN;


const getFlightTicketDetails = require("./functions/get").getFlightTicketDetails
const getHistoryDetailes = require("./functions/get").getHistoryDetailes
const getClassesTicketType = require("./functions/get").getClassesTicketType
const getAirlineDetails =  require("./functions/get").getAirlineDetails
const getCountryDetails =  require("./functions/get").getCountryDetails
const getDestinationDetails =  require("./functions/get").getDestinationDetails
const getComplaintStatusType =  require("./functions/get").getComplaintStatusType
const getComplaint =  require("./functions/get").getComplaint
const getUser = require("./functions/get").getUser

const updateFlightTicketDetails = require("./functions/update").updateFlightTicketDetails
const updateHistoryDetailes = require("./functions/update").updateHistoryDetailes
const updateClassesTicketType = require("./functions/update").updateClassesTicketType
const updateAirlineDetails =  require("./functions/update").updateAirlineDetails
const updateCountryDetails =  require("./functions/update").updateCountryDetails
const updateDestinationDetails =  require("./functions/update").updateDestinationDetails
const updateComplaintStatusType =  require("./functions/update").updateComplaintStatusType
const updateComplaint =  require("./functions/update").updateComplaint
const updateUser = require("./functions/update").updateUser

const deleteFlightTicketDetails = require("./functions/delete").deleteFlightTicketDetails
const deleteHistoryDetailes = require("./functions/delete").deleteHistoryDetailes
const deleteClassesTicketType = require("./functions/delete").deleteClassesTicketType
const deleteAirlineDetails =  require("./functions/delete").deleteAirlineDetails
const deleteCountryDetails =  require("./functions/delete").deleteCountryDetails
const deleteDestinationDetails =  require("./functions/delete").deleteDestinationDetails
const deleteComplaintStatusType =  require("./functions/delete").deleteComplaintStatusType
const deleteComplaint =  require("./functions/delete").deleteComplaint
const deleteUser = require("./functions/delete").deleteUser


const inseretFlightTicketDetails = require("./functions/inseret").inseretFlightTicketDetails
const inseretHistoryDetailes = require("./functions/inseret").inseretHistoryDetailes
const inseretClassesTicketType = require("./functions/inseret").inseretClassesTicketType
const inseretAirlineDetails =  require("./functions/inseret").inseretAirlineDetails
const inseretCountryDetails =  require("./functions/inseret").inseretCountryDetails
const inseretDestinationDetails =  require("./functions/inseret").inseretDestinationDetails
const inseretComplaintStatusType =  require("./functions/inseret").inseretComplaintStatusType
const inseretComplaint =  require("./functions/inseret").inseretComplaint
const inseretUser = require("./functions/inseret").inseretUser


const getAllFlightTicketsDetails = require("./functions/getAll").getAllFlightTicketsDetails
const getAllHistoriesDetailes = require("./functions/getAll").getAllHistoriesDetailes
const getAllClassesTicketTypes = require("./functions/getAll").getAllClassesTicketTypes
const getAllAirlinesDetails =  require("./functions/getAll").getAllAirlinesDetails
const getAllCountriesDetails =  require("./functions/getAll").getAllCountriesDetails
const getAllDestinationsDetails =  require("./functions/getAll").getAllDestinationsDetails
const getAllComplaintStatusTypes =  require("./functions/getAll").getAllComplaintStatusTypes
const getAllComplaints =  require("./functions/getAll").getAllComplaints
const getAllUsers = require("./functions/getAll").getAllUsers

const groupByDestination = require("./functions/groupBy").groupByDestination

const login = require("./functions/login").login



module.exports.signSocketEvents = function signSocketEvents(dbObject,socket)
{

    // Get
    socket.on(GET_FILGHT_TICKET_DETAILS,async function(data){
    getFlightTicketDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_FILGHT_TICKET_DETAILS,res)
    })
    })

    socket.on(GET_HISTORY_DETAILS,async function(data){
    getHistoryDetailes(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_HISTORY_DETAILS,res)
    })
    })

    socket.on(GET_CLASS_TICKET_TYPE,async function(data){
    getClassesTicketType(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_CLASS_TICKET_TYPE,res)
    })
    })

    socket.on(GET_AIRLINE_DETAILS,async function(data){
    getAirlineDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_AIRLINE_DETAILS,res)
    })
    })

    socket.on(GET_COUNTRY_DETAILS,async function(data){
    getCountryDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_COUNTRY_DETAILS,res)
    })
    })

  
    socket.on(GET_DESTINATION_DETAILS,async function(data){
    getDestinationDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_DESTINATION_DETAILS,res)
    })
    })
                              
    socket.on(GET_COMPLAINT_STATUS_TYPE,async function(data){
    getComplaintStatusType(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_COMPLAINT_STATUS_TYPE,res)
    })
    })

    socket.on(GET_COMPLAINT,async function(data){
    getComplaint(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_COMPLAINT,res)
    })
    })
        
    socket.on(GET_USER,async function(data){
    getUser(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_USER,res)
    })
    })




    // Delete
    socket.on(DELETE_FILGHT_TICKET_DETAILS,async function(data){
    deleteFlightTicketDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_FILGHT_TICKET_DETAILS,res)
        socket.broadcast.emit(TEL_DELETE_FILGHT_TICKET_DETAILS,res)
    })
    })

    socket.on(DELETE_HISTORY_DETAILS,async function(data){
    deleteHistoryDetailes(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_HISTORY_DETAILS,res)
        socket.broadcast.emit(TEL_DELETE_HISTORY_DETAILS,res)
    })
    })

    socket.on(DELETE_CLASS_TICKET_TYPE,async function(data){
    deleteClassesTicketType(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_CLASS_TICKET_TYPE,res)
        socket.broadcast.emit(TEL_DELETE_CLASS_TICKET_TYPE,res)
    })
    })

    socket.on(DELETE_AIRLINE_DETAILS,async function(data){
    deleteAirlineDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_AIRLINE_DETAILS,res)
        socket.broadcast.emit(TEL_DELETE_AIRLINE_DETAILS,res)
    })
    })

    socket.on(DELETE_COUNTRY_DETAILS,async function(data){
    deleteCountryDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_COUNTRY_DETAILS,res)
        socket.broadcast.emit(TEL_DELETE_COUNTRY_DETAILS,res)
    })
    })
 
    socket.on(DELETE_DESTINATION_DETAILS,async function(data){
    deleteDestinationDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_DESTINATION_DETAILS,res)
        socket.broadcast.emit(TEL_DELETE_DESTINATION_DETAILS,res)
    })
    })
                              
    socket.on(DELETE_COMPLAINT_STATUS_TYPE,async function(data){
    deleteComplaintStatusType(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_COMPLAINT_STATUS_TYPE,res)
        socket.broadcast.emit(TEL_DELETE_COMPLAINT_STATUS_TYPE,res)
    })
    })

    socket.on(DELETE_COMPLAINT,async function(data){
    deleteComplaint(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_COMPLAINT,res)
        socket.broadcast.emit(TEL_DELETE_COMPLAINT,res)
    })
    })
        
    socket.on(DELETE_USER,async function(data){
    deleteUser(dbObject,data).then((res)=>{
        socket.emit(TEL_DELETE_USER,res)
        socket.broadcast.emit(TEL_DELETE_USER,res)
    })
    })
    


    //Update
    socket.on(UPDATE_FILGHT_TICKET_DETAILS,async function(data){
     updateFlightTicketDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_FILGHT_TICKET_DETAILS,res)
        socket.broadcast.emit(TEL_UPDATE_FILGHT_TICKET_DETAILS,res)
    })
     })
    
     socket.on(UPDATE_HISTORY_DETAILS,async function(data){
     updateHistoryDetailes(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_HISTORY_DETAILS,res)
        socket.broadcast.emit(TEL_UPDATE_HISTORY_DETAILS,res)
    })
     })
    
     socket.on(UPDATE_CLASS_TICKET_TYPE,async function(data){
     updateClassesTicketType(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_CLASS_TICKET_TYPE,res)
        socket.broadcast.emit(TEL_UPDATE_CLASS_TICKET_TYPE,res)
    })
     })
    
     socket.on(UPDATE_AIRLINE_DETAILS,async function(data){
     updateAirlineDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_AIRLINE_DETAILS,res)
        socket.broadcast.emit(TEL_UPDATE_AIRLINE_DETAILS,res)
    })
     })
    
     socket.on(UPDATE_COUNTRY_DETAILS,async function(data){
     updateCountryDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_COUNTRY_DETAILS,res)
        socket.broadcast.emit(TEL_UPDATE_COUNTRY_DETAILS,res)
    })
     })
    
     
     socket.on(UPDATE_DESTINATION_DETAILS,async function(data){
     updateDestinationDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_DESTINATION_DETAILS,res)
        socket.broadcast.emit(TEL_UPDATE_DESTINATION_DETAILS,res)
    })
     })
                               
     socket.on(UPDATE_COMPLAINT_STATUS_TYPE,async function(data){
     updateComplaintStatusType(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_COMPLAINT_STATUS_TYPE,res)
        socket.broadcast.emit(TEL_UPDATE_COMPLAINT_STATUS_TYPE,res)
    })
     })
    
     socket.on(UPDATE_COMPLAINT,async function(data){
     updateComplaint(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_COMPLAINT,res)
        socket.broadcast.emit(TEL_UPDATE_COMPLAINT,res)
    })
     })
         
     socket.on(UPDATE_USER,async function(data){
     updateUser(dbObject,data).then((res)=>{
        socket.emit(TEL_UPDATE_USER,res)
        socket.broadcast.emit(TEL_UPDATE_USER,res)
    })
     })
    


    //inseret

    socket.on(INSERET_FILGHT_TICKET_DETAILS,async function(data){
    inseretFlightTicketDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_FILGHT_TICKET_DETAILS,res)
        socket.broadcast.emit(TEL_INSERET_FILGHT_TICKET_DETAILS,res)
    })
    })

    socket.on(INSERET_HISTORY_DETAILS,async function(data){
    inseretHistoryDetailes(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_HISTORY_DETAILS,res)
        socket.broadcast.emit(TEL_INSERET_HISTORY_DETAILS,res)
    })
    })

    socket.on(INSERET_CLASS_TICKET_TYPE,async function(data){
    inseretClassesTicketType(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_CLASS_TICKET_TYPE,res)
        socket.broadcast.emit(TEL_INSERET_CLASS_TICKET_TYPE,res)
    })
    })

    socket.on(INSERET_AIRLINE_DETAILS,async function(data){
    inseretAirlineDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_AIRLINE_DETAILS,res)
        socket.broadcast.emit(TEL_INSERET_AIRLINE_DETAILS,res)
    })
    })

    socket.on(INSERET_COUNTRY_DETAILS,async function(data){
    inseretCountryDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_COUNTRY_DETAILS,res)
        socket.broadcast.emit(TEL_INSERET_COUNTRY_DETAILS,res)
    })
    })

    
    socket.on(INSERET_DESTINATION_DETAILS,async function(data){
        
    inseretDestinationDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_DESTINATION_DETAILS,res)
        socket.broadcast.emit(TEL_INSERET_DESTINATION_DETAILS,res)
    })
    })
                              
    socket.on(INSERET_COMPLAINT_STATUS_TYPE,async function(data){
    inseretComplaintStatusType(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_COMPLAINT_STATUS_TYPE,res)
        socket.broadcast.emit(TEL_INSERET_COMPLAINT_STATUS_TYPE,res)
    })
    })

    socket.on(INSERET_COMPLAINT,async function(data){
    inseretComplaint(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_COMPLAINT,res)
        socket.broadcast.emit(TEL_INSERET_COMPLAINT,res)
    })
    })
        
    socket.on(INSERET_USER,async function(data){
    inseretUser(dbObject,data).then((res)=>{
        socket.emit(TEL_INSERET_USER,res)
        socket.broadcast.emit(TEL_INSERET_USER,res)
    })
    })





    // Get all 
    socket.on(GET_ALL_FILGHT_TICKETS_DETAILS,async function(data){
    getAllFlightTicketsDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_FILGHT_TICKETS_DETAILS,res)
    })
    })

    socket.on(GET_ALL_HISTORIES_DETAILS,async function(data){
    getAllHistoriesDetailes(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_HISTORIES_DETAILS,res)
    })
    })

    socket.on(GET_ALL_CLASS_TICKET_TYPES,async function(data){
    getAllClassesTicketTypes(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_CLASS_TICKET_TYPES,res)
    })
    })

    socket.on(GET_ALL_AIRLINES_DETAILS,async function(data){
    getAllAirlinesDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_AIRLINES_DETAILS,res)
    })
    })

    socket.on(GET_ALL_COUNTRIES_DETAILS,async function(data){
    getAllCountriesDetails(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_COUNTRIES_DETAILS,res)
    })
    })

    socket.on(GET_ALL_DESTINATIONS_DETAILS,async function(data){
        getAllDestinationsDetails(dbObject,data).then((res)=>{
            socket.emit(TEL_GET_ALL_DESTINATIONS_DETAILS,res)
        })
    })

    socket.on(GET_ALL_COMPLAINT_STATUSES_TYPE,async function(data){
    getAllComplaintStatusTypes(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_COMPLAINT_STATUSES_TYPE,res)
    })
    })

    socket.on(GET_ALL_COMPLAINTS,async function(data){
    getAllComplaints(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_COMPLAINTS,res)
    })
    })

    socket.on(GET_ALL_USERS,async function(data){
    getAllUsers(dbObject,data).then((res)=>{
        socket.emit(TEL_GET_ALL_USERS,res)
       
    })
    })


    socket.on(LOGIN,async function(data){
    login(dbObject,data).then((res)=>{
        socket.emit(TEL_LOGIN,res)
    })
    })


  socket.on(GROUPBY_DESTINATION,async function(data){
        groupByDestination(dbObject,data).then((res)=>{
          socket.emit(TEL_GROUPBY_DESTINATION,res)
      })
      })


        



}

  
   
 

  
 
 
 