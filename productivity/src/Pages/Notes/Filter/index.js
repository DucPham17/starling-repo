import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';
import {colourStyles} from '../../../Component/Modals/colourStyles';
import { SET_SELECTED_TAG } from "../../../Constant/actionTypes";
import './filter.css';

const tags = [
    {label: 'All', value: '', color: '#5243AA'},
    {label: 'Work', value: 'Work', color: '#5243AA'},
    {label: 'Errands', value: 'Errands', color: '#FF5630'},
    {label: 'Shopping', value: 'Shopping', color: '#36B37E'},
    {label: 'Personal', value: 'Personal', color: '#FFC400'},
]


export const Filter = () => {
    
    const {todos, selectedTag} = useSelector((state) => state.todos);

    const dispatch = useDispatch();
   
    const onChange = (e) => {
        dispatch({
            type: SET_SELECTED_TAG,
            key: 'selectedTag',
            value: e.value,
        })
    }

    // var tagsFiltered =  tags.map((tag) => tag.label === tagFilter.selectedTag)
    // console.log(tagsFiltered);

    


    return (
        <div>
            <b>Filter by tags: </b>
            <Select 
             options={tags}
             defaultValue={selectedTag}
             placeholder='Select a tag'
             onChange={(e) => onChange(e)}
             styles={colourStyles}
             >
            </Select>

        </div>
    )

}