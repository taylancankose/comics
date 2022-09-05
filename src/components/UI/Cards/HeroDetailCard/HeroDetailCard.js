import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import HeroDetailResults from '../../HeroDetailResults/HeroDetailResults';
import styles from './HeroDetailCard.style';

function HeroDetailCard({detailData}) {
  const renderDetails = ({item}) => {
    return <HeroDetailResults item={item} />;
  };
  return (
    <>
      <FlatList
        data={detailData}
        renderItem={renderDetails}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

export default HeroDetailCard;
