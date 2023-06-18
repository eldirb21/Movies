import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import {useTranslation} from 'react-i18next';
import AContent from '../../components/atoms/a-content';
import {useTheme} from '../../utils/themes/theme-provider';
import AcardItem from '../../components/molecules/a-cardItem';
import {useSelector, useDispatch} from 'react-redux';
import {fethMovies} from '../../redux/actions/moviesActions';

export default function Movies(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.movies);
  const [Items, setItems] = useState(movies);

  useEffect(() => {
    dispatch(fethMovies());
  }, [dispatch]);

  useEffect(() => {
    setItems(movies);
  }, [movies]);

  return (
    <AContainer>
      <AappBar logos bordered title={t('navigate:Movies')} />
      <AContent scroll>
        <View style={{paddingHorizontal: 5}}>
          <View style={styles.card_content}>
            {Items.map((item, index) => {
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
    // alignItems: 'center',
  },
});
