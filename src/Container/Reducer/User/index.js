import { 
    USER_INFO
} from "../../Actions/Auth/Auth";
import { initState } from "../state";

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_INFO:
            return Object.assign({}, state, {
                userInfo : {...action.user}
            })
        default:
            return state;
    }
}

export default authReducer