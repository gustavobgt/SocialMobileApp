import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import onboardingImage1 from '../../../../../assets/images/onboarding/onboarding-img1.png';
import onboardingImage2 from '../../../../../assets/images/onboarding/onboarding-img2.png';
import onboardingImage3 from '../../../../../assets/images/onboarding/onboarding-img3.png';

export const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={onboardingImage1} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={onboardingImage2} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={onboardingImage3} />,
          title: 'Become The Star',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  );
};
