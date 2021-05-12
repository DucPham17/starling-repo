import axios from 'axios';
import { SETUP_DASHBOARD } from '../Constant/actionTypes';
import { toISOString } from '../Helpers/date';
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
        
        
        await navigator.geolocation.getCurrentPosition(async (pos) => {
            
            var lat = pos.coords.longitude
            var lng = pos.coords.latitude
            
            console.log(lat);
            console.log(lng);
            const {data: weather} = await axios.get("/api/weather", {
                params: {
                    lat: lat === null? 41.5 : lat,
                    lng: lng === null? -90.547 : lng
                }
            });
            
            dispatch({
                type: SETUP_DASHBOARD,
                payload: {
                    todos,
                    expenses,
                    weather: {
                        ...weather.weather[0],
                        ...weather.main
                    }
                }
            })
        })

       

        

        
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false));
    }
}