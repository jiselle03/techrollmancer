import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavBarDetails } from './NavBarDetails';
import { NavBarStyle, NavContainer, Sidebar, sidebarText } from './styles/NavStyle.js';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
};

export const NavBar = ({ currentUser, onSignOut }) => {
    const [state, setState] = useState({
        left: false
      });

    const laptop = useMediaQuery('(min-width:1280px)');

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <NavContainer>
            {!laptop && (
                <NavBarStyle>
                    <Sidebar className="sidebar">
                        <Link onClick={toggleDrawer('left', true)} style={sidebarText}>MENU</Link>
                        <ListItemLink button
                                href="/"
                                style={{
                                    fontFamily: "Bungee Inline",
                                    fontSize: "1.5em",
                                    transform: "rotate(-90deg)",
                                    color: "#fff",
                                    width: "12em",
                                    justifyContent: "center",
                                }}
                            >   
                                <div className="branding">
                                    <span>
                                        TECHR
                                    </span>
                                    <span className="d20">
                                        <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                                    </span>
                                    <span>
                                        LLMANCER
                                    </span>    
                                </div>
                        </ListItemLink>
                        {currentUser && (
                            <Link style={sidebarText} to="/characters">{currentUser.username.toUpperCase()}</Link>
                            )}
                    </Sidebar>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        <div
                            role="presentation"
                            onClick={toggleDrawer('left', false)}
                            onKeyDown={toggleDrawer('left', false)}
                        >
                            <NavBarStyle>
                                <NavBarDetails currentUser={currentUser} onSignOut={onSignOut} />
                            </NavBarStyle>
                        </div>
                    </Drawer>
                </NavBarStyle>
            )}

            {laptop && (
                <NavBarStyle>
                    <NavBarDetails currentUser={currentUser} onSignOut={onSignOut} />
                </NavBarStyle>
            )}
        </NavContainer>
    );
};
