
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native'
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import {Images} from '../Theme'
const Headers = () => {
    // Declare a new state variable, which we'll call "count"

    const navigation = useNavigation();
    console.log('navigation', navigation)
    return (
        <View style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'red',
            paddingHorizontal: 10
        }}>
            <Icon onPress={() => navigation.toggleDrawer()} name="menu" type="MaterialIcons" style={{ color: '#ffffff' }} />
            <Icon onPress={() => navigation.toggleDrawer()} name="school" type="MaterialIcons" style={{ color: '#ffffff', fontSize: 42 }} />
            <Icon onPress={() => Alert.alert("Comming Soon!")} name="search" type="MaterialIcons" style={{ color: '#ffffff' }} />
        </View>
    );
}


export default Headers;