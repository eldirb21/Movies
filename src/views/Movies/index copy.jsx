import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import {useTranslation} from 'react-i18next';
import AContent from '../../components/atoms/a-content';
import axios from 'axios';
import Config from 'react-native-config';
import Http, {Client} from '../../utils/https';
import AText from '../../components/atoms/a-text';
import {useTheme} from '../../utils/themes/theme-provider';
import AcardItem from '../../components/molecules/a-cardItem';

export default function Movies(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [loading, setloading] = useState(false);
  const [ItemLatest, setItemLatest] = useState({});
  const [Populars, setPopulars] = useState([]);
  const [top_Rates, settop_Rates] = useState([]);
  const [Upcomings, setUpcomings] = useState([]);
  const [Now_playing, setNow_playing] = useState([]);

  useEffect(() => {
    load();
  }, []);
  const load = () => {
    var populer = `popular?api_key=${Config.API_KEY_V3}&language=en-US&page=1`;
    var top_rated = `top_rated?api_key=${Config.API_KEY_V3}&language=en-US&page=1`;
    var upcoming = `upcoming?api_key=${Config.API_KEY_V3}&language=en-US&page=1`;
    var now_playing = `now_playing?api_key=${Config.API_KEY_V3}&language=en-US&page=1`;
    var latest = `latest?api_key=${Config.API_KEY_V3}`;
    // console.log(Config.API_KEY_V3);
    // console.log(`movie/550?api_key=${Config.API_KEY_V3}`);
    Client.get(populer)
      .then(res => {
        setPopulars(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    Client.get(top_rated)
      .then(res => {
        settop_Rates(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    Client.get(upcoming)
      .then(res => {
        setUpcomings(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });

    Client.get(now_playing)
      .then(res => {
        setNow_playing(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    Client.get(latest)
      .then(res => {
        setItemLatest(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const fetchImg = movie_id => {
    var path = `${movie_id}/images?api_key=${Config.API_KEY_V3}`;

    Client.get(path)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <AContainer>
      <AappBar logos bordered title={t('navigate:Movies')} />
      <AContent scroll>
        <View style={{paddingHorizontal: 5}}>
          <View style={styles.card_content}>
            {movies.map((item, index) => {
              return (
                <AcardItem
                  key={index}
                  onPress={() => props.navigation.navigate('MovieDetail', item)}
                  source={item.poster_path}
                  vote={item.vote_average}
                  title={item.original_title}
                  release_date={item.release_date}
                />
              );
            })}
          </View>
        </View>
      </AContent>
    </AContainer>
  );
}
const styles = StyleSheet.create({
  card_content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card_item: {
    width: '32%',
    marginBottom: 10,
    marginHorizontal: 2,
  },
  logo: {
    height: 170,
    width: '100%',
  },
  rates: {
    position: 'absolute',
    opacity: 0.9,
    backgroundColor: 'hsl(202, 0%, 99%)',
    borderRadius: 100,
    top: 5,
    right: 5,
    padding: 4,
  },
  rate_label: {
    height: 16,
    width: 16,
    textAlign: 'center',
    color: '#000',
  },
  fontBold: {
    fontWeight: '600',
  },
});
