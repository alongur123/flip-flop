module.exports.getCollection = function(dbObject,collectionName)
{
    return dbObject.collection(collectionName)
}