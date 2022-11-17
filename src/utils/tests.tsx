import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { CompositionRoot } from "../CompositionRoot";
import { DataElementsTestRepository } from "../data/DataElementsTestRepository";
import { GetDataElementsUseCase } from "../domain/usecases/GetDataElementsUseCase";
import { AppContext } from "../webapp/contexts/AppContext";

function getTestCompositionRoot(): CompositionRoot {
    const dataElementsRepository = new DataElementsTestRepository();

    return {
        dataElements: {
            get: new GetDataElementsUseCase(dataElementsRepository),
        },
    };
}

export function getReactComponent(children: ReactNode): TestComponent {
    const context = { compositionRoot: getTestCompositionRoot() };
    return render(<AppContext.Provider value={context}>{children}</AppContext.Provider>);
}

export type TestComponent = RenderResult;
