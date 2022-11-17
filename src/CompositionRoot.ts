import { DataElementsD2Repository } from "./data/DataElementsD2Repository";
import { GetDataElementsUseCase } from "./domain/usecases/GetDataElementsUseCase";
import { D2Api } from "./types/d2-api";

export function getCompositionRoot(api: D2Api) {
    const dataElementsRepository = new DataElementsD2Repository(api);

    return {
        dataElements: {
            get: new GetDataElementsUseCase(dataElementsRepository),
        },
    };
}

export type CompositionRoot = ReturnType<typeof getCompositionRoot>;
