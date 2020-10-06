import * as React from 'react';
import { Badge } from 'react-bootstrap';

import { TagsWrapper, ActiveTagsWrapper, InactiveTagsWrapper } from './styles';
import Tag from '../../models/tag';

interface TagsPreviewProps {
    allTags: Array<Tag>;
    activeTags: Array<Tag>;
    handleRemoveTag: (tag: Tag) => void;
    handleAddTag: (tag: Tag) => void;
}

export const TagsPreview: React.FC<TagsPreviewProps> = (props: TagsPreviewProps) => {
    const inactiveTags = props.allTags.filter(tag => props.activeTags.indexOf(tag) === -1);

    return (
        <TagsWrapper>
            <h4>ActiveTags:</h4>
            <ActiveTagsWrapper>
                {props.activeTags.map(tag => <Badge onClick={() => props.handleRemoveTag(tag)} key={tag.id} pill variant={'primary'}>{tag.text}</Badge>)}
            </ActiveTagsWrapper>
            <h4>InactiveTags:</h4>
            <InactiveTagsWrapper>
                {inactiveTags.map((tag) => <Badge onClick={() => props.handleAddTag(tag)} key={tag.id} pill variant={'danger'}>{tag.text}</Badge>)}
            </InactiveTagsWrapper>
        </TagsWrapper>
    );
};

export default TagsPreview;