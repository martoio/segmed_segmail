import Record from './record';
import Tag from './tag';

describe('Record model', () => {
    describe('#addTag', () => {
        it('should add a tag', () => {
            const record = new Record(1, 'test', 'test');

            expect(record.tags).toHaveLength(0);

            record.addTag(new Tag(1, 'dummy'));

            expect(record.tags).toHaveLength(1);
        });

        it('should add a tag immutably', () => {
            const record = new Record(1, 'test', 'test');
            const oldTagsPointer = record.tags;

            expect(record.tags).toHaveLength(0);

            record.addTag(new Tag(1, 'dummy'));
            const newTagsPointer = record.tags;

            expect(record.tags).toHaveLength(1);
            expect(oldTagsPointer).not.toEqual(newTagsPointer);
        });
    });

    describe('#removeTag', () => {
        it('should remove a tag', () => {
            const record = new Record(1, 'test', 'test');
            const tag = new Tag(1, 'dummy');
            expect(record.tags).toHaveLength(0);
            record.addTag(tag);
            expect(record.tags).toHaveLength(1);

            record.removeTag(tag);

            expect(record.tags).toHaveLength(0);
        });
    });
});
