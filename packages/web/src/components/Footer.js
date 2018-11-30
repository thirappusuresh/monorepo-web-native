/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-unescaped-entities: 0 */
/* eslint max-len: 0 */
/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { post } from 'axios';


import Button from './common/Button';

export default class Footer extends Component {
    state = {
        isReturnPolicyModalOpen: false,
        subscribeFormEmail: '',
        subscriptionSuccesful: null,
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    handleSubscribeSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.subscribeFormEmail,
            source: 'medlife_corp',
        };
        post('https://www.medlife.com/ml-rest-services/v1/medlife/customer/newsletter/subscribe', data)
            .then((res) => {
                if (res.data.status === true) {
                    this.setState(prevState => ({
                        ...prevState,
                        subscribeFormEmail: '',
                        subscriptionSuccesful: true,
                    }));
                } else {
                    this.setState(prevState => ({
                        ...prevState,
                        subscriptionSuccesful: false,
                    }));
                }
            })
            .catch(() => {
                this.setState(prevState => ({
                    ...prevState,
                    subscriptionSuccesful: false,
                }));
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer web-only">
                    <div className="container">
                        <div className="row footer--contact">
                            <div className="col-md-9 d-flex align-content-start row">
                                <div className="col-md-3">
                                    <h6 className="footer--contact-us-heading">Whatsapp us</h6>
                                    <p className="footer--whatsapp-number">8884700000</p>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="footer--contact-us-heading">Follow us on</h6>
                                    <ul className="d-flex justify-content-start">
                                        <li className="footer--social-links">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Medlifecare/?fref=ts" className="social-icon icon-facebook" title="Facebook">
                                                <img src="../../static/facebook.png" alt="Facebook" />
                                            </a>
                                        </li>
                                        <li className="footer--social-links">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/medlifecare" className="social-icon icon-twitter" title="Twitter">
                                                <img src="../../static/instagram.png" alt="Instagram" />
                                            </a>
                                        </li>
                                        <li className="footer--social-links">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/medlifecare" className="social-icon icon-twitter" title="Twitter">
                                                <img src="../../static/twitter.png" alt="Twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <h6 className="footer--contact-us-heading">Subscribe newsletter</h6>
                                    <div className="d-flex">
                                        <input
                                            className="footer--search"
                                            type="text"
                                            placeholder="email@domain"
                                            value={this.state.subscribeFormEmail}
                                            onChange={this.updateField}
                                            name="subscribeFormEmail"
                                        />
                                        <Button
                                            className="button-primary footer--search-button"
                                            text="subscribe"
                                            disabled={!this.state.subscribeFormEmail.length}
                                            onClick={this.handleSubscribeSubmit}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-end pl-0 pr-0">
                                <div className="d-inline-block">
                                    <h6 className="footer--contact-us-heading">Download our App</h6>
                                    <div>
                                        <img className="footer--app-play-store-images" src="../../static/appstore.png" alt="Appstore" />
                                        <img className="footer--app-play-store-images" src="../../static/playstore.png" alt="Playstore" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer--contact">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-12">
                                    <h6 className="footer--contact-us-heading">
                                        Give a missed call to Download the app
                                    </h6>
                                    <p className="footer--whatsapp-number">7329073290</p>
                                </div>
                            </div>
                        </div>
                        <div className="row footer--links">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-3">
                                    <h6 className="footer--links-heading">
                                        For Customers
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li><a href="ttps://m.medlife.com/">Medical Store</a></li>
                                        <li><a href="https://shop.medlife.com/">Health products</a></li>
                                        <li><a href="https://www.medlife.com/consult">Doctor consultation</a></li>
                                        <li><a href="https://labs.medlife.com/">Lab tests</a></li>
                                        <li><a href="https://www.medlife.com/doctors/">Find a Doctor</a></li>
                                        <li><a href="https://www.medlife.com/web/">Health Articles</a></li>
                                        <li><a href="https://www.medlife.com/web/offers/">Offers / Coupons</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="footer--links-heading">
                                        Medlife for Doctors
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li><a href="https://www.medlife.com/fordoctors">For Doctors</a></li>
                                        <li><a href="https://www.medlife.com/fordoctors#contact">Book a Demo</a></li>
                                    </ul>
                                    <h6 className="footer--links-heading footer--links-partner-heading">
                                        Partner with us
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li><a href="https://www.medlife.com/affiliate">Affiliates</a></li>
                                        <li><a href="https://www.medlife.com/affiliate">Franchise</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="footer--links-heading">
                                        Help
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li><a href="/">Help</a></li>
                                        <li><a href="https://www.medlife.com/#faq">FAQ’s</a></li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={() => this.setState({ isReturnPolicyModalOpen: !this.state.isReturnPolicyModalOpen })}
                                            >
                                                Return Policy
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={() => this.setState({ isTnCModalOpen: !this.state.isTnCModalOpen })}
                                            >
                                                Terms and Conditions
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={() => this.setState({ isPrivacyPolicyModalOpen: !this.state.isPrivacyPolicyModalOpen })}
                                            >
                                                Privacy Policy
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="footer--links-heading">
                                        Medlife
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li><a href="http://careers.medlife.com/life-medlife/">About Us</a></li>
                                        <li><a href="#https://www.medlife.com/blog/">Blogs</a></li>
                                        <li><a href="http://careers.medlife.com/jobs/">Careers</a></li>
                                        <li><a href="http://careers.medlife.com/life-medlife/">Life at Medlife</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex align-content-start row">
                                <div className="col-md-12">
                                    <h6 className="footer--links-heading">
                                        Top searched
                                    </h6>
                                    <ul className="footer-links-wrapper">
                                        <li>
                                            Medicines | Healthcare products Doctors | Blog  |
                                            FAQ&quot;s | Return Policy | Health Articles | Offers / Coupons
                                        </li>
                                        <li>
                                            Medicines | Healthcare products Doctors | Blog  |
                                            FAQ&quot;s | Return Policy | Health Articles | Offers / Coupons
                                        </li>
                                        <li>
                                            Medicines | Healthcare products Doctors | Blog  |
                                            FAQ&quot;s | Return Policy | Health Articles | Offers / Coupons
                                        </li>
                                        <li>Medicines | Healthcare products Doctors | Blog  | FAQ&quot;s </li>
                                    </ul>
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

const modalStyles = {
    backgroundColor: 'transparent',
    padding: 0,
    border: 0,
    width: '90%',
};

const cardStyles = {
    border: '1px solid #2a2a2a',
};

const cardHeaderStyles = {
    backgroundColor: '#2a2a2a',
    color: '#eaeaea',
};

const cardBodyStyles = {
    height: typeof window !== 'undefined' ? `${window.innerHeight - 100}px` : '200px',
    overflow: 'scroll',
};

const ReturnPolicyModal = ({ open }) => (
    <Popup
        modal
        closeOnDocumentClick
        open={open}
        contentStyle={modalStyles}
        lockScroll
    >
        <div className="card" style={cardStyles}>
            <div className="card-header" style={cardHeaderStyles}>
                Return Policy
            </div>
            <div className="card-body" style={cardBodyStyles}>
                <p> At Medlife.com, we strive to ensure your orders are delivered to your satisfaction. However, in the rare event that your order is unsatisfactory, we are happy to accept returns for orders, if: </p>
                <ul className="not-match-list">
                    {' '}
                    <li> - you've received an item(s) that does not match your order </li>
                    {' '}
                    <li> - the item(s) were damaged in transit or shortage (delivery of such order to be refused at doorstep) </li>
                    {' '}
                    <li> - the item(s) is due to expire within 3 months where the shelf life of the item is more than 3 months </li>
                    {' '}
                    <li> - the patient has developed any allergies after taking the medication and the doctor has prescribed another medicine, the medicines can be returned within thirty (30) days from the date of delivery. </li>
                    {' '}
                </ul>
                {' '}
                <p>
                    {' '}
                    <br />
                    <strong>Note:</strong>
                    {' '}
                    If you notice the package is damaged at the time of delivery, please do not accept the order. If you could not check that the order is damaged at the time of delivery, raise a return request within 24 hours of delivery by calling us at 1860 1234 1234.Replacement for the damaged item (s) is subject to availability in stock. In absence of a replacement, a refund will be issued.
                    {' '}
                </p>
                {' '}
                <p className="return-statement">
                    {' '}
                    <br />
                    <strong>Returns are subject to the following conditions:</strong>
                </p>
                {' '}
                <ul className="return-conditions">
                    {' '}
                    <li>- Items being returned should only be in their original manufacturer's packaging i.e. with labels, bar-code.</li>
                    {' '}
                    <li>- Only fully unused strips/bottles can be returned</li>
                    {' '}
                    <li>- Batch number of the product being returned should match as mentioned on the sales invoice</li>
                    {' '}
                    <li>- Original sales invoice has to be returned for processing returns and refunds.</li>
                    {' '}
                </ul>
                {' '}
                <p className="accept-conditions">
                    {' '}
                    <br />
                    <strong>We do not accept returns in following scenarios:</strong>
                </p>
                {' '}
                <ul className="accept-scenarios">
                    {' '}
                    <li>- Partially used strips, opened bottles cannot be returned.</li>
                    {' '}
                    <li>- Products which require specific storage conditions (temperature controlled) cannot be returned (vials, injections, vaccines, penfills, etc)</li>
                    {' '}
                    <li>- Products which have expired post purchase.</li>
                    {' '}
                    <li>- Second time request against the same product/order.</li>
                    {' '}
                </ul>
                {' '}
                <p className="return-process">
                    {' '}
                    <br />
                    <strong>Return Process:</strong>
                </p>
                {' '}
                <p>
                    {' '}
                    If you're order is suitable for a return based on the conditions above, you can raise a request within thirty (30) days from the date of delivery. For details on how to contact us for a return, please visit
                    <button type="button" data-dismiss="modal" id="go-to-return" onClick="goToReturn()">here</button>
                    . Please note that all returns are reviewed for eligibility. All refunds are subject to the verification and review by our Returns team.
                    {' '}
                </p>
                {' '}
                <p className="refund-labs">
                    {' '}
                    <br />
                    <strong>Refunds for Lab Services:</strong>
                </p>
                {' '}
                <p> If you've placed an order for our lab/diagnostic services, you may cancel it anytime two hours before your scheduled sample collection. If payments are directly made to the service providers for diagnostic purposes, any claims that arise must be made to the chosen service provider, as Medlife and its representatives are only facilitators. </p>
                {' '}
                <p> If you’ve made a payment to Medlife.com, refund will be processed for requests raised with three (3) days of order request placed. </p>
                {' '}
                <p className="third-party">
                    {' '}
                    <br />
                    <strong>Returns and Refunds for Third Party Affiliate Orders:</strong>
                </p>
                {' '}
                <p> Return and refund requests for orders placed by our third-party affiliates will be addressed by the respective affiliate. Please contact them for any claim that may arise. Medlife will not be liable for refunds for the payments initiated through third party affiliates. </p>
                {' '}
                <p className="refunds-timeline">
                    {' '}
                    <br />
                    <strong>Refunds timeline:</strong>
                </p>
                {' '}
                <p> Refunds for all eligible Returns are issued through the payment method used at the time of purchase, except for Cash on Delivery. </p>
                {' '}
                <p className="time-frame"> The time frame for different payment modes is given below: </p>
                {' '}
                <table className="details-table">
                    {' '}
                    <thead>
                        {' '}
                        <tr>
                            <td className="details-data">
                                <br />
                                <strong>Mode of Payment</strong>
                            </td>
                            {' '}
                            <td className="details-data">
                                <br />
                                <strong>Mode of Refund</strong>
                            </td>
                            {' '}
                            <td className="details-data">
                                <br />
                                <strong>Time frame</strong>
                            </td>
                            {' '}

                        </tr>
                    </thead>
                    {' '}
                    <tbody>
                        {' '}
                        <tr>
                            {' '}
                            <td className="details-data">Credit cards / Debit Cards</td>
                            {' '}
                            <td className="details-data">Credit cards/debit Cards</td>
                            {' '}
                            <td className="details-data">5-7 business days*</td>
                            {' '}
                        </tr>
                        {' '}
                        <tr>
                            {' '}
                            <td className="details-data">Net Banking</td>
                            {' '}
                            <td className="details-data">Net Banking Account (Credited to Bank Account)</td>
                            {' '}
                            <td className="details-data">5-7 business days*</td>
                            {' '}
                        </tr>
                        {' '}
                        <tr>
                            {' '}
                            <td className="details-data">Cash on Delivery</td>
                            {' '}
                            <td className="details-data">NEFT to Bank Account</td>
                            {' '}
                            <td className="details-data">3-5 business days*</td>
                            {' '}
                        </tr>
                        {' '}
                        <tr>
                            {' '}
                            <td className="details-data">E-Wallets</td>
                            {' '}
                            <td className="details-data">E-Wallets</td>
                            {' '}
                            <td className="details-data">3-5 business days</td>
                            {' '}
                        </tr>
                        {' '}
                    </tbody>
                    {' '}

                </table>
                {' '}
                <p>
                    {' '}
                    <br />
                    <strong> * Refund timelines depend on bank turnaround times and RBI guidelines. This may change from time to time. Business days shall mean the working days on which Medlife corporate office operates. </strong>
                </p>
                {' '}
                <p className="cash-on-delivery">
                    {' '}
                    <br />
                    <strong>For Cash on Delivery orders:</strong>
                </p>
                {' '}
                <p className="neft-transaction"> For orders placed using Cash on Delivery as the payment method, refunds can be processed to your bank account via National Electronic Funds Transfer (NEFT). You will need to update following information to enable us to process a refund to your account. </p>
                {' '}
                <ul className="bank-details">
                    {' '}
                    <li>-The Bank Account Number</li>
                    {' '}
                    <li>- IFSC Code</li>
                    {' '}
                    <li>- Account Holder's Name</li>
                    {' '}
                    <li>- Bank Branch</li>
                    {' '}
                    <li>- Bank Name</li>
                    {' '}
                </ul>
                {' '}
                <p>
                    {' '}
                    <br />
                    <strong>Important:</strong>
                    {' '}
                    Refunds cannot be processed to third-party accounts. The name on your Medlife account should match with the name of the bank account holder. If you have paid the bills using a third party account, refunds will be made to the same account. NEFT refunds will typically be initiated in three business days from our end and will be credited to your account in another two to three business days. Medlife will not be liable for any delay caused in refunds due to delay by third party affiliates (including banks), in providing information by the customer, technical issues and other reasons beyond its control.
                    {' '}
                </p>
                {' '}
                <p>
                    {' '}
                    <br />
                    <strong>General:</strong>
                </p>
                {' '}
                <p>
                    {' '}
                    1.
                    <strong>Manufacture Warranty</strong>
                    {' '}
                    (
                                            where applicable for devices/instruments) - If the returns of the products are arising from a warranty provided by manufacturer,
                                            please direct your returns to the manufacturer. Medlife takes no responsibility for the warranties provided by the manufacturer
                                        and such products does not fall within the ambit of the return policy.
                    {' '}
                </p>
                {' '}
                <p>
                    {' '}
                    2.
                    <strong>Liability</strong>
                    {' '}
                    Maximum liability for any wilful delay caused by Medlife, shall be limited to the actual sale consideration received by Medlife or the amount refundable to customer, whichever may be lesser.
                    {' '}
                </p>
            </div>
        </div>
    </Popup>
);
const TermsAndConditionsModal = ({ open }) => (
    <Popup
        modal
        closeOnDocumentClick
        open={open}
        contentStyle={modalStyles}
        lockScroll
    >
        <div className="card" style={cardStyles}>
            <div className="card-header" style={cardHeaderStyles}>
                Terms & Conditions
            </div>
            <div className="card-body" style={cardBodyStyles}>

                <p>
                    BY CONTINUING TO ACCESS AND USE THIS WEBSITE/MOBILE APPLICATION
                    YOU CONFIRM THAT YOU ACCEPT OUR TERMS AND CONDITIONS OF USE SET
                    OUT BELOW. IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS, YOU
                    MUST LEAVE THIS WEBSITE/MOBILE APPLICATION.
                </p>
                <p>
                    <br />
                    <strong>About us</strong>
                    <br />
                    <br />
                    Medlife.com website and the mobile application is owned and
                    provided by Medlife International Private Limited (hereinafter
                    “Medlife”), a company incorporated under the Companies Act, 2013.
                    If you need any information or have a complaint about this
                    website/mobile application or any of our services please contact
                    us by one of the following methods:
                </p>
                <ul>
                    <li>Phone:&nbsp; 1860 1234 1234</li>
                    {/* <li>
                        <a href="#" style={{"color":"#a70860"}} data-toggle="modal"
                            data-target=".bs-write-to-us-modal-lg"><u><br/>
                            <strong>Write to us</strong></u></a>
                    </li> */}
                </ul>
                <p>
                    <br />
                    <strong>Professional Standards</strong>
                    <br />
                    <br />
                    <br />

                    Medlife services are rendered either from its own licensed premises or from the licensed premises of its
                    {' '}
                    {' '}
                    {' '}
                    associates /
                                        network pharmacies which are undertaken under strict supervision
                                        of the qualified and registered pharmacists. All pharmacists are
                                        bound by codes of professional ethics and conduct.&nbsp;
                </p>
                <p>
                    <br />
                    <strong>Privacy.</strong>
                    <br />
                    <br />
                    Your privacy and that of any other person whose information you
                    provide to us is important to us. Please see our privacy policy
                    for details of what information we collect and how we will use
                    and protect it.
                </p>
                <p>
                    <br />
                    <strong>Registration.</strong>
                    <br />
                    <br />
                    By registering and using the services you agree that you are
                    eighteen years or above and you are not debarred by any law to
                    contract and you agree to have read and accepted the terms and conditions provided herein&nbsp;
                    <br />
                    Visitors to this website/mobile application are required to
                    register in order to use its facilities/ services. We are not
                    under any obligation to accept a request for registration and
                    reserve the right to suspend or terminate access at any time if
                    your continued use is believed to prejudice us or other users. By
                    registering to use this website /mobile application you confirm
                    that the information you provide during the registration process
                    is accurate and complete. You agree to update your registration
                    details promptly if there are any changes. All registration
                    information you provide will be kept secure and processed in
                    accordance with our privacy policy&nbsp;
                </p>
                <p>
                    <br />
                    <strong>Username and password.</strong>
                    <br />
                    <br />
                    During the registration process, you may be allocated, or invited
                    to choose, your own username and password which will be unique to
                    you. You are responsible for keeping your username and password
                    confidential and for ensuring that they are not used by any other
                    person.
                </p>
                <p>
                    <br />
                    <strong>Offers, promotions, software and downloads.</strong>
                    <br />
                    <br />
                    Medlife and other third parties with whom we have a business
                    relationship may occasionally promote their goods or services on
                    the website or mobile application or through other direct
                    marketing initiatives or may make software and other materials
                    available for you to purchase or download. Whilst we try to
                    encourage third parties to offer good quality products, and
                    services and materials at competitive prices we have no control
                    over them or other third parties, we do not endorse the products
                    or services they offer, or give you any assurance that they will
                    be suitable for your needs. It is your responsibility to satisfy
                    yourself in this regard and we have no liability in connection
                    with the same. All promotions are for limited period and subject
                    to special terms and conditions, which are in addition and not to
                    the terms and condition stated herein.
                </p>
                <p>
                    <br />
                    <strong>Ownership of materials and licence terms.</strong>
                    <br />
                    <br />
                    This website or mobile application, the materials and software on
                    it, or provided to you through it are protected by copyright,
                    trade mark and other intellectual property rights and laws
                    throughout the world and are owned by, or are licensed to Medlife
                    and/or third parties. You are permitted to display the materials
                    on this mobile application on a computer screen/mobile screen
                    and, save for restricted access documents, to download and print
                    a hard copy for your personal use or for obtaining products or
                    services from us provided you do not alter or remove any of the
                    content or any part of the website/mobile application without our
                    express permission to do so and that you do not change or delete
  any copyright, trade mark or other proprietary notices.
                    <br />
                    <br />
                    <strong>You agree not to:</strong>
                    <br />
                    <br />
                </p>
                <ul>
                    <li>
                        copy, reproduce, store (in any medium or format), distribute,
                                            transmit, modify, create derivate works from all or any part of
                                            this website/mobile application or the materials or software on
                                            it, or provided to you through it without our prior written
                                            consent (which may be given or withheld in our absolute
                                            discretion)
                    </li>
                    <li>
                        use this website/mobile application or any of the materials
                                            or software on it, or provided to you through it, for:
                    </li>
                    <li>
                        <ul>
                            <li>
                                any unlawful purpose or in contravention of applicable
                                                            law
                            </li>
                            <li>
                                commercial exploitation without our prior written consent
                            </li>
                            <li>
                                any purpose or in any manner that may give a false or
                                                            misleading impression of us, our staff or our services
                            </li>
                        </ul>
                    </li>
                    <li>
                        use, upload or transmit
                    </li>
                    <li style={{ listStyle: 'none', display: 'inline' }}>
                        <ul>
                            <li>
                                any material that is defamatory, offensive, obscene or
                                                            otherwise unlawful, or which may cause offence or distress,
                                                            or which may affect or infringe the rights of any other
                                                            person
                            </li>
                            <li>
                                any device, software, file or mechanism which may
                                                            interfere with the proper operation of this website or our
                                                            systems
                            </li>
                        </ul>
                        <ul>
                            <li>
                                establish a link to this mobile application from any
                                                            other website, intranet or extranet site without our prior
                                                            written consent
                            </li>
                            <li>
                                decompile, disassemble or reverse engineer (or attempt to
                                                            do any of them) any of the software or other materials
                                                            provided on or through this website/mobile application
                            </li>
                            <li>
                                do anything that may interfere with or disrupt this
                                                            website/mobile application or our service
                            </li>
                            <li>
                                encourage or permit others to do any of the above
                            </li>
                        </ul>
                        In the event that you do not comply with the above
                                                restrictions, any person affected by your actions may bring a
                                                claim against you and/or Medlife. We will pursue a claim
                                                against you for any losses and costs (including legal costs) we
                                                may suffer as a result of your actions.
                        <p>
                            <br />
                            <strong>Suitability of materials.</strong>
                            <br />
                            <br />
                            We do not give any assurance that the materials provided or
                            available to you on or through this website/mobile
                            application are suitable for your requirements or that they
                            will be secure, error or virus free and we will have no
                            liability in respect of those materials.
                        </p>
                        <p>
                            <br />
                            <strong>Mobile application availability.</strong>
                            <br />
                            <br />
                            This mobile application is provided free of charge and we
                            make no guarantee that it will be uninterrupted or error
                            free. We reserve the right to modify, suspend or withdraw the
                            whole or any part of the website/mobile application or any of
                            its content at any time without notice and without incurring
                            any liability.
                        </p>
                        <p>
                            <br />
                            <strong>Links from this website/mobile application.</strong>
                            <br />
                            <br />
                            We may, from time to time, provide links from this mobile
                            application to other websites that are owned and controlled
                            by third parties. These links are provided only for your
                            convenience and we have no control over and will have no
                            liability in respect of those websites.
                        </p>
                        <p>
                            <br />
                            <strong>Surveys, Contests &amp; Referrals</strong>
                            <br />
                            <br />
                            From time-to-time our site requests information from users
                            via surveys or contests. Participation in these surveys,
                            contests or referrals programs is completely voluntary and
                            the user therefore, you have a choice whether or not to
                            disclose any information requested. Information requested may
                            include contact information (such as name and delivery
                            address), and demographic information (such as postcode, age
                            level). Contact information will be used to notify the
                            winners and award prizes. Survey information will be used for
                            purposes of monitoring or improving the functionality of the
                            site. The terms and conditions for each survey and contest
                            may differ or otherwise amended and cancelled at the sole
                            discretion of Medlife.
                        </p>
                        <p>
                            <br />
                            <strong>Monitoring.</strong>
                            <br />
                            <br />
                            We may monitor activity and content on this website/mobile
                            application and may take any action we consider appropriate
                            if we suspect you may be in breach of these Terms and
                            Conditions including suspending, attaching conditions to or
                            terminating your access and/or notifying the authorities or
                            relevant regulators of your activities.
                        </p>
                        <p>
                            <br />
                            <strong>Security.</strong>
                            <br />
                            <br />
                            We employ security technology as detailed in our
                            <br />
                            <strong>&nbsp;</strong>
                            privacy policy
                            <br />
                            <strong>&nbsp;</strong>
                            however, Internet transmissions
                                                        are never completely private or secure and there is a risk,
                                                        therefore, that any message or information you send to us
                                                        from this website may be intercepted and potentially read by
                                                        others. We will have no liability in respect of any
                                                        transmissions you send to us and you do so entirely at your
                                                        own risk.
                        </p>
                        <p>
                            <br />
                            <strong>Accuracy of Information</strong>
                            <br />
                            <br />
                            We take care to ensure that all information available on our
                            website/mobile application about our business, services and
                            any products mentioned is accurate. However, these are
                            continually developing and, occasionally, the information may
                            be out of date. Medical, commercial and legal practice change
                            frequently and the content on this website/mobile
                            application, in of any newsletters and in other items
                            offering guidance have been prepared for general interest
                            only and are not a substitute for specific medical, legal or
                            other professional advice and should not be read or used as
                            such. For accurate up-to-date information you should contact
                            us and/or your doctor directly.
                        </p>
                        <p>
                            <br />
                            <strong>Disclaimer</strong>
                            <br />
                            <br />
                            MEDLIFE DOES NOT WARRANT OR REPRESENT THAT THE MATERIAL ON
                            THIS WEBSITE/MOBILE APPLICATION IS ACCURATE, COMPLETE OR
                            CURRENT OR THAT THE WEBSITE WILL BE FREE OF DEFECTS OR
                            VIRUSES. NOTHING CONTAINED IN THE PAGES OF THIS
                            WEBSITE/MOBILE APPLICATION SHOULD BE CONSTRUED AS MEDICAL,
                            COMMERCIAL, LEGAL OR OTHER PROFESSIONAL ADVICE. DETAILED
                            PROFESSIONAL ADVICE SHOULD BE OBTAINED BEFORE TAKING OR
                            REFRAINING FROM ANY ACTION BASED ON ANY OF THE INFORMATION OR
                            MATERIAL CONTAINED IN THIS WEBSITE/MOBILE APPLICATION OR ANY
                            COMMUNICATIONS PROVIDED TO YOU AS A RESULT OF YOUR
                            REGISTRATION.
                        </p>
                        <p>
                            <br />
                            <strong>Liability</strong>
                            <br />
                            <br />
                        </p>
                        <ul>
                            <li>
                                WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE (IN
                                                            CONTRACT, NEGLIGENCE OR OTHERWISE) WHERE:
                            </li>
                            <li style={{ listStyle: 'none', display: 'inline' }}>
                                <ul>
                                    <li>
                                        (A) THERE IS NO BREACH OF A LEGAL DUTY OF CARE OWED
                                                                            TO YOU BY US;
                                    </li>
                                    <li>
                                        (B) THE LOSS OR DAMAGE IS NOT A REASONABLY
                                                                            FORESEEABLE RESULT OF ANY SUCH BREACH; OR
                                    </li>
                                    <li>
                                        (C) ANY LOSS OR DAMAGE OR INCREASE IN LOSS OR DAMAGE
                                                                            RESULTS FROM A BREACH BY YOU OF THESE TERMS AND
                                                                            CONDITIONS.THE MAXIMUM LIABIITY OF MEDLIFE SHALL BE
                                                                            LIMITED TO THE COST OF THE PRODUCTS PURCHASED OR SERVIES
                                                                            AVAILED BY THE CUSTOMER, MEDLIFE OR ITS DIRECTORS SHALL
                                                                            NOT BE LIABLE FOR ANY INDRECT, CONSEQUENTIAL OR OTHER
                                                                            DAMAGES CAUSED TO THE USER
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            <br />
                            <strong>Third party rights.</strong>
                            <br />
                            <br />
                            Nothing in these Terms and Conditions is intended to nor
                            shall it confer a benefit on any third party under the
                            Contracts and a person who is not a party to these Terms and
                            Conditions has no rights to enforce them.
                        </p>
                        <p>
                            <br />
                            <strong>Waiver.</strong>
                            <br />
                            <br />
                            No delay or decision not to enforce rights under these terms
                            and conditions will constitute a waiver of the right to do so
                            and will not affect rights in relation to any subsequent
                            breach.
                        </p>
                        <p>
                            WE RESERVE THE RIGHT TO CHANGE THESE TERMS AND CONDITIONS AT
                            ANY TIME. THE NEW VERSION WILL BE POSTED ON THIS
                            WEBSITE/MOBILE APPLICATION AND WILL TAKE EFFECT IMMEDIATELY
                            UPON POSTING
                        </p>
                        <p>
                            IF YOU USE THE WEBSITE/MOBILE APPLICATION AFTER THE NEW TERMS
                            AND CONDITIONS HAVE COME INTO EFFECT, YOU WILL BE INDICATING
                            YOUR AGREEMENT TO BE BOUND BY THE NEW TERMS AND CONDITIONS
                        </p>
                        <p>
                            <br />
                            <strong>PRESCRIPTION ORDER</strong>
                        </p>
                        <p>
                            THE FOLLOWING TERMS APPLY TO YOUR USE OF THE MEDLIFE
                            PRESCRIPTION ORDERING SERVICE. THESE ARE ADDITIONAL TO AND
                            SUPPLEMENT OUR GENERAL WEBSITE/MOBILE APPLICATION TERMS AND
                            CONDITIONS WHICH ALSO APPLY.
                        </p>
                        <p>
                            IF YOU HAVE ANY QUESTIONS CONCERNING THE SERVICE, PLEASE
                            CONTACT US.
                        </p>
                        <p>
                            <br />
                            <strong>Prescriptions for persons other than yourself:</strong>
                        </p>
                        <p>
                            If the prescription is of a person other than yourself, you
                            will need to have the authority of the person whose
                            prescription it is to have it dispensed by us. By placing an
                            order to dispense another person’s prescription you confirm
                            that you have their authority to do so.
                        </p>
                        <p>
                            <br />
                            <strong>Age Restrictions:</strong>
                        </p>
                        <p>
                            We only accept Prescription Orders from customers who are 18
                            years old or over although they may order prescriptions for
                            persons who are under 18. By placing an order, you confirm
                            that you are at least 18 and legally eligible to contract.
                        </p>
                        <p>
                            <br />
                            <strong>Residency:</strong>
                        </p>
                        <p>
                            We accept Orders from and despatch orders to addresses in
                            selected locations in India.&nbsp;
                        </p>
                        <p>
                            <br />
                            <strong>Binding agreement:</strong>
                        </p>
                        <p>
                            No Order placed by you will be binding on us until we have
                            confirmed the order to you by phone, email or in writing. We
                            reserve the right to reject any order. All orders are
                            delivered subject to receipt of valid prescription and
                            availability.
                        </p>
                        <p>
                            <br />
                            <strong>Verification of prescription:</strong>
                        </p>
                        <p>
                            When we receive an original prescription from you, our
                            pharmacist will verify it against the information provided to
                            us at the time the order was placed. In the event that the
                            information does not match with your original order as per
                            the prescription, we may try to contact you using the
                            information in your registration. If we cannot contact you
                            and we are unable to dispense the item(s) on your
                            Prescription Order we reserve the right to return your
                            prescription to you.
                        </p>
                        <p>
                            <br />
                            <strong>Non-Receipt of Prescription:</strong>
                        </p>
                        <p>
                            If you place a Prescription Order and we do not receive the
                            relevant original prescription, we will not have any
                            liability to you and it will be your responsibility to
                            contact us within 7 days regarding your prescription order.
                        </p>
                        <p>
                            <br />
                            <strong>Validation Of Prescription:</strong>
                        </p>
                        <p>
                            Validation of prescription services through our partner
                            Registered Medical Practitioner shall be made available to
                            the User only upon request of the User and in the following
                            situations:
                        </p>
                        <ol>
                            <li>
                                The existing prescription has expired and the User is
                                                            unable to get an appointment with his Registered Medical
                                                            Practitioner ; or
                            </li>
                            <li>
                                The prescription is not legible and the prescribing
                                                            Registered Medical Practitioner is unavailable to validate
                                                            the prescription; or
                            </li>
                            <li>
                                The prescription is not as per the standards defined by
                                                            Medical Council of India, including, missing Doctor details,
                                                            patient details etc; or
                            </li>
                            <li>
                                If the prescription contains schedule X drugs / unusual
                                                            quantities.
                            </li>
                        </ol>
                        <p>
                            The User understands and agrees that the validation of
                            prescription services provided herein are only on request and
                            are intended for general purpose only and should not be used
                            in case of medical emergencies and serious illness issue
                            where physical consultation is recommended and at no point
                            these services are intended to replace the physical
                            consultation. The User also agrees and understands that for
                            providing the validation of prescription service Medlife will
                            have to share the prescription with its partner Registered
                            Medical Practitioner and by requesting the services the User
                            confirms its consent to share his/her prescription with
                            Medlife's partner Registered Medical Practitioner. Upon the
                            request of the User, the prescription of the User shall be
                            shared with Medlife's partner Registered Medical Practitioner
                            and post consultation or review of the prescription, if the
                            Registered Medical Practitioner deems fit, he/she may
                            validate the prescription shared with him/her of the User.
                            However, at all time the Registered Medical Practitioner has
                            the discretion to refuse consultation or validation of the
                            prescription if the Registered Medical Practitioner is of the
                            opinion that a physical consultation is required before a
                            prescription is validated.
                        </p>
                        <p>
                            User agrees that the Registered Medical Practitioner will use
                            the technology of Medlife for rendering the above services
                            and they share the information with Medlife of its affiliated
                            partners for rendering the services.
                        </p>
                        <p>
                            <br />
                            <strong>E-Consultation with the Physician:</strong>
                        </p>
                        <p>
                            By downloading, registering and accepting the terms and
                            conditions, User can book appointment with a registered
                            Medical practitioner (Physician) and discuss their
                            health-related issues, opinion on the diagnostic reports,
                            obtain e-prescription for their medical needs and avail other
                            healthcare services. E-Consultation can be provided by
                            teleconsultation, video conferencing or otherwise in other
                            media that Medlife may at its sole discretion provide the
                            options to the User based on the availability of the
                            Physicians. Please note that E-Consultation services are
                            provided at the express consent by the User and the same
                            shall not be construed as a replacement for physical
                            consultation. User is warned not to use E-Consultation
                            Services in times of emergency and any medical Services that
                            require further diagnostics and physical inspection.
                        </p>
                        <p>
                            <br />
                            <strong>E-Consultation Services:</strong>
                        </p>
                        <p>
                            User agrees that E-Consultation is not a substitute for
                            physical consultation and the Services are meant for general
                            consultation only. If after the E-consultation, the Physician
                            recommends any diagnostic tests to be undertaken or issues a
                            Prescription, the same are provided based on the information
                            and preliminary examination by the Physician, hence the same
                            shall not be treated as accurate, final and conclusive.
                            Physician reserves their rights to modify the prescription or
                            recommended diagnostic tests if the User provides any
                            additional information in future consultation. While
                            rendering E-Consultation, Physician will require to know the
                            age, sex, previous and existing health conditions, symptoms,
                            past medical history, physical examination (if directed by
                            the Physician) etc. All the information with respect to the
                            User History, consultation records, medical record and
                            prescriptions issued by the Physician will be saved with
                            Medlife and the same may be used for rendering Services as
                            may be required by the User for time to time. Services
                            offered by Medlife are intended for direct use of the User or
                            their family members, but the same cannot be used for
                            rendering Services to third parties. Medlife acts as an
                            intermediary to provide technology and applications to
                            connect the User and the Physician on one platform and does
                            not endorse, recommend or authorize the action of any
                            Physician. Any claims or liabilities arising from the use of
                            the Services between the User and the Physician shall be
                            resolved directly by User and the Physician, Medlife
                            disclaims all liabilities arising from use of the Services by
                            the User and the maximum liability of Medlife to the User
                            shall be limited to the Service Fees paid by the User to
                            Medlife.
                        </p>
                        <p>
                            <br />
                            <strong>Booking an Appointment:</strong>
                        </p>
                        <p>
                            Before booking a consultation, User shall ensure that the
                            language in which the User prefer the consultation is
                            available in the Services. User does not have the ability to
                            choose a Physician of his/her choice. Medlife will direct the
                            request for E-consultation to the Physician available in the
                            specialized subject. Medlife does not endorse of refer any
                            doctor for E-consultation, during the process User has the
                            choice to either proceed with the Consultation or withdraw
                            from the Services. Acceptance of the Terms and Condition and
                            booking an appointment by the User, entitles Medlife to
                            unconditionally store and share all the information of User
                            with the Physician and store such information and/or
                            conversation of the User with Medlife or the Physician. All
                            the information stored by Medlife will be secured and
                            maintained in compliance with the laws applicable in India.
                        </p>
                        <p>
                            <br />
                            <strong>
                                Re-scheduling, Cancellation and Refund Policy for
                                      E-Consultation:
                            </strong>
                        </p>
                        <p>
                            In any event if the User is unable to avail the
                            E-Consultation Services from the Physician or if the User
                            wishes to cancel the appointment, User shall be entitled to
                            do so by choosing the respective option in the App. If User
                            does not avail the Services or cancels the E-Consultation,
                            the Services Fees will be refunded to the User as per the
                            Refund Policy in the same manner of payment in which the User
                            has paid the Service Fees. However, if the User refuses to
                            take the call when the Physician call the User or cancels the
                            appointment one hour before the scheduled time, the User will
                            not be entitled for any refund. Any issued with regard to
                            payments made, refunds claimed or otherwise error in the
      transactions shall be reported to
                            {' '}
                            <a href="mailto:support@medlife.com">
                                support@medlife.com
                            </a>
                            {' '}
                            or call
                                                    the customer care at 1860 1234 1234.
                        </p>
                        <p>
                            <br />
                            <strong>Service Fee:</strong>
                        </p>
                        <p>
                            User shall make the necessary payments using the various
                            payment options as per the fees applicable and charged by the
                            respective Physician. Upon receipt of the payment from the
                            User, Medlife will schedule the appointment with a qualified
                            Physician and send a confirmation by app notification, SMS or
                            email.
                        </p>
                        <p>
                            <br />
                            <strong>Disclaimer:</strong>
                        </p>
                        <p>
                            The User understands and agrees Medlife is providing a
                            technology service as an intermediary and that all the
                            services are provided to the User directly by the Registered
                            Medical Practitioner with regard to any health issues,
                            consultation, validation, unsatisfactory services etc.
                            availed by the User under the above mentioned clause services
                            are between the User and the Registered Medical Practitioner
                            and that at no point in time Medlife shall be held
                            responsible for the same. Further, notwithstanding anything
                            contained herein, Medlife shall not be liable for:
                        </p>
                        <ul>
                            <li>
                                any medical negligence, prescription of any wrong
                                                            medication or treatment on part of the Registered Medical
                                                            Practitioner;
                            </li>
                            <li>
                                any type of inconvenience suffered by the User due to a
                                                            failure on the part of the Registered Medical Practitioner in
                                                            providing the agreed services or to make himself/herself
                                                            available at the appointed time, inappropriate treatment, or
                                                            similar difficulties;
                            </li>
                            <li>
                                any misconduct or inappropriate behaviour by the
                                                            Registered Medical Practitioner;
                            </li>
                            <li>
                                cancellation or rescheduling of booked appointment;
                            </li>
                            <li>
                                any medical eventualities that might occur subsequent to
                                                            using the services of the Registered Medical Practitioner.
                            </li>
                        </ul>
                        <p>
                            <br />
                            <strong>Subscription:</strong>
                        </p>
                        <p>
                            Under the subscription model, User can subscribe for
                            his/her/its medicine requirement by choosing a subscription
                            plan that best suit the User's need and the User can
                            customise the same according to the User's requirement. All
                            orders under the subscription plan shall be automatically
                            placed in accordance with the chosen subscription plan. All
                            orders under the subscription model shall be subject to all
                            the other applicable terms and conditions mentioned herein
                            along with all statutory requirements for processing an
                            order.
                        </p>
                        <p>
                            <br />
                            <strong>Clubbing of offers:</strong>
                        </p>
                        <p>
                            Any ongoing offer or promotional scheme cannot be clubbed
                            with the orders placed under the subscription plan. All
                            orders under the subscription plan shall be processed based
                            on the standard discount and promotional scheme available at
                            the time of processing any order under the subscription plan.
                            Medlife shall have the sole discretion to decide with regard
                            to the offers or scheme that shall be applicable to the
                            orders placed under the subscription plans.
                        </p>
                        <p>
                            <br />
                            <strong>Discount on Selected Products:</strong>
                        </p>
                        <p>
                            Discounts provided on the website/mobile application are on
                            selected products. Discounts are not applicable on the
                            following products and on any products so mentioned elsewhere
                            on the website/mobile application:
                        </p>
                        <p>
                            1. All Baby foods viz Ceralac, Lactogen, Nanpro etc.
                        </p>
                        <p>
                            2. All Health Supplements viz Pediasure, Proteinex,
                            Proteinules, Threptin etc
                        </p>
                        <p>
                            3. Over the counter (OTC) products – Benadryl Cough Syrup,
                            Crocin, Saridon, all Dettol, Savlon products, medicated soaps
                            etc.
                        </p>
                        <p>
                            4. All Cosmetic products
                        </p>
                        <p>
                            <br />
                            <strong>Non-Availability/Suitability of Products</strong>
                        </p>
                        <p>
                            If any of the items on your prescription are not available,
                            or are not suitable for dispensing through this service, we
                            will try to contact you using the information in your
                            registration to inform you about the same.
                        </p>
                        <p>
                            <br />
                            <strong>Delivery of prescriptions drugs:</strong>
                        </p>
                        <p>
                            Prescription items can only be dispensed once we have
                            received your original paper prescription or online
                            prescription from Medlife registered doctor. All items are
                            delivered to the address provided by you in your registration
                            or to an alternative address if directed by you. You
                            acknowledge and accept that items will need to be signed for
                            on delivery and authorise any person at your chosen delivery
                            address to sign for the items as your authorised
                            representative. In the event that the packaging is opened
                            after delivery, we will have no liability to you for lost or
                            damaged items or for what third parties find out about you as
                            a result.
                        </p>
                        <p>
                            <br />
                            <strong>No Warranties:</strong>
                            {' '}
                            Medlife makes no warranty
                                                        that: (i) the application will meet your requirements; (ii)
                                                        the application will be available on an uninterrupted,
                                                        timely, secure, or error-free basis; (iii) the any results
                                                        that may be obtained from the use of the application or any
                                                        services offered through the Website will be accurate or
                                                        reliable (iv) Medlife disclaims all warranties as to the
                                                        accuracy, completeness or adequacy of such information.
                        </p>
                        <p>
                            Medlife disclaims all liabilities arising from manufacturing
                            defects and the claims if any with regard to defect in
                            manufacturing or otherwise shall be made directly on the
                            manufacturer whose information in provided on the product.
                            Medlife may at its sole discretion assist User in providing
                            any information that may be required with regard to the
                            claim.
                        </p>
                        <p>
                            <br />
                            <strong>Order, Acceptance &amp; Delivery</strong>
                            : Placement
                                                        of an order either directly (in case of a repeat order or
                                                        continuous drug administration as prescribed) shall
                                                        constitute an agreement with us. All orders are subject to
                                                        acceptance and confirmation of delivery date and time. Mere
                                                        receipt of the prescription or an order either directly from
                                                        you or from the registered medical practitioner does not
                                                        amount to acceptance of your order nor guarantee that the
                                                        drugs will be delivered as per your requirement within a
                                                        specific time. All orders are subject to availability of
                                                        stocks. Medlife reserves the right to share your prescription
                                                        with its associated pharmacies for fulfilling your
                                                        prescription, who will dispense the drugs as per the
                                                        prescription and issue a valid sale receipt.&nbsp;
                        </p>
                        <p>
                            All orders made by the customers shall be subject to various
                            laws, including Drugs and Cosmetics Act (as may be amended
                            from time to time). We do not accept orders for certain drugs
                            and cosmetics, unless the same is prescribed by the
                            registered medical practitioner licensed by the Medical
                            Counsel of India. We do not verify the authenticity of the
                            orders placed by you, where the prescriptions are received
                            directly from a registered medical practitioner licensed by
                            the Medical Counsel of India or your family doctor, who has
                            placed the order on your behalf after your authorization. All
                            drugs and cosmetics will be deliver through a delivery agent
                            without disclosing your personal information or prescriptions
                            in compliance with the applicable laws either directly to the
                            patient or its authorised person. On delivery Medlife shall
                            be entitled to full payment for the same.
                        </p>
                        <p>
                            <br />
                            <strong>Express Delivery Services (EDS):</strong>
                            {' '}
                            In order to
                                                        provide better services, Medlife offers express delivery
                                                        services to its Users, wherein the User select to specified
                                                        time for express delivery of the order.User can also have the
                                                        order delivered at his convenience by choosing the fixed time
                                                        for delivery. User will be charged a convenience fees for
                                                        delivering the order at their convenience. User shall select
                                                        the option at the time of placing the order or request for
                                                        EDS by contacting the customer care. To avail the EDS, the
                                                        User shall agree to pay additional delivery charges which at
                                                        present is Rs. 10 (Rupees Ten Only) per order. The service
                                                        fees for EDS shall vary from city to city based on the date,
                                                        time and area of delivery. User will be intimated in advance
                                                        regarding the deliver charges and Users shall check the
                                                        availability of the services in the area where the User
                                                        intends to take the delivery of medicines before availing the
                                                        services. EDS services are available only in selected areas
                                                        for deliveries during 0800 hours to 2000 hours on all working
                                                        days in the area, subject to payment of additional delivery
                                                        charges. Any deliveries scheduled on holiday and non-working
                                                        hours shall be at additional charges at the sole discretion
                                                        of Medlife, which will be communicated to the user in
                                                        advance. Medlife may at its sole discretion accept EDS in few
                                                        areas on Sundays and national holidays. User cannot modify or
                                                        alter the delivery time and area after acceptance of the
                                                        order. Service fees paid shall not be refundable after the
                                                        order is dispatched for delivery. Medlife reserve the right
                                                        to discontinue or suspend the EDS at any time without any
                                                        notice, Medlife shall not be liable for any delay or default
                                                        in not delivering the orders within the specified time, the
                                                        sole remedy for the Users shall be limited to seek refund of
                                                        the service fees, if any paid by the User and aggregate
                                                        liability of Medlife for any damages shall be limited to Rs.
                                                        500 (Rupees Five Hundred Only).
                        </p>
                        <p>
                            <br />
                            <strong>Notification of errors:</strong>
                        </p>
                        <p>
                            You should check the items dispensed to you carefully
                            promptly upon receipt. If you believe there may have been a
                            dispensing error, you should contact us immediately and
                            should not take or use any of the items.
                        </p>
                        <p>
                            <br />
                            <strong>Delivery of fulfilled prescriptions:</strong>
                        </p>
                        <p>
                            Prescription medicines will require a doorstep signature.
                            Prescription items can only be dispensed once we have
                            received your original paper prescription or online
                            prescription from Medlife registered doctor. All items are
                            delivered to the address provided by you in your registration
                            or to an alternative address if directed by you. You
                            acknowledge and accept that items will need to be signed for
                            on delivery and authorise any person at your chosen delivery
                            address to sign for the items as your authorised
                            representative. In the event that the packaging is opened
                            after delivery, we will have no liability to you for lost or
                            damaged items or for what third parties find out about you as
                            a result.
                        </p>
                        <p>
                            <br />
                            <strong>Delivery and Packaging Costs:</strong>
                        </p>
                        <ul>
                            <li>
                                All orders with order value of INR 200 or above will be
                                                            delivered free of cost and no delivery charges shall be
                                                            applicable on such orders provided that the delivery is
                                                            within Medlife serviceable areas.
                            </li>
                            <li>
                                All orders with order value less than INR 200 will
                                                            attract delivery charges of INR 25.
                            </li>
                            <li>
                                Value of any order that is equal to or greater than INR
                                                            200 at the time of placing the order that is later modified,
                                                            will not attract any delivery charges.
                            </li>
                            <li>
                                Any delivery charges paid by the customer for any
                                                            modified/cancelled/un-delivery order shall be eligible for
                                                            full refund of the delivery changes provided the customer has
                                                            made advance payment for the said order.
                            </li>
                            <li>
                                Delivery charges shall be refunded in full if any other
                                                            that us delivered and becomes eligible for refund, subject to
                                                            terms and conditions.
                            </li>
                            <li>
                                Any delivery charges paid by the customer shall not be
                                                            eligible for refund of the order is modified or replaced by
                                                            the customer due to change in prescription or
                                                            otherwise.&nbsp;
                            </li>
                        </ul>
                        <p>
                            <br />
                            <strong>Cancellation, Return and Refund:</strong>
                        </p>
                        <p>
                            We understand that there will be genuine reasons when you
                            decide to cancel an order. You may cancel your order before
                            delivery by calling customer care number 1860 1234 1234.
                        </p>
                        <ul>
                            <li>
                                During order delivery, Medlife’s delivery team requests
                                                            every customer to verify the contents and provide an
                                                            acknowledgement confirming the correctness and completeness
                                                            of the order.
                            </li>
                            <li>
                                In case of any discrepancies including tampered order box
                                                            or contents, please alert the delivery team or call us on our
                                                            customer care number 1860 1234 1234 for resolution.
                            </li>
                            <li>
                                Once the order is verified and acknowledged by the
                                                            customer, the order in full or part cannot be returned unless
                                                            there is a defect in the delivered order which is highly
                                                            unlikely.
                            </li>
                            <li>
                                Refunds will be processed only for defective and
                                                            incorrect deliveries.
                            </li>
                            <li>
                                All refunds will be made only through NEFT to the account
                                                            which is provided by the customer. Refunds for Credit Card
                                                            payments will take 21 days to get processed.
                            </li>
                            <li>
                                All returns and refunds will happen in proportion to the
                                                            products refunded. In case there are part items qualifying
                                                            for returns and refunds, it is always processed for the full
                                                            order and invoice. We will not process partial delivery or
                                                            returns. &nbsp;&nbsp;
                            </li>
                        </ul>
                        <p>
                            <br />
                            <strong>Acceptance of the Goods:</strong>
                            {' '}
                            We request you to
                                                        verify the complete details and the documents provided to you
                                                        at before acceptance of the Goods. Any complaints with regard
                                                        to shortage of Goods, defects or otherwise will not be
                                                        entertained by Medlife once the same are accepted at the time
                                                        of delivery.&nbsp;
                        </p>
                        <p>
                            <br />
                            <strong>WARNING:</strong>
                        </p>
                        <p>
                            YOU MUST CHECK ALL ITEMS DISPENSED TO YOU AND SHOULD NOT TAKE
                            ANY MEDICATION THAT APPEARS TO HAVE BEEN TAMPERED WITH OR
                            WHICH MAY HAVE BEEN DISPENSED IN ERROR. FAILURE TO ABIDE BY
                            THIS WARNING COULD SERIOUSLY DAMAGE YOUR HEALTH AND MEDLIFE
                            SHALL NOT BE HELD LIABLE.
                        </p>
                        <p>
                            <br />
                            <strong>Information Technology Act</strong>
                            :&nbsp; Certain
                                                        laws in India prohibit and impose restriction on use of the
                                                        Website and you are advised to make familiar with those laws
                                                        and not to post any information or messages that are, or that
                                                        may be construed, as being malicious , defamatory,
                                                        inappropriate, slanderous, pornographic or otherwise sexually
                                                        oriented or that makes attacks on or the otherwise opines or
                                                        comments on any individuals or groups of individuals,
                                                        educational institutions or any other entities whatsoever
                                                        (whether companies, firms, or any other institutions). You
                                                        also agree not to post any information to which you do not
                                                        have copyrights or other appropriate permissions to post in
                                                        public forum. Your failure to comply with these terms may
                                                        result in removal of your postings without prior notice to
                                                        User. The IP address of all posts is recorded to aid in
                                                        enforcing these conditions.
                        </p>
                        <p>
                            <br />
                            <strong>Other Laws</strong>
                            : Certain laws require to maintain
                                                        data with respect to the services, Goods and other personal
                                                        information in a prescribed format and Medlife will use all
                                                        the information to the extent required in compliance with the
                                                        applicable laws and as may be directed or amended from time
                                                        to time.
                        </p>
                        <p>
                            <br />
                            <strong>Force Majeure</strong>
                            : Medlife shall not be liable
                                                        and to the extent, that the performance or delay in
                                                        performance of any of its obligations are prevented,
                                                        restricted, delayed or interfered with due to circumstances
                                                        beyond the reasonable control and without the fault or
                                                        negligence of such Party, including but not limited to change
                                                        in legislation, fire, flood, explosion, epidemic, accident,
                                                        act of God, war, riot, strike, lockout, traffic or other
                                                        concerted act of workmen and/or act of Government. Medlife
                                                        may at its sole discretion withdraw the services or Goods if
                                                        a Force Majeure event occurs.
                        </p>
                        <p>
                            <br />
                            <strong>Governing Law and Jurisdiction:</strong>
                            {' '}
                            The Terms of
                                                        Use are governed by and constructed in accordance with the
                                                        laws of India, without reference to conflict of laws
                                                        principles and you irrevocably and unconditionally submit to
                                                        the exclusive jurisdiction of the courts located in Patna,
                                                        India.
                        </p>
                        <p>
                            <br />
                            <strong>Acceptance of Terms and Conditions:</strong>
                            {' '}
                            By
                                                        Clicking on the "I have read and accept the terms and
                                                        conditions" box at the bottom of the Registration Form, You
                                                        indicate your acceptance of the above Terms and Conditions
                                                        and you agree to be bound by these terms and conditions set
                                                        forth below including any additional guidelines and future
                                                        modifications. If at any time you do not agree to these terms
                                                        and conditions or you wish terminate your registration as an
                                                        Affiliate, you may not access or use the information and
                                                        notify your intention to block your registration.
                        </p>
                        <p>
                            <br />
                            <strong>Share and Earn:</strong>
                            {' '}
                            The referred friend should
                                                        be a new customer and not an existing or returning customer
                                                        of Medlife. The referred friend must place a valid order
                                                        using the referral code to avail referral discount on their
                                                        1st order and the order should be successfully delivered and
                                                        not be cancelled or returned. Referral reward coupon shall be
                                                        credited to the User's account after successful delivery of
                                                        the referred friend's order. Referral reward discount up to a
                                                        maximum of 5% of the order value will be automatically
                                                        redeemed on the User's next orders with Medlife within such
                                                        time as Medlife may deem fit. Notwithstanding anything
                                                        contained herein, these terms are in addition to and not in
                                                        derogation to any other terms as stipulated by Medlife from
                                                        time to time. Medlife reserves the right in its sole
                                                        discretion at any time, without any prior notice to suspend /
                                                        cancel this program or amend these terms.
                        </p>
                        <p>
                            <br />
                            <strong>E-cash:</strong>
                            {' '}
                            To avail the e-cash benefit the User
                                                        must place a valid order using the promotion code with e-cash
                                                        offer to avail the e-cash and the order should be
                                                        successfully delivered and not be cancelled or returned.
                                                        E-cash shall be credited to the User's account after five (5)
                                                        working days from the date of successful delivery of the
                                                        order. E-cash up to a maximum of 5% of the order value will
                                                        be automatically redeemed on the User's next orders with
                                                        Medlife. E-cash so received shall be valid for a period of
                                                        forty-five (45) days from the date it is credited to the
                                                        User's account. Notwithstanding anything contained herein,
                                                        these terms are in addition to and not in derogation to any
                                                        other terms as stipulated by Medlife from time to time.
                                                        Medlife reserves the right in its sole discretion at any
                                                        time, without any prior notice to suspend / cancel this
                                                        program or amend these terms.
                        </p>
                    </li>
                </ul>

            </div>
        </div>
    </Popup>
);
const PrivacyPolicyModal = ({ open }) => (
    <Popup
        modal
        closeOnDocumentClick
        open={open}
        contentStyle={modalStyles}
        lockScroll
    >
        <div className="card" style={cardStyles}>
            <div className="card-header" style={cardHeaderStyles}>
                Privacy Policy
            </div>
            <div className="card-body" style={cardBodyStyles}>
                <p>
                    In this policy, the words "we", "our", and "us" refer to Medlife
                    International Private Limited (“Medlife”) and the privacy
                    mechanism outlined identify personally identifiable or personal
                    information that may be collected, how such information is used,
                    and the choices you have regarding our use of this information.
                </p>
                <br />
                <p>
                    In addition to the terms stated in Term of Use Agreement provided
                    under this Website, we are committed to protecting your privacy.
                    Authorized representatives of Medlife on a need to know basis
                    only use any information received from you or a registered
                    medical practitioner authorised by you. We constantly review our
                    systems and data to secure your personal and health information.
                    We will investigate any complaint or such actions with a view to
                    prosecuting and/or taking civil proceedings to recover damages
                    against those responsible. Any User who does not agree with any
                    provisions of the same is required to leave the Website
                    immediately. Should you disagree with policy and still continue
                    to access the Website and provide your personal information,
                    Medlife disclaim all the liabilities arising therefrom.
                </p>
                <br />
                <p>
                    <strong>Applicability :</strong>
                    {' '}
                    This privacy policy apply to all
                              Users who access the Website and are therefore required to read
                              and understand the privacy policy before submitting any Personal
                              Information. If you have inadvertently submitted any such
                              information to Medlife prior to reading the privacy statements
                              set out herein, and you do not agree with the manner in which
                              such information is collected, stored or used, then you may
                              access, modify and delete all information stored about You by
                    <a href="#" style={{ color: '#a70860' }} data-toggle="modal" data-target=".bs-write-to-us-modal-lg">
                        <u>
                            <strong>
                                writing to
                                                us
                            </strong>
                        </u>
                    </a>
                    . Medlife is keeping personal data of the
                              User, and every User is also entitled to require Medlife to
                              delete and destroy all such information (but not other Users).
                </p>
                <br />
                <p>
                    Some User are allowed to access the Website, place orders and
                    avail Services on the valid prescription available with Medlife
                    as a guest and without creating an account on the Website or
                    providing any Personal Information, Medlife takes no
                    responsibility or validate the information provided by the guest,
                    except as otherwise required under any law, regulation or an
                    order of competent authority. In order to have access to all the
                    features and benefits on our Website, a User is required to first
                    create an account on our Website. To create an account a User is
                    required to provide the Personal Information as may be required
                    under the
                    {' '}
                    <strong>Application / Registration Form</strong>
                    . Other
                              information requested on the registration page, including the
                              ability to receive promotional offers from Medlife, is optional.
                              Medlife may, in future, include other optional requests for
                              information from the User to help Medlife to customize the
                              Website to deliver personalized information to the User. Without
                              User's agreement, Medlife will not share, rent or sell any
                              personal information with third parties in any way other than
                              what is disclosed in this privacy policy. Medlife may keep
                              records of telephone calls received and made for making
                              enquiries, orders, feedback or other purposes for the purpose of
                              rendering services effectively and efficiently.
                </p>
                <br />
                <p>
                    Personal Information shall mean the information which identifies
                    the User, name, identification number email address, age, phone
                    number, password, health record (including the name of the
                    doctor) or any financial account information provided to Medlife
                    at the time of registration or any time thereafter.
                </p>
                <br />
                <p>
                    This privacy policy applies to Website and services that are
                    owned and operated by Medlife. Medlife does not exercise control
                    over the sites displayed as search results or links from within
                    its Services . Third party websites may place their own cookies
                    or other files on the Users' computer, collect data or solicit
                    personal information from the Users, for which Medlife is not
                    responsible or liable. Accordingly, Medlife does not make any
                    representations concerning the privacy practices or policies of
                    such third parties or terms of use of such websites, nor does
                    Medlife guarantee the accuracy, integrity, or quality of the
                    information, data, text, software, sound, photographs, graphics,
                    videos, messages or other materials available on such websites.
                    The inclusion or exclusion does not imply any endorsement by
                    Medlife of the website, the website's provider, or the
                    information on the website. Medlife encourages the User to read
                    the privacy policies of that Website.
                </p>
                <br />
                <p>
                    Medlife has taken all reasonable precautions to treat Personal
                    Information as confidential with industry standards that it has
                    implemented to protect from unauthorized access, improper use or
                    disclosure, modification and unlawful destruction or accidental
                    loss of the Personal Information.
                </p>
                <br />
                <p>
                    Use of your personal information: While availing our services you
                    or your authorised representative will provide
                    {' '}
                    <a href="https://www.google.co.in/intl/en/policies/privacy/example/access-to-your-personal-information.html">
                        access to Medlife with your personal information
                    </a>
                    {' '}
                    . If that
                              information is wrong, you can request us to modify or delete the
                              same. Medlife will take all reasonable measures to ensure that
                              the information is modified and used for rendering services to
                              you and as otherwise in compliance with laws. When editing or
                              deleting personal information, we may ask you to verify your
                              identity before we can act on your request. Medlife may at its
                              discretion reject any request that is contrary to law, requires
                              un-reasonable technical efforts. We do not assure that we will
                              delete all residual copies and archives made by any third party
                              without our knowledge and consent.
                </p>
                <br />
                <p>
                    <strong>Exceptions</strong>
                    {' '}
                    . Your Personal Information may be
                              shared with third parties who have a need or authority to receive
                              such information, if we have a good-faith belief that access,
                              use, preservation or disclosure of the information is reasonably
                              necessary to comply with (i) in response to any authority having
                              to receive such information under law (ii) any order of court
                              (iii) detect, prevent, or otherwise address fraud, security or
                              technical issues (iv) protect against harm to the rights,
                              property or safety of Medlife, our users or the public as
                              required or permitted by law.
                </p>
                <br />
                <p>
                    You agree to provide us your Personal Information if you wish to
                    avail any services as provided in the Website and the same is
                    used to identify yourself. Medlife Representative may request you
                    either by email, phone or letter / courier certain Personal
                    Information (such as full legal name, address, name of your
                    doctor, Goods that are consumed etc.,) and such other information
                    that may be required from time to time. Should Medlife use the
                    Personal Information and make any analysis or understand the
                    trends of your Personal Information and lifestyle through a
                    certified officer, you authorise us to share the same with your
                    doctor for a limited purpose of his understanding and validation,
                    however Medlife will exclusively own such data and records,
                    unless you opt to buy the same for a consideration payable to
                    Medlife.
                </p>
                <br />
                <p>
                    Medlife does not make any unsolicited calls or otherwise market
                    any products or services, except for in relation to the purpose
                    for which such information has been provided or taking any
                    feedback or addressing the complaints. User shall not disclose
                    their Personal Information to any third Parties not authorised by
                    Medlife and verify the identity of such personal who seek
                    information. Medlife will communicate with the Users through
                    email and notices posted on the Website or through other means
                    available through the service, including text and other forms of
                    messaging. The Users can change their e-mail and contact
                    preferences at any time by logging into their account or by
                    calling the customer support or such or mode available from time
                    to time.
                </p>
                <br />
                <p>
                    Medlife may, if you so choose, send direct mailers to you at the
                    address given by you. You have the option to 'opt-out' of this
                    direct mailer by way of links provided at the bottom of each
                    mailer. We respect your privacy and to the extent that you choose
                    not to receive such mailers, we will take all steps to remove you
                    from the list. Should you evidence any violation of our terms and
                    policies, please
                    {' '}
                    <a href="#" style={{ color: '#a70860' }} data-toggle="modal" data-target=".bs-write-to-us-modal-lg">
                        <u>
                            <strong>
                                write
                                                to us
                            </strong>
                        </u>
                    </a>
                    {' '}
                    or call us on our call center and report
                              such incident.
                </p>
                <br />
                <p>
                    All the information provided to Medlife either by a User directly
                    or through our authorised representative, including sensitive
                    personal information, is true, accurate and voluntary. User has
                    the right to withdraw information at any time, in accordance with
                    the terms of this privacy policy and the Terms of Use by
                    {' '}
                    <a href="#" style={{ color: '#a70860' }} data-toggle="modal" data-target=".bs-write-to-us-modal-lg">
                        <u>
                            <strong>
                                writing to
                                                us
                            </strong>
                        </u>
                    </a>
                    {' '}
                    .
                </p>
                <br />
                <p>
                    Medlife may have to use Personal Information without reference to
                    any persona or identity for research, statistical analysis and
                    business intelligence purpose and may sell or otherwise transfer
                    such research, statistical or intelligence data in an aggregated
                    or non-personally identifiable form to third parties and
                    affiliates.
                </p>
                <br />
                <p>
                    All Medlife employees and data processors, who have access to,
                    and are associated with the processing of sensitive personal data
                    or information, are obliged to respect the confidentiality of
                    every User's sensitive personal data and information.
                </p>
                <br />
                <p>
                    Medlife may also disclose or transfer User's personal and other
                    information which a User provides, to another third party as part
                    of reorganization or a sale of the assets of a Medlife
                    corporation division or company. Any third party to which Medlife
                    transfers or sells its assets will have the right to continue to
                    use the personal and other information that a User provide to us.
                </p>
                <br />
                <p>
                    To the extent necessary to provide Users with the services on the
                    Website, Medlife may provide their Personal Information to third
                    party contractors who work on behalf of or with Medlife to
                    provide Users with such services , to help Medlife communicate
                    with Users or to maintain the Website. Generally these
                    contractors do not have any independent right to share this
                    information, however certain contractors who provide services on
                    the Website, including the providers of online communications
                    services, will have rights to use and disclose the personal
                    information collected in connection with the provision of these
                    services in accordance with their own privacy policies.
                </p>
                <br />
                <p>
                    Medlife may update or amend this privacy policy at any time, with
                    or without advance notice. In the event there are significant
                    changes in the way Medlife treats User's personally identifiable
                    information, Medlife will display a notice on the Website or send
                    Users an email. Medlife's current privacy policy applies to all
                    information that Medlife has about Users and their account.
                </p>
                <br />
                <p>
                    Notwithstanding the above, Medlife shall not be required to
                    notify the Users of any changes made to the privacy policy.
                    Should you have any concern or reject the changes in the privacy
                    policy you can refuse to accept the amendments and opt for
                    withdrawing your Personal Information by
                    {' '}
                    <a href="#" style={{ color: '#a70860' }} data-toggle="modal" data-target=".bs-write-to-us-modal-lg">
                        <u>
                            <strong>
                                writing to
                                                us
                            </strong>
                        </u>
                    </a>
                </p>
                <br />
                <p>
                    If you have any compliant or grievances with respect to Website
                    or this Privacy Policy please
                    {' '}
                    <a href="#" style={{ color: '#a70860' }} data-toggle="modal" data-target=".bs-write-to-us-modal-lg">
                        <u>
                            <strong>
                                write to
                                                us
                            </strong>
                        </u>
                    </a>
                </p>
                <br />
            </div>
        </div>
    </Popup>
);
