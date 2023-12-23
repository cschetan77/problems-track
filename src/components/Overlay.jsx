import styles from "../css/Overlay.module.css";

const Overlay = ({ isOpen, showClose=false, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.overlay_background} onClick={onClose}/>
                    <div className={styles.overlay_container}>
                        {showClose && (
                            <div className={styles.overlay_controls}>
                                <button
                                    className={styles.overloay_close_button}
                                    onClick={onClose}
                                >
                                    {"X"}
                                </button>
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Overlay;
