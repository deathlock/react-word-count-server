// var config = require("./config.js").get(process.env.NODE_ENV);

var config = {
  production: {
    mode: "production"
  },
  development: {
    database: "mongodb+srv://smit:test123@cluster0-nijz5.mongodb.net/test?retryWrites=true&w=majority",
    mode: "development",
  },
  default: {
    database: "mongodb+srv://smit:test123@cluster0-nijz5.mongodb.net/test?retryWrites=true&w=majority",
    mode: "default",
  }

}

exports.get = function get(env){
  return  config[env] || config.default;
}
