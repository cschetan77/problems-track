import AddJournal from "./AddJournal";
import JournalList from "./JournalList";
import styles from "../css/Journal.module.css";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import LoadingSpinner from "./LoadingSpinner";
import { journals as mockJournals } from "../__tests__/mockData";

const Journal = () => {

    const [ journalList, setJournalList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        // TODO: Fetch journal list from server

        setTimeout(() => {
            setIsLoading(false);
            setJournalList(mockJournals);
        }, 500);
    }, []);

    const saveNewJournal = (journal) => {
        // TODO: Remote call to save new journal
        setJournalList((prevJournalList) => {
            return [
                ...prevJournalList,
                journal
            ];
        })
    }

    return (
        <>
            {isLoading && (
                <Overlay isOpen={true}>
                    <LoadingSpinner />
                </Overlay>
            )}
            <div className={styles.journal_container}>
                <AddJournal onSave={saveNewJournal} />
                <JournalList list={journalList} />
            </div>
        </>
    );
}

export default Journal;
