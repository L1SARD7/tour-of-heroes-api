import { MongoClient } from "mongodb"
import { mongoUri } from "../config.js"


export const client = new MongoClient(mongoUri)

export async function runDB () {
    try {
        await client.connect()
        await client.db('tour-of-heroes').command({ ping: 1 })
        console.log('Connecting to Mongo DataBase completed')
    }
    catch (error) {
        await client.close()
        throw error;
    }
}