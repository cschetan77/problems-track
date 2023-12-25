import { useState } from 'react';
import classNames from 'classnames';
import styles from '../css/GoalsCard.module.css';

const GoalsCard = ({ display, completeGoalToggle, goalCompleted, buttonDisplay, completeGoal, onButtonClick, children }) => {
    const [ completed, setCompleted ] = useState(goalCompleted);
    const completeGoalToggleHandler = () => {
        setCompleted(prevState => !prevState);
        completeGoal();
    }

    return (
        <div className={styles.container}>
            <div className={styles.circle_text_container}>
                {completeGoalToggle && <div className={classNames({
                    [styles.circle]: true,
                    [styles.complete_circle]: completed
                })} onClick={completeGoalToggleHandler} />}
                {display && <span className={styles.display}>{display}</span>}
                {children}
            </div>
            {buttonDisplay && <button className={styles.button} onClick={onButtonClick}>{buttonDisplay}</button>}
        </div>
    );
}

export default GoalsCard;
