// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    let incoming_data = JSON.parse(req.body);
    const client = await clientPromise;
    const db = client.db("pwc");

    const result = await db.collection("data").insertOne(incoming_data);
    console.log(result);
    res.send("DATA ADDED");
  } catch (error) {
    console.log(error);
  }
}
