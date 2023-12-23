import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import styles from "../css/AddJournal.module.css";

const AddJournal = ({ onSave }) => {
    const [ value, setValue ] = useState("");

    const saveJournal = () => {
        // TODO: construct a proper journal object with date and time

        // 2. Call parent save handler with the created object
        onSave(value);
    }

    return (
        <div className={styles.add_journal_container}>
            <h2 className={styles.heading}>Journal Entry</h2>
            <div className={styles.md_editor_container}>
                <MDEditor value={value} onChange={setValue} preview="edit"/>
            </div>
            <button className={styles.save_button} onClick={saveJournal}>Save</button>
        </div>
    );
}

export default AddJournal;
