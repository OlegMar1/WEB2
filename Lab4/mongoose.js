
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Admin:<password>@cluster0.wgaic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// var mongoose=require('mongodb');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://Admin:Admin123@ds249992.mlab.com:49992/mongo');
// //mongoose.set('useFindAndModify', false);
// console.log("mongodb connect...")
// module.exports=mongoose;


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.wgaic.mongodb.net/mongo?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;
