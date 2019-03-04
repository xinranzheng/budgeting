import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Store';
import { getNewTitle } from '../Selectors';

interface NewPageProps {
    title: string;
}

class NewPage extends React.Component<NewPageProps> {
    constructor(props: NewPageProps) {
        super(props);
    }

    render() {
        return(
            <div className='App'>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => ({
    title: getNewTitle(state)
});

export default connect(mapStateToProps)(NewPage);