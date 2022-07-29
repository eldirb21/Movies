import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../utils/themes/theme-provider';
import AText from '../../components/atoms/a-text';
import FUNC from '../../utils/func';
import AcardDetail from '../../components/molecules/a-cardDetail';
import {useSelector, useDispatch} from 'react-redux';
import {fethMoviesDetails} from '../../redux/actions/moviesActions';

export default function MovieDetail(props) {
  var movie_id = props.route.params.id;
  const {t} = useTranslation();
  const {moviesDetail} = useSelector(state => state.movies);
  const {colors} = useTheme();
  const [details, setdetails] = useState(moviesDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethMoviesDetails(movie_id));
  }, [dispatch]);

  useEffect(() => {
    setdetails(moviesDetail);
  }, [moviesDetail]);

  return (
    <AContainer>
      <AappBar
        onBack={() => props.navigation.goBack()}
        title={t('common:DTF')}
        bordered
      />
      <AContent scroll>
        <AcardDetail
          sourcebg={details.backdrop_path}
          source={details.poster_path}
          vote={details.vote_average}
          title={details.title}
          release_date={details.release_date}
          overview={details.overview}
        />

        <View style={styles.content_bottom}>
          <View style={styles.bottom_left}>
            <AcardDetail
              label={t('common:GEN')}
              lists={details.genres}
              title={'name'}
              listType
            />

            <AcardDetail
              label={t('common:KEY')}
              lists={details.production_companies}
              title={'name'}
              listType
            />
          </View>

          <View style={styles.bottom_right}>
            <View style={styles.mb}>
              <AText style={styles.fonts}>{t('common:STA')}</AText>
              <AText>{details.status}</AText>
            </View>

            <AcardDetail
              label={t('common:ORL')}
              lists={details.spoken_languages}
              title={'name'}
              listType
            />

            <View style={styles.mb}>
              <AText style={styles.fonts}>{t('common:BUD')}</AText>
              <AText>{FUNC.formatCurrency(details.budget)}</AText>
            </View>

            <View style={styles.mb}>
              <AText style={styles.fonts}>{t('common:REV')}</AText>
              <AText>{FUNC.formatCurrency(details.revenue)}</AText>
            </View>

            <AcardDetail
              label={t('common:COU')}
              lists={details.production_countries}
              title={'name'}
              listType
            />
          </View>
        </View>
      </AContent>
    </AContainer>
  );
}

const styles = StyleSheet.create({
  fonts: {
    fontWeight: '700',
  },
  content_bottom: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  bottom_left: {
    width: '60%',
  },
  bottom_right: {
    width: '40%',
  },
  mb: {
    marginBottom: 10,
  },
});
