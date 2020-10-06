import * as React from "react";
import styled from 'styled-components';
import history from 'history/browser';

import { FilterPane } from './FilterPane';
import { RecordList } from './RecordList';
import { PreviewPane } from './Preview';
import Record from "../models/record";
import { Action } from "history";

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

interface AppProps {

}

interface AppState {
    shouldShowPreview: boolean;
    recordSelected: Record | null;
    records: Array<Record>;
}

class App extends React.Component<AppProps, AppState> {
    private historyListenerUnbind: () => void;

    constructor(props: AppProps) {
        super(props);

        this.state = {
            shouldShowPreview: false,
            recordSelected: null,
            records
        };

        this.historyListenerUnbind = history.listen(({ location, action }) => {
            console.log(action, location.pathname, location.state);
            if(action === Action.Pop) {
                this.onBrowserBack();
            }
        });
    }

    componentWillUnmount = () => {
        this.historyListenerUnbind();
    };

    onBrowserBack = () => {
        document.title = 'SegMail';
        this.setState({
            shouldShowPreview: false,
            recordSelected: null,
        });
    }

    onRecordClick = (recordId: number) => {
        console.log(recordId);
        const record = this.state.records.find(el => el.id === recordId);
        if(!record) {
            return;
        }
        history.push(`/record/${record.id}`);
        document.title = record.title;
        this.setState({shouldShowPreview: true, recordSelected: record});
    }

    render() {
        return (
            <Wrapper className="App">
                {this.state.shouldShowPreview && this.state.recordSelected ? (<PreviewPane record={this.state.recordSelected}/>) : (
                    <>
                        <FilterPane />
                        <RecordList records={records} onRecordClick={this.onRecordClick} />
                    </>
                )}
            </Wrapper>
          );
    }
}

export default App;
