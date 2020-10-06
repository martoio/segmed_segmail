import styled from 'styled-components';
import { TagsWrapper } from '../TagsPreview/styles';

export const PreviewPaneWrapper = styled.div`
    padding: 8px;
`;

export const ReportWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    & ${TagsWrapper} {
        width: 50%;
        padding: 8px;
    }
`;

export const PreviewBody = styled.div`
    width: 50%;
    padding: 8px;
`;