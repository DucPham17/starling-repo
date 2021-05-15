import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const styles = {
    wrapper: {
        position: 'absolute',
        zIndex: 1999,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    innerWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    spinner: {
        margin: '1rem',
        backgroundColor: '#b2dfdb'
    }
}

export const FullPageLoading = () => {
    const {loadingQueue} = useSelector((state) => state.pageStatus);

    return Boolean(loadingQueue > 0) && 
        <div style={styles.wrapper}>
            <div style={styles.innerWrapper}>
                <Spinner
                    animation="grow"
                    style={styles.spinner}
                />
                <Spinner
                    animation="grow"
                    style={styles.spinner}
                />
                <Spinner
                    animation="grow"
                    style={styles.spinner}
                />
            </div>
        </div>;
};