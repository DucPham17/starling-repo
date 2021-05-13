import axios from 'axios';
import { SETUP_DASHBOARD } from '../Constant/actionTypes';
import { toISOString } from '../Helpers/date';
import { getPosition } from '../Helpers/weather';
import { setLoading } from './pageStatusAction';

export const setupDashboard = () => async (dispatch, getState) => {
    const {uid} = getState().user.userInfo;
    const today = new Date();
    dispatch(setLoading(true));
    try {
        const {data: todos} = await axios.get("/api/tasks/gettasks", {
            params: {
                userId: uid,
                date: toISOString(today)
            }
        });

        const {data: expenses} = await axios.get("/api/expenses/filterexpenses", {
            params: {
                userId: uid,
                choiceDate: 'Today'
            }
        });
        
        const {
            latitude,
            longitude
        } = await getPosition();
        
        const {data: weather} = await axios.get("/api/weather", {
            params: {
                lat: latitude,
                lng: longitude
            }
        });
        
        dispatch({
            type: SETUP_DASHBOARD,
            payload: {
                todos,
                expenses,
                weather: {
                    ...weather.weather[0],
                    ...weather.main,
                    location: weather.name
                }
            }
        });  
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false));
    }
}