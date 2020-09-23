
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Header from '../Components/Header'
import axios from 'axios'
import { Content, CardItem, Left, Thumbnail, Body, Subtitle } from 'native-base'
const HomeScreen = () => {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(temp => { 
        const tmpdata = temp.data
        setData(tmpdata) 
        setIsFetch(true)
        console.log("res", tmpdata)
      }).catch(err => console.log(err))
    return () => {
      setIsFetch(true)
    }
  }, [])
  const renderItem = ({item, index}) => {
    return (
      <CardItem key={index} style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
        <Left>
          <Thumbnail large square={true} source={{ uri: item.image }} />
          <Body>
            <Text>{item.title}</Text>
            <Subtitle style={{color: 'gray'}}>{item.category}</Subtitle>
          </Body>
        </Left>
      </CardItem>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{flex: 1, marginBottom: 10}}>
        {
          isFetch == true ?
            <FlatList
              data={data}
              renderItem={({ item, index }) => renderItem({item, index})}
              keyExtractor={item => item.key}
            /> : <Text>no data</Text>
        }
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;