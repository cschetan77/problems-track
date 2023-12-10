import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import '../css/Draft.css';

const EditorCard = ({...customProps}) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <Editor {...customProps} editorState={editorState} onChange={setEditorState} />
    );
}

export default EditorCard;
