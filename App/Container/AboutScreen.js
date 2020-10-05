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
              Are you looking for register your company or business in Cambodia?
              Call Us Now. We are an accounting firm that offers Accounting
              Services & Accounting Software. Business Registration. Bookkeeping
              Services. Accounting Software. Tax Consultant.
            </Text>
          <Text style={{paddingVertical: 5}}>#HH36, St 265, Sangkat Teok Laok III, Khan Toul Kork</Text>
          <Text style={{paddingVertical: 5}}>sam.businesscambodia@gmail.com</Text>
          <Text style={{paddingVertical: 5}}>(+855) 98 850 854</Text>
        </View>
      </View>
    </View>
  );
}

export default AboutScreen;
