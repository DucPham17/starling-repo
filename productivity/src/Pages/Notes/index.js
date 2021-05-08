import "./notes.css";
import { Options } from "./Options";
import { Content } from "./Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodosByTag, getTodos } from "../../Action/todosAction";
import { toISOString } from "../../Helpers/date";
import {Filter} from "./Filter";

export const Notes = () => {
    const {selectedDate, selectedTag, selectByCompletion} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getTodos(uid, toISOString(selectedDate)));
        dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
    }, [selectedDate]);

    console.log(selectedTag);

     useEffect(() => {
        dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
     }, [selectedTag])

     useEffect(() => {
        dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
     }, [selectByCompletion])

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