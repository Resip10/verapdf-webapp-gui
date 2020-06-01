import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppPages from '../../../AppPages';
import JobStatus from '../status/JobStatus';
import Results from '../results/Results';
import Inspect from '../inspect/Inspect';

function JobRouter() {
    return (
        <Switch>
            <Route path={AppPages.JOBS.STATUS.route} component={JobStatus} />
            <Route path={AppPages.JOBS.RESULTS.route} component={Results} />
            <Route path={AppPages.JOBS.INSPECT.route} component={Inspect} />
        </Switch>
    );
}

export default JobRouter;
