"use client"

import { useEffect, useState } from "react";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("/api/admin").then(res => res.json()).then(data => setUsers(data)).catch(err => console.log(err));
    },[users]);

    return (
        <>

        {
            users.map((user:any) => {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                    </div>
                )
            })
        }
        </>
    )

}