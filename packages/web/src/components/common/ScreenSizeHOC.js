import React from 'react';
import { debounce } from 'underscore';


export default function ScreenSizeHOC(TargetComponent) {
    return class WrappedScreenSizeComponent extends React.Component {
        constructor(props) {
            super(props);

            if (typeof window !== 'undefined') {
                this.state = {
                    height: window.innerHeight,
                    width: window.innerWidth,
                };
            } else {
                this.state = {
                    height: null,
                    width: null,
                };
            }

            this.lazyUpdateDimensions = debounce(this.updateDimensions, 500);
        }

        componentDidMount() {
            window.addEventListener('resize', this.lazyUpdateDimensions);
            this.updateDimensions();
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.lazyUpdateDimensions);
        }

        updateDimensions = () => {
            this.setState(prevState => ({
                ...prevState,
                height: window.innerHeight,
                width: window.innerWidth,
            }));
        }

        render() {
            return (
                <TargetComponent
                    {...this.state}
                    {...this.props}
                />
            );
        }
    };
}
