import * as React from "react";
import styled from 'styled-components';
import history from 'history/browser';

import { FilterPane } from './FilterPane';
import { RecordList } from './RecordList';
import { PreviewPane } from './Preview';
import Record from "../models/record";
import { Action } from "history";
import { Header } from "./Header";

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
`;

interface AppProps {
    records: Array<Record>
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
            records: props.records,
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
        const record = this.state.records.find(el => el.id === recordId);
        if(!record) {
            return;
        }
        history.push(`/record/${record.id}`);
        document.title = record.title;
        this.setState({shouldShowPreview: true, recordSelected: record});
    }

    onClickHome = () => {
        history.push('/');
        this.onBrowserBack();
    }

    render() {
        return (
            <>
                <Header onClickHome={this.onClickHome} />
                <Wrapper className="App">

                    {this.state.shouldShowPreview && this.state.recordSelected ? (<PreviewPane record={this.state.recordSelected}/>) : (
                        <>
                            <FilterPane />
                            <RecordList records={this.state.records} onRecordClick={this.onRecordClick} />
                        </>
                    )}
                </Wrapper>
            </>
          );
    }
}

export default App;
