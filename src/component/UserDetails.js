import React from "react";
import { useParams } from "react-router";

function UserDetails() {
    const { userId } = useParams()
    return <div>
    Details about users {userId}
    </div>
}

export default UserDetails;