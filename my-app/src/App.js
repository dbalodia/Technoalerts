import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header pull-left">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                        </ul>
                    </div>

                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="/products">Products</a></li>
                        </ul>
                    </div>

                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                    <Navbar />
                </div>
            </div>
        );
    }
}

export default App;
