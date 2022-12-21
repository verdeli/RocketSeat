import { Category } from '../model/Category';

//DTO - Data tranfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {

  private categories: Category[];

  constructor() {

    this.categories = [];

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
}

export { CategoriesRepository };