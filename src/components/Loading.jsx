import LoadingSVG from "../assets/images/loading.svg";
import styles from "../css/Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.main}>
            <text className={styles.loading_text}>Loading</text>
            <div>
                <img src={LoadingSVG} alt="loading" className={styles.loading_svg} />
            </div>
        </div>
    );
}

export default Loading;
