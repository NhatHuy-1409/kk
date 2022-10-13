import React from 'react';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/en';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import Layout from '.';
import {createIntl, createIntlCache} from '@formatjs/intl'

// addLocaleData(en);
const cache = createIntlCache()

const intl = createIntl(
  {
    locale: 'en',
    messages: {},
  },
  cache
)

export default (props) => (
  <Layout
    {...props}
  />
);