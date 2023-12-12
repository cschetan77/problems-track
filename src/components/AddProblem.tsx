import EditorCard from "./EditorCard";
import styles from "../css/AddProblem.module.css";
import classNames from "classnames";

const AddProblem = () => {
    return (
        <div className={styles.card}>
            <div>
                <h1 className={classNames(styles.padding_10, styles.card_heading)}>Add New Problem</h1>
            </div>
            <div>
                <form aria-label="Enter problem details">
                    {/*Problem Name*/}
                    <div className="problem-name">
                        <label htmlFor="add-problem-name">Name: </label>
                        <input
                            id="add-problem-name"
                            className="border-teal-400"
                            type="text"
                        />
                    </div>
                    {/*Problem Link*/}
                    <div className="problem-link">
                        <label htmlFor="add-problem-link">Link:</label>
                        <input
                            type="url"
                            id="add-problem-link"
                            className="border-teal-400"
                        />
                    </div>

                    {/*Problem Category*/}
                    <div className="problem-category">
                        <label htmlFor="add-problem-category">Category:</label>
                        <select
                            id="add-problem-category"
                            className="border-teal-400"
                        >
                            {/* Generate category options*/}
                        </select>
                    </div>
                    {/*Problem Difficulty*/}
                    <div className="problem-difficulty">
                        <label htmlFor="add-problem-difficulty">
                            Difficulty
                        </label>
                        <select
                            id="add-problem-difficulty"
                            className="border-teal-400"
                        >
                            <option value="easy" selected>
                                Easy
                            </option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    {/*Problem Notes*/}
                    <div className="problem-notes">
                        <label htmlFor="add-problem-notes">Notes:</label>
                        <EditorCard
                            id="add-problem-notes"
                            className="border-teal-500 text-green"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProblem;
