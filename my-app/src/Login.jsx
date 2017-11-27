import React, {Component} from 'react';
import 'Custom.css';
import {Router, Route, Link} from 'react-router';

class Login extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="form_bg">
                        <form>
                            <h2 className="text-center">Login Page</h2>
                            <br/>
                            <div className="form-group">
                                <input type="email" className="form-control" id="userid" placeholder="User id"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="pwd" placeholder="Password"/>
                            </div>
                            <br/>
                            <div className="align-center">
                                <button type="submit" className="btn btn-default" id="login">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )

    }
}