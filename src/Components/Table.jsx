import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteRecord,editRecord,addRecord} from '../Redux/action'
import './Table.css'
export const Table=()=>{
    const dispatch=useDispatch();
    const data=useSelector((state)=>(state.data))
     
    const handleDelete=(recid)=>{
       dispatch(deleteRecord(recid))
    }
    const handleEdit=(el)=>{
        const payload={
            isEdit:true,
            data:el,
        }
        dispatch(editRecord(payload))
    }
    const handleAdd=()=>{
        const payload={
            isAdd:true,
        }
        dispatch(addRecord(payload))
    }
    return(
        <div className="top-container">
            <div className="table-container">
                <table>
                    <tr>
                        <th>Printer</th>
                        <th>Name</th>
                        <th>WorkStation</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        data.map((el)=>(
                            <tr>
                                <td>{el.recid}</td>
                                <td>{el.name}</td>
                                <td>{el.stationnum}</td>
                                <td>{el.prtype}</td>
                                <td>
                                    <button onClick={()=>handleEdit(el)}>EDIT</button>
                                    <button onClick={()=>handleDelete(el.recid)}>DELETE</button>
                                </td>
                            </tr>

                        ))
                    }
                </table><br/>
               
            </div>
            <div className="add-button">
             <button onClick={handleAdd} className="abutton">ADD</button>
            </div>
            
        </div>
    )
}