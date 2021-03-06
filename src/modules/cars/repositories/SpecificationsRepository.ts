import { Specification } from "../entities/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "./implementations/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((s) => s.name === name);

        return specification;
    }
}

export { SpecificationsRepository };
