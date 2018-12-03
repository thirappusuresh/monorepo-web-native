/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const orderingSteps = [
    {
        label: 'Upload valid Prescription',
    },
    {
        label: 'Receive a confirmation call',
    },
    {
        label: 'Delivery at your door step',
    },
];

export default class MedlifeRecipe extends Component {
    renderOrderingSteps = () => (
        <ul className="medlife-recipe--steps">
            {
                orderingSteps.map((orderingStep, index) => {
                    const stepsIndex = index + 1;

                    return (
                        <li className="d-flex" key={stepsIndex}>
                            <span>{stepsIndex}</span>
                            <p>{orderingStep.label}</p>
                        </li>
                    );
                })
            }
        </ul>
    )

    render() {
        return (
            <div className="medlife-recipe--container web-only">
                <div className="container">
                    <div className="row">
                        <h3 className="col-md-12 d-flex justify-content-center medlife-recipe--heading">
                            How it Works?
                            <FontAwesomeIcon icon={faChevronDown} className="medlife-recipe--arrow-down" />
                        </h3>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="medlife-recipe--sub-heading-left">
                                        How to order medicines on Medlife? It’s Simple.
                                    </h2>
                                    { this.renderOrderingSteps() }
                                    <h3 className="medlife-recipe--sub-heading-left">
                                        Don’t have prescription? Don’t worry!
                                    </h3>
                                    <p>Simply search & add the medicines OR get consultation from Medlife doctor</p>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <iframe
                                        width="456"
                                        height="224"
                                        src="https://www.youtube.com/embed/uRCZEK24kO8"
                                        frameBorder={0}
                                        title="medlife-video"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
