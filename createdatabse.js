var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("grow");

  dbo.createCollection("AirHumid", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  dbo.createCollection("AirTemp", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  dbo.createCollection("ECvalue", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  dbo.createCollection("PHvalue", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  dbo.createCollection("WaterAlarm", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  dbo.createCollection("WaterTemp", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  //  db.close();
  });
  dbo.createCollection("Light", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  //  db.close();
  });
  dbo.createCollection("Soilmois", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  //  db.close();
  });
db.close();

});
