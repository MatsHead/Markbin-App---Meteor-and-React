import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount(){
        // Render the blaze accounts form then find the div 
        // we just render in the 'render' method and place
        // the Blaze accounts forim in that div
       this.view = Blaze.render(Template.loginButtons, 
            ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount(){
        // Go find forms we created and destroy 'em
        // We need to clean up those forms ourselves
        Blaze.remove(this.view);
    }
    render(){
        return(
            <div ref="container">
                
            </div>
        );
    }
};

export default Accounts;