import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        //   creation of lifecyle
        console.log("your component is created!");
        // destruction... 
        return () => {
            // alert('you want to leave this page!')
            console.log("your component is deleted!");
        }
    }, [password, username])


    return (
        <div>
            <h1>Username : {username}</h1>
            <button onClick={() => setusername("Jhon Doe")}>Username</button>
            <h1>Password : {password}</h1>
            <button onClick={() => setpassword("123456")}>Password</button>
        </div>
    )
}

export default LifeCycle