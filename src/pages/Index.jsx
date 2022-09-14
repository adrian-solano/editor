// React
import React, { useState } from 'react';

// Componets
import EditorComponent from '../components/Editor';

// Draft
import { EditorState, RichUtils } from 'draft-js';
// import 'draft-js/dist/Draft.css';

export default function Index() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const toggleStyle = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    }

    const handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return true;
        }
        return false;
      };

    return (
        <div>
            <span onClick={toggleStyle}>H1</span>
            <EditorComponent editorState={editorState} setEditorState={setEditorState} handleKeyCommand={handleKeyCommand} />
        </div>
    );
}