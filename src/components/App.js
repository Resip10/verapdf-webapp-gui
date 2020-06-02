import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

import AppPages from './AppPages';
import AppRouter from './AppRouter';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Loading from './layouts/pages/loading/Loading';
import LockOverlay from './shared/lockOverlay/LockOverlay';
import { isInitialized } from '../store/application/selectors';

import './App.scss';

function App({ initialized }) {
    const isInspectApp = useRouteMatch({
        path: AppPages.INSPECT.route,
    });
    if (!initialized) {
        return <Loading />;
    }

    return (
        <div className="vera-pdf-app app-container">
            <Header />
            <main className={classNames('app-content', { 'app-inspect': isInspectApp })}>
                <AppRouter />
            </main>
            <LockOverlay />
            <Footer />
        </div>
    );
}

App.propTypes = {
    initialized: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        initialized: isInitialized(state),
    };
}

export default connect(mapStateToProps)(App);
