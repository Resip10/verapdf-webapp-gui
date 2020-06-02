import { createSelector } from 'reselect';

export const getResult = state => state.taskResult;

export const hasResult = createSelector(getResult, result => result != null);

export const getResultDetails = createSelector(getResult, result => result?.details);

export const getResultSummary = createSelector(
    getResultDetails,
    ({ passedChecks, failedChecks, passedRules, failedRules }) => ({
        passedChecks,
        failedChecks,
        passedRules,
        failedRules,
    })
);

export const getNumberOfFailedRules = createSelector(getResultSummary, ({ failedRules }) => failedRules);

export const isCompliant = createSelector(getResult, result => result?.compliant || false);
