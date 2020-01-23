import React, { Component } from 'react';

class Spinner extends Component {

    render() {
        return(
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}
export default (Spinner)