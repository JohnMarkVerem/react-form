import React from "react";
import "./Main.css"
import Form from "./form/Form";

function Main() {
    return(
        <div className="body">
            <div className="header">
                <div className="header_name">
                  <h2>Hello World</h2>
                </div>
              <div className="navbar">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <Form/>
            </div>
            <div>
              <footer>
                <ul>
                  <li><a href="https://poratechacademy.org">Pora Tech Academy</a></li>
                  <li><a href="https://poratechacademy.org">What do you want to know?</a></li>
                  <li><a href="https://poratechacademy.org">Apply now!!</a></li>
                  <li><a href="https://poratechacademy.org">Timetable</a></li>
                  <li><a href="https://poratechacademy.org">Support poratechacademy</a></li>
                </ul>
              </footer>
            </div>
        </div>
    )
}

export default Main;