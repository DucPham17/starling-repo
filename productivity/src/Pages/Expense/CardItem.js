import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {deleteData} from '../../Action/expenseAction'
import './Expense.css';
import { ModalTypes } from '../../Constant/modalTypes';
import {setModal} from '../../Action/modalsAction';
import {UpdateAction} from '../../Action/updateAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const CardItem = (item) => {
    const expenseItem = item.item
    const infoUser = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleDelete = (date) => {
        dispatch(deleteData(infoUser.userInfo.uid, date))
    }

    const recent = new Date(expenseItem.date)
    return (
        <tr style={{padding:'1px', fontSize:'18px'}}>
            <td>
                {recent.getMonth() + 1}/{recent.getDate()}/{recent.getFullYear()}
            </td>
            <td>
                {expenseItem.name}
            </td>
            <td>
                {expenseItem.amount}
            </td>
            <td>
                {expenseItem.expenseType}
            </td>
            <td>
                <EditIcon onClick={() => {dispatch(UpdateAction(expenseItem)); dispatch(setModal(ModalTypes.UPDATE))}}> Edit </EditIcon>
            </td>
            <td>
                <DeleteIcon onClick={()=> handleDelete(expenseItem.date)}> Delete </DeleteIcon>
            </td>
        </tr>
    )
} 
export default CardItem