import React from 'react';
import ContentsLayout from '../components/shared/ContentsLayout';
import Layout from '../components/shared/Layout';
import styles from './Explore.module.css';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from '../components/explore/ExploreCard';


const Explore = () => {
  console.log(youtubeData);
  return (
    <Layout activeMenu="explore">
      <ContentsLayout>
        {youtubeData['data'].map(function (data, index) {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
};

export default Explore;