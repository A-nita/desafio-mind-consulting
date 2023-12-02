import { IListCategoriesController } from './interfaces';
import { IListCategoriesRepository } from '../../repository/courses/interfaces';

export class ListCategoriesController implements IListCategoriesController {
  constructor(private readonly getCategoriesRepository : IListCategoriesRepository) {}

  async handle() {
    try {
      const categories = await this.getCategoriesRepository.listCategories();
      return {
        statusCode: 200,
        body: categories,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong',
      };
    }
  }
}
