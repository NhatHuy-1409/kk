import React from 'react';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/en';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import Layout from '.';

addLocaleData(en);

export default (props) => (
  <Layout
    {...props}
  />
);