import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <AppBar>
                <ToolBar>
                    Best Friends
                </ToolBar>
            </AppBar>
            <div className="container">
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;