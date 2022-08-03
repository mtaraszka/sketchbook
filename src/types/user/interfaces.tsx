type UserData = {
    id: string,
    name: string,
    email: string,
}


export interface User {
    data: UserData,
    loggedIn: boolean
}

export interface SignupInterface {
    email: string,
    password: string
}
