import React from "react"
import profileImg from "../images/profile__img.png"

function Profile() {
    return(
        <div>
            <img
            id="profile__img"
            src={profileImg}
            alt=""
            />
            <p id="twitter">
                Annette Black
            </p>
            <p id="slack">
                cyriljephery
            </p>
        </div>
    )
}

export default Profile