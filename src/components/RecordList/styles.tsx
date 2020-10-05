import styled from 'styled-components';

export const RecordListWrapper = styled.div`
    flex: 1;
    margin-left: 16px;

    tr {
        cursor: pointer;

        :hover {
            box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)
        }
    }
`;