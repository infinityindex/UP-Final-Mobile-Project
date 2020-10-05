import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../Components/Header';
import axios from 'axios';
import {Content, CardItem, Left, Thumbnail, Body, Subtitle} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../Theme';
import { Title } from 'react-native-paper';

const NewsDetailScreen = (props) => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const navigation = useNavigation();
  const item = props.route.params.item;

  const renderImage = () => {
    return (
      <View style={{flex: 0.4, margin: 10}}>
        <Image
          source={{uri: item.image}}
          style={{resizeMode: 'contain', width: '100%', height: '100%'}}
        />
      </View>
    );
  };

  const renderTitle = () => {
    return (
        <View style={{margin: 10}}>
            <Title>{item.title}</Title>
            <Text>{`${item.category} / ${item.price}`}</Text>
        </View>
    )
  }
  
  const renderDescription = () => {
    return (
        <View style={{margin: 10}}>
            <Text>{item.description}</Text>
        </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, marginBottom: 10}}>
        {
            renderImage()
        }
        {
            renderTitle()
        }
        {
            renderDescription()
        }
        </View>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;
