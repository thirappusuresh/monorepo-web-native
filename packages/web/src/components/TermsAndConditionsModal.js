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

function createMarkup() {
    return {
        __html: `
        <p>BY CONTINUING TO ACCESS AND USE THIS WEBSITE/MOBILE APPLICATION YOU CONFIRM THAT YOU ACCEPT OUR TERMS AND CONDITIONS OF USE SET OUT BELOW. IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS, YOU MUST LEAVE THIS WEBSITE/MOBILE APPLICATION.</p>

        <p>
            <strong>About us</strong><br/>
            Medlife.com website and the mobile application is owned and provided by Medlife International Private Limited (hereinafter &ldquo;Medlife&rdquo;), a company incorporated under the Companies Act, 2013. If you need any information or have a complaint about this website/mobile application or any of our services please contact us by one of the following methods:
            <ul>
                <li>Phone:&nbsp; 1860 1234 1234</li>
                <li><a href="https://m.medlife.com/#/root/Feedback" style="color:#a70860;" data-toggle="modal" data-target=".bs-write-to-us-modal-lg"><u><b>Write to us</b></u></a></li>
            </ul>
        </p>
        <p>
            <strong>Professional Standards</strong><br/>
            Medlife services are rendered either from its own licensed premises or from the licensed premises of its associates / network pharmacies which are undertaken under strict supervision of the qualified and registered pharmacists. All pharmacists are bound by codes of professional ethics and conduct.&nbsp;
        </p>
        <p>
            <strong>Privacy.</strong><br/>
            Your privacy and that of any other person whose information you provide to us is important to us. Please see our privacy policy for details of what information we collect and how we will use and protect it.
        </p>
        <p>
            <strong>Registration.</strong><br/>
            By registering and using the services you agree that you are eighteen years or above and you are not debarred by any law to contract and you agree to have read and accepted the terms and conditions provided herein&nbsp;
            <br/>
            Visitors to this website/mobile application are required to register in order to use its facilities/ services. We are not under any obligation to accept a request for registration and reserve the right to suspend or terminate access at any time if your continued use is believed to prejudice us or other users. By registering to use this website /mobile application you confirm that the information you provide during the registration process is accurate and complete. You agree to update your registration details promptly if there are any changes. All registration information you provide will be kept secure and processed in accordance with our privacy policy&nbsp;
        </p>
        <p>
            <strong>Username and password.</strong></br>
            During the registration process, you may be allocated, or invited to choose, your own username and password which will be unique to you. You are responsible for keeping your username and password confidential and for ensuring that they are not used by any other person.
        </p>
        <p>
            <strong>Offers, promotions, software and downloads.</strong></br>
            Medlife and other third parties with whom we have a business relationship may occasionally promote their goods or services on the website or mobile application or through other direct marketing initiatives or may make software and other materials available for you to purchase or download. Whilst we try to encourage third parties to offer good quality products, and services and materials at competitive prices we have no control over them or other third parties, we do not endorse the products or services they offer, or give you any assurance that they will be suitable for your needs. It is your responsibility to satisfy yourself in this regard and we have no liability in connection with the same. All promotions are for limited period and subject to special terms and conditions, which are in addition and not to the terms and condition stated herein.
        </p>
        <p>
            <strong>Ownership of materials and licence terms.</strong></br>
            This website or mobile application, the materials and software on it, or provided to you through it are protected by copyright, trade mark and other intellectual property rights and laws throughout the world and are owned by, or are licensed to Medlife and/or third parties. You are permitted to display the materials on this mobile application on a computer screen/mobile screen and, save for restricted access documents, to download and print a hard copy for your personal use or for obtaining products or services from us provided you do not alter or remove any of the content or any part of the website/mobile application without our express permission to do so and that you do not change or delete any copyright, trade mark or other proprietary notices.
            </br>
            <strong>You agree not to:</strong>
            </br>
            <ul>
                <li>copy, reproduce, store (in any medium or format), distribute, transmit, modify, create derivate works from all or any part of this website/mobile application or the materials or software on it, or provided to you through it without our prior written consent (which may be given or withheld in our absolute discretion)</li>
                <li>use this website/mobile application or any of the materials or software on it, or provided to you through it, for:
                <ul>
                    <li>any unlawful purpose or in contravention of applicable law</li>
                    <li>commercial exploitation without our prior written consent</li>
                    <li>any purpose or in any manner that may give a false or misleading impression of us, our staff or our services</li>
                </ul>
                </li>
                <li>use, upload or transmit</li>
            </ul>
            <ul>
                <li>
                <ul>
                    <li>any material that is defamatory, offensive, obscene or otherwise unlawful, or which may cause offence or distress, or which may affect or infringe the rights of any other person</li>
                    <li>any device, software, file or mechanism which may interfere with the proper operation of this website or our systems</li>
                </ul>
                </li>
            </ul>
            <ul>
                <li>establish a link to this mobile application from any other website, intranet or extranet site without our prior written consent</li>
                <li>decompile, disassemble or reverse engineer (or attempt to do any of them) any of the software or other materials provided on or through this website/mobile application</li>
                <li>do anything that may interfere with or disrupt this website/mobile application or our service</li>
                <li>encourage or permit others to do any of the above</li>
            </ul>
            In the event that you do not comply with the above restrictions, any person affected by your actions may bring a claim against you and/or Medlife. We will pursue a claim against you for any losses and costs (including legal costs) we may suffer as a result of your actions.
        </p>
        <p>
            <strong>Suitability of materials.</strong></br>
            We do not give any assurance that the materials provided or available to you on or through this website/mobile application are suitable for your requirements or that they will be secure, error or virus free and we will have no liability in respect of those materials.
        </p>
        <p>
            <strong>Mobile application availability.</strong></br>
            This mobile application is provided free of charge and we make no guarantee that it will be uninterrupted or error free. We reserve the right to modify, suspend or withdraw the whole or any part of the website/mobile application or any of its content at any time without notice and without incurring any liability.
        </p>
        <p>
            <strong>Links from this website/mobile application.</strong></br>
            We may, from time to time, provide links from this mobile application to other websites that are owned and controlled by third parties. These links are provided only for your convenience and we have no control over and will have no liability in respect of those websites.
        </p>
        <p>
            <strong>Surveys, Contests &amp; Referrals</strong></br>
            From time-to-time our site requests information from users via surveys or contests. Participation in these surveys, contests or referrals programs is completely voluntary and the user therefore, you have a choice whether or not to disclose any information requested. Information requested may include contact information (such as name and delivery address), and demographic information (such as postcode, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the functionality of the site. The terms and conditions for each survey and contest may differ or otherwise amended and cancelled at the sole discretion of Medlife.
        </p>
        <p>
            <strong>Monitoring.</strong></br>
            We may monitor activity and content on this website/mobile application and may take any action we consider appropriate if we suspect you may be in breach of these Terms and Conditions including suspending, attaching conditions to or terminating your access and/or notifying the authorities or relevant regulators of your activities.
        </p>
        <p>
            <strong>Security.</strong></br>
            We employ security technology as detailed in our<strong>&nbsp;</strong>privacy policy<strong>&nbsp;</strong>however, Internet transmissions are never completely private or secure and there is a risk, therefore, that any message or information you send to us from this website may be intercepted and potentially read by others. We will have no liability in respect of any transmissions you send to us and you do so entirely at your own risk.
        </p>
        <p>
            <strong>Accuracy of Information</strong></br>
            We take care to ensure that all information available on our website/mobile application about our business, services and any products mentioned is accurate. However, these are continually developing and, occasionally, the information may be out of date. Medical, commercial and legal practice change frequently and the content on this website/mobile application, in of any newsletters and in other items offering guidance have been prepared for general interest only and are not a substitute for specific medical, legal or other professional advice and should not be read or used as such. For accurate up-to-date information you should contact us and/or your doctor directly.
        </p>
        <p>
            <strong>Disclaimer</strong></br>
            MEDLIFE DOES NOT WARRANT OR REPRESENT THAT THE MATERIAL ON THIS WEBSITE/MOBILE APPLICATION IS ACCURATE, COMPLETE OR CURRENT OR THAT THE WEBSITE WILL BE FREE OF DEFECTS OR VIRUSES.
            NOTHING CONTAINED IN THE PAGES OF THIS WEBSITE/MOBILE APPLICATION SHOULD BE CONSTRUED AS MEDICAL, COMMERCIAL, LEGAL OR OTHER PROFESSIONAL ADVICE. DETAILED PROFESSIONAL ADVICE SHOULD BE OBTAINED BEFORE TAKING OR REFRAINING FROM ANY ACTION BASED ON ANY OF THE INFORMATION OR MATERIAL CONTAINED IN THIS WEBSITE/MOBILE APPLICATION OR ANY COMMUNICATIONS PROVIDED TO YOU AS A RESULT OF YOUR REGISTRATION.
        </p>
        <p>
            <strong>Liability</strong></br>
            <ul>
                <li>WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE (IN CONTRACT, NEGLIGENCE OR OTHERWISE) WHERE:</li>
                <ul>
                        <li>(A) THERE IS NO BREACH OF A LEGAL DUTY OF CARE OWED TO YOU BY US;</li>
                        <li>(B) THE LOSS OR DAMAGE IS NOT A REASONABLY FORESEEABLE RESULT OF ANY SUCH BREACH; OR</li>
                        <li>(C) ANY LOSS OR DAMAGE OR INCREASE IN LOSS OR DAMAGE RESULTS FROM A BREACH BY YOU OF THESE TERMS AND CONDITIONS.THE MAXIMUM LIABIITY OF MEDLIFE SHALL BE LIMITED TO THE COST OF THE PRODUCTS PURCHASED OR SERVIES AVAILED BY THE CUSTOMER, MEDLIFE OR ITS DIRECTORS SHALL NOT BE LIABLE FOR ANY INDRECT, CONSEQUENTIAL OR OTHER DAMAGES CAUSED TO THE USER</li>
                </ul>
            </ul>
        </p>
        <p>
            <strong>Third party rights.</strong></br>
            Nothing in these Terms and Conditions is intended to nor shall it confer a benefit on any third party under the Contracts and a person who is not a party to these Terms and Conditions has no rights to enforce them.
        </p>
        <p>
            <strong>Waiver.</strong></br>
            No delay or decision not to enforce rights under these terms and conditions will constitute a waiver of the right to do so and will not affect rights in relation to any subsequent breach.
        </p>
        <p>WE RESERVE THE RIGHT TO CHANGE THESE TERMS AND CONDITIONS AT ANY TIME. THE NEW VERSION WILL BE POSTED ON THIS WEBSITE/MOBILE APPLICATION AND WILL TAKE EFFECT IMMEDIATELY UPON POSTING</p>
        <p>IF YOU USE THE WEBSITE/MOBILE APPLICATION AFTER THE NEW TERMS AND CONDITIONS HAVE COME INTO EFFECT, YOU WILL BE INDICATING YOUR AGREEMENT TO BE BOUND BY THE NEW TERMS AND CONDITIONS</p>


        <p><strong>PRESCRIPTION ORDER</strong></p>



        <p>THE FOLLOWING TERMS APPLY TO YOUR USE OF THE MEDLIFE PRESCRIPTION ORDERING SERVICE. THESE ARE ADDITIONAL TO AND SUPPLEMENT OUR GENERAL WEBSITE/MOBILE APPLICATION TERMS AND CONDITIONS WHICH ALSO APPLY.</p>

        <p>IF YOU HAVE ANY QUESTIONS CONCERNING THE SERVICE, PLEASE CONTACT US.</p>




        <p><strong>Prescriptions for persons other than yourself:</strong></p>

        <p>If the prescription is of a person other than yourself, you will need to have the authority of the person whose prescription it is to have it dispensed by us. By placing an order to dispense another person&rsquo;s prescription you confirm that you have their authority to do so.</p>



        <p><strong>Age Restrictions:</strong></p>

        <p>We only accept Prescription Orders from customers who are 18 years old or over although they may order prescriptions for persons who are under 18. By placing an order, you confirm that you are at least 18 and legally eligible to contract.</p>



        <p><strong>Residency:</strong></p>

        <p>We accept Orders from and despatch orders to addresses in selected locations in India.&nbsp;</p>



        <p><strong>Binding agreement:</strong></p>

        <p>No Order placed by you will be binding on us until we have confirmed the order to you by phone, email or in writing. We reserve the right to reject any order. All orders are delivered subject to receipt of valid prescription and availability.</p>



        <p><strong>Verification of prescription:</strong></p>

        <p>When we receive an original prescription from you, our pharmacist will verify it against the information provided to us at the time the order was placed. In the event that the information does not match with your original order as per the prescription, we may try to contact you using the information in your registration. If we cannot contact you and we are unable to dispense the item(s) on your Prescription Order we reserve the right to return your prescription to you.</p>


        <p><strong>Non-Receipt of Prescription:</strong></p>

        <p>If you place a Prescription Order and we do not receive the relevant original prescription, we will not have any liability to you and it will be your responsibility to contact us within 7 days regarding your prescription order.</p>


        <p><strong>Validation Of Prescription:</strong></p>

        <p>Validation of prescription services through our partner Registered Medical Practitioner shall be made available to the User only upon request of the User and in the following situations:</p>

        <ol>
                <li>The existing prescription has expired and the User is unable to get an appointment with his Registered Medical Practitioner ; or</li>
                <li>The prescription is not legible and the prescribing Registered Medical Practitioner is unavailable to validate the prescription; or</li>
                <li>The prescription is not as per the standards defined by Medical Council of India, including, missing Doctor details, patient details etc; or</li>
                <li>If the prescription contains schedule X drugs / unusual quantities.</li>
        </ol>

        <p>The User understands and agrees that the validation of prescription services provided herein are only on request and are intended for general purpose only and should not be used in case of medical emergencies and serious illness issue where physical consultation is recommended and at no point these services are intended to replace the physical consultation. The User also agrees and understands that for providing the validation of prescription service Medlife will have to share the prescription with its partner Registered Medical Practitioner and by requesting the services the User confirms its consent to share his/her prescription with Medlife's partner Registered Medical Practitioner. Upon the request of the User, the prescription of the User shall be shared with Medlife's partner Registered Medical Practitioner and post consultation or review of the prescription, if the Registered Medical Practitioner deems fit, he/she may validate the prescription shared with him/her of the User. However, at all time the Registered Medical Practitioner has the discretion to refuse consultation or validation of the prescription if the Registered Medical Practitioner is of the opinion that a physical consultation is required before a prescription is validated.</p>

        <p>User agrees that the Registered Medical Practitioner will use the technology of Medlife for rendering the above services and they share the information with Medlife of its affiliated partners for rendering the services.</p>


        <p><strong>E-Consultation with the Physician:</strong></p>

        <p>By downloading, registering and accepting the terms and conditions, User can book appointment with a registered Medical practitioner (Physician) and discuss their health-related issues, opinion on the diagnostic reports, obtain e-prescription for their medical needs and avail other healthcare services. E-Consultation can be provided by teleconsultation, video conferencing or otherwise in other media that Medlife may at its sole discretion provide the options to the User based on the availability of the Physicians. Please note that E-Consultation services are provided at the express consent by the User and the same shall not be construed as a replacement for physical consultation. User is warned not to use E-Consultation Services in times of emergency and any medical Services that require further diagnostics and physical inspection.</p>


        <p><strong>E-Consultation Services:</strong></p>

        <p>User agrees that E-Consultation is not a substitute for physical consultation and the Services are meant for general consultation only. If after the E-consultation, the Physician recommends any diagnostic tests to be undertaken or issues a Prescription, the same are provided based on the information and preliminary examination by the Physician, hence the same shall not be treated as accurate, final and conclusive. Physician reserves their rights to modify the prescription or recommended diagnostic tests if the User provides any additional information in future consultation. While rendering E-Consultation, Physician will require to know the age, sex, previous and existing health conditions, symptoms, past medical history, physical examination (if directed by the Physician) etc. All the information with respect to the User History, consultation records, medical record and prescriptions issued by the Physician will be saved with Medlife and the same may be used for rendering Services as may be required by the User for time to time. Services offered by Medlife are intended for direct use of the User or their family members, but the same cannot be used for rendering Services to third parties. Medlife acts as an intermediary to provide technology and applications to connect the User and the Physician on one platform and does not endorse, recommend or authorize the action of any Physician. Any claims or liabilities arising from the use of the Services between the User and the Physician shall be resolved directly by User and the Physician, Medlife disclaims all liabilities arising from use of the Services by the User and the maximum liability of Medlife to the User shall be limited to the Service Fees paid by the User to Medlife.</p>


        <p><strong>Booking an Appointment:</strong></p>

        <p>Before booking a consultation, User shall ensure that the language in which the User prefer the consultation is available in the Services. User does not have the ability to choose a Physician of his/her choice. Medlife will direct the request for E-consultation to the Physician available in the specialized subject. Medlife does not endorse of refer any doctor for E-consultation, during the process User has the choice to either proceed with the Consultation or withdraw from the Services. Acceptance of the Terms and Condition and booking an appointment by the User, entitles Medlife to unconditionally store and share all the information of User with the Physician and store such information and/or conversation of the User with Medlife or the Physician. All the information stored by Medlife will be secured and maintained in compliance with the laws applicable in India.</p>


        <p><strong>Re-scheduling, Cancellation and Refund Policy for E-Consultation:</strong></p>

        <p>In any event if the User is unable to avail the E-Consultation Services from the Physician or if the User wishes to cancel the appointment, User shall be entitled to do so by choosing the respective option in the App. If User does not avail the Services or cancels the E-Consultation, the Services Fees will be refunded to the User as per the Refund Policy in the same manner of payment in which the User has paid the Service Fees. However, if the User refuses to take the call when the Physician call the User or cancels the appointment one hour before the scheduled time, the User will not be entitled for any refund. Any issued with regard to payments made, refunds claimed or otherwise error in the transactions shall be reported to <a href="mailto:support@medlife.com">support@medlife.com</a> or call the customer care at 1860 1234 1234.</p>


        <p><strong>Service Fee:</strong></p>

        <p>User shall make the necessary payments using the various payment options as per the fees applicable and charged by the respective Physician. Upon receipt of the payment from the User, Medlife will schedule the appointment with a qualified Physician and send a confirmation by app notification, SMS or email.</p>


        <p><strong>Disclaimer:</strong></p>

        <p>The User understands and agrees Medlife is providing a technology service as an intermediary and that all the services are provided to the User directly by the Registered Medical Practitioner with regard to any health issues, consultation, validation, unsatisfactory services etc. availed by the User under the above mentioned clause services are between the User and the Registered Medical Practitioner and that at no point in time Medlife shall be held responsible for the same. Further, notwithstanding anything contained herein, Medlife shall not be liable for:</p>

        <ul>
                <li>any medical negligence, prescription of any wrong medication or treatment on part of
                        the Registered Medical Practitioner;</li>
                <li>any type of inconvenience suffered by the User due to a failure on the part of the
                        Registered Medical Practitioner in providing the agreed services or to make
                        himself/herself available at the appointed time, inappropriate treatment, or similar
                        difficulties;</li>
                <li>any misconduct or inappropriate behaviour by the Registered Medical Practitioner;</li>
                <li>cancellation or rescheduling of booked appointment;</li>
                <li>any medical eventualities that might occur subsequent to using the services of the
                        Registered Medical Practitioner.</li>
        </ul>


        <p><strong>Subscription:</strong></p>

        <p>Under the subscription model, User can subscribe for his/her/its medicine requirement by choosing a subscription plan that best suit the User's need and the User can customise the same according to the User's requirement. All orders under the subscription plan shall be automatically placed in accordance with the chosen subscription plan. All orders under the subscription model shall be subject to all the other applicable terms and conditions mentioned herein along with all statutory requirements for processing an order.</p>


        <p><strong>Clubbing of offers:</strong></p>

        <p>Any ongoing offer or promotional scheme cannot be clubbed with the orders placed under the subscription plan. All orders under the subscription plan shall be processed based on the standard discount and promotional scheme available at the time of processing any order under the subscription plan. Medlife shall have the sole discretion to decide with regard to the offers or scheme that shall be applicable to the orders placed under the subscription plans.</p>



        <p><strong>Discount on Selected Products:</strong></p>

        <p>Discounts provided on the website/mobile application are on selected products. Discounts are not applicable on the following products and on any products so mentioned elsewhere on the website/mobile application:</p>

        <p>1. All Baby foods viz Ceralac, Lactogen, Nanpro etc.</p>

        <p>2. All Health Supplements viz Pediasure, Proteinex, Proteinules, Threptin etc</p>

        <p>3. Over the counter (OTC) products &ndash; Benadryl Cough Syrup, Crocin, Saridon, all Dettol, Savlon products, medicated soaps etc.</p>

        <p>4. All Cosmetic products</p>



        <p><strong>Non-Availability/Suitability of Products</strong></p>

        <p>If any of the items on your prescription are not available, or are not suitable for dispensing through this service, we will try to contact you using the information in your registration to inform you about the same.</p>


        <p><strong>Delivery of prescriptions drugs:</strong></p>

        <p>Prescription items can only be dispensed once we have received your original paper prescription or online prescription from Medlife registered doctor. All items are delivered to the address provided by you in your registration or to an alternative address if directed by you. You acknowledge and accept that items will need to be signed for on delivery and authorise any person at your chosen delivery address to sign for the items as your authorised representative. In the event that the packaging is opened after delivery, we will have no liability to you for lost or damaged items or for what third parties find out about you as a result.</p>



        <p><strong>No Warranties:</strong> Medlife makes no warranty that: (i) the application will meet your requirements; (ii) the application will be available on an uninterrupted, timely, secure, or error-free basis; (iii) the any results that may be obtained from the use of the application or any services offered through the Website will be accurate or reliable (iv) Medlife disclaims all warranties as to the accuracy, completeness or adequacy of such information.</p>

        <p>Medlife disclaims all liabilities arising from manufacturing defects and the claims if any with regard to defect in manufacturing or otherwise shall be made directly on the manufacturer whose information in provided on the product. Medlife may at its sole discretion assist User in providing any information that may be required with regard to the claim.</p>



        <p><strong>Order, Acceptance &amp; Delivery</strong>: Placement of an order either directly (in case of a repeat order or continuous drug administration as prescribed) shall constitute an agreement with us. All orders are subject to acceptance and confirmation of delivery date and time. Mere receipt of the prescription or an order either directly from you or from the registered medical practitioner does not amount to acceptance of your order nor guarantee that the drugs will be delivered as per your requirement within a specific time. All orders are subject to availability of stocks. Medlife reserves the right to share your prescription with its associated pharmacies for fulfilling your prescription, who will dispense the drugs as per the prescription and issue a valid sale receipt.&nbsp;</p>



        <p>All orders made by the customers shall be subject to various laws, including Drugs and Cosmetics Act (as may be amended from time to time). We do not accept orders for certain drugs and cosmetics, unless the same is prescribed by the registered medical practitioner licensed by the Medical Counsel of India. We do not verify the authenticity of the orders placed by you, where the prescriptions are received directly from a registered medical practitioner licensed by the Medical Counsel of India or your family doctor, who has placed the order on your behalf after your authorization. All drugs and cosmetics will be deliver through a delivery agent without disclosing your personal information or prescriptions in compliance with the applicable laws either directly to the patient or its authorised person. On delivery Medlife shall be entitled to full payment for the same.</p>

        <p><strong>Express Delivery Services (EDS):</strong> In order to provide better services, Medlife offers express delivery services to its Users, wherein the User select to specified time for express delivery of the order.User can also have the order delivered at his convenience by choosing the fixed time for delivery. User will be charged a convenience fees for delivering the order at their convenience. User shall select the option at the time of placing the order or request for EDS by contacting the customer care. To avail the EDS, the User shall agree to pay additional delivery charges which at present is Rs. 10 (Rupees Ten Only) per order. The service fees for EDS shall vary from city to city based on the date, time and area of delivery. User will be intimated in advance regarding the deliver charges and Users shall check the availability of the services in the area where the User intends to take the delivery of medicines before availing the services. EDS services are available only in selected areas for deliveries during 0800 hours to 2000 hours on all working days in the area, subject to payment of additional delivery charges. Any deliveries scheduled on holiday and non-working hours shall be at additional charges at the sole discretion of Medlife, which will be communicated to the user in advance. Medlife may at its sole discretion accept EDS in few areas on Sundays and national holidays. User cannot modify or alter the delivery time and area after acceptance of the order. Service fees paid shall not be refundable after the order is dispatched for delivery. Medlife reserve the right to discontinue or suspend the EDS at any time without any notice, Medlife shall not be liable for any delay or default in not delivering the orders within the specified time, the sole remedy for the Users shall be limited to seek refund of the service fees, if any paid by the User and aggregate liability of Medlife for any damages shall be limited to Rs. 500 (Rupees Five Hundred Only).</p>

        <p><strong>Notification of errors:</strong></p>

        <p>You should check the items dispensed to you carefully promptly upon receipt. If you believe there may have been a dispensing error, you should contact us immediately and should not take or use any of the items.</p>


        <p><strong>Delivery of fulfilled prescriptions:</strong></p>

        <p>Prescription medicines will require a doorstep signature. Prescription items can only be dispensed once we have received your original paper prescription or online prescription from Medlife registered doctor. All items are delivered to the address provided by you in your registration or to an alternative address if directed by you. You acknowledge and accept that items will need to be signed for on delivery and authorise any person at your chosen delivery address to sign for the items as your authorised representative. In the event that the packaging is opened after delivery, we will have no liability to you for lost or damaged items or for what third parties find out about you as a result.</p>


        <p><strong>Delivery and Packaging Costs:</strong></p>

        <ul>
                <li>All orders with order value of INR 200 or above will be delivered free of cost and no delivery charges shall be applicable on such orders provided that the delivery is within Medlife serviceable areas.</li>
                <li>All orders with order value less than INR 200 will attract delivery charges of INR 25.</li>
                <li>Value of any order that is equal to or greater than INR 200 at the time of placing the order that is later modified, will not attract any delivery charges.</li>
                <li>Any delivery charges paid by the customer for any modified/cancelled/un-delivery order shall be eligible for full refund of the delivery changes provided the customer has made advance payment for the said order.</li>
                <li>Delivery charges shall be refunded in full if any other that us delivered and becomes eligible for refund, subject to terms and conditions.</li>
                <li>Any delivery charges paid by the customer shall not be eligible for refund of the order is modified or replaced by the customer due to change in prescription or otherwise.&nbsp;</li>
        </ul>



        <p><strong>Cancellation, Return and Refund:</strong></p>

        <p>We understand that there will be genuine reasons when you decide to cancel an order. You may cancel your order before delivery by calling customer care number 1860 1234 1234.</p>

        <ul>
                <li>During order delivery, Medlife&rsquo;s delivery team requests every customer to verify the contents and provide an acknowledgement confirming the correctness and completeness of the order.</li>
                <li>In case of any discrepancies including tampered order box or contents, please alert the delivery team or call us on our customer care number 1860 1234 1234 for resolution.</li>
                <li>Once the order is verified and acknowledged by the customer, the order in full or part cannot be returned unless there is a defect in the delivered order which is highly unlikely.</li>
                <li>Refunds will be processed only for defective and incorrect deliveries.</li>
                <li>All refunds will be made only through NEFT to the account which is provided by the customer. Refunds for Credit Card payments will take 21 days to get processed.</li>
                <li>All returns and refunds will happen in proportion to the products refunded. In case there are part items qualifying for returns and refunds, it is always processed for the full order and invoice. We will not process partial delivery or returns. &nbsp;&nbsp;</li>
        </ul>



        <p><strong>Acceptance of the Goods:</strong> We request you to verify the complete details and the documents provided to you at before acceptance of the Goods. Any complaints with regard to shortage of Goods, defects or otherwise will not be entertained by Medlife once the same are accepted at the time of delivery.&nbsp;</p>



        <p><strong>WARNING:</strong></p>

        <p>YOU MUST CHECK ALL ITEMS DISPENSED TO YOU AND SHOULD NOT TAKE ANY MEDICATION THAT APPEARS TO HAVE BEEN TAMPERED WITH OR WHICH MAY HAVE BEEN DISPENSED IN ERROR. FAILURE TO ABIDE BY THIS WARNING COULD SERIOUSLY DAMAGE YOUR HEALTH AND MEDLIFE SHALL NOT BE HELD LIABLE.</p>



        <p><strong>Information Technology Act</strong>:&nbsp; Certain laws in India prohibit and impose restriction on use of the Website and you are advised to make familiar with those laws and not to post any information or messages that are, or that may be construed, as being malicious , defamatory, inappropriate, slanderous, pornographic or otherwise sexually oriented or that makes attacks on or the otherwise opines or comments on any individuals or groups of individuals, educational institutions or any other entities whatsoever (whether companies, firms, or any other institutions). You also agree not to post any information to which you do not have copyrights or other appropriate permissions to post in public forum. Your failure to comply with these terms may result in removal of your postings without prior notice to User. The IP address of all posts is recorded to aid in enforcing these conditions.</p>



        <p><strong>Other Laws</strong>: Certain laws require to maintain data with respect to the services, Goods and other personal information in a prescribed format and Medlife will use all the information to the extent required in compliance with the applicable laws and as may be directed or amended from time to time.</p>



        <p><strong>Force Majeure</strong>: Medlife shall not be liable and to the extent, that the performance or delay in performance of any of its obligations are prevented, restricted, delayed or interfered with due to circumstances beyond the reasonable control and without the fault or negligence of such Party, including but not limited to change in legislation, fire, flood, explosion, epidemic, accident, act of God, war, riot, strike, lockout, traffic or other concerted act of workmen and/or act of Government. Medlife may at its sole discretion withdraw the services or Goods if a Force Majeure event occurs.</p>



        <p><strong>Governing Law and Jurisdiction:</strong> The Terms of Use are governed by and constructed in accordance with the laws of India, without reference to conflict of laws principles and you irrevocably and unconditionally submit to the exclusive jurisdiction of the courts located in Patna, India.</p>

        <p><strong>Acceptance of Terms and Conditions:</strong> By Clicking on the "I have read and accept the terms and conditions" box at the bottom of the Registration Form, You indicate your acceptance of the above Terms and Conditions and you agree to be bound by these terms and conditions set forth below including any additional guidelines and future modifications. If at any time you do not agree to these terms and conditions or you wish terminate your registration as an Affiliate, you may not access or use the information and notify your intention to block your registration. </p>

        <p><strong>Share and Earn:</strong> The referred friend should be a new customer and not an existing or returning customer of Medlife. The referred friend must place a valid order using the referral code to avail referral discount on their 1st order and the order should be successfully delivered and not be cancelled or returned. Referral reward coupon shall be credited to the User's account after successful delivery of the referred friend's order. Referral reward discount up to a maximum of 5% of the order value will be automatically redeemed on the User's next orders with Medlife within such time as Medlife may deem fit.  Notwithstanding anything contained herein, these terms are in addition to and not in derogation to any other terms as stipulated by Medlife from time to time. Medlife reserves the right in its sole discretion at any time, without any prior notice to suspend / cancel this program or amend these terms.</p>

        <p><strong>E-cash:</strong> To avail the e-cash benefit the User must place a valid order using the promotion code with e-cash offer to avail the e-cash and the order should be successfully delivered and not be cancelled or returned. E-cash shall be credited to the User's account after five (5) working days from the date of successful delivery of the order. E-cash up to a maximum of 5% of the order value will be automatically redeemed on the User's next orders with Medlife. E-cash so received shall be valid for a period of forty-five (45) days from the date it is credited to the User's account.  Notwithstanding anything contained herein, these terms are in addition to and not in derogation to any other terms as stipulated by Medlife from time to time. Medlife reserves the right in its sole discretion at any time, without any prior notice to suspend / cancel this program or amend these terms.</p>

        `,
    };
}

const TermsAndConditionsModal = ({ open }) => (
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
                    Terms & Conditions

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
                <div className="card-body tnc-modal" style={cardBodyStyles} dangerouslySetInnerHTML={createMarkup()} />
            </div>
        )}
    </Popup>
);

export default TermsAndConditionsModal;
