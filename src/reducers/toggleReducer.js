
const toggleReducer  = (state = {isToggleOn: true}, action) => {
    switch (action.type) {
     case 'TAB_TOGGLE':
         console.log("action-->",action.data);
     return action.data
    
    default:
    return state;
    }
    }
    export default toggleReducer;