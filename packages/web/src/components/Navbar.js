/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faSearch,
    faShoppingCart,
    faUser,
    faBars,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import Classnames from 'classnames';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Logo from '../../static/medlife_logo.svg';
import Dialog from './common/Dialog';
import MenuBarMobile from './bodycomponents/MobileMenuBar';
import { navigate } from '../utils/NavUtils';
import { renderAsyncComponent } from './common/AsyncComponent';
import { navLinks, menuLinks } from '../constants/NavLinks';

const Brand = () => (
    <img src={Logo} alt="medlife-logo" style={{ width: '90px' }} />
);

class Navbar extends Component {
    state = {
        showSearchDropdown: false,
        menuCollapse: true,
    }

    toggleSearchDropdown = () => {
        this.setState(prevState => ({
            ...prevState,
            showSearchDropdown: !prevState.showSearchDropdown,
        }));
    }

    toggleHamburgerMenu = () => {
        this.setState(prevState => ({
            ...prevState,
            menuCollapse: !prevState.menuCollapse,
        }));
    }

    handleSearchFormClick = () => {
        navigate('https://m.medlife.com/#/root/home/medicineSearch');
    }

    renderSearchForm = () => {
        const { showSearchDropdown } = this.state;

        return (
            <div className="navbar--search-form-wrapper">
                <form
                    className="navbar--search-form form-inline my-lg-0 w-100"
                    onClick={this.handleSearchFormClick}
                    onKeyDown={this.handleSearchFormClick}
                >
                    <div className="input-group d-flex w-100">
                        <div className="input-group-prepend d-none">
                            <button
                                className="btn btn-outline-secondary navbar--search-form--category-btn"
                                type="button"
                                onClick={this.toggleSearchDropdown}
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                All
                                <FontAwesomeIcon icon={faChevronDown} className="navbar--location-arrow-down" />
                            </button>

                            <div className="dropdown-menu" style={{ display: showSearchDropdown ? 'block' : 'none', top: '38px' }}>
                                <button
                                    type="button"
                                    onClick={this.toggleSearchDropdown}
                                    className="navbar--row-1--search--selector-btn dropdown-item btn btn-link"
                                >
                                    All
                                </button>
                                <button
                                    type="button"
                                    onClick={this.toggleSearchDropdown}
                                    className="navbar--row-1--search--selector-btn dropdown-item btn btn-link"
                                >
                                    All
                                </button>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control navbar--row-1--search--search-input"
                            aria-label="Text input with dropdown button"
                            placeholder="Search for medicines, health products"
                        />
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    </div>
                </form>
            </div>
        );
    }

    renderNavLinkListItem = (link) => {
        const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
        const linkHref = hasSubLinks ? '#' : link.path;

        if (link.label === 'MEDICAL STORE') {
            return (
                <Link as={`/${link.path}`} href="/MedicalStore">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link pl-0 pr-0">
                        {link.label}
                    </a>
                </Link>
            );
        }

        return (
            <a className="nav-link pl-0 pr-0" href={linkHref}>{ link.label }</a>
        );
    }

    renderSubLinks = (subLinks) => {
        if (!subLinks || !subLinks.map) return null;

        return subLinks.map((subLink) => {
            const subLinkCLasses = Classnames('');
            return (
                <div key={subLink.label} className={subLinkCLasses}>
                    <a className="d-block navbar--dialog--sublink" href={subLink.path}>
                        {subLink.label}
                    </a>
                </div>
            );
        });
    }

    renderNavLinks = () => (
        <ul className="navbar-nav mr-auto d-flex justify-content-between">
            {
                navLinks.map((link) => {
                    const linkCLasses = Classnames('nav-item active position-relative');
                    const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;

                    return (
                        <li className={linkCLasses} key={link.label}>
                            { this.renderNavLinkListItem(link) }

                            { hasSubLinks && (
                                <Dialog
                                    className="dialog navbar--dialog"
                                    render={
                                        ({ className }) => (
                                            <div className={className}>
                                                { this.renderSubLinks(link.subLinks) }
                                            </div>
                                        )
                                    }
                                />
                            )}
                        </li>
                    );
                })
            }
        </ul>
    )

    // getNavbarFeatures = () => {
    //     const  { features } = this.props;

    //     const location = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_LOCATION,
    //     });
    //     const searchCategory = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR,
    //     });
    //     const searchBox = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_LOCATION,
    //     });
    //     const shoppingCart = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR,
    //     });

    // }

    render() {
        const { menuCollapse } = this.state;
        const { router } = this.props;

        const { pathname } = router;
        let NavBarTitle = '';

        if (pathname === '/MedicalStore') {
            NavBarTitle = 'Medical Store';
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <div className="d-flex d-block w-100 navbar--wrapper">
                        <div className="flex-shrink-sm-1 d-flex flex-sm-column flex-row logo-location-container">
                            {pathname === '/Home' &&
                                <FontAwesomeIcon className="navbar--hamburger mobile-only" onClick={this.toggleHamburgerMenu} icon={faBars} />
                            }
                            {pathname !== '/Home' && (
                                <Link href="/Home" as="/">
                                    <FontAwesomeIcon className="navbar--hamburger mobile-only" icon={faArrowLeft} />
                                </Link>
                            )}
                            <div
                                className="flex-shrink-sm-1 d-flex flex-sm-column navbar-title"
                            >
                                {NavBarTitle}
                            </div>
                            <MenuBarMobile
                                isHidden={menuCollapse}
                                toggleHamburgerMenu={this.toggleHamburgerMenu}
                                menuItems={menuLinks}
                            />

                            {false && (
                                <span className="collapse navbar-collapse navbar--row-1--location--label py-2 pr-2 invisible">
                                    {
                                        renderAsyncComponent({
                                            fetchComponent: () => import('./Location'),
                                        })
                                    }
                                </span>
                            )}

                            {/* marginTop added to account for removed upper components */}
                            <Link as="/" href="/Home">
                                <a className="navbar-brand web-only" href="/" style={{ marginTop: '37px' }}>
                                    <Brand />
                                </a>
                            </Link>
                        </div>

                        <div
                            className="collapse navbar-collapse flex-grow-1 align-items-start flex-column
                            justify-content-between search-navigation-container web-only"
                        >
                            { this.renderSearchForm() }

                            { this.renderNavLinks() }
                        </div>

                        <div className="profile-cart-container">
                            {false && (
                                <button type="button" className="btn btn-link navbar--shopping-cart-button">
                                    <FontAwesomeIcon className="navbar--shopping-cart-button--icon" icon={faShoppingCart} />
                                    <span className="navbar--items-in-cart">2</span>
                                </button>
                            )}
                            {false && (
                                <button type="button" className="btn btn-link navbar--profile-button web-only">
                                    <FontAwesomeIcon icon={faUser} className="navbar--profile-button--icon" />
                                    Sushmita
                                </button>
                            )}

                            {/* marginTop added to account for removed upper components */}
                            <div className="navbar--call-to-order web-only" style={{ marginTop: '57px' }}>
                                Call to order
                                <br />
                                1860 1234 1234
                            </div>
                            <button
                                type="button"
                                className="btn btn-link text-secondary mobile-only-inline-block"
                                onClick={this.handleSearchFormClick}
                                onKeyDown={this.handleSearchFormClick}
                            >
                                <FontAwesomeIcon className="search-icon mobile-only" icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);

Navbar.propTypes = {
    router: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};
