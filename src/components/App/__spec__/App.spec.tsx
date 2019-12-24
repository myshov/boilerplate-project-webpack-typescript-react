import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component "App"', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    // console.log(component.debug())
    expect(component).toMatchSnapshot();
  });
});
