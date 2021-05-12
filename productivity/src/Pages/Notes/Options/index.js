import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_DATE } from "../../../Constant/actionTypes";
import { toISOString } from '../../../Helpers/date';
import { Filter } from "../Filter";

export const Options = (props) => {
    const {selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();


    const onChange = (selectedDate) => {
        dispatch({
            type: SET_SELECTED_DATE,
            selectedDate
        })
    }

    return (
        <div className={props.className}>
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                inline
            />
            <Filter className="note-filters"
            />
        </div>
    );
} ;