import { IListCategoriesController } from './interfaces';
import { IListCategoriesRepository } from '../../repository/courses/interfaces';

export class ListCategoriesController implements IListCategoriesController {
  constructor(private readonly listCategoriesRepository : IListCategoriesRepository) {}

  async handle() {
    try {
      const categories = await this.listCategoriesRepository.listCategories();
      return {
        statusCode: 200,
        body: categories,
      };
    } catch (error) {
      return {
        statusCode: 202,
        body: 'Something went wrong',
      };
    }
  }
}
