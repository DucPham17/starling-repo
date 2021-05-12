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
            <h5>Nothing for today. Click add note to add more notes</h5>
        </div>
    )
};