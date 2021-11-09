import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Tabs/homePage";
import BlogPage from "./Tabs/blogPage";
import EventsPage from "./Tabs/eventsPage";
import AboutPage from "./Tabs/aboutPage";
import ProfilePage from "./Tabs/profilePage";
import Footer from "./Tabs/footer";
import HeadImage from '../../assets/images/apamsa2.png'
import GoogleLogin from "react-google-login";
import axios from "axios";


const App = () => {
  const [profile, setProfile] = useState({});

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

    setProfile(
      Object.assign
      (
        profile, profile, 
        { ['user_id']: response.profileObj.googleId,
          ['name']: response.profileObj.name,
          ['img_url']: response.profileObj.imageUrl,
          ['email']: response.profileObj.email 
        }
      )
    );
    
    // console.log('Profile info:', profile);
    axios.post('/api/v1/users', profile)
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  };

  return (
    <div>
      <div style={{width: '100%', display: 'flex', margin: '0 !important'}}>
        <img src={HeadImage} style={{width: '100%', display: 'flex'}} />
      </div>
      <GoogleLogin
        clientId='134632541809-skppjomtgttr7vkb08lmoki4p15nv9d5.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/profile">
            <ProfilePage 
              profile={profile}
            />
          </Route>
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
