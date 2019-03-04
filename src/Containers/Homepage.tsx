import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../Store';
import { changePage } from '../Actions';
import { getHomeTitle } from '../Selectors';
import { withRouter, RouteComponentProps } from 'react-router';

interface HomepageStateProps {
    title: string;
}

interface HomepageDispatchProps {
    goToPage: () => void
}

type combinedProps = HomepageStateProps & HomepageDispatchProps & RouteComponentProps;

class Homepage extends React.Component<combinedProps> {
    constructor(props: combinedProps) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.goToPage}>To Next Page</button>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => ({
    title: getHomeTitle(state)
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps) => ({
    goToPage: () => {
        dispatch(changePage());
        ownProps.history.push('/newpage');
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));