import * as React from 'react';

import {PreviewPaneWrapper} from './styles';

export interface PreviewPaneProps {

}

export const PreviewPane: React.FC<PreviewPaneProps> = (props: PreviewPaneProps) => {
    return (
        <PreviewPaneWrapper>Preview</PreviewPaneWrapper>
    );
};