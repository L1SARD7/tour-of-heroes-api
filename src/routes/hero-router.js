import { Router } from "express";
import { heroService } from "../service/hero-service.js";
import { heroRepository } from "../repositories/hero-db-repository.js";


export const heroesRouter = new Router()

heroesRouter.get('/:id', async (req, res) => {
    const selectedHero = await heroService.getHeroDetailsById(Number(req.params.id))
    res.status(200).json(selectedHero)
})

heroesRouter.get('/', async (req, res) => {
    const heroes = await heroRepository.getHeroesList()
    res.status(200).json(heroes)
})

heroesRouter.put('/:id', async (req, res) => {
    const updatedHero = await heroService.updateHero(Number(req.params.id), req.body)
    res.status(200)
})

heroesRouter.post('/add-hero', async (req, res) => {
    await heroService.addHero(req.body)
    res.status(201)
})

heroesRouter.delete('/delete/:id', async (req, res) => {
    console.log('roter')
    await heroService.deleteHero(Number(req.params.id))
    res.status(204)
})
