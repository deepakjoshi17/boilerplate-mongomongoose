let mongoose = require('mongoose');

const mySecret = process.env['MONGO_URI'];

const { MongoClient, ServerApiVersion } =   require('mongodb');
const uri = "mongodb+srv://deepakjoshi17:1Ne2b70sRoSLLzKn@cluster0.2utpcbx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(
  () => {
        console.log("Database connection successful");
      },
    err => {
  
  const collection = client.db("test").collection("devices");
  console.error('Database connection error: ' + err);
  // perform actions on the collection object
  client.close();
});

var mongoOptions =
  {
    db: {safe: true},
    server: {
        socketOptions: {
            keepAlive: 1
        }
    },
    replset: {
        rs_name: 'myReplSet',
        socketOptions: {
            keepAlive: 1
        }
    }
  };

class Database {

  constructor() {
    this._connect();
  }

  _connect() {
    // mongoose.connect(mySecret, mongoOptions).then(
    //   () => {
    //     console.log("Database connection successful");
    //   }
    // ).catch((err) => {
    //     console.error('Database connection error: ' + err);
    //   });
  }
}

module.exports = new Database();