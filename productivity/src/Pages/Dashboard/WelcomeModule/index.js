import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dateToPresentableString } from "../../../Helpers/date";

export const WelcomeModule = () => {
    const today = new Date();
    const {displayName} = useSelector((state) => state.user.userInfo);

    const getWelcome = () => {
        if (today.getHours() < 12) {
            return 'Good Morning';
        } else if (today.getHours() < 18) {
            return 'Good Afternoon'
        } else {
            return 'Good Evening';
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{`${getWelcome()}, ${displayName}`}</Card.Title>
                <Card.Text>
                    {`Today is ${dateToPresentableString(today)}`}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};