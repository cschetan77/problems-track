import { useEffect, useState } from "react";
import styles from "../css/Goals.module.css";
import GoalsCard from "./GoalsCard";
import { goals as mockGoals} from "../__tests__/mockData";
import Heading from "./Heading";
import Overlay from "./Overlay";
import LoadingSpinner from "./LoadingSpinner";

const Goals = () => {
    const [ goals, setGoals ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        // TODO: fetch list of goals.
        setTimeout(() => {
            setGoals(mockGoals);
            setIsLoading(false);
        }, 500);
    }, []);

    const renderGoals = (completed) => goals.map(goal => (
        goal.completed === completed && (
            <GoalsCard
                display={goal.display}
                completeGoalToggle
                completeGoal={() => console.log(`Goal ${!completed && 'completed'}`)}
                goalCompleted={completed}
                key={goal.id}
            />
        )
    ));

    return (
        <div className={styles.goals_container}>
            {/* Add Goal */}
            <div className={styles.add_goal_setion}>
                <Heading level="big" text="Add Goal" />
                <GoalsCard buttonDisplay={`+`}>
                    <input placeholder="Add Goal" className={styles.input} />
                </GoalsCard>
            </div>
            {isLoading ? (
                <Overlay isOpen>
                    <LoadingSpinner />
                </Overlay>
            ) : (
                <>
                    {/* Today's Goals */}
                    <div className={styles.todays_goals}>
                        <Heading level="big" text="Today's Goals" />
                        {renderGoals(false)}
                    </div>
                    {/* Completed Goals */}
                    <div className={styles.completed_goals}>
                        <Heading level="big" text="Completed" />
                        {renderGoals(true)}
                    </div>
                </>
            )}
        </div>
    );
}

export default Goals;
