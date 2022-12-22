import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';
import { Category } from '../model/Category';

class CategoriesRepository implements ICategoriesRepository {

  private categories: Category[];

  constructor() {

    this.categories = [];

  }
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    this.categories.push(category);

  }
  list(): Category[] {
    return this.categories;
  }
  findByname(name: string): Category | undefined {
    const category = this.categories.find((category => category.name === name));
    return category;
  }
}

export { CategoriesRepository };