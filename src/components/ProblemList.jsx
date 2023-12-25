import ProblemCard from "./ProblemCard";
import styles from "../css/ProblemList.module.css";

const ProblemList = ({ problems }) => {
    return (
        <div className={styles.problem_list_container}>
                {problems.map(problem => (
                        <ProblemCard key={problem.id} problem={problem}/>
                ))}
        </div>
    )
} 

export default ProblemList;
