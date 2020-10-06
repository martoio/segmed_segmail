import * as React from 'react';

import {PreviewPaneWrapper} from './styles';
import Record from '../../models/record';

export interface PreviewPaneProps {
    record: Record;
}

export const PreviewPane: React.FC<PreviewPaneProps> = (props: PreviewPaneProps) => {
    return (
        <PreviewPaneWrapper>
            {props.record.body}
        </PreviewPaneWrapper>
    );
};