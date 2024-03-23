/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const mongoUrl = "mongodb://localhost:27017";
const dbName = "AccountData";
const collectionName = "users";

export default async function handler(
  { params, body }: { params: { id: string }; body: any },
  res: NextApiResponse
) {
  const id = params.id;

  // Handle the request body accordingly
  console.log("Request body:", body);

  try {
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);

    const result = await db
      .collection(collectionName)
      .updateOne({ _id: new ObjectId(id) }, { $set: body });

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Document updated successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ message: "Error updating document" });
  }
  return (
    <h1 className='flex flex-col h-screen items-center justify-center text-white text-3xl'>
      ID: {id} {body}
    </h1>
  );
}
