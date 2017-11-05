import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import GetWeather from "./GetWeather";

class SelectCity extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }
    handleChange(event, index, value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText = "Select the name of the city here"
                    value = { this.state.value }
                    onChange = { this.handleChange.bind(this) }
                    autoWidth = { true }
                    floatingLabelStyle = {{ color: 'red' }}
                    underlineFocusStyle = {{ borderColor: 'red' }}
                    labelStyle = {{ color: 'orange' }}
                    style = {{
                        marginLeft: '10px',
                        color: 'red',
                        fontFamily: "'Gloria Hallelujah',cursive",
                        width: '300px',
                    }}
                >
                    <MenuItem value = { 'Paris' } primaryText = "Paris" style = {{ color: 'orange' }} />
                    <MenuItem value={ 'Budapest' } primaryText = "Budapest" style = {{ color: 'orange' }} />
                    <MenuItem value={ 'Prague' } primaryText = "Prague" style = {{ color: 'orange' }} />
                    <MenuItem value = { 'Rome' } primaryText = "Rome" style= {{ color: 'orange' }} />
                    <MenuItem value={ 'Barcelona' } primaryText = "Barcelona" style = {{ color: 'orange' }} />
                </SelectField>
                <GetWeather cityName = { this.state.value } />
            </div>
        )
    }
}

export default SelectCity;
