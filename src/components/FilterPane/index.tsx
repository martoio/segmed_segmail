import * as React from 'react';

import {FilterPaneWrapper} from './styles';

export interface FilterPaneProps {

}

export const FilterPane: React.FC<FilterPaneProps> = (props: FilterPaneProps) => {
    return (
        <FilterPaneWrapper>FilterPane</FilterPaneWrapper>
    );
};