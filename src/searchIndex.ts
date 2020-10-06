import lunr from 'lunr';
import Record from './models/record';

const IndexBuilder = new lunr.Builder();
IndexBuilder.ref('id');
IndexBuilder.field('id');
IndexBuilder.field('title');
IndexBuilder.field('body');

export const populateIndex = (records: Array<Record>) => {
    records.forEach(record => {
        IndexBuilder.add(record);
    });
};

export const generateIndex = (records: Array<Record>) => {
    populateIndex(records);
    return IndexBuilder.build();
};

export const generateLuceneNOTqueryFormat = (terms: string) => {
    if(terms.length === 0) {
        return '';
    }
    return terms.trim().split(' ').map(word => `-${word}`).join(' ');
};
