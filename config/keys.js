//key.js - figure out what st of credentials to return

if(process.env.NODE_ENV==='production'){ // if it's on heroku, it's set to be true automatically
  //we are in production -return the prod set of keys
  module.exports=require('./prod');
}else{
  //we are in development -return the dev keys!!!
  module.exports=require('./dev');
}
