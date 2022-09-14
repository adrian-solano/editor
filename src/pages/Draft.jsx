// React
import React, { useState } from 'react';

// Dradt
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function Draft() {

    const BLOCK_TYPE_HEADINGS = [
        { label: "P", style: "" },
        { label: "H1", style: "header-one" },
        { label: "H2", style: "header-two" },
        { label: "H3", style: "header-three" },
        { label: "H4", style: "header-four" },
        { label: "H5", style: "header-five" },
        { label: "H6", style: "header-six" },
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' },
    ]

    const INLINE_STYLE = [
        { label: 'Bold', style: 'BOLD' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' },
    ]

    const [editorState, setEditorState] = useState (
        () => EditorState.createEmpty()
    );

    const handleFormatChange = (e, format) => {

        document.querySelectorAll('.block-type').forEach( item => { item.classList.remove('active') })
        e.target.classList.add('active')
        setEditorState(RichUtils.toggleBlockType(editorState, format))
    }

    const handleStyleChange = (e, style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(e.target.value);
        // you probably want to transform draftjs state to something else, but I'll leave that to you.
        // alert(JSON.stringify(values, null, 2));
    }

    return (
        <div className='main'>
            <div className='wapped'>
                <div className='editor-content'>
                    <div className='keys-content'>
                        {BLOCK_TYPE_HEADINGS.map(( type, index ) => {
                            return <span key={index} className='key-btn block-type' onClick={e => handleFormatChange(e, type.style)}>{type.label}</span>
                        })}
                    </div>
                    <div className='keys-content'>
                        {INLINE_STYLE.map(( type, index ) => {
                            return <span key={index} className='key-btn' onClick={e => handleStyleChange(e, type.style)}>{type.label}</span>
                        })}
                    </div>
                    <div className='editor'>
                        <form onSubmit={handleSubmit}>
                            <Editor editorState={editorState} onChange={setEditorState} placeholder='Texto ...' />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}