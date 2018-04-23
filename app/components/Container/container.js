import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import style from './style';

const Container = ({ children }) => (
  <View style={style.container}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
