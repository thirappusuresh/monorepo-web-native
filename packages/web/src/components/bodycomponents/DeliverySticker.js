/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';

export default class DeliveryStrickers extends Component {
    render() {
        return (
            <div className="delivery-sticker--container">
                <div className="container">
                    <div className="delivery-sticker--container1 web-only">
                        <div className="col-md-6 delivery-sticker-left ">
                            <div className="delivery-icon-container"><img src="../../../static/express.png" alt="express" /></div>
                            <div className="express-container">
                                <div className="delivery-sticker-express">2</div>
                                <div className="delivery-sticker-express-bottom">HRS</div>
                            </div>
                            <div className="delivery-sticker-text ml-2">EXPRESS DELIVERY</div>
                        </div>
                        <div className="col-md-6 delivery-sticker-right">
                            <div className="standard-container">
                                <div className="delivery-sticker-standard">24 - 48</div>
                                <div className="delivery-sticker-standard-bottom">HRS</div>
                            </div>
                            <div className="delivery-sticker-text ml-2">STANDARD DELIVERY</div>

                        </div>
                    </div>

                    <div className="delivery-sticker--container1 mobile-only">
                        <div className="delivery-sticker-left">
                            <div className="delivery-icon-container"><img src="../../../static/express.png" alt="express" /></div>
                            <div className="express-container">
                                <div className="delivery-sticker-express">2</div>
                                <div className="delivery-sticker-express-bottom">HRS</div>
                            </div>
                            <div className="delivery-sticker-text ml-2">EXPRESS DELIVERY</div>
                        </div>

                        <div className="delivery-sticker-right">
                            <div className="standard-container">
                                <div className="delivery-sticker-standard">24 - 48</div>
                                <div className="delivery-sticker-standard-bottom">HRS</div>
                            </div>
                            <div className="delivery-sticker-text ml-2">STANDARD DELIVERY</div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
