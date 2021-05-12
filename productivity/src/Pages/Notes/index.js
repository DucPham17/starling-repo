import "./notes.css";
import { Options } from "./Options";
import { Content } from "./Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodosByTag, getTodos } from "../../Action/todosAction";
import { toISOString } from "../../Helpers/date";
import {Filter} from "./Filter";
import { Card } from "react-bootstrap";

export const Notes = () => {
    const {selectedDate, selectedTag, selectByCompletion} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getTodos(uid, toISOString(selectedDate)));
        dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
    }, [selectedDate]);


    useEffect(() => {
    dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
    }, [selectedTag])

    useEffect(() => {
    dispatch(filterTodosByTag(uid, selectedTag, selectByCompletion, toISOString(selectedDate)))
    }, [selectByCompletion])

    return (
        <div className="note-page">
            <div className="note-wrapper">
                <Options className="note-options"/>
                <Content className="note-content"/>
            </div>
        </div>
    );
};