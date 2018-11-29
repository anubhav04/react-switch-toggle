import React from 'react';
import './styles/switch.scss';
const ReactSwitch =(props) => {
  return(
      <div className={props.className ? props.className : "switch-container"} style={props.style}>
          <label>
              <input ref="switch" checked={ props.isChecked } onChange={ props.onChange } className="switch" type="checkbox" />
              <div>
                  <span><i className="icon icon-toolbar grid-view"></i></span>
                  <span><i className="icon icon-toolbar ticket-view"></i></span>
                  <div></div>
              </div>
          </label>
      </div>
  )
}
export default ReactSwitch;
