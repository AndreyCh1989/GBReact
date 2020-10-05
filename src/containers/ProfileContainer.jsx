import React from 'react';
import {connect} from 'react-redux';

import {Profile} from 'pages/Profile';
import {profilesLoadAction} from 'actions/profiles';

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profilesLoadAction();
    }

    render(){
        return (
            <Profile {...this.props}/>
        );
    }
}

function mapStateToProps(state){
    const profile = state.profiles.entries;

    return {
        profile,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profilesLoadAction: () => dispatch(profilesLoadAction()),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);
