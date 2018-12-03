/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-unescaped-entities: 0 */
/* eslint max-len: 0 */
/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Button from './common/Button';

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
        {close => (
            <div className="card" style={cardStyles}>
                <div className="card-header position-relative" style={cardHeaderStyles}>
                    Return Policy

                    <Button
                        onClick={close}
                        render={() => (
                            <button
                                type="button"
                                className="btn btn-link mobile-menu-close a-unstyled p-0"
                                onClick={close}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                    />
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
                        {' '}
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            className="btn btn-link p-0"
                        >
                            <u>
                                <strong>
                                    here
                                </strong>
                            </u>
                        </a>
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
                    <table className="table table-bordered details-table">
                        <thead>
                            <tr>
                                <td className="details-data">
                                    <strong>Mode of Payment</strong>
                                </td>
                                <td className="details-data">
                                    <strong>Mode of Refund</strong>
                                </td>
                                <td className="details-data">
                                    <strong>Time frame</strong>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="details-data">Credit cards / Debit Cards</td>
                                <td className="details-data">Credit cards/debit Cards</td>
                                <td className="details-data">5-7 business days*</td>
                            </tr>
                            <tr>
                                <td className="details-data">Net Banking</td>
                                <td className="details-data">Net Banking Account (Credited to Bank Account)</td>
                                <td className="details-data">5-7 business days*</td>
                            </tr>
                            <tr>
                                <td className="details-data">Cash on Delivery</td>
                                <td className="details-data">NEFT to Bank Account</td>
                                <td className="details-data">3-5 business days*</td>
                            </tr>
                            <tr>
                                <td className="details-data">E-Wallets</td>
                                <td className="details-data">E-Wallets</td>
                                <td className="details-data">3-5 business days</td>
                            </tr>
                        </tbody>
                    </table>
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
        )}
    </Popup>
);

export default ReturnPolicyModal;
