import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import localStore from '../../utils/local-store';
export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      validateSession();
    }, 1500);
  }, []);

  const validateSession = () => {
    // axios
      // .get(
      //   'https://api.themoviedb.org/3/movie/76341?api_key=969025cbf23551ca12b9e12950987578',
      // )
      // .get(
      //   'https://api.themoviedb.org/3/authentication/token/new?api_key=969025cbf23551ca12b9e12950987578',
      // )
      // .then(res => {
			// 	localStore.insert(res.data.request_token,'accessToken')
			// 	props.navigation.navigate('SignIn');
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    // props.navigation.navigate('SignIn');
    props.navigation.navigate('TabNavigation');

	};

  return (
    <View style={style.container}>
      <View style={style.spin}>
        <LottieView
          duration={1800}
          resizeMode="cover"
          source={require('../../assets/loading.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(202, 94%, 24%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spin: {
    height: '30%',
    width: '30%',
  },
});
