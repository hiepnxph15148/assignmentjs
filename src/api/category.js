import instance from "./instance"

export const olyone = (id) =>{
    const url = `/category/${id}?_embed=products`;
    return instance.get(url)
}
export const getAll = () => {
    const url = `/category`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}