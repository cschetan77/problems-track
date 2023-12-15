import { useEffect, useState } from "react";
import styles from "../css/Problems.module.css";
import Loading from "./Loading";
import { problemDataByDate } from "../__tests__/mockData";
import ProblemList from "./ProblemList";
import ProblemAccordian from "./ProblemAccordian";

const ListProblems = () => {
    const [ problemData, setProblemData ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ filter, setFilter ] = useState("");

    // Fetch problems list using the filter state
    useEffect(() => {
        setIsLoading(true);
        // Execute remote call here to fetch data
        setTimeout(() => {
            setProblemData(problemDataByDate);
            setIsLoading(false);
        }, 1000)

    }, [filter]);


    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        console.log(selectedFilter);
        setFilter(selectedFilter);
    }

    return (
        <>
            {isLoading ? (
                // Loading Modal
                <Loading />
            ) : (
                <div className={styles.container}>
                    {/* Page Heading */}
                    <h1 className={styles.page_heading}>Problems List</h1>
                    {/* Filter [Date, Difficulty, Category] */}
                    <div className={styles.filter}>
                        <label>Select filter to list problems by:</label>
                        <div className={styles.filter_radio}>
                            <div>
                                <input
                                    id="filter_date"
                                    type="radio"
                                    value="date"
                                    name="filter"
                                    onChange={handleFilterChange}
                                    checked={filter === "date"}
                                />
                                <label htmlFor="filter_date">Date</label>
                            </div>
                            <div>
                                <input
                                    id="filter_difficulty"
                                    type="radio"
                                    value="difficulty"
                                    name="filter"
                                    onChange={handleFilterChange}
                                    checked={filter === "difficulty"}
                                />
                                <label htmlFor="filter_difficulty">
                                    Difficulty
                                </label>
                            </div>
                            <div>
                                <input
                                    id="filter_category"
                                    type="radio"
                                    value="category"
                                    name="filter"
                                    onChange={handleFilterChange}
                                    checked={filter === "category"}
                                />
                                <label htmlFor="filter_category">
                                    Category
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Problems list in  accordians*/}
                    <div className={styles.problem_list_container}>
                        {
                            // Problem group filter name
                            problemData.map((problemFilter) => (
                                <ProblemAccordian
                                    name={problemFilter.filterValue}
                                >
                                    <ProblemList
                                        problems={problemFilter.data}
                                    />
                                </ProblemAccordian>
                            ))
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default ListProblems;
