import React from 'react';

import {View,Text,StyleSheet} from 'react-native';


export default function AdminSettingScreen({Navigation}){
    return(
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      paddingTop: 30,
     
      backgroundColor: "white",
    }
})