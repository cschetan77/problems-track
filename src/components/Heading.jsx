import classNames from 'classnames';
import styles from '../css/Heading.module.css';

const Heading = ({ level, text }) => {
    return (
        <div className={classNames({
            [styles[level]]: !!level,
            [styles.heading]: true
        })}>
            {text}
        </div>
    );
}

export default Heading;
