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

const PrivacyPolicyModal = ({ open }) => (
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
                    Privacy Policy

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
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            style={{ color: '#a70860' }}
                        >
                            <u>
                                <strong>
                                    {' '}
                                    writing to us
                                    {' '}
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
                        or your authorised representative will provide access to Medlife with your personal information. If that
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
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            style={{ color: '#a70860' }}
                        >
                            <u>
                                <strong>
                                    writing to us
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
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            style={{ color: '#a70860' }}
                        >
                            <u>
                                <strong>
                                    writing to us
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
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            style={{ color: '#a70860' }}
                        >
                            <u>
                                <strong>
                                    writing to us
                                </strong>
                            </u>
                        </a>
                    </p>
                    <br />
                    <p>
                        If you have any compliant or grievances with respect to Website
                        or this Privacy Policy please
                        {' '}
                        <a
                            href="https://m.medlife.com/#/root/Feedback"
                            style={{ color: '#a70860' }}
                        >
                            <u>
                                <strong>
                                    writing to us
                                </strong>
                            </u>
                        </a>
                    </p>
                    <br />
                </div>
            </div>
        )}
    </Popup>
);

export default PrivacyPolicyModal;
