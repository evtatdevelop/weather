import React from 'react';
import RandomLoc from './randomLoc';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';

describe('Testing <RandomLok/>', () => {
  it('RandomLoc have rendered correctly', () => {
    const loc = renderer.create(<RandomLoc/>).toJSON();
    // const loc = shallow(<RandomLoc/>);
    expect(loc).toMatchSnapshot();
  })
});