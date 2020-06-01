import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Upload from './layouts/pages/upload/Upload';
import About from './layouts/pages/about/About';
import Settings from './layouts/pages/settings/Settings';
import NotFound from './layouts/pages/notFound/NotFound';
import AppPages from './AppPages';
import JobRouter from './layouts/pages/jobRouter/JobRouter';

function AppRouter() {
    return (
        <Switch>
            <Route exact path={AppPages.UPLOAD} component={Upload} />
            <Route exact path={AppPages.SETTINGS} component={Settings} />
            <Route exact path={AppPages.ABOUT} component={About} />
            <Route exact path={AppPages.NOT_FOUND} component={NotFound} />
            <Route path={AppPages.JOBS.route} component={JobRouter} />
            <Redirect to={AppPages.UPLOAD} />
        </Switch>
    );
}

export default AppRouter;
