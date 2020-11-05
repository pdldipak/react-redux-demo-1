import {BUY_PEN} from './penType';
const initialState={
    numberOfPens:15
}

const penReducer=(state=initialState, action)=>{

    switch(action.type){
        case BUY_PEN:return{
            ...state,
            numberOfPens:state.numberOfPens-action.payload
        }
        default:return state;
    }
}

export default penReducer;