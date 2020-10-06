import * as React from 'react';

import {FilterPaneWrapper} from './styles';
import { Form } from 'react-bootstrap';

export interface FilterPaneProps {
    onNegateUpdate: (terms: string) => void;
    onSearchUpdate: (terms: string) => void;
}

export const updateNegateFilter = (value: string, onNegateUpdate: (terms: string) => void): void => {
    if(value.length === 0) {
        onNegateUpdate('');
        return;
    }
    const words = value.trim().split(' ').map(word => `-${word}`).join(' ');
    onNegateUpdate(words);
};

export const updateSearchFilter = (value: string, onSearchUpdate: (terms: string) => void) => {
    const words = value.trim();
    onSearchUpdate(words);
};

export const FilterPane: React.FC<FilterPaneProps> = (props: FilterPaneProps) => {
    return (
        <FilterPaneWrapper>
            FilterPane
            <Form>
                <Form.Group controlId='shouldBooleanQuery'>
                    <Form.Control
                        placeholder="nobel prize"
                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            updateSearchFilter(e.currentTarget.value, props.onSearchUpdate);
                        }} />
                    <Form.Text>
                        Space separated list of words to search for.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='notBooleanQuery'>
                    <Form.Control
                        placeholder="journal medicine"
                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            updateSearchFilter(e.currentTarget.value, props.onNegateUpdate);
                        }}></Form.Control>
                    <Form.Text>
                        Space separated list of words to exclude.
                    </Form.Text>
                </Form.Group>
            </Form>

        </FilterPaneWrapper>
    );
};