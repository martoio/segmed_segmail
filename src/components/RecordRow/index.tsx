import * as React from 'react';

import Record from '../../models/record';

interface RecordRowProps {
    record: Record;
    onClick: (e: React.MouseEvent) => void;
}

const DEFAULT_BODY_LENGTH = 140;

export const RecordRow = (props: RecordRowProps) => {
    const { record } = props;
    return (
        <tr
            onClick={props.onClick}
        >
            <td>{record.id}</td>
            <td>{record.title}</td>
            <td>{record.body.substring(0, DEFAULT_BODY_LENGTH)}...</td>
        </tr>
    );
};

export default RecordRow;