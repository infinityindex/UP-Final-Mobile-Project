import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native'
import { Drawer } from 'react-native-paper';
import { Container, Header, Content, List, ListItem } from 'native-base';
// import { useNavigation } from '@react-navigation/native'


const  AppDrawer = ({navigation}) => {
    // const { navigation } = useNavigation();
    return (
        <Content style={{ flex: 1, backgroundColor:'red' }}>
            <List style={{ flex: 1 }}>
                <ListItem onPress={() => navigation.navigate('Home',{key: 'home'})}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>News</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('Sport',{key: 'sport'})}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>Sport</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('Entertainment',{key: 'Entertainment'})}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>Entertainment</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('Leadership',{key: 'Leadership'})}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>Social</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('Technology',{key: 'Technology'})}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>Technology</Text>
                </ListItem>
                <ListItem onPress={() => navigation.navigate('About')}>
                    <Text style={{ color:'white', fontWeight: 'bold' }}>About us</Text>
                </ListItem>
            </List>
        </Content>
    );
}

export default AppDrawer;