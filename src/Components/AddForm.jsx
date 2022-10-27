import {useState,React} from 'react'
import {addNewRecord} from '../Redux/action'
import {useSelector,useDispatch} from 'react-redux'
import './Table.css'
export const AddForm=()=>{
    const init={
       recid:"",
       name:"",
       prtype:"",
       port:"",
       stationnum:"",
       height:"",
       width:"",
       linetonext:"",
       indent:"",
       printbar:"",
       printname:"",
       printtest:"",
       pins:"",
       labelType:"",
       extra:"",
       checksum:"",
       skip:"",

    }
    const dispatch=useDispatch()
    const [input,setInput]=useState(init)
    const handleChange=(e)=>{
        const {name,value,checked}=e.target
        setInput({...input,[name]:value})
    }
    const handleSave=()=>{
        const payload={
            isAdd:false,
            data:input,
        }
        dispatch(addNewRecord(payload))
    }
    return(
        <div className="add-form-container">
        <div className="add-container">
            <h3 className="add-heading">BarCode Printer Information</h3>
            <div>
            <div className="form1">
            <form>
                <h3 className="form-heading">General Info</h3>
                <input type="text" name="recid" value={input.recid} placeholder="Barcode" onChange={handleChange}/><br/>
                <input type="text"  name="name" value={input.name} placeholder="PrinterName" onChange={handleChange}/><br/>
                
                <input type="text"  name="prtype" value={input.prtype} placeholder="PrinterType" onChange={handleChange}/><br/>
                <input type="text"  name="stationnum" value={input.stationnum} placeholder="Workstation Connected" onChange={handleChange}/><br/>
                <input type="text"  name="port"value={input.port} placeholder="Port/Command" onChange={handleChange}/><br/>
            </form>
             </div>
             <div className="form2">
                <form>
                    <h3 className="form-heading">Additional Info</h3>
                    <input type="text" name="height" value={input.height} placeholder="Label Height" onChange={handleChange}/><br/>
                    <input type="text" name="linetonext" value={input.linetonext} placeholder="Lines to next Label" onChange={handleChange}/><br/>
                    <input type="text"  name="width" value={input.width} placeholder="Label Width" onChange={handleChange}/><br/>
                    <input type="text" name="indent" value={input.indent} placeholder="Indent" onChange={handleChange}/><br/>
                    
                    <input type="checkbox" onChange={handleChange}/>Print Barcode<br/>
                    <input type="checkbox" onChange={handleChange}/>Print Tests<br/>
                    <input type="checkbox" onChange={handleChange}/>Print Name<br/>
                    <input type="text"  name="pins" value={input.pins} placeholder="Barcode Type" onChange={handleChange}/><br/>
                    <input type="text" name="labelType" value={input.labelType} placeholder="Label Type" onChange={handleChange}/><br/>
                    <input type="text"  name="extra" value={input.extra} placeholder="Number of Extra Labels"onChange={handleChange}/><br/>
                </form>
             </div>
             <button>CANCEL</button>
             <button onClick={handleSave} className="save">Save</button>
            </div>
        </div>
        </div>
    )
}