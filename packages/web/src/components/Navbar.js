/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint react/prefer-stateless-function: 0 */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faMapMarkerAlt,
    faSearch,
    faShoppingCart,
    faUser,
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Classnames from 'classnames';
import Logo from '../../static/medlife_logo.svg';
import Dialog from './common/Dialog';
import { navigate } from '../utils/NavUtils';

const Location = () => (
    <Fragment>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span className="ml-3 mr-4 navbar--row-1--location--label">
            560078, BTM 1st Stage
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="navbar--location-arrow-down" />
    </Fragment>
);

const Brand = () => (
    <img src={Logo} alt="medlife-logo" style={{ width: '90px' }} />
);

const navLinks = [
    {
        label: 'MEDICAL STORE',
        path: 'https://m.medlife.com/',
    },
    {
        label: 'HEALTH PRODUCTS',
        path: 'https://shop.medlife.com/',
    },
    {
        label: 'DOCTOR CONSULTATION',
        path: 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true',
    },
    {
        label: 'LAB TESTS',
        path: 'https://labs.medlife.com/',
    },
    {
        label: 'MORE',
        path: '/',
        subLinks: [
            {
                label: 'Medlife Essentials',
                path: 'https://www.medlife.com/medlife-essentials',
            },
            {
                label: 'Find Doctor',
                path: 'https://www.medlife.com/doctors/',
            },
            {
                label: 'For Doctors',
                path: 'https://www.medlife.com/fordoctors',
            },
            {
                label: 'Affiliates',
                path: 'https://www.medlife.com/affiliate',
            },
            {
                label: 'Franchise',
                path: 'https://www.medlife.com/affiliate',
            },
            {
                label: 'Offers',
                path: 'https://www.medlife.com/web/offers/',
            },
            {
                label: 'Blog',
                path: 'https://www.medlife.com/blog/',
            },
        ],
    },
];

export default class Navbar extends Component {
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
                <form className="navbar--search-form form-inline my-lg-0" onClick={this.handleSearchFormClick} onKeyDown={this.handleSearchFormClick}>
                    <div className="input-group d-flex">
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

    renderNavLinks = () => (
        <ul className="navbar-nav mr-auto d-flex justify-content-between">
            {
                navLinks.map((link) => {
                    const linkCLasses = Classnames('nav-item active position-relative');
                    const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
                    const linkHref = hasSubLinks ? '#' : link.path;

                    return (
                        <li className={linkCLasses} key={link.label}>
                            <a className="nav-link pl-0 pr-0" href={linkHref}>
                                { link.label }
                            </a>
                            { hasSubLinks ? (
                                <Dialog
                                    className="dialog navbar--dialog"
                                    render={
                                        ({ className }) => (
                                            <div className={className}>
                                                {
                                                    link.subLinks.map((subLink) => {
                                                        const subLinkCLasses = Classnames('');
                                                        return (
                                                            <div key={subLink.label} className={subLinkCLasses}>
                                                                <a className="d-block navbar--dialog--sublink" href={subLink.path}>{subLink.label}</a>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                />
                            ) : ''}
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
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <div className="d-flex d-block w-100 navbar--wrapper">
                        <div className="flex-shrink-sm-1 d-flex flex-sm-column flex-row logo-location-container">
                            <FontAwesomeIcon className="navbar--hamburger mobile-only" onClick={this.toggleHamburgerMenu} icon={faBars} />
                            <div
                                className={menuCollapse ? 'collapsable-menu--container mobile-only' : 'collapsable-menu--container mobile-only active'}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <a className="navbar-brand" href="/">
                                        <Brand />
                                    </a>

                                    <FontAwesomeIcon icon={faTimes} className="cross-icon" onClick={this.toggleHamburgerMenu} />
                                </div>
                                <div>
                                    <h6 className="navbar--user-profile">Sumanth Sri</h6>
                                </div>
                            </div>

                            <span className="collapse navbar-collapse navbar--row-1--location--label py-2 pr-2 invisible">
                                <Location />
                            </span>

                            <a className="navbar-brand web-only" href="/">
                                <Brand />
                            </a>
                        </div>

                        <div
                            className="collapse navbar-collapse flex-grow-1 align-items-start flex-column
                            justify-content-between search-navigation-container web-only"
                        >
                            { this.renderSearchForm() }

                            { this.renderNavLinks() }
                        </div>

                        <div className="profile-cart-container">
                            <button type="button" className="btn btn-link navbar--shopping-cart-button invisible">
                                <FontAwesomeIcon className="navbar--shopping-cart-button--icon" icon={faShoppingCart} />
                                <span className="navbar--items-in-cart">2</span>
                            </button>
                            <button type="button" className="btn btn-link navbar--profile-button web-only invisible">
                                <FontAwesomeIcon icon={faUser} className="navbar--profile-button--icon" />
                                Sushmita
                            </button>
                            <div className="web-only">
                                Call to order
                                <br />
                                1860 1234 1234
                            </div>
                            <button
                                type="button"
                                className="btn btn-link text-secondary"
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
