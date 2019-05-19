import React from 'react';
import { Text, View } from 'react-native';

import styles from './Styles'

export default class AftnoonComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            this._getTimeView()
        )
    }

    _getTimeView() {
        var timeDate = new Date();
        var timeHour = timeDate.getHours().toString();
        //console.log(timeHour)
        if (timeHour < 19) {
            return (
            <View style={styles.newPostBanner}><Text style={styles.newPostText}>Articles may be from yesterday. Try back around Dinner!</Text></View>
        )
        }
        else return ''

        
         
    }
}