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
import {Title} from 'react-native-paper';
import API from '../Service/API';
import {ScrollView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
const NewsDetailScreen = (props) => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const navigation = useNavigation();
  const item = props.route.params.item;
  console.log('item => ', item);
  const renderImage = () => {
    return (
      <View style={{margin: 10, alignItems: 'center'}}>
        <Image
          source={{
            uri: item.article_photo_has_one
              ? API.imageUrl + item.article_photo_has_one.path
              : Images.logo,
          }}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2.5,
          }}
        />
      </View>
    );
  };

  const renderTitle = () => {
    return (
      <View style={{margin: 10}}>
        <Title>{item.title}</Title>
        {item.article_writer ? (
          <Text>{`${item.published_at} / ${item.article_writer.f_name} ${item.article_writer.l_name}`}</Text>
        ) : null}
      </View>
    );
  };
  
  const renderCredit = () => {
    return (
      <View style={{margin: 10}}>
        {item.article_writer ? (
          <Text>{`${item.published_at} / ${item.article_writer.f_name} ${item.article_writer.l_name}`}</Text>
        ) : null}
      </View>
    );
  }

  const renderDescription = () => {
    return (
      <View style={{margin: 10}}>
        <Text>{item.content}</Text>
      </View>
    );
  };

  const renderVideo = () => {
    return (
      <View style={{margin: 10}}>
        <WebView
          source={{uri: item.video_link}}
          style={{width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 2.5,}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <View style={{flex: 1, marginBottom: 10}}>
          {renderImage()}
          {renderTitle()}
          {renderDescription()}
          {renderVideo()}
          {renderCredit()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;
