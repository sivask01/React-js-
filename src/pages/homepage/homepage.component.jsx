import React from 'react';
// components
import Directory from '../../components/directory/directory.component';
// styles
import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
    <HomePageContainer>
        < Directory />
    </HomePageContainer>
)

export default HomePage;