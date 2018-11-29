import React, { Component } from 'react';
import './styles/switch.scss';

export default class ReactSwitch extends Component {
    constructor ( props ) {
        super( props );
    }
    render () {
        return(
            <div className={this.props.className ? this.props.className : "switch-container"} style={this.props.style}>
                <label>
                    <input ref="switch" checked={ this.props.isChecked } onChange={ this.props.onChange } className="switch" type="checkbox" />
                    <div>
                        <span><i className="icon icon-toolbar grid-view"></i></span>
                        <span><i className="icon icon-toolbar ticket-view"></i></span>
                        <div></div>
                    </div>
                </label>
            </div>
        )
    }
}
