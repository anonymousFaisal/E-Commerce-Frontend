import React from 'react';
import Layout from '../components/layout/Layout.jsx';
import SliderSkeleton from './../skeleton/SliderSkeleton';
import FeaturesSkeleton from '../skeleton/FeaturesSkeleton.jsx';
import CategoriesSkeleton from './../skeleton/CategoriesSkeleton';
import ProductsSkeleton from '../skeleton/ProductsSkeleton.jsx';
import BrandsSkeleton from '../skeleton/BrandsSkeleton.jsx';

const Homepage = () => {
    return (
        <Layout>
            <SliderSkeleton />
            <FeaturesSkeleton/>
            <CategoriesSkeleton />
            <ProductsSkeleton/>
            <BrandsSkeleton/>
        </Layout>
    );
};

export default Homepage;