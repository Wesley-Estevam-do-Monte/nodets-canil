import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject"; 
import { pet } from "../models/pet"

export const home = ( req: Request, res: Response ) => {
    let list = pet.getAll();

    res.render('pages/page',{
          menu: createMenuObject('all'),
          banner: {
               titulo: 'Todos os Animais',
               background: 'allanimals.jpg'

          },
          list
     });
}

export const dogs = ( req: Request, res: Response ) => {
     let list = pet.getFromType('dog');

     res.render('pages/page',{
          menu: createMenuObject('dog'),

          banner: {
               titulo: 'Todos os Cachorros',
               background: 'banner_dog.jpg'

          },
          list
     });
}

export const cats = ( req: Request, res: Response ) => {
     let list = pet.getFromType('cat');

     res.render('pages/page',{ 
          menu: createMenuObject('cat'),

          banner: {
               titulo: 'Todos os Gatos',
               background: 'banner_cat.jpg'

          },
          list
     });
}

export const fishes = ( req: Request, res: Response ) => {
     let list = pet.getFromType('fish')
     res.render('pages/page',{
          menu: createMenuObject('fish'),

          banner: {
               titulo: 'Todos os Peixes',
               background: 'banner_fish.jpg'

          },
          list
     });
}