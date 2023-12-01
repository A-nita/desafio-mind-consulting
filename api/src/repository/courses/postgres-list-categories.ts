import { IListCategoriesRepository } from './protocols';
import { Category } from '../../model/category';
import db from '../../db';

export class PostgresListCategoriesRepository implements IListCategoriesRepository {
  async listCategories(): Promise<Category[]> {
    const res = await db.query('SELECT * FROM category', []);
    return res.rows;
  }
}
