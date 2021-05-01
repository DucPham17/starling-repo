import axios from 'axios';
import { SETUP_DASHBOARD } from '../Constant/actionTypes';
import { getToday, toISOString } from '../Helpers/date';
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
        })
        dispatch({
            type: SETUP_DASHBOARD,
            payload: {
                todos,
                expenses
            }
        })
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false));
    }
}