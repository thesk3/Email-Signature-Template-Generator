import React, { Component } from 'react';
import "./Button.css";
import { connect } from 'react-redux';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.copSignature = this.copSignature.bind(this);
        
      }
      copSignature() {
        this.props.dispatch({
  
            type: 'COPY_SIGNATURE',
              data:true
          })
      }
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
        this.props.dispatch({
  
            type: 'TAB_TOGGLE',
              data:this.state
          })
      }


    render() {
        return (
            <div>
                 {this.props.isToggleOn ? (
                     <div className="mainButtono" onClick={this.copSignature}> 
                     <span className="esg-create-signature sc-hSdWYo ENUco" value="">Copy Signature</span>
                   
                    
                     </div>
      ) : (
        <div className="mainButtono" onClick={this.handleClick}> 
        <span className="esg-create-signature sc-hSdWYo ENUco" value="">Create Signature</span>
        </div>
      )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      isToggleOn: state.toggleTab.isToggleOn
    }
    }
    
  export default connect(mapStateToProps)(Button);
  