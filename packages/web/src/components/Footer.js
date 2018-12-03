/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Link from 'next/link';
import ReturnPolicyModal from './ReturnPolicyModal';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import MobileAppStoreLinks from './MobileAppStoreLinks';
import SubscriptionForm from './SubscriptionForm';
import TopSearchedSection from './TopSearchedSection';
import navigationLinks from '../constants/navigations';

export default class Footer extends Component {
    state = {
        isReturnPolicyModalOpen: false,
        isPrivacyPolicyModalOpen: false,
        isTnCModalOpen: false,
    }

    toggleReturnPolicyModal = () => {
        this.setState(prevState => ({
            ...prevState,
            isReturnPolicyModalOpen: !prevState.isReturnPolicyModalOpen,
        }));
    }

    togglePrivacyPolicyModal = () => {
        this.setState(prevState => ({
            ...prevState,
            isPrivacyPolicyModalOpen: !prevState.isPrivacyPolicyModalOpen,
        }));
    }

    toggleTnCModal = () => {
        this.setState(prevState => ({
            ...prevState,
            isTnCModalOpen: !prevState.isTnCModalOpen,
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer web-only">
                    <div className="container">
                        <div className="row footer--contact">
                            <div className="col-md-9 d-flex align-content-start row">
                                <div className="col-md-3">
                                    <h4 className="footer--contact-us-heading">
                                        WHATSAPP US
                                    </h4>
                                    <p className="footer--whatsapp-number">8884700000</p>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="footer--contact-us-heading">Follow us on</h6>
                                    <ul className="d-flex justify-content-start no-style">
                                        <li className="footer--social-links">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.facebook.com/Medlifecare/?fref=ts"
                                                className="social-icon icon-facebook"
                                                title="Facebook"
                                            >
                                                <img src="../../static/facebook.png" alt="Facebook" />
                                            </a>
                                        </li>
                                        <li className="footer--social-links d-none">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://twitter.com/medlifecare"
                                                className="social-icon icon-twitter"
                                                title="Twitter"
                                            >
                                                <img src="../../static/instagram.png" alt="Instagram" />
                                            </a>
                                        </li>
                                        <li className="footer--social-links">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://twitter.com/medlifecare"
                                                className="social-icon icon-twitter"
                                                title="Twitter"
                                            >
                                                <img src="../../static/twitter.png" alt="Twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <SubscriptionForm />
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-end pl-0 pr-0">
                                <MobileAppStoreLinks />
                            </div>
                        </div>
                        <div className="row footer--contact">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-12">
                                    <h4 className="footer--contact-us-heading">
                                        Give a missed call to Download the app
                                    </h4>
                                    <p className="footer--whatsapp-number">7329073290</p>
                                </div>
                            </div>
                        </div>
                        <div className="row footer--links">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-3">
                                    <h4 className="footer--links-heading">
                                        For Customers
                                    </h4>
                                    <ul className="footer-links-wrapper no-style">
                                        <Link as={`${navigationLinks.order}`} href="/MedicalStore">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a className="nav-link pl-0 pr-0">
                                                Medical Store
                                            </a>
                                        </Link>
                                        <li><a href="https://shop.medlife.com/">Health products</a></li>
                                        <li><a href="https://www.medlife.com/consult">Doctor consultation</a></li>
                                        <li><a href="https://labs.medlife.com/">Lab tests</a></li>
                                        <li><a href="https://www.medlife.com/doctors/">Find a Doctor</a></li>
                                        <li><a href="https://www.medlife.com/web/">Health Articles</a></li>
                                        <li><a href="https://www.medlife.com/web/offers/">Offers / Coupons</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="footer--links-heading">
                                        Medlife for Doctors
                                    </h4>
                                    <ul className="footer-links-wrapper no-style">
                                        <li><a href="https://www.medlife.com/fordoctors">For Doctors</a></li>
                                        <li><a href="https://www.medlife.com/fordoctors#contact">Book a Demo</a></li>
                                    </ul>
                                    <h4 className="footer--links-heading footer--links-partner-heading">
                                        Partner with us
                                    </h4>
                                    <ul className="footer-links-wrapper no-style">
                                        <li><a href="https://www.medlife.com/affiliate">Affiliates</a></li>
                                        <li><a href="https://www.medlife.com/affiliate">Franchise</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="footer--links-heading">
                                        Help
                                    </h4>
                                    <ul className="footer-links-wrapper no-style">
                                        <li><a href="https://m.medlife.com/#/root/faq">FAQ’s</a></li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={this.toggleReturnPolicyModal}
                                            >
                                                Return Policy
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={this.toggleTnCModal}
                                            >
                                                Terms and Conditions
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={this.togglePrivacyPolicyModal}
                                            >
                                                Privacy Policy
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="footer--links-heading">
                                        Medlife
                                    </h4>
                                    <ul className="footer-links-wrapper no-style">
                                        <li><a href="https://www.medlife.com/blog/">Blogs</a></li>
                                        <li><a href="http://careers.medlife.com/jobs/">Careers</a></li>
                                        <li><a href="http://careers.medlife.com/life-medlife/">Life at Medlife</a></li>
                                        <li><a href="https://m.medlife.com/#/root/Feedback">Write to us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-12">
                                    {false && (
                                        <TopSearchedSection />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright--section web-only">
                    Copyright &copy; 2018 Medlife International Private Limited. All rights reserved
                </div>

                <ReturnPolicyModal open={this.state.isReturnPolicyModalOpen} />
                <TermsAndConditionsModal open={this.state.isTnCModalOpen} />
                <PrivacyPolicyModal open={this.state.isPrivacyPolicyModalOpen} />
            </React.Fragment>
        );
    }
}
