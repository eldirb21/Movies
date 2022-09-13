import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import localStore from '../../utils/local-store';
import axios from 'axios';

export default function SignIn() {
  const doLogin = () => {
  console.log('hallow');
    var Token = localStore.get('accessToken');
    // axios
    //   .get(
    //     'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=969025cbf23551ca12b9e12950987578',
    //     {
    //       username: 'eldiro',
    //       password: '@135790eL',
    //       request_token: Token,
    //     },
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);https://api.themoviedb.org/4/list/
    //   });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/76341?api_key=969025cbf23551ca12b9e12950987578',
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // props.navigation.navigate('SignIn');
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => doLogin()}
        style={{
          backgroundColor: 'grey',
          padding: 10,
        }}
      >
        <Text>doLogin</Text>
      </TouchableOpacity>
    </View>
  );
}
