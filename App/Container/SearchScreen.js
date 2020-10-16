import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HeaderBacks from '../Components/HeaderBacks';
import axios from 'axios';
import {Item, Input, CardItem, Left, Body, Subtitle} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../Theme';
import API from '../Service/API';

const SearchScreen = (props) => {
  const [search, setSearch] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const navigation = useNavigation();

  const searchContent = (t) => {
    setIsFetch(false);
    axios
      .get(API.search + '?title=' + t)
      .then((res) => {
        const searchData =
          res.data.data.response == false ? [] : res.data.data.data;
        console.log('searchData', searchData);
        setSearch(searchData);
        setIsFetch(true);
      })
      .catch((err) => console.log('error => ', err));
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsDetailScreen', {item: item})}>
        <CardItem
          key={index}
          style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
          <Left>
            {item.article_photo_has_one ? (
              <Thumbnail
                large
                square={true}
                source={{
                  uri: item.article_photo_has_one
                    ? API.imageUrl + item.article_photo_has_one.path
                    : Images.logo,
                }}
              />
            ) : null}
            <Body>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Subtitle style={{color: 'gray', paddingTop: 8, paddingLeft: 5}}>
                Published: {item.published_at} /{' '}
                <Subtitle style={{color: 'gray'}}>
                  Views: {item.amount_viewer}
                </Subtitle>
              </Subtitle>
            </Body>
          </Left>
        </CardItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBacks />
      <View
        style={{
          backgroundColor: 'gray',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Item
          regular
          style={{borderRadius: 10, backgroundColor: '#ffffff', height: 40}}>
          <Input
            placeholder="Searh..."
            onChangeText={(t) => searchContent(t)}
          />
        </Item>
      </View>
      {isFetch == true ? (
        <FlatList
          data={search}
          renderItem={({item, index}) => renderItem({item, index})}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={{textAlign: 'center'}}>no data</Text>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
