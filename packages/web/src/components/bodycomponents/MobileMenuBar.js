import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { uniqueId } from 'underscore';

import Button from '../common/Button';

const UserProfile = ({ toggleHamburgerMenu }) => (
    <div className="d-flex justify-content-between align-items-center">
        <div className="user--profile--container">
            <Button
                onClick={toggleHamburgerMenu}
                render={() => (
                    <button
                        type="button"
                        className="btn btn-link mobile-menu-close a-unstyled"
                        onClick={toggleHamburgerMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                )}
            />
        </div>
    </div>
);

const MenuItems = ({ menuItems }) => (
    <ul className="mr-auto d-flex menubar-mobile">
        {
            menuItems.map(link => (
                <MenuItem key={link.label || uniqueId('mobile-menu-bar-')} link={link} />
            ))
        }
    </ul>
);

const MenuItem = ({ link }) => {
    const { label, subLinks } = link;

    const renderSubLinks = () => subLinks.map(({ label: sublabel, path, iconsrc }) => (
        <li key={sublabel} className="subheaderlink">
            <button type="button" className="linkcontainer" data-href={path}>
                <img className="menubar-icon" src={iconsrc} alt={sublabel} />
                <span>{sublabel}</span>
            </button>
        </li>
    ));

    return (
        <Fragment>
            {label && (
                <div className="navheaderlink">
                    {label}
                </div>
            )}
            {renderSubLinks()}
        </Fragment>
    );
};

const MobileMenuBar = (props) => {
    const { isHidden } = props;

    return (
        <Fragment>
            <div className={isHidden ? 'collapsable-menu--container mobile-only' : 'collapsable-menu--container mobile-only active'}>
                <UserProfile {...props} />
                <MenuItems {...props} />
            </div>
        </Fragment>
    );
};

MobileMenuBar.propTypes = {
    isHidden: PropTypes.bool.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
            subLinks: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    path: PropTypes.string,
                }),
            ),
        }).isRequired,
    ).isRequired,
    toggleHamburgerMenu: PropTypes.func.isRequired,
};

MenuItems.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
            subLinks: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    path: PropTypes.string,
                }),
            ),
        }).isRequired,
    ).isRequired,
};

MenuItem.propTypes = {
    link: PropTypes.shape({
        label: PropTypes.string,
        path: PropTypes.string,
    }).isRequired,
};

UserProfile.propTypes = {
    toggleHamburgerMenu: PropTypes.func.isRequired,
};

export default MobileMenuBar;
