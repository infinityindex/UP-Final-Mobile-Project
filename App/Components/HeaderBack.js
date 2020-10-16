import React, {useState} from 'react';
import {View, Text, SafeAreaView, Share} from 'react-native';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HeadersBack = (props) => {
  // Declare a new state variable, which we'll call "count"
  const item = props.item;
  console.log('item ', item);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        item.url
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const navigation = useNavigation();
  console.log('navigation', navigation);
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingHorizontal: 10,
      }}>
      <Icon
        onPress={() => navigation.goBack()}
        name="keyboard-arrow-left"
        type="MaterialIcons"
        style={{color: '#ffffff', fontSize: 35}}
      />
      <Icon
        name="school"
        type="MaterialIcons"
        style={{color: '#ffffff', fontSize: 42}}
      />
      <Icon
        onPress={() => onShare()}
        name="share"
        type="MaterialIcons"
        style={{color: '#ffffff', fontSize: 35}}
      />
    </View>
  );
};

export default HeadersBack;
