import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';
import {colourStyles} from '../../../Component/Modals/colourStyles';
import { SET_SELECTED_TAG } from "../../../Constant/actionTypes";
import './filter.css';

const tags = [
    {label: 'All', value: '', color: '#5243AA'},
    {label: 'Work', value: 'Work', color: '#5243AA'},
    {label: 'Schoolwork', value: 'Schoolwork', color: '#007bff'},
    {label: 'Errands', value: 'Errands', color: '#FF5630'},
    {label: 'Shopping', value: 'Shopping', color: '#36B37E'},
    {label: 'Personal', value: 'Personal', color: '#FFC400'},
    {label: 'Others', value: 'Others', color: '#e83e8c'},
]


export const Filter = (props) => {
    
    const {selectedTag} = useSelector((state) => state.todos);

    const dispatch = useDispatch();
   
    const onChange = (e) => {
        dispatch({
            type: SET_SELECTED_TAG,
            key: 'selectedTag',
            value: e.value,
        })
    }

    return (
        <div {...props}>
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