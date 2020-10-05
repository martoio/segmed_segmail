import * as React from 'react';

import {FilterPaneWrapper} from './styles';
import { Form } from 'react-bootstrap';

export interface FilterPaneProps {

}

export const FilterPane: React.FC<FilterPaneProps> = (props: FilterPaneProps) => {
    return (
        <FilterPaneWrapper>
            FilterPane
            <Form>
                <Form.Group controlId='shouldBooleanQuery'>
                    <Form.Control placeholder=""/>
                    <Form.Text>
                        Space separated list of words to search for.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='notBooleanQuery'>
                    <Form.Control ></Form.Control>
                    <Form.Text>
                        Space separated list of words to exclude.
                    </Form.Text>
                </Form.Group>
            </Form>

        </FilterPaneWrapper>
    );
};