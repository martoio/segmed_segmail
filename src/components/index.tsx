import * as React from "react";
import styled from 'styled-components'

import { FilterPane } from './FilterPane';
import { RecordList } from './RecordList';
import { PreviewPane } from './Preview';
import Record from "../models/record";

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
`;

const records: Array<Record> = [
    new Record(1, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
    new Record(2, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
    new Record(3, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
    new Record(4, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
    new Record(5, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
    new Record(6, 'Medical journal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque dolor dolorem quisquam esse eveniet provident, asperiores accusantium tempora sunt eligendi recusandae voluptate sapiente impedit fugiat! Reprehenderit libero quae animi.'),
];

export default function App() {
  return (
    <Wrapper className="App">
      <FilterPane />
      <RecordList records={records} />
    </Wrapper>
  );
}
