const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const { instance } = require("../server.js");

const checkOut = asyncHandler(async (req, res) => {
  const options = {
    amount: Number(req.body.data.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  // console.log(order);
  res.status(200).send({ message: "ho gya ", success: true, data: order });
});

const paymentVarification = asyncHandler(async (req, res) => {
  console.log(req.body);
  // res.status(200).send({ message: "verify ho gya ", success: true });
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  let body = razorpayOrderId + "|" + razorpayPaymentId;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpaySignature);
  console.log("sig generated ", expectedSignature);

  const authenticate = expectedSignature === razorpaySignature;
  console.log(authenticate);
  if (authenticate) {
    // res.redirect(`http://localhost:3000/paymentSuccess?reference=${razorpay_paymentID}`)
    // res.redirect("http://localhost:3000");
    res.status(200).send({
      message: "verified succesfully",
      data: { razorpayOrderId, razorpayPaymentId, razorpaySignature },
    });
  } else {
    res.status(200).send({ message: "Payment is not Verified" });
  }
});

module.exports = {
  checkOut,
  paymentVarification,
};
