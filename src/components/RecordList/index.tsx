import * as React from 'react';

import { RecordListWrapper } from './styles';

export interface RecordListProps {

}

export const RecordList: React.FC<RecordListProps> = (props: RecordListProps) => {
    return (
        <RecordListWrapper>Records</RecordListWrapper>
    );
};