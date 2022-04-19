import { Request, Response } from 'express';
import pool from '../database';

class LivrosController {

    public async list(req: Request, res: Response) {
        const livros = await pool.query('SELECT * FROM livros');
        res.json(livros);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const livros = await pool.query('SELECT * FROM livros WHERE id = ?', [id]);
        if(livros.length > 0) {
            return res.json(livros[0]);
        }
        res.status(404).json({text: "The book doesn't exist"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO livros set ?', [req.body]);
        res.json({message: 'Book saved!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE livros set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The book was updated!'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM livros WHERE id = ?', [id]);
        res.json({message: 'The book was deleted!'});
    }
}

const livrosController = new LivrosController();
export default livrosController;