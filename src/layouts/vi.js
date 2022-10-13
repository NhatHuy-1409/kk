import React from 'react';
import { addLocaleData } from 'react-intl';

import vi from 'react-intl/locale-data/vi';
import 'intl/locale-data/jsonp/vi';
import Layout from '.';

// addLocaleData(vi);
import {createIntl, createIntlCache} from '@formatjs/intl'

const cache = createIntlCache()

const intl = createIntl(
  {
    locale: 'vi',
    messages: {},
  },
  cache
)

export default (props) => (
  <Layout
    {...props}
  />
);