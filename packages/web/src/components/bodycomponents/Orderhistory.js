/* eslint react/prefer-stateless-function: 0 */
import React, { Component, Fragment } from 'react';

const CompletedOrders = () => (
    <li className="d-flex justify-content-center">
        <div className="container row align-items-center">
            <div className="order-history--completed" />
            <div className="order-history--details-in-order">
                <h6>Reorder Medicine - OR3247AJ-002A</h6>
                <p>Your medicines Lulifin, Actracid + 2 more about to get over soonto avoid any gaps in your  plan reorder now</p>
            </div>
            <div className="">
                <button className="button-transparent button-whiten" type="button">REORDER</button>
            </div>
        </div>
    </li>
);

const SubscribeNow = () => (
    <li className="d-flex justify-content-center">
        <div className="container row align-items-center">
            <div className="order-history--completed" />
            <div className="order-history--details-in-order">
                <h6>Subscribe To Save More</h6>
                <p>
                    Ordering medicines on a regular basis? Subscribe now to avail great offers and hassle free delivery.
                    Pause your subscription anytime.
                </p>
            </div>
            <div className="">
                <button className="button-transparent button-whiten" type="button">CREATE A SUBSCRIPTION</button>
            </div>
        </div>
    </li>
);

export default class Orderhistory extends Component {
    state = {
        showAllOngoingOrders: false,
    }

    openAllOngoingOrders = () => {
        this.setState(prevState => ({
            ...prevState,
            showAllOngoingOrders: true,
        }));
    }

    renderOnGoingOrders = () => {
        const { showAllOngoingOrders } = this.state;
        return (
            <Fragment>
                <li>
                    <div className="container row align-items-center">
                        <div className="order-history--in-progress" />
                        <div className="order-history--details-in-order">
                            <h6>Your Order - OR3247AJ-002A</h6>
                            <p>Out for delivery</p>
                            <p>Estimated Delivery    8 am – 10 am, THU, Oct 12th</p>
                            <a href="./trackorder">Track Order</a>
                        </div>
                        <div className="">
                            <button className="button-transparent button-whiten" type="button">PAY &#8377;299</button>
                        </div>
                        <button
                            type="button"
                            className="order-history--ongoing-more-tab"
                            style={{ display: showAllOngoingOrders ? 'none' : 'block' }}
                            onClick={this.openAllOngoingOrders}
                        >
                            2 MORE ACTIVE ORDERS
                        </button>
                    </div>
                </li>
                <li style={{ display: showAllOngoingOrders ? 'block' : 'none' }}>
                    <div className="container row align-items-center">
                        <div className="order-history--in-progress" />
                        <div className="order-history--details-in-order">
                            <h6>Your Order - OR3247AJ-002A</h6>
                            <p>Out for delivery</p>
                            <p>Estimated Delivery    8 am – 10 am, THU, Oct 12th</p>
                            <a href="./trackorder">Track Order</a>
                        </div>
                        <div className="">
                            <button className="button-transparent button-whiten" type="button">PAY &#8377;299</button>
                        </div>
                    </div>
                </li>
                <li style={{ display: showAllOngoingOrders ? 'block' : 'none' }}>
                    <div className="container row align-items-center">
                        <div className="order-history--in-progress" />
                        <div className="order-history--details-in-order">
                            <h6>Your Order - OR3247AJ-002A</h6>
                            <p>Out for delivery</p>
                            <p>Estimated Delivery 8 am – 10 am, THU, Oct 12th</p>
                            <a href="./trackorder">Track Order</a>
                        </div>
                        <div className="">
                            <button className="button-transparent button-whiten" type="button">PAY &#8377;299</button>
                        </div>
                    </div>
                </li>
            </Fragment>
        );
    };

    render() {
        return (
            <div className="order-history--container web-only">
                <ul className="order-history--orders">
                    { this.renderOnGoingOrders() }
                    <CompletedOrders />
                    <SubscribeNow />
                </ul>
            </div>
        );
    }
}
