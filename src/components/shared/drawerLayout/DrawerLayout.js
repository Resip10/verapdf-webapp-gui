import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import './DrawerLayout.scss';

function DrawerLayout({ title, anchor, open, children }) {
    return (
        <Drawer anchor={anchor} open={open} variant="persistent" className="drawer">
            <div className="drawer__header">{title}</div>
            <Divider />
            {children}
        </Drawer>
    );
}

DrawerLayout.propTypes = {
    open: PropTypes.bool.isRequired,
    anchor: PropTypes.string,
    title: PropTypes.string,
};

DrawerLayout.defaultProps = {
    anchor: 'left',
};

export default DrawerLayout;
