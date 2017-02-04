import React, { Component } from 'react';


export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);

    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }
}