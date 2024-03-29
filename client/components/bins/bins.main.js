import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../..//imports/collections/bins';
import BinsEditor from './bins.editor';
import BinsViewer from './bins.viewer';
import BinsShare from './bins.share';

class BinsMain extends Component {
    render() {
        if(!this.props.bin) {
            return (
                <div>Loading...</div>
            )
        }
        return(
            <div>
                <BinsEditor bin={this.props.bin}/>
                 <BinsViewer bin={this.props.bin}/>
                 <BinsShare bin={this.props.bin}/>
            </div>
        )
    } 
}

// export default BinsMain;
export default createContainer((props)=>{
    const { binId } = props.match.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);