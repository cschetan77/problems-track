import MDEditor from "@uiw/react-md-editor";
import styles from "../css/JournalCard.module.css";

const JournalCard = ({ content }) => {
    return (
        <div className={styles.card_container}>
            <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}

export default JournalCard;
