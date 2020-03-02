import React from 'react';
import fire from '../config/Fire';
import  AppBar  from './AppBar';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }
    render() { 
        return ( 
            <div id="profile-container">
                <div id="edit profile"></div>
                <AppBar />
                <button onClick={this.logout}>Logout</button>
            </div>
         );
    }
}
 
export default Home;