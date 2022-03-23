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



