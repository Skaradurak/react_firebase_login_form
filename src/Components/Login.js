import React from 'react';
import fire from '../config/Fire';
import '../App.css';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = { 
            email: '',
            password: '' ,
}
    }

    signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) =>{
            console.log(error);
        }) 
        

    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) =>{
            console.log(error);
        }) 

        }

    handleChange(e){
        this.setState({ [ e.target.name]: e.target.value})
    }

    render() { 
        
        
        return ( 
            <div className="App">
        <form>
                    
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} 
        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
    </div>
  
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} 
        className="form-control" id="exampleInputPassword1" />
    </div>

    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
    <button onClick={this.signUp} style={ {marginLeft:'25px'} } 
    className="btn btn-success">Signup</button>


      </form>

</div>

         );
    }
}
 
export default Login;