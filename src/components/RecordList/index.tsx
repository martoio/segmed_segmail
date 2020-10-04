import * as React from 'react';
import { Table } from 'react-bootstrap';

import { RecordListWrapper } from './styles';

export interface RecordListProps {

}

export const RecordList: React.FC<RecordListProps> = (props: RecordListProps) => {
    return (
        <RecordListWrapper>
            Records
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Excerpt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto text goes here</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton text goes here</td>
                    </tr>
                </tbody>
            </Table>
        </RecordListWrapper>
    );
};