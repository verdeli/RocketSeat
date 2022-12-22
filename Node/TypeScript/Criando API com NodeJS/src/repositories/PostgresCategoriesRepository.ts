import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category | undefined {
    console.log(name);
    throw new Error("Method not Implemented");
  }

  list(): Category[] {
    throw new Error("Method not Implemented");
  }

  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };