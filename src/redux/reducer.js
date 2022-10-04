// import { change } from "./action";
import {ALLOWED,NOTALLOWED} from './action';

// let initial={
//     state:false
// }
// let initial=false;
export function reducer(store,action){
    switch (action.type){
        case ALLOWED:
            
            return {token:true};
        case NOTALLOWED:
            
            return {token:false};
        default:
            return store;
    }
}
