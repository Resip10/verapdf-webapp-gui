import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Upload from './layouts/pages/upload/Upload';
import About from './layouts/pages/about/About';

const PAGES = {
    UPLOAD: '/new-job/files',
    ABOUT: '/about',
};

function AppRouter() {
    function getPage(path, routeProps = {}) {
        switch (path) {
            case PAGES.UPLOAD:
                return () => {
                    return <Upload {...routeProps} />;
                };
            case PAGES.ABOUT:
                return () => {
                    return <About {...routeProps} />;
                };
            default:
                return () => {
                    return <Upload {...routeProps} />;
                };
        }
    }

    return (
        <Switch>
            <Route exact path={PAGES.UPLOAD} render={getPage(PAGES.UPLOAD)} />
            <Route exact path={PAGES.ABOUT} render={getPage(PAGES.ABOUT)} />
            <Redirect to={PAGES.UPLOAD} />
        </Switch>
    );
}

export default React.memo(AppRouter);
