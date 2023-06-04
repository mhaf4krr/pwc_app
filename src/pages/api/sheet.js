// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("pwc");

    const result = await db.collection("data").find({}).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
