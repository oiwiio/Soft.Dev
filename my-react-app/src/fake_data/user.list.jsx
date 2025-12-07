import React from "react";
import { users } from "./data"; 

export const UserList = () => {
    return (
        <div> 
            <h2> users </h2>
            <ul> {users.map(user => (
                <li key={user.id}> 
                <strong>{user.name}</strong>
                </li>
            ))} 
            </ul>
        </div>
    )
}