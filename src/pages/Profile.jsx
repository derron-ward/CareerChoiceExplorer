import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div id="profile-page">
      <h1>Change Password</h1>
      <form id='change-passwd'>
        <div className='form-field'>
          <label for="old-passwd">Old Password</label>
          <input type="text" />
        </div>
        <div className='form-field'>
          <label for="new-passwd">New Password</label>
          <input type="text" />
        </div>
        <div className='form-field'>
          <label for="new-passwd-confirm">Confirm New Password</label>
          <input type="text" />
        </div>
      </form>
      <h2>Your Saved Industries</h2>
    </div>
  )
}


export default Profile