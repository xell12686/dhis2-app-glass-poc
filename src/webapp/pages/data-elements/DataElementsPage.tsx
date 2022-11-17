import { LinearProgress } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { DataElement } from "../../../domain/entities/DataElement";
import i18n from "../../../utils/i18n";
import { DataElementsList } from "../../components/data-elements/DataElementsList";
import { PageHeader } from "../../components/page-header/PageHeader";
import { useAppContext } from "../../contexts/AppContext";

export const DataElementsPage: React.FC = () => {
    const dataElements = useDataElementsList();
    const history = useHistory();
    const goToLandingPage = React.useCallback(() => history.push("/"), [history]);

    return (
        <React.Fragment>
            <PageHeader title={i18n.t("Data Elements")} onBackClick={goToLandingPage} />
            {dataElements ? <DataElementsList dataElements={dataElements} /> : <LinearProgress />}
        </React.Fragment>
    );
};

export function useDataElementsList() {
    const { compositionRoot } = useAppContext();
    const [dataElements, setDataElements] = React.useState<DataElement[] | undefined>();

    React.useEffect(() => {
        async function run() {
            const dataElements = await compositionRoot.dataElements.get.execute();
            setDataElements(dataElements);
        }

        run();
    }, [compositionRoot]);

    return dataElements;
}
