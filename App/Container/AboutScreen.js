import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import Header from '../Components/Header';
import {Images} from '../Theme';
function AboutScreen() {
  // Declare a new state variable, which we'll call "count"

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.logo}
            style={{resizeMode: 'contain', width: 100, height: 100}}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 20}}>
            <Text style={{paddingVertical: 10}}>
            Article post is providing the news and articles within different categories (Entertainment, Sport, Technology, Social,....) and it is an app that can help the human to
daily activities. It is very important for people's life currently, because it gains knowledge of
everything like working, news, general knowledge, and technology.
            </Text>
          <Text style={{paddingVertical: 5}}>#5DD, St 371, Sangkat Tik Thla, Khan Sen Sok, Phnom Penh</Text>
          <Text style={{paddingVertical: 5}}>articleposting@gmail.com</Text>
          <Text style={{paddingVertical: 5}}>(+855) 97 46 64 594</Text>
        </View>
      </View>
    </View>
  );
}

export default AboutScreen;
