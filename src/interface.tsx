//Defining props using interface
export interface propsApp {
    propName: string;
    //optional props
    propNumber?: number;

}

export interface Userdata {
    id: number,
    name: string,
    address: {
        street: string,
        pincode: number,
    }[]
}[]


export interface Cakes {
    numberOfCakes: number;
}



export interface CrudAPP {
    users: Users[]
}

export interface Users {
    name: string,
    email: string,
    contact: string,
    id: string,
    data?: string[],
    filter?: any,
}[]

