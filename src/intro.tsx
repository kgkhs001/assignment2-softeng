import { useState } from 'react'
import './App.css'

function Intro() {
    const [name, setName] = useState("");
    const editEntry = (): void =>{
        const enteredName: string | null = prompt("Enter name", "");
        setName(enteredName);
    }

    return (
        <>
            <p>
                Hi! My name is <button onClick={editEntry}>{name}</button>, and I am a computer science student at Worcester Polytechnic Institute. This is my first
                ever html page that I've created. This mostly serves as a way to teach myself how to use HTML and CSS
                as a part of the CS3733 Software Engineering Assignment 1 Part 4 directions specify.
              </p>

            <p>
                I love music. I play Trumpet, Guitar, and Piano and enjoy jazz music.
                The music of Herbie Hancock, Horace Silver, and Oliver Nelson (to name a few) are some of
                my favorites.It's not just jazz music. I find myself loving all genres of music, such as
                hip-hop to classic rock to country to metal and everything inbetween. Here are a few
                of my favorite genres
            </p>
        </>
    );
}

export default Intro
