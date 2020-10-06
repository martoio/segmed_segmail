import * as React from 'react';

import TagsPreview from '../TagsPreview';
import {PreviewPaneWrapper, PreviewBody, ReportWrapper} from './styles';
import Record from '../../models/record';
import Tag from '../../models/tag';

export interface PreviewPaneProps {
    record: Record;
    allTags: Array<Tag>;
}

function useForceUpdate(){
    const [value, setValue] = React.useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

export const PreviewPane: React.FC<PreviewPaneProps> = (props: PreviewPaneProps) => {
    const forceUpdate = useForceUpdate();

    return (
        <PreviewPaneWrapper>
            <h1>{props.record.title}</h1>
            <ReportWrapper>
                <PreviewBody>{props.record.body}</PreviewBody>
                <TagsPreview
                    allTags={props.allTags}
                    activeTags={props.record.tags}
                    handleAddTag={(tag: Tag) => {
                        props.record.addTag(tag)
                        forceUpdate();
                    }
                }
                    handleRemoveTag={(tag: Tag) => {
                        props.record.removeTag(tag)
                        forceUpdate();
                    }
                }
                />
            </ReportWrapper>
        </PreviewPaneWrapper>
    );
};