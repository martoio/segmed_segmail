import {generateLuceneNOTqueryFormat} from './searchIndex';

describe('#updateNegateFilter', () => {
    it('returns an empty string when the input field is empty', () => {
        const query = generateLuceneNOTqueryFormat('');

        expect(query).toEqual('');
    });

    it('returns strings in Lucene NOT query format', () => {
        const query = generateLuceneNOTqueryFormat('words to exclude');

        expect(query).toEqual('-words -to -exclude');
    });
});