import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
  return (
      <div className='settings'>
          <div className="settingsWrapper">
              <div className="settingsTitle">
                <span className="settingsUpdateTitle"> Update Your account</span>
                <span className="settingsDeleteTitle"> Delete account</span>
              </div> 
              <form className="settingsForm">
                  <label > Profile Picture</label>
                  <div className="settingsPP">
                      <img 
                          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                      />
                      <label htmlFor="fileInput">
                          <i className="far far-user-circle settingsPPIcon"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}} />
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder='Tyson Lukale' />
                  <label>Email</label>
                  <input type="text" placeholder='lukaletyson99@gmail.com' />
                  <label>Password</label>
                  <input type="password" />
                  <button className="settingsSubmit">Update</button>
              </form>
          </div>
          <Sidebar />
      </div>
  )
}

export default Settings