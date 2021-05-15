import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_DATE } from "../../../Constant/actionTypes";
import { Filter } from "../Filter";
import './index.css';

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
                wrapperClassName="date-picker"
                selected={selectedDate}
                onChange={onChange}
                inline
            />
            <Filter className="note-filters"
            />
        </div>
    );
} ;