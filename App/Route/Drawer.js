import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native'
import { Drawer } from 'react-native-paper';
import { Container, Header, Content, List, ListItem } from 'native-base';
// import { useNavigation } from '@react-navigation/native'

const  AppDrawer = ({navigation}) => {
    // const { navigation } = useNavigation();
    return (
        <Content style={{ flex: 1 }}>
            <List style={{ flex: 1 }}>
                <ListItem onPress={() => navigation.navigate('Home')}>
                    <Text>News</Text>
                </ListItem>
                <ListItem onPress={() => Alert.alert("Comming Soon!")}>
                    <Text>Sport</Text>
                </ListItem>
                <ListItem onPress={() => Alert.alert("Comming Soon!")}>
                    <Text>Technology</Text>
                </ListItem>
                <ListItem onPress={() => Alert.alert("Comming Soon!")}>
                    <Text>Leadership</Text>
                </ListItem>
                <ListItem onPress={() => Alert.alert("Comming Soon!")}>
                    <Text>Politics</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('About')}>
                    <Text>About us</Text>
                </ListItem>
            </List>
        </Content>
    );
}

export default AppDrawer;