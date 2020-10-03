import * as React from "react";
import styled from 'styled-components'

import { FilterPane } from './FilterPane';
import { RecordList } from './RecordList';
import { PreviewPane } from './Preview';

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
`;

export default function App() {
  return (
    <Wrapper className="App">
      <FilterPane />
      <RecordList />
      <PreviewPane />
    </Wrapper>
  );
}
