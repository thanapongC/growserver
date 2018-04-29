
var admin = require("firebase-admin");
var app = require('express')();
var reInterval = require('reInterval');
var port = process.env.PORT || 7777;
app.get('/', function (req, res) {
   res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
   res.send('<h1>This is index page</h1>');
});

app.listen(port, function() {
   console.log('Starting node.js on port ' + port);
});

var serviceAccount = require("./bogproject-37e31-firebase-adminsdk-qpcgn-c08a1fd11c.json");

var test = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bogproject-37e31.firebaseio.com"
  //serviceAccount: 'basketofgrow-firebase-adminsdk-mhtgv-283ea7b784.json',
});

var db = admin.database();
var ref = db.ref("/test");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var inter = reInterval(function () {

var date = new Date();
var timehour = (date.getHours());
var timeminute = (date.getMinutes());
var timesecond = (date.getSeconds());
if(timehour == 1 || timehour == 2 || timehour == 3 || timehour == 4 || timehour== 5 || timehour == 6 || timehour == 7 || timehour == 8 || timehour == 9 || timehour == 0){
 var hourout = ("0"+timehour.toString());
}else{
   var hourout = (timehour.toString());
}

if(timeminute == 1 || timeminute == 2 || timeminute == 3 || timeminute == 4 || timeminute== 5 || timeminute == 6 || timeminute == 7 || timeminute == 8 || timeminute == 9 || timeminute == 0){
 var minuteout = ("0"+timeminute.toString());
}else{
   var minuteout = (timeminute.toString());
}

if(timesecond == 1 || timesecond == 2 || timesecond == 3 || timesecond == 4 || timesecond== 5 || timesecond == 6 || timesecond == 7 || timesecond == 8 || timesecond == 9 || timesecond == 0){
 var secondout = ("0"+timesecond.toString());
}else{
   var secondout = (timesecond.toString());
}
var timenow = (hourout.toString()+minuteout.toString()+secondout.toString());

//getDate
var datadate = (date.getDate());
var datamonth = (date.getMonth()+1);
var datayear = (date.getFullYear());
var dateout = (datadate.toString());
if(datamonth == 1 || datamonth == 2 || datamonth == 3 || datamonth == 4 || datamonth == 5 || datamonth == 6 || datamonth == 7 || datamonth == 8 || datamonth == 9 ){
  var monthout = ("0"+datamonth.toString());
}else{
    var monthout = (datamonth.toString());
}
var yearout = (datayear.toString());
var datenow = (datadate.toString()+monthout.toString()+datayear.toString());

console.log(minuteout);
console.log(secondout);

if(minuteout == 00 && secondout == 00){
ref.orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    if(data.val().value.AirHumid != null){
       console.log(data.val().value.AirHumid);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.AirHumid, date: datenow, time: timenow};
            dbo.collection("AirHumid").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.AirTemp != null){
      console.log(data.val().value.AirTemp);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.AirTemp, date: datenow, time: timenow};
            dbo.collection("AirTemp").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.ECvalue != null){
      console.log(data.val().value.ECvalue);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.ECvalue, date: datenow, time: timenow};
            dbo.collection("ECvalue").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.PHvalue != null){
      console.log(data.val().value.PHvalue);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.PHvalue, date: datenow, time: timenow};
            dbo.collection("PHvalue").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.WaterAlarm != null){
      console.log(data.val().value.WaterAlarm);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.WaterAlarm, date: datenow, time: timenow};
            dbo.collection("WaterAlarm").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.WaterTemp != null){
      console.log(data.val().value.WaterTemp);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.WaterTemp, date: datenow, time: timenow};
            dbo.collection("WaterTemp").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.Light != null){
      console.log(data.val().value.Light);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.Light, date: datenow, time: timenow};
            dbo.collection("Light").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
    if(data.val().value.Soilmois != null){
      console.log(data.val().value.Soilmois);
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("grow");
            var myobj = { user: data.key , value: data.val().value.Soilmois, date: datenow, time: timenow};
            dbo.collection("Soilmois").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }
  });
});
}
}, 2000);
