import * as React from 'react';
import {Badge, Button, Form} from 'react-bootstrap';

import Tag from '../../models/tag';
import { TagsManagerWrapper } from './styles';

export interface TagsManagerProps {
    allTags: Array<Tag>
    handleCreateTag: (tagText: string) => void;
}

export const TagsManager: React.FC<TagsManagerProps> = (props: TagsManagerProps) => {
    const inputRef = React.createRef<HTMLInputElement>();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputRef.current === null) {
            return;
        }
        const tagValue = inputRef.current.value;
        props.handleCreateTag(tagValue);
        return false;
    };
    return (
        <TagsManagerWrapper>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='tagCreate'>
                    <Form.Control
                        placeholder="medicine"
                        ref={inputRef}
                    />
                    <Form.Text>
                        Enter the tag you want to create
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h4>Current tags:</h4>
            <div>
                {props.allTags.map(tag => <Badge key={tag.id} pill={true} variant='secondary'>{tag.text}</Badge>)}
            </div>
        </TagsManagerWrapper>
    );
};