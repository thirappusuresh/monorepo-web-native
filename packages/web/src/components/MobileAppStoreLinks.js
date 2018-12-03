import React from 'react';

export default function MobileAppStoreLinks() {
    return (
        <div className="d-inline-block">
            <h6 className="footer--contact-us-heading">Download our App</h6>
            <div>
                <a
                    href="https://play.google.com/store/apps/details?id=com.medlife.customer&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="footer--app-play-store-images"
                        src="../../static/playstore.png"
                        alt="Playstore"
                    />
                </a>
                <a
                    href="https://itunes.apple.com/in/app/medlife-all-things-health/id1078091111?mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="footer--app-play-store-images"
                        src="../../static/appstore.png"
                        alt="Appstore"
                    />
                </a>
            </div>
        </div>
    );
}
