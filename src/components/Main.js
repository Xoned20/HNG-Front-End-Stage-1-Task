import React from "react"
import profileImg from "../images/profile__img.png"

function Main() {
    return(
        <div className="main__section">
            {/* profile section */}
            <section className="profile">
                <img
                    id="profile__img"
                    src={profileImg}
                    alt=""
                />
                <p id="twitter">
                Annette Black
                </p>
                <p id="slack">
                {/* cyriljephery */}
                </p>
            </section>
            {/* profile section ends */}

            {/* links section */}
            <section className="links">
                <button id="btn__zuri"><a href="https://training.zuri.team/">Twitter Link</a></button>
                <button><a>Zuri Team</a></button>
                <button id="books"><a href="http://books.zuri.team/">Zuri Books</a></button>
                <button id="book__python"><a>Python Books</a></button>
                <button id="pitch"><a href="https://background.zuri.team/">Background Check for Coders</a></button>
                <button id="book__design"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
            </section>
            {/* links section ends */}

        </div>
    )
}

export default Main