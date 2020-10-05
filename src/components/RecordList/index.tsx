import * as React from 'react';
import { Table } from 'react-bootstrap';

import { RecordListWrapper } from './styles';
import Record from '../../models/record';

export interface RecordListProps {
    records: Array<Record>
}

const DEFAULT_BODY_LENGTH = 140;

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
                    {props.records.map(record => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.title}</td>
                            <td>{record.body.substring(0, DEFAULT_BODY_LENGTH)}...</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </RecordListWrapper>
    );
};