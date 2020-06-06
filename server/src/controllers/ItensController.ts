import { Request, Response } from 'express';
import knex from '../database/connection';

class ItensController {
    async index(request: Request, response: Response) {
        const itens = await knex('itens').select('*');
    
        const serializedItens = itens.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://10.0.0.102:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItens);
      }
}

export default ItensController;