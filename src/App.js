import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SelectCity from "./SelectCity";
import InputYourCity from "./InputYourCity";
import Header from "./Header";
import Home from './Home';

import FlatButton from 'material-ui/FlatButton';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Header />
            <BrowserRouter history = {history}>
                <div>
                    <FlatButton
                        containerElement = { <Link to="/SelectCity"/> }
                        label = "Select city"
                        hoverColor = 'orange'
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: 'red',
                            fontFamily: "'Gloria Hallelujah',cursive",
                            border: 'solid red 1px',
                            borderRadius:'8px',
                        }}
                    />
                    <FlatButton
                        containerElement = { <Link to="/InputYourCity"/> }
                        label = "Input your city"
                        hoverColor = 'orange'
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: 'red',
                            fontFamily: "'Gloria Hallelujah',cursive",
                            border: 'solid red 1px',
                            borderRadius:'8px',
                        }}
                    />
                    <FlatButton
                        containerElement = { <Link to="/"/> }
                        label = "Home"
                        hoverColor = "orange"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: 'red',
                            fontFamily: "'Gloria Hallelujah',cursive",
                            border: 'solid red 1px',
                            borderRadius:'8px',
                        }}
                    />
                    <Route path = "/SelectCity" component = { SelectCity } />
                    <Route path = "/InputYourCity" component ={ InputYourCity } />
                    <Route path = "/" component = { Home } />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
