import { selector } from "recoil";

import { countAtom } from "./count";

export const count_even = selector({
    key: "count_even",
    get: ({get}) => {
        const count = get(countAtom);
        
        if (count % 2 == 0) return true
        else return false
    }
})