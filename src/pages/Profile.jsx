import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div id="profile-page">
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
    </div>
  )
}


export default Profile