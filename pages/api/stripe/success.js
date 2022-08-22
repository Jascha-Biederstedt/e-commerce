import prisma from 'lib/prisma';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); //Method Not Allowed
    return;
  }

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const stripe_session = await stripe.checkout.sessions.retrieve(
    req.body.session_id
  );

  res.end();
};
