const express = require('express')
const app = express()

var mongodb = require('mongodb')
var MongoClient = require('mongodb').MongoClient
var db
const PORT = 15404

// Initialize Server and Connection pooling to MongoDB
MongoClient.connect("mongodb://localhost:27017/", function(err, database) {
  if(err) throw err

  // maxPoolSize = 5 (default)
  db = database

  // Start the application after the database connection is ready
  app.listen(PORT)
  console.log(`Listening on port ${PORT}`)
})

// Reuse database object in request handlers
// app.get("/", function(req, res) {
//   db.collection("replicaset_mongo_client_collection").find({}, function(err, docs) {
//     docs.each(function(err, doc) {
//       if(doc) {
//         console.log(doc)
//       }
//       else {
//         res.end()
//       }
//     })
//   })
// })