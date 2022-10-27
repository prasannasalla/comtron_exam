import {React,useState} from 'react'
import './Table.css'
import {useSelector,useDispatch} from 'react-redux'
import {saveRecord} from '../Redux/action'
export const EditForm=()=>{
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
    const isEdit=useSelector((state)=>state.isEdit)
    const data=useSelector((state)=>state.currentData)
    const [input,setInput]=useState(isEdit?data:init)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
       const {name,value}=e.target
       setInput({...input,[name]:value})
    }
    const handleSave=()=>{
        const payload={
            isEdit:false,
            data:input,
        }
        dispatch(saveRecord(payload))
    }
    return(
        <div>
            <h1>BarCode Printer Information</h1>
            <div>
            <div>
            <form>
                <h3>General Info</h3>
                <input type="text" name="recid" value={input.recid} placeholder="Barcode" onChange={handleChange}/><br/>
                <input type="text"  name="name" value={input.name} placeholder="PrinterName" onChange={handleChange}/><br/>
                <input type="text"  name="prtype" value={input.prtype} placeholder="PrinterType" onChange={handleChange}/><br/>
                <input type="text"  name="stationnum" value={input.stationnum} placeholder="Workstation Connected" onChange={handleChange}/><br/>
                <input type="text"  name="port"value={input.port} placeholder="Port/Command" onChange={handleChange}/><br/>
            </form>
             </div>
             <div>
                <form>
                    <h3>Additional Info</h3>
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
             <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}