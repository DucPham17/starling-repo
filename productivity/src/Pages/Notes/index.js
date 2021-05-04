import "./notes.css";
import { Options } from "./Options";
import { Content } from "./Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../Action/todosAction";
import { toISOString } from "../../Helpers/date";
import {Filter} from "./Filter";

export const Notes = () => {
    const {selectedDate} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos(uid, toISOString(selectedDate)));
    }, [selectedDate]);

    return (
        <div className="note-page">
            <h1>Notes</h1>
            <div className="note-wrapper">
                <Options className="note-options"/>
                <Filter className="note-filters"
                />
                <Content className="note-content"/>
            </div>
        </div>
    );
};