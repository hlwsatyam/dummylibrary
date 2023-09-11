export const upd = "Upd"
export const Alls = "All"
export const sear = "Search"

export function update(data) {
    return {
        type: upd,
        payload: data
    }
}
export function search(data) {
    return {
        type: sear,
        payload: data
    }
}
export function Allsearch(data) {
    return {
        type: Alls,
        payload: data
    }
}