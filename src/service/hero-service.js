import { heroRepository } from "../repositories/hero-db-repository.js";



export const heroService = {
    async addHero(data) {
        const newId = await heroRepository.getMaxId() + 1;
        const newHero = {
            id: newId,
            ...data
        }
        await heroRepository.addHero(newHero)
    },

    async getHeroDetailsById(id) {
        const heroDetails = await heroRepository.getHeroById(id)
        return heroDetails
    },

    async updateHero(id, enteredData) {
        const newData = {
            id: enteredData.id, 
            name: enteredData.name,
            power: enteredData.power,
            alterEgo: enteredData.alterEgo
        }
        await heroRepository.updateHeroData(id, newData)
        return
    },

    async deleteHero(id) {
        console.log('service')
        await heroRepository.deleteHero(id)
    },
}