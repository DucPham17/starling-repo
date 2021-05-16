import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dateToPresentableString } from "../../../Helpers/date";
import { useDate } from "./useDate";
import {
    WiNightClear,
    WiCloud,
    WiSprinkle,
    WiSnow,
    WiRain,
    WiStormShowers,
    WiSmog
} from "react-icons/wi";
import "./index.css";

export const WelcomeModule = () => {
    const {
        date,
        time, 
        timezone
    } = useDate();
    const {
        temp,
        main,
        location
    } = useSelector((state) => state.dashboard.weather);

    const WeatherIcon = {
        Clear: WiNightClear,
        Clouds: WiCloud,
        Drizzle: WiSprinkle,
        Snow: WiSnow,
        Rain: WiRain,
        Thunderstorm: WiStormShowers,
    }[main] || WiSmog;

    return (
        <Card className="welcome-card">
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <div className="d-flex align-items-start">
                            <WeatherIcon
                                style={{
                                    margin: '0 -0.5rem 0 -1.5rem',
                                    strokeWidth: "0"
                                }}
                                size={'10rem'}
                            />
                            <div className="d-flex flex-column align-items-start">
                                <div className="display-4">{`${Math.round(temp)}°F`}</div>
                                <span>{main}</span>
                                <span>{location}</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex flex-column align-items-end">
                        <div className="display-4">{time}</div>
                        <div>{dateToPresentableString(date)}</div>
                        <div>{timezone}</div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};