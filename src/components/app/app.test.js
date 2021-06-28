import React from 'react';
import App from './app';
// import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Testing <App/>', () => {
  it('App have rendered correctly', () => {
    const app = renderer.create(<App/>).toJSON();
    // const app = shallow(<App/>);
    expect(app).toMatchSnapshot();
  })
});
