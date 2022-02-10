import instance from "./instance";

export const signup = (users) => {
    const url = "/signup";
    return instance.post(url,users)
}
export const signin = (users) => {
    const url = "/signin";
    return instance.post(url,users)
}