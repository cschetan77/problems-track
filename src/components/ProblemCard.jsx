import styles from '../css/ProblemCard.module.css';

const ProblemCard = ({ problem }) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_name}>
                {/* Problem Name */}
                <span className={styles.problem_name}>{problem.name}</span>
            </div>
            <div className={styles.card_more_details}>
                {/* More Details */}
                <span>More -{">"}</span>
            </div>
        </div>
    );
}

export default ProblemCard;
