const init=
{
    isEdit:false,
    isAdd:false,
    currentData:{},
    data:
[{

name: "99AS",

stationnum: "99",

port: "1",

prtype: "advantage",

height: 1,

width: 5,

linetonext: 1,

printbar: "Y",

printname: "Y",

printtest: "Y",

pins: "bar128c",
extra: 99,

checksum: "Y",

skip: "Y",

indent: 11,

labelType: "S",

filler: "",

recid: 20

},

{

name: "COIN",
stationnum: "99",

port: "1",

prtype: "zebra",

height: 1,

width: 5,

linetonext: 1,

printbar: "Y",

printname: "Y",

printtest: "Y",

pins: "bar39",

extra: 99,

checksum: "Y",

skip: "Y",

indent: 11,

labelType: "SRC",

filler: "",

recid: 21

}]
}
export const reducer=(state=init,action)=>{
        const {type,payload}=action
        switch(type){
            case "DELETE":
                const filteredData=state.data.filter((el)=>el.recid !==payload)
                return{
                    ...state,
                    data:filteredData,
                }
            case "EDIT":
                return{
                    ...state,
                    isEdit:payload.isEdit,
                    currentData:payload.data
                } 
            case "SAVE":
                const index=state.data.findIndex((el)=>el.id==payload.data.id)
                const newData=[...state.data]
                newData[index]=payload.data
                return{
                    ...state,
                    isEdit:false,
                    data:newData,
                } 
            case "ADD":
                return{
                    ...state,
                    isAdd:payload.isAdd,
                }    
            case "ADD_NEW":
                return{
                    ...state,
                    data:[...state.data,payload.data],
                    isAdd:payload.isAdd,
                }          
            default:
                console.log(state)
                return{
                    ...state,
                }    
        }
    
}