import { client } from "../db/db.js"
const dbName = 'tour-of-heroes'

export const heroRepository = {
    async getHeroById(id) {
        return await client.db(dbName).collection('heroes').findOne({id: id})
    },

    async getHeroesList() {
        return await client.db(dbName).collection('heroes').find().toArray()
    },

    async getMaxId() {
        const maxId = await client.db(dbName).collection('heroes').aggregate(
        [{ $group: { _id: null, id: { $max: "$id" } } }]).toArray()

        return maxId[0].id
    },

    async getHeroesCount() {
        const heroesCount = await client.db(dbName).collection('heroes').countDocuments()
        return heroesCount
    },

    async addHero(heroData) {
        const result = await client.db(dbName).collection('heroes').insertOne(heroData)
        return result.acknowledged === true
    },

    async updateHeroData(id, newData) {
        await client.db(dbName).collection('heroes').updateOne({id: id}, {$set: newData})
        return
    },

    async deleteHero(id) {
        console.log('start delete')
        const result = await client.db(dbName).collection('heroes').deleteOne({id: id})
        return result.deletedCount === 1
    }
}