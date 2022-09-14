// React
import React, { useState } from 'react';

// Dradt
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function Draft() {

    const BLOCK_TYPE_HEADINGS = [
        { label: "H1", style: "header-one" },
        { label: "H2", style: "header-two" },
        { label: "H3", style: "header-three" },
        { label: "H4", style: "header-four" },
        { label: "H5", style: "header-five" },
        { label: "H6", style: "header-six" }
    ]

    const [editorState, setEditorState] = useState (
        () => EditorState.createEmpty()
    );

    const handleFormatChange = ( style ) =>{
        setEditorState(RichUtils.toggleBlockType(editorState, style))
    }

    return (
        <div>
            <div>
                {BLOCK_TYPE_HEADINGS.map(type => {
                    return <span style={{ marginRight: '15px' }} onClick={() => handleFormatChange(type.style)}>{type.label}</span>
                })}
            </div>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
}