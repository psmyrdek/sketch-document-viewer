import React from 'react';
import DocumentSelector from './DocumentSelector';
import Header from '../ui/Header';

const Home = () => (
    <div>
        <Header title={'Sketch Document Viewer'}></Header>
        <DocumentSelector />
    </div>
);

export default Home;
