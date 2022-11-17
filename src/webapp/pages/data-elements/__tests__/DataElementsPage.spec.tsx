import "@testing-library/jest-dom/extend-expect";
import { waitFor } from "@testing-library/react";
import { getReactComponent, TestComponent } from "../../../../utils/tests";
import { DataElementsPage } from "../DataElementsPage";

describe("component", () => {
    let component: TestComponent;

    test("renders a title", async () => {
        component = getComponent();
        await waitFor(() => expect(component.queryByText("Data Elements")).toBeInTheDocument());
    });

    test("renders data elements", async () => {
        component = getComponent();
        await waitFor(() => expect(component.queryByText("Data Element 1 [1] [AGGREGATE]")).toBeInTheDocument());
    });
});

function getComponent() {
    return getReactComponent(<DataElementsPage />);
}
