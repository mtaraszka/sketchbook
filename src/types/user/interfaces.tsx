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
    name: string,
    email: string,
    password: string
}

export interface SigninInterface {
    email: string,
    password: string
}
