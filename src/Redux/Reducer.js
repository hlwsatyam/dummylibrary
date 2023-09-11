import { sear, upd } from "./Action";
export default function reducer(state, action) {
    if (action.type == sear) {
        return action.payload;
    }
    if (action.type == upd) {
        return [action.payload];
    }
    else {

        return null;
    }

}