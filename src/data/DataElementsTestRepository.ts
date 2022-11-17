import { DataElement } from "../domain/entities/DataElement";
import { DataElementsRepository } from "../domain/repositories/DataElementsRepository";

export class DataElementsTestRepository implements DataElementsRepository {
    async get(): Promise<DataElement[]> {
        return [
            { id: "1", name: "Data Element 1", domain: "AGGREGATE" },
            { id: "2", name: "Data Element 2", domain: "AGGREGATE" },
            { id: "3", name: "Data Element 3", domain: "TRACKER" },
        ];
    }
}
