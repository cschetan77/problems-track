import Accordian from "./Accordian";
import JournalCard from "./JournalCard";
import styles from "../css/JournalList.module.css";

const JournalList = ({ list }) => {

    const renderJournals = () => (
        list.map(journal => {
            return (
                <Accordian name={journal.date}>
                    <JournalCard content={journal.data} />
                </Accordian>
            );
        })
    )

    return (
        <div className={styles.journal_list_container}>{renderJournals()}</div>
    );
}

export default JournalList;
