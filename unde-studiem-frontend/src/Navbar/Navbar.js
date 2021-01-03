import React from 'react';
import './Navbar.scss';
import axios from 'axios';
import MyMenu from './MyMenu';
import Button from '@material-ui/core/Button';



import {Link} from "react-router-dom";


function Navbar(props) {

  const [myProfile, setMyProfile] = React.useState(null);


  React.useEffect(() => {
    if(localStorage.token != null){
      // axios.get(`${process.env.REACT_APP_URL}/users/get_profile`, {
      //   headers: {
      //       Authorization: `Bearer ${localStorage.token}`,
      //   },
      // })
      // .then(response => {
      //   setMyProfile(response.data);
      // })
      // .catch(error => alert("error"));
    }

  }, []);

  const setProfileLogout = () => {
    setMyProfile(null);
  };


  return (
    <div className="Navbar">

        <nav class="navbar fixed-top scrolling-navbar navbar-expand-lg">
            <div className="container">

            <Link to={`/`}>
              <div className="Logo">
                Unde Studiem
              </div>  
            </Link>


              <div className='btnContainer'>

                {myProfile != null && myProfile.role === 'student' ?
                <>
                  <button type="button" class="btn btn-light btn-lg">
                    Useri
                  </button>
                  <MyMenu profile={myProfile} setProfileLogout={setProfileLogout}/>
                </>
                : myProfile != null && myProfile.role === 'admin' ?
                <>
                  <MyMenu profile={myProfile} setProfileLogout={setProfileLogout}/>
                </>
                : 
                <>
                  <Link to={`/login`}>
                    <button type="button" class="btn btn-light">
                      Login
                    </button>
                  </Link>
                  <Link to={`/login`}>
                    <button type="button" class="btn btn-light">
                      Sign Up
                    </button>
                  </Link>
                  <Link to={`/login`}>
                    <button type="button" class="btn btn-light">
                      Contact
                    </button>
                  </Link>       
                </>

                }
              </div>



            </div>
        </nav>
    </div>
    

  );
  
}

export default Navbar;
