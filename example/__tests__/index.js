/**
 * @format
 */

import 'react-native';
import React from 'react';
import Root from '../src/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// eslint-disable-next-line no-undef
it('renders correctly', () => {
    renderer.create(<Root />);
});
