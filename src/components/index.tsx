import * as React from "react";
import styled from 'styled-components';
import history from 'history/browser';

import { FilterPane } from './FilterPane';
import { RecordList } from './RecordList';
import { PreviewPane } from './Preview';
import Record from "../models/record";
import { Action } from "history";
import { Header } from "./Header";
import { generateIndex } from '../searchIndex';
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
    filterSet: Set<number>;
    searchIndex: lunr.Index;
    excludedSearchTerms: string;
    includedSearchTerms: string;
}

class App extends React.Component<AppProps, AppState> {
    private historyListenerUnbind: () => void;

    constructor(props: AppProps) {
        super(props);
        const searchIndex = generateIndex(props.records);

        this.state = {
            shouldShowPreview: false,
            recordSelected: null,
            records: props.records,
            filterSet: new Set(),
            searchIndex,
            excludedSearchTerms: '',
            includedSearchTerms: '',
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

    componentDidMount = () => {
        this.search();
    }

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

    onSearchUpdate = (terms: string) => {
        this.setState({
            includedSearchTerms: terms,
        }, this.search);
    };

    onNegateUpdate = (terms: string) => {
        console.log(terms);
        this.setState({
            excludedSearchTerms: terms,
        }, this.search);
    };

    search = () => {
        const blankFilterSet: Set<number> = new Set();
        const searchQuery = `${this.state.includedSearchTerms} ${this.state.excludedSearchTerms}`;
        console.log(searchQuery);
        const results = this.state.searchIndex.search(searchQuery);

        results.forEach(res => blankFilterSet.add(parseInt(res.ref)));
        this.setState({
            filterSet: blankFilterSet,
        })
    };

    getFilteredRecords = () => {
        return this.state.records.filter((record) => this.state.filterSet.has(record.id));
    }

    render() {
        console.log(this.state.filterSet);
        return (
            <>
                <Header onClickHome={this.onClickHome} />
                <Wrapper className="App">

                    {this.state.shouldShowPreview && this.state.recordSelected ?
                        (<PreviewPane record={this.state.recordSelected}/>) :
                        (
                            <>
                                <FilterPane onNegateUpdate={this.onNegateUpdate} onSearchUpdate={this.onSearchUpdate} />
                                <RecordList records={this.getFilteredRecords()} onRecordClick={this.onRecordClick} />
                            </>
                        )}
                </Wrapper>
            </>
          );
    }
}

export default App;
