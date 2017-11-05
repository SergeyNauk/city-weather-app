import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import GetWeather from "./GetWeather";

class InputYourCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            flag: false,
        }
    }

    itemFlagFalse() {
        this.setState({
            flag: false
        });
    }

    itemFlagTrue() {
        this.setState({
            flag: true
        });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

    }

    render() {
        return (
            <div>
                <TextField
                           value = { this.state.value }
                           onChange = { this.handleChange.bind(this) }
                           onFocus = { this.itemFlagFalse.bind(this) }
                           floatingLabelText = "Input the name of the city here"
                           floatingLabelStyle = {{ color: 'red' }}
                           underlineFocusStyle = {{ borderColor: 'red' }}
                           inputStyle = {{
                               color:'orange',
                               fontFamily: "'Gloria Hallelujah',cursive",
                           }}
                />
                <FlatButton
                    label = "Show weather"
                    onClick = { this.itemFlagTrue.bind(this) }
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
                <GetWeather InputItemCity = { this.state.value } InputItemFlag = { this.state.flag } />
            </div>
        )
    }
}

export default InputYourCity;
