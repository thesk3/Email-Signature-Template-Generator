const copySignature  = (state =null, action) => {
    switch (action.type) {
     case 'COPY_SIGNATURE':
         console.log("action-->",action.data);
     return action.data
    
    default:
    return state;
    }
    }
    export default copySignature;