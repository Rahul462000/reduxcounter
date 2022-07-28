export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload:num
    }   
}

export const decNumber = (numm) => {
    return {
        type: "DECREMENT",
        payload: numm
      
    }
}
