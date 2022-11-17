import { HashRouter, Route, Switch } from "react-router-dom";
import { DataElementsPage } from "../data-elements/DataElementsPage";
import { LandingPage } from "../landing/LandingPage";

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/data-elements" render={() => <DataElementsPage />} />

                <Route render={() => <LandingPage />} />
            </Switch>
        </HashRouter>
    );
};

export default Root;
