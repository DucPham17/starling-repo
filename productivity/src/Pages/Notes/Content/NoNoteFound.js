import Lottie from 'react-lottie-player';
import animationData from '../../../Resources/Lotties/no-note-found.json';

export const NoNoteFound = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Lottie
                animationData={animationData}
                loop
                play
                style={{ width: '30rem', height: '30rem' }}
            />
            <h5>Nothing for today. Click add note to add more notes</h5>
        </div>
    )
};