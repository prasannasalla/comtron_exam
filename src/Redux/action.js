export const deleteRecord=(payload)=>{
    return{
        type:"DELETE",
        payload,
    }
}
export const editRecord=(payload)=>{
    return{
        type:"EDIT",
        payload,
    }
}
export const saveRecord=(payload)=>{
    return{
        type:"SAVE",
        payload,
    }
}
export const addRecord=(payload)=>{
    return{
        type:"ADD",
        payload,
    }
}
export const addNewRecord=(payload)=>{
    return{
        type:"ADD_NEW",
        payload,
    }
}