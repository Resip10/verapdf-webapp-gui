export default {
    UPLOAD: '/new-job/files',
    SETTINGS: '/new-job/settings',
    ABOUT: '/about',
    LOADING: '/loading',
    NOT_FOUND: '/404',
    JOBS: {
        route: '/jobs',
        STATUS: {
            route: '/jobs/:id/status',
            url(id) {
                return `/jobs/${id}/status`;
            },
        },
        RESULTS: {
            route: '/jobs/:id/result-summary',
            url(id) {
                return `/jobs/${id}/result-summary`;
            },
        },
        INSPECT: {
            route: '/jobs/:id/result-details',
            url(id) {
                return `/jobs/${id}/result-details`;
            },
        },
    },
};
