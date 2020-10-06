import * as React from 'react';
import {shallow, configure, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RecordRow from './';
import Record from '../../models/record';

configure({ adapter: new Adapter() });

const record = new Record(1, 'dummy', 'test');

describe('RecordRow component', () => {
    it('should render correctly', () => {
        const tree = shallow(<RecordRow record={record} onClick={() => {}} />);

        expect(tree).toMatchSnapshot();
    });
})
