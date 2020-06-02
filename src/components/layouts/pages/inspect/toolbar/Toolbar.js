import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppPages from '../../../../AppPages';
import { getJobId } from '../../../../../store/job/selectors';
import { getNumberOfFailedRules } from '../../../../../store/job/result/selectors';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '../../../../shared/button/Button';

import './Toolbar.scss';

const MEDIA = '(min-width:850px)';
const BACK = {
    FULL: 'Back to summary',
    SHORT: 'Back',
};

function Toolbar({ jobId, name, isTreeOpened, onTreeToggle, numberOfFailedRules }) {
    const history = useHistory();
    const onBackClick = useMemo(() => () => history.push(AppPages.RESULTS.url(jobId)), [history, jobId]);
    const backText = useMediaQuery(MEDIA) ? BACK.FULL : BACK.SHORT;

    return (
        <section className="toolbar">
            <section className="toolbar__start">
                <TreeButton open={isTreeOpened} onClick={onTreeToggle} badgeNumber={numberOfFailedRules} />
                <Button onClick={onBackClick} title={BACK.FULL}>
                    {backText}
                </Button>
            </section>
            <section className="toolbar__center">
                <h1 title={name}>{name}</h1>
            </section>
            <section className="toolbar__end" />
        </section>
    );
}

function TreeButton({ open, onClick, badgeNumber }) {
    const number = badgeNumber > 9 ? '9+' : badgeNumber;
    const Icon = open ? <ChevronLeftIcon /> : <MenuIcon />;
    return (
        <div className="tree-button">
            <IconButton size="small" aria-label="Open drawer" onClick={onClick} edge="start">
                {number && !open ? (
                    <Badge badgeContent={number} color="primary" className="tree-button__badge">
                        {Icon}
                    </Badge>
                ) : (
                    Icon
                )}
            </IconButton>
        </div>
    );
}

Toolbar.propTypes = {
    name: PropTypes.string,
    jobId: PropTypes.string,
    isTreeOpened: PropTypes.bool.isRequired,
    onTreeToggle: PropTypes.func.isRequired,
    numberOfFailedRules: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    return {
        jobId: getJobId(state),
        numberOfFailedRules: getNumberOfFailedRules(state),
    };
}

export default connect(mapStateToProps)(Toolbar);
