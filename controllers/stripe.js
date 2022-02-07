const Stripe = require("stripe");
const stripe = Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const setupIntent = async () => {
  return await stripe.setupIntents
    .create({ usage: "on_session" })
    .then((result) => {
      console.log("setup =======> ", result);
    });
};

setupIntent();

const paymentIntent = async (req) => {
  // console.log("req.body =======> ", req.amount);
  let { amount, currency, description, receipt_email } = req;
  console.log("amount =======> ", amount);
  amount ? amount : (amount = 100);

  return await stripe.paymentIntents
    .create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    .then((result) => {
      console.log("payment ==========> , ", result);
    });
};

paymentIntent({ amount: 150 });
