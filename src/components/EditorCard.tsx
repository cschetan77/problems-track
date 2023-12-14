import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import '../css/Draft.css';
import styles from "../css/EditorCard.module.css";

const EditorCard = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <div className={styles.editor_container}>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
}

export default EditorCard;
