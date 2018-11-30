/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import Button from '../common/Button';

const MedlifeEssentialCarouselItem = () => (
    <div className="medlife-essentials--items">
        <h6 className="medlife-essentials--items-heading web-only">Baconil Medicine Circumin</h6>
        <p className="medlife-essentials--items-desc web-only">Anti cancer and beauty bliss</p>
        <div className="medlife-essentials--image-desc-wrapper d-flex justify-content-start align-items-center">
            <div>
                <img className="medlife-essentials--items-image" alt="Recent" src="../../../static/recentcarouselimages/first.jpg" />
            </div>
            <div>
                <ul className="web-only">
                    <li className="medlife-essentials--item-highlights">Amplify Beauty</li>
                    <li className="medlife-essentials--item-highlights">Good for weight loss</li>
                    <li className="medlife-essentials--item-highlights">Good for Liver &amp; Digestive problems</li>
                    <li className="medlife-essentials--item-highlights">Improve Joint Functionality</li>
                    <li className="medlife-essentials--item-highlights">Improve Eyesight</li>
                </ul>
                <div className="mobile-only">
                    <h6 className="medlife-essentials--items-heading">Baconil Medicine Circumin</h6>
                    <p className="medlife-essentials--items-desc">Anti cancer and beauty bliss</p>
                </div>

                <Button
                    className="button-transparent medlife-essentials--button-know-more"
                    text="Know More"
                />
            </div>
        </div>
    </div>
);
export default MedlifeEssentialCarouselItem;
