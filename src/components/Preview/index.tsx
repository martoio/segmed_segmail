import * as React from 'react';

import {PreviewPaneWrapper} from './styles';
import Record from '../../models/record';

export interface PreviewPaneProps {
    record: Record;
}

export const PreviewPane: React.FC<PreviewPaneProps> = (props: PreviewPaneProps) => {
    return (
        <PreviewPaneWrapper>
            <h1>{props.record.title}</h1>
            <div>
                {props.record.body}
            </div>
        </PreviewPaneWrapper>
    );
};