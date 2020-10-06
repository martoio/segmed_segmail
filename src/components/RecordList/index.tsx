import * as React from 'react';
import { Table } from 'react-bootstrap';

import Record from '../../models/record';
import RecordRow from '../RecordRow';
import { RecordListWrapper } from './styles';

export interface RecordListProps {
    records: Array<Record>;
    onRecordClick: (id: number) => void;
}

export const RecordList: React.FC<RecordListProps> = (props: RecordListProps) => {
    return (
        <RecordListWrapper>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {props.records.map(record => <RecordRow key={record.id} record={record} onClick={() => props.onRecordClick(record.id)}/>)}
                </tbody>
            </Table>
        </RecordListWrapper>
    );
};