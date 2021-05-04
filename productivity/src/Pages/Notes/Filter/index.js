import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';
import {colourStyles} from '../../../Component/Modals/colourStyles';
import { DELETE_TODOS, SET_SELECTED_TAG } from "../../../Constant/actionTypes";
import { NoNoteFound } from '../Content/NoNoteFound';
import { NoteItem } from '../Content/NoteItem';
import './filter.css'

const tags = [
    {label: 'All', value: 'Select', color: '#5243AA'},
    {label: 'Work', value: 'Work', color: '#5243AA'},
    {label: 'Errands', value: 'Errands', color: '#FF5630'},
    {label: 'Shopping', value: 'Shopping', color: '#36B37E'},
    {label: 'Personal', value: 'Personal', color: '#FFC400'},
]


export const Filter = () => {
    
    const {todos} = useSelector((state) => state.todos);
    const tagFilter = useSelector(state => state.todos);

    const dispatch = useDispatch();
   
    const onChange = (e) => {
        dispatch({
            type: SET_SELECTED_TAG,
            key: 'selectedTag',
            value: e.value,
        })
    }

    var tagsFiltered =  tags.map((tag) => tag.label === tagFilter.selectedTag)
    console.log(tagsFiltered);


    return (
        <div>
            <b>Filter by tags: </b>
            <Select 
             options={tags}
             defaultValue={tagFilter.selectedTag}
             placeholder='Select a tag'
             onChange={onChange}
             styles={colourStyles}
             >
            {tags.map((tag) => tag.label === tagFilter.selectedTag)}

            </Select>

        </div>
    )

}