//// server.js
//const express = require('express');
//const cors = require('cors');
//const app = express();


//// CORS middleware
//const allowCrossDomain = (req, res, next) => {
//  res.header(`Access-Control-Allow-Origin`, `example.com`);
//  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  
//  next();
//};
//app.configure(() => {
//  app.use(express.bodyParser());
//  app.use(express.cookieParser());
//  app.use(express.session({ secret: `cool beans` }));
//  app.use(express.methodOverride());
//  // CORS middleware
//  app.use(allowCrossDomain);
//  app.use(app.router);
//  app.use(express.static(`public`));
//});
//app.use(cors());
//app.get('/contactUsData', (req, res) => {
//  res.json({ message: 'Hello from the server!' });
//    try {
//      let resAPI = fetch("https://localhost:44356/contactUs", {
//        method: "POST",
//        headers: {
//          'Accept': 'application/json, text/plain',
//          "Content-Type":"application/json"
//      },
//      body: req.body,
//    });
//    const resJson = resAPI.json();
//    if (resAPI.status === 200) {
//      // setName("");
//      // setEmail("");
//      // setPhone("");
//      // setMessage("");
//      // setstatusMessage("User created successfully");
//    } else {
//      //setstatusMessage("Some error occured");
//    }
//      } catch (err) {
//      console.log(err);
//    }
  
//});

//app.listen(3000, () => {
//  console.log('Server is running on port 3001');
//});