import { DataElement } from "../entities/DataElement";

export interface DataElementsRepository {
    get(): Promise<DataElement[]>;
}
