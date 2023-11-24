import React from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";

function Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get("filter") === "active"
    return <div>
    <h2>Users-1</h2>
    <h2>Users-2</h2>
    <h2>Users-3</h2>
    <Outlet />
    <div>
    <button onClick={() => setSearchParams({filter: "active"})}>Active Users</button>
    <button onClick={() => setSearchParams({})}>Reset filters</button>
    </div>
    {
        showActiveUsers ? <h2>Show active users</h2> : <h2>Show all users</h2>
    }
    </div>
}

export default Users;