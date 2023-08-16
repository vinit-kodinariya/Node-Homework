const dotenv = require("dotenv");
dotenv.config();

const {value:envVars, error} = enveVarsSchema
  .prefs({error:{lable:"key"}})
  .validate(process.env)

if (error) {
    console.log("Config Error: ", error);
  }
  
  module.exports = {
    port: envVars.PORT,
    mongodb: {
      url: envVars.MONGODB_URL,   
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
}