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



module.exports.deleteFlightTicketDetails = async function deleteFlightTicketDetails(dbObject,data)
{
    let isOkToDelete = await checkFlightTicketRemovingPossibility(dbObject,data) 
    if(isOkToDelete)
    {
        let promise = new Promise((resolve,reject)=>{
            let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
            flightTicketsCollection.deleteOne({"id":Number(data.id)}).then(function(result){
                 resolve(data)
            })
    });
        let res = await promise
        return res;
    }
    else
    {
        return ({err:"cannot remove flight because another data is using this information"})
    }
}
module.exports.deleteHistoryDetailes = async function deleteHistoryDetailes(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.deleteOne({"id":Number(data.id)}).then(function(result){
             resolve(data)
        })
 });

    let res = await promise
    return res;
}
module.exports.deleteClassesTicketType = async function deleteClassesTicketType(dbObject,data)
{
    
    let isOkToDelete = await checkClassTicketRemovingPossibility(dbObject,data) 
    if(isOkToDelete){
        let promise = new Promise((resolve,reject)=>{

            let classesTicketTypeCollection = getCollection(dbObject,CLASS_TICKET_TYPES_COLLECTION_NAME);
            classesTicketTypeCollection.deleteOne({"id":Number(data.id)}).then(function(result){
                 resolve(data)
            })
    });

        let res = await promise
        return res;
    }
    else{
        return ({err:"cannot remove class-ticket because another data is using this information"})
    }
}
module.exports.deleteAirlineDetails = async function deleteAirlineDetails(dbObject,data)
{
    
    let isOkToDelete = await checkAirlineRemovingPossibility(dbObject,data) 
        if(isOkToDelete){
                let promise = new Promise((resolve,reject)=>{

                    let airlinesCollecrion = getCollection(dbObject,AIRLINES_COLLECTION_NAME);
                    airlinesCollecrion.deleteOne({"id":Number(data.id)}).then(function(result){
                         resolve(data)
                    })
            });

                let res = await promise
                return res;
    }else{
        return ({err:"cannot remove airline because another data is using this information"})
    }
}
module.exports.deleteCountryDetails = async function deleteCountryDetails(dbObject,data)
{
    let isOkToDelete = await checkCountryRemovingPossibility(dbObject,data) 
    if(isOkToDelete){
        let promise = new Promise((resolve,reject)=>{

            let countriesCollection = getCollection(dbObject,COUNTRIES_COLLECTION_NAME);
            countriesCollection.deleteOne({"id":Number(data.id)}).then(function(result){
                 resolve(data)
            })

    });

        let res = await promise
        return res;
    }
    else{
        return ({err:"cannot remove country because another data is using this information"})
    }
}
module.exports.deleteDestinationDetails = async function deleteDestinationDetails(dbObject,data)
{
    let isOkToDelete = await checkDestinationRemovingPossibility(dbObject,data) 
    if(isOkToDelete){
    let promise = new Promise((resolve,reject)=>{

        let destinationCollection = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationCollection.deleteOne({"id":Number(data.id)}).then(function(result){
             resolve(data)
        })

 });

    let res = await promise
    return res;
}else{
    return ({err:"cannot remove destination because another data is using this information"})
}

}
module.exports.deleteComplaintStatusType = async function deleteComplaintStatusType(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{

        console.log(COMPLAINT_STATUS_TYPES_COLLECTION_NAME)
        let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
        complaintsStatusCollection.deleteOne({"id":Number(data.id)}).then(function(result){
             resolve(data)
        })
 });

    let res = await promise
    return res;


}
module.exports.deleteComplaint = async function deleteComplaint(dbObject,data)
{
    
    let isOkToDelete = await checkcomplaintRemovingPossibility(dbObject,data) 
    if(isOkToDelete)
    {
    let promise = new Promise((resolve,reject)=>{

        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);
        complaintsCollection.deleteOne({"id":Number(data.id)}).then(function(result){
             resolve(data)
        })

 });

    let res = await promise
    return res;
}else{
    return ({err:"cannot remove complaint because another data is using this information"})
}


}
module.exports.deleteUser = async function deleteUser(dbObject,data)
{
    let isOkToDelete = await checkUserRemovingPossibility(dbObject,data) 
    if(isOkToDelete)
    {
        let res = await new Promise((resolve,reject)=>{

            let usersCollection = getCollection(dbObject,USERS_COLLECTION_NAME);
            usersCollection.deleteOne({"id":Number(data.id)}).then(function(result){
                 resolve(data)
            })
    
     });
        return res;
    }
    else
    {
        return ({err:"cannot remove user because another data is using this information"})
    }
}
    





 async function checkUserRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        let flightCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        let complaintsCollection = getCollection(dbObject,COMPLAINTS_COLLECTION_NAME);

        historyCollection.findOne({"id_seller" : Number(data.id)}).then(function(result){
           
            if(result==null)
            {
                historyCollection.findOne({"id_buyer" : Number(data.id)}).then(function(result){
                    if(result==null)
                    {
                        flightCollection.findOne({"owner_id" : Number(data.id)}).then(function(result){
                            if(result==null)
                            {
                                complaintsCollection.findOne({"user_id" : Number(data.id)}).then(function(result){
                                    if(result==null)
                                    {
                                        resolve(true)
                
                                    }else{ resolve(false)}})
        
                            }else{ resolve(false)}})
                       

                    }else{ resolve(false)}})
               
            }else{ resolve(false)}

           
        })
            
    });

 let res = await promise
 return res;

}



async function checkFlightTicketRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let historyCollection = getCollection(dbObject,HISTORY_COLLECTION_NAME);
        historyCollection.findOne({"flight_id" : Number(data.id)}).then(function(result){
           
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}


async function checkDestinationRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightCollection.findOne({"destination_id" : Number(data.id)}).then(function(result){
           
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}


async function checkCountryRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let destinationsCollection = getCollection(dbObject,DESTINATION_COLLECTION_NAME);
        destinationsCollection.findOne({"country_id" : Number(data.id)}).then(function(result){
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}

async function checkAirlineRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightCollection.findOne({"airline_id" : Number(data.id)}).then(function(result){
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}

async function checkClassTicketRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let flightCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightCollection.findOne({"class_id" : Number(data.id)}).then(function(result){
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}


async function checkcomplaintRemovingPossibility(dbObject,data)
{
    let promise = new Promise((resolve,reject)=>{
        let complaintsStatusCollection = getCollection(dbObject,COMPLAINT_STATUS_TYPES_COLLECTION_NAME);
        complaintsStatusCollection.findOne({"complaint_id" : Number(data.id)}).then(function(result){
            if(result==null)
            {
                resolve(true)
            }else{resolve(false)}
            
    })});

 let res = await promise
 return res;

}









