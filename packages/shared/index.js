

import React, { Component } from 'react';

const State = {
    IDLE: 1,
    PENDING: 2,
    SUCCESS: 3,
    ERROR: 4,
};

export const SECRET_SHARED_CODE = "hey!!!!!!!!";

export function withState(TargetComponent) {
    return class StateMachineWrapper extends Component {
        state = {
            current: State.IDLE
        }

        apiState = {
            pending: () => this.setState(prevState => ({
                ...prevState,
                current: State.PENDING,
            })),
            success: () => this.setState(prevState => ({
                ...prevState,
                current: State.SUCCESS
            })),
            error: () => this.setState(prevState => ({
                ...prevState,
                current: State.ERROR,
            })),
            idle: () => this.setState(prevState => ({
                ...prevState,
                current: State.IDLE,
            })),
            isPending: () => this.state.current === State.PENDING,
            isSuccess: () => this.state.current === State.SUCCESS,
            isError: () => this.state.current === State.ERROR,
            isIdle: () => this.state.current === State.IDLE
        }

        render() {
            return <TargetComponent {...this.props} apiState={this.apiState} />;
        }
    }
}

export function withData(TargetComponent) {
    class WithData extends React.Component {
        static defaultProps = { mapper: f => f };

        state = { data: null, errors: null };

        componentDidMount() {
            //this.fetchData();
        }

        fetchData = async () => {
            alert("Hi12345!!!!");
            /* const { apiState, fetcher, mapper } = this.props;

            try {
                apiState.pending();
                const result = await fetcher();
                const data = mapper(result);
                this.setState({ data });
                apiState.success();
            } catch (errors) {
                apiState.error();
                this.setState({ errors });
            } */
        }

        render() {
            const { mapper, fetcher, ...rest } = this.props;
            return (
                <TargetComponent
                    {...rest}
                    data={this.state.data}
                    errors={this.state.errors}
                    refetchData={this.fetchData}
                />
            );
        }
    }

    return withState(WithData);
}

class WithDataRP extends Component {
    static defaultProps = { mapper: f => f };

    state = { data: null, errors: null };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const { apiState, fetcher, mapper } = this.props;

        try {
            apiState.pending();
            const result = await fetcher();
            const data = mapper(result);
            this.setState({ data });
            apiState.success();
        } catch (errors) {
            apiState.error();
            this.setState({ errors });
        }
    }

    render() {
        const { apiState } = this.props;
        console.log('apiState => ', apiState)
        return this.props.render({
            apiState,
            fetchData: this.fetchData,
            data: this.state.data,
            errors: this.state.errors
        })
    }
}

export const WithDataWrapper = withState(WithDataRP);
