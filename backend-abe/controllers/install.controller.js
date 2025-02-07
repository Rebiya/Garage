//import the install service to handle communication with db
const installService = require("../services/install.service");
//create a function to handle the install request
async function install(req, res, next) {
  //call teh install serfice to create teh database tables
  const installMessage = await installService.install();
  //check if the install was successfull or not and send the appropriate response to the client
  if (installMessage.status === 200) {
    //if successfull ,send a response to the client
    res.status(200).json({
      message: installMessage
    });
  } else {
    //if unsuccessful,send a response to the client
    res.status(500).json({
      message: installMessage
    });
  }
}
//export the install function
module.exports = { install };
