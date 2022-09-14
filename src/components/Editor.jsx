// React
import React, { useEffect, useState } from 'react';

// Draft
import { Editor, EditorState } from 'draft-js';

export default function EditorComponent({ editorState, setEditorState, handleKeyCommand }) {
    console.log('render');
    return <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} spellCheck={true} />;
}