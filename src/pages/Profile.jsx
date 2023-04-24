import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div>Profile</div>
  )
}

  <div className="ChangePassword">
    <form onSubmit={handleChangeClick}>
      <FormGroup bsSize="large" controlId="oldPassword">
        <FormLabel>Old Password</FormLabel>
      </FormGroup>
      <FormGroup bsSize="large" controlId="password">
        <FormLabel>New Password</FormLabel>
      </FormGroup>
      <FormGroup bsSize="large" controlId="confirmPassword">
        <FormLabel>Confirm Password</FormLabel>
      </FormGroup>
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        disabled={!validateForm()}
        isLoading={isChanging}
      >
        Change Password
      </LoaderButton>
    </form>
  </div>

export default Profile