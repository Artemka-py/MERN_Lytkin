import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated =>{
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage></LinksPage>
                </Route>
                <Route path="/create" exact>
                    <CreatePage></CreatePage>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage></DetailPage>
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage></AuthPage>
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}