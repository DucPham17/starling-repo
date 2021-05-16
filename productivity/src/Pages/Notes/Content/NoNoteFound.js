import Lottie from 'react-lottie-player';
import animationData from '../../../resources/Lotties/no-note-found.json';

export const NoNoteFound = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Lottie
                animationData={animationData}
                loop
                play
                style={{ width: '15rem', height: '15rem' }}
            />
            <h5>You don't have any notes for today. Add more!</h5>
        </div>
    )
};