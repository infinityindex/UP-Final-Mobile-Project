
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native'
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import {Images} from '../Theme'
const Header = () => {
    // Declare a new state variable, which we'll call "count"

    const navigation = useNavigation();
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
            <Icon name="article" type="MaterialIcons" style={{ color: '#ffffff', fontSize: 42 }} />
            <Icon onPress={() => navigation.push('Search')} name="search" type="MaterialIcons" style={{ color: '#ffffff' }} />
        </View>
    );
}

export default Header;