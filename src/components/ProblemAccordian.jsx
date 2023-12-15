import { useState } from 'react';
import styles from '../css/ProblemAccordian.module.css';

const ProblemAccordian = ({ name, children }) => {
    const [ isExpanded, setIsExpanded ] = useState(false);

    const handleHeaderClick = () => {
        setIsExpanded(prevState => (
            !prevState
        ));
    }

    return (
        <div className={styles.accordian}>
            <div className={styles.accordian_header} onClick={handleHeaderClick}>
                <span className={styles.accordian_title}>{name}</span>
                {isExpanded ? <span>{"-"}</span> : <span>{"+"}</span>}
            </div>
            {isExpanded && children}
        </div>
    );
}

export default ProblemAccordian;
