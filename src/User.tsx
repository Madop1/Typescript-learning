import React, { useState } from 'react';
import { Userdata } from './interface';



export function User() {
    let [userData, setUserData] = useState<Userdata | any>()
    // console.log(userData)

    const fetchUser = () => {
        setUserData([{
            id: 1,
            name: "maD",
            address: [{
                street: "tata",
                pincode: 6220,
                
            }]

        }])


    };

    return (
        <>

            <button onClick={fetchUser}>Fetch User data</button>

            {/* {console.log("userData", userData)} */}
            {userData && userData.map((listUsers: any, key: any) => {
                return (<div key={key}>
                    <li>{listUsers.name}</li>
                    <li>{listUsers.id}</li>
                    {listUsers.address.map((listAddress: any, key: any) => {
                        return (
                            <div key={key}>

                                <p>{listAddress.street}</p>
                                <p>{listAddress.pincode}</p>

                            </div>
                        )
                    })}
                </div>)
            })}


        </>
    );
}
