import { DataElement } from "../entities/DataElement";
import { DataElementsRepository } from "../repositories/DataElementsRepository";

export class GetDataElementsUseCase {
    constructor(private dataElementsRepository: DataElementsRepository) {}

    execute(): Promise<DataElement[]> {
        return this.dataElementsRepository.get();
    }
}
