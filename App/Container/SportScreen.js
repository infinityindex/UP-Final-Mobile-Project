import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  RefreshControl,
} from 'react-native';
import Header from '../Components/Header';
import axios from 'axios';
import { Content, CardItem, Left, Thumbnail, Body, Subtitle } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import API from '../Service/API';
import { Images } from '../Theme';
import { Title } from 'react-native-paper';

const SportScreen = (props) => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [ads, setAds] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    getlist(1);
  }, []);
  console.log('this.prosp => ', props.route);
  const getlist = async () => {
    await axios
      .get(API.sport_list)
      .then((temp) => {
        const tmpdata = temp.data.data;
        setData(tmpdata);
        setIsFetch(true);
        console.log('res', tmpdata);
      })
      .catch((err) => console.log(err));
    return () => {
      setIsFetch(true);
    };
  };
  const loadMoreList = () => {
    const pageNum = page + 1;
    console.log(page);
    setPage(pageNum);
    axios
      .get(API.sport_list + '?page=' + pageNum)
      .then((temp) => {
        const tmpdata = temp.data.data;
        const allData = Array.isArray(data) == true ? data : [data];
        const pageData = allData.concat(tmpdata);
        console.log('load data => ', tmpdata);
        setData(pageData);
        setIsFetch(true);
      })
      .catch((err) => console.log(err));
    return () => {
      setIsFetch(true);
    };
  };

  const renderItem = ({ item, index }) => {
    return index == 0 ? (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsDetailScreen', { item: item })}>
        <Image
          source={{
            uri: item.article_photo_has_one
              ? API.imageUrl + item.article_photo_has_one.path
              : Images.logo,
          }}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2.6,
          }}
        />
        <Title style={{ padding: 7, fontSize: 15, lineHeight: 17 }}>
          {item.title}
        </Title>
        <Subtitle
          style={{
            textAlign: 'left',
            color: 'gray',
            fontSize: 12,
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          Published: {item.published_at} /{' '}
          <Subtitle style={{ color: 'gray' }}>
            Views: {item.amount_viewer}
          </Subtitle>
        </Subtitle>
      </TouchableOpacity>
    ) : (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetailScreen', { item: item })}>
            <CardItem
              key={index}
              style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}>
              <Left>
                {
                  item.article_photo_has_one ?
                    <Thumbnail
                      large
                      square={true}
                      source={{
                        uri: item.article_photo_has_one
                          ? API.imageUrl + item.article_photo_has_one.path
                          : Images.logo,
                      }}
                    /> : null
                }
                <Body>
                  <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                    <Subtitle style={{ color: 'gray' }}>
                      {item.article_writer ? (
                        <Text>{`${item.published_at} / ${item.article_writer.f_name} ${item.article_writer.l_name}`}</Text>
                      ) : null}
                    </Subtitle>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>
          {(index + 1) % 5 == 0 ? (
            <View>
              <Image source={Images.ads} />
            </View>
          ) : null}
        </View>
      );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      {isFetch == true ? (
        <FlatList
          data={data}
          renderItem={({ item, index }) => renderItem({ item, index })}
          keyExtractor={(item) => item.key}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getlist()}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreList()}
        />
      ) : (
          <Text style={{ textAlign: 'center' }}>no data</Text>
        )}
    </SafeAreaView>
  );
};

export default SportScreen;

