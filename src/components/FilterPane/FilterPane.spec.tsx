import * as React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {updateNegateFilter, updateSearchFilter, stripLuceneNOTFormat} from './';

configure({ adapter: new Adapter() });

describe('FilterPane', () => {

    describe('#updateNegateFilter', () => {
        let mockOnNegateUpdate = jest.fn();


        beforeEach(() => {
            mockOnNegateUpdate = jest.fn();
        });

        it('returns an empty string when the input field is empty', () => {
            updateNegateFilter('', mockOnNegateUpdate);

            expect(mockOnNegateUpdate).toHaveBeenCalledTimes(1);
            expect(mockOnNegateUpdate).toHaveBeenCalledWith('');
        });

        it('returns strings in Lucene NOT query format', () => {
            updateNegateFilter('words to exclude', mockOnNegateUpdate);

            expect(mockOnNegateUpdate).toHaveBeenCalledTimes(1);
            expect(mockOnNegateUpdate).toHaveBeenCalledWith('-words -to -exclude');
        });
    });

    describe('#updateSearchFilter', () => {
        let mockOnSearchUpdate = jest.fn();

        beforeEach(() => {
            mockOnSearchUpdate = jest.fn();
        });

        it('returns an empty string when the input field is empty', () => {
            updateSearchFilter('', mockOnSearchUpdate);

            expect(mockOnSearchUpdate).toHaveBeenCalledTimes(1);
            expect(mockOnSearchUpdate).toHaveBeenCalledWith('');
        });

        it('returns strings in Lucene SHOULD query format', () => {
            updateSearchFilter('words to include', mockOnSearchUpdate);

            expect(mockOnSearchUpdate).toHaveBeenCalledTimes(1);
            expect(mockOnSearchUpdate).toHaveBeenCalledWith('words to include');
        });
    });

    describe('#stripLuceneNOTFormat', () => {
        it('should convert a Lucene NOT query to a human-readable for', () => {
            const luceneNOTQuery = '-this -is -a -not -query';

            const humanReadable = stripLuceneNOTFormat(luceneNOTQuery);

            expect(humanReadable).toEqual('this is a not query');
        });

        it('should return an empty string on an empty string input', () => {
            const emptyQuery = '';
            const humanReadable = stripLuceneNOTFormat(emptyQuery);

            expect(humanReadable).toBe('');
        });
    })



});
