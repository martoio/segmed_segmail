import * as React from 'react';

import {FilterPaneWrapper} from './styles';
import { Form } from 'react-bootstrap';

export interface FilterPaneProps {
    searchTerms: string;
    excludedTerms: string;
    onNegateUpdate: (terms: string) => void;
    onSearchUpdate: (terms: string) => void;
}


export const FilterPane: React.FC<FilterPaneProps> = (props: FilterPaneProps) => {
    return (
        <FilterPaneWrapper>
            FilterPane
            <Form>
                <Form.Group controlId='shouldBooleanQuery'>
                    <Form.Control
                        placeholder="nobel prize"
                        value={props.searchTerms}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onSearchUpdate(e.currentTarget.value.trim())} />
                    <Form.Text>
                        Space separated list of words to search for.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='notBooleanQuery'>
                    <Form.Control
                        placeholder="journal medicine"
                        value={props.excludedTerms}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onNegateUpdate(e.currentTarget.value)}></Form.Control>
                    <Form.Text>
                        Space separated list of words to exclude.
                    </Form.Text>
                </Form.Group>
            </Form>

        </FilterPaneWrapper>
    );
};