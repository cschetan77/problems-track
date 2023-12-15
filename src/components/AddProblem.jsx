import styles from "../css/AddProblem.module.css";
import classNames from "classnames";
import { problemCategories } from "../constant";
import { useState } from "react";

const AddProblem = () => {
    const [ addProblemForm, setAddProblemForm ] = useState({
        problemName: "",
        problemLink: "",
        problemCategory: "",
        problemDifficulty: "",
        problemNotes: ""
    });

    const formDataChangeHandler = (event) => {
        const { name, value } = event.target;
        setAddProblemForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(addProblemForm);
    }

    return (
        <div className={styles.card}>
            <div>
                <h1 className={classNames(styles.card_heading)}>Add New Problem</h1>
            </div>
            <div>
                <form aria-label="Enter problem details" className={classNames(styles.add_problem_form)}>
                    {/*Problem Name*/}
                    <div className={classNames(styles.problem_name, styles.padding_bottom_10, styles.flex_no_shrink)}>
                        <label htmlFor="add-problem-name">Name: </label>
                        <input
                            id="add-problem-name"
                            type="text"
                            name="problemName"
                            value={addProblemForm.problemName}
                            onChange={formDataChangeHandler}
                            className={styles.problem_name_input}
                        />
                    </div>
                    {/*Problem Link*/}
                    <div className={classNames(styles.problem_link, styles.padding_bottom_10, styles.flex_no_shrink)}>
                        <label htmlFor="add-problem-link">Link:</label>
                        <input
                            type="url"
                            id="add-problem-link"
                            className={styles.problem_link_input}
                            name="problemLink"
                            value={addProblemForm.problemLink}
                            onChange={formDataChangeHandler}
                        />
                    </div>

                    {/*Problem Category*/}
                    <div className={classNames(styles.padding_bottom_10, styles.problem_category, styles.flex_no_shrink)}>
                        <label htmlFor="add-problem-category">Category:</label>
                        <select
                            id="add-problem-category"
                            className={styles.problem_category_select}
                            name="problemCategory"
                            value={addProblemForm.problemCategory}
                            onChange={formDataChangeHandler}
                        >
                            {/*category options*/}
                            {problemCategories.map(category => {
                                return (
                                    <option key={category} value={category}>{category}</option>
                                )
                            })}
                        </select>
                    </div>
                    {/*Problem Difficulty*/}
                    <div className={classNames(styles.add_problem_difficulty_container, styles.padding_bottom_10, styles.flex_no_shrink)}>
                        <label htmlFor="add-problem-difficulty">
                            Difficulty
                        </label>
                        <div className={styles.add_problem_difficulty_radio}>
                            <div>
                                <input id="add_problem_easy" type="radio" value="easy" name="problemDifficulty"
                                    checked={addProblemForm.problemDifficulty === "easy"}
                                    onChange={formDataChangeHandler}
                                    className={styles.problem_difficulty_radio}
                                />
                                <label htmlFor="add_problem_easy">Easy</label>
                            </div>
                            <div>
                                <input id="add_problem_medium" type="radio" value="medium" name="problemDifficulty"
                                    checked={addProblemForm.problemDifficulty === "medium"}
                                    onChange={formDataChangeHandler}
                                    className={styles.problem_difficulty_radio}
                                />
                                <label htmlFor="add_problem_medium">Medium</label>
                            </div>
                            <div>
                                <input id="add_problem_hard" type="radio" value="hard" name="problemDifficulty"
                                    checked={addProblemForm.problemDifficulty === "hard"}
                                    onChange={formDataChangeHandler}
                                    className={styles.problem_difficulty_radio}
                                />
                                <label htmlFor="add_problem_hard">Hard</label>
                            </div>
                        </div>
                    </div>

                    {/*Problem Notes*/}
                    <div className={classNames(styles.add_problem_notes, styles.padding_bottom_10, styles.flex_no_shrink)}>
                        <label htmlFor="add-problem-notes">Notes:</label>
                        <textarea
                            id="add-problem-notes"
                            name="problemNotes"
                            value={addProblemForm.problemNotes}
                            onChange={formDataChangeHandler}
                            className={styles.add_problem_notes_textarea}
                        />
                    </div>
                    {/* Submit */}
                    <button
                        type="submit"
                        onClick={formSubmitHandler}
                        className={styles.add_problem_form_submit_button}
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProblem;
