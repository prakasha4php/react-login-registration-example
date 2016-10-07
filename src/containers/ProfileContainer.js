import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../components/ProfilePage';
import ChangePasswordForm from '../components/ChangePasswordForm';
import * as types from '../constants/ActionTypes';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('comp did mount', this);
    let { userId } = this.props.pageState.auth;
    this.props.dispatch({
      type: types.PROFILE__REQUESTED,
      payload: {
        userId
      }
    });
  }

  onChangePasswordHandler(formData) {
    // let { userId } = this.props.pageState.auth;
    // let { currentPassword, newPassword, newPasswordRepeated } = formData;
    // this.props.actions.changePassword(userId, currentPassword, newPassword, newPasswordRepeated);
  }

  render() {

    let {username, email} = this.props.pageState.profile;

    return (
      <div>
        <ProfilePage username={username} emailAddress={email} />
        <ChangePasswordForm onSubmit={this.onChangePasswordHandler.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageState: state
  };
}

export default connect(
  mapStateToProps
)(ProfileContainer);
