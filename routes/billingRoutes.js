const keys=require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretKey);

module.exportes=app=>{
  app.post('/api/stripe', (req, res)=>{
      console.log(req.body)
  });
}
