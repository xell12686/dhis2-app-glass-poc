import { DataElement } from "../domain/entities/DataElement";
import { DataElementsRepository } from "../domain/repositories/DataElementsRepository";
import { D2Api, D2DataElement } from "../types/d2-api";

export class DataElementsD2Repository implements DataElementsRepository {
    constructor(private api: D2Api) {}

    async get(): Promise<DataElement[]> {
        // https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html#webapi_api_versions
        const metadata$ = this.api.models.dataElements.get({
            // Get object with all fields:
            //   fields: {$owner: true},
            fields: { id: true, name: true, domainType: true },

            // Filter examples:
            //   filter: { name: { ilike: "ANC" } },
            //   filter: {id: {eq: "some ID"}},
            page: 1,
            pageSize: 10,
            order: "name:asc",
        });

        const metadata = await metadata$.getData();

        const dataElements = metadata.objects.map(d2DataElement => {
            return this.getEntityFromD2RepoObject(d2DataElement);
        });

        return dataElements;
    }

    private getEntityFromD2RepoObject(d2DataElement: D2RepoDataElement): DataElement {
        return {
            id: d2DataElement.id,
            name: d2DataElement.name,
            domain: d2DataElement.domainType,
        };
    }
}

interface D2RepoDataElement {
    id: string;
    name: string;
    domainType: D2DataElement["domainType"];
}
