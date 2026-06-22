import { Router } from "express";


export const heroesRouter = new Router()

const heroes = [
    {id: 11, name: 'Dr Ni1ce', power: 'Super Strength', alterEgo: 'Dr. Nice'},
    {id: 12, name: 'Narco', power: 'Super Flexibility', alterEgo: 'Narco'},
    {id: 13, name: 'Bombasto', power: 'Super Blast', alterEgo: 'Bombasto'},
    {id: 14, name: 'Celeritas', power: 'Super Speed', alterEgo: 'Celeritas'},
    {id: 15, name: 'Magneta', power: 'Super Magnetism', alterEgo: 'Magneta'},
    {id: 16, name: 'RubberMan', power: 'Super Rubberiness', alterEgo: 'RubberMan'},
    {id: 17, name: 'Dynama', power: 'Super Strength', alterEgo: 'Dynama'},
    {id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: 'Dr. IQ'},
    {id: 19, name: 'Magma', power: 'Super Hot', alterEgo: 'Magma'},
    {id: 20, name: 'Tornado', power: 'Weather Changer', alterEgo: 'Tornado'}
    ];

heroesRouter.get('/:id', (req, res) => {
    console.log(req.params.id)
    const selectedGame = heroes.find(h => h.id === Number(req.params.id))
    console.log(selectedGame)
    res.status(200).json(selectedGame)
})

heroesRouter.get('/', (req, res) => {
    res.status(200).json(heroes)
    return
})
