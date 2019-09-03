const FLIGHT_TICKETS_COLLECTION_NAME = require("./collections_names").FLIGHT_TICKETS_COLLECTION_NAME;
const getCollection = require("./get_collection").getCollection

module.exports.groupBy_Destination = async function groupBy_Destination(dbObject,data)
{

   
    let promise = new Promise((resolve,reject)=>{
        let flightTicketsCollection = getCollection(dbObject,FLIGHT_TICKETS_COLLECTION_NAME);
        flightTicketsCollection.aggregate(
         {$group:{ _id : "$destination_id",count: { $sum: 1 }}},
         function( err, data ) {
         resolve(data);
      });
   });

    let res = await promise
    return res;
}

