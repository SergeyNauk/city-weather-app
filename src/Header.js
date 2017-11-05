import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div className = "header-app">
               <p className = "message">
                   Hello dear user, Ukraine has received a "bez viz", so it's time to go abroad,
                   but first you need to know the weather in the most beautiful cities
                   of the European Union
               </p>
                <p className = "sharpMinds font-effect-fire-animation">Specially for SharpMinds</p>
            </div>
        )
    }
}

export default Header;
