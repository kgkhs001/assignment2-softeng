import './App.css'

function Intro(props:{krishna:string,nick:string}) {

    //Same name always showing up on every button. How to fix?
    return (
        <>
            <p>Writing: {props.nick}</p>
            <p>
                Hi! My name is {props.nick}, and I am a computer science student at
                Worcester Polytechnic Institute. This is my first
                ever html page that I've created. This mostly serves as a way to teach myself how to use HTML and CSS
                as a part of the CS3733 Software Engineering Assignment 1 Part 4 directions specify.
            </p>
            <p>Writing: {props.nick}</p>
            <p>
                I love music. I play Trumpet, Guitar, and Piano and enjoy jazz music.
                The music of Herbie Hancock, Horace Silver, and Oliver Nelson (to name a few) are some of
                my favorites.It's not just jazz music. I find myself loving all genres of music, such as
                hip-hop to classic rock to country to metal and everything inbetween. Here are a few
                of my favorite genres
            </p>

            <p>Writing: {props.krishna}</p>
            <p>On Mondays, if I have time, I like to play Troika which is like an RPG, with my friends. It helps me get
                away from my schoolwork.</p>


            <p>Writing: {props.krishna}</p>
            <p>On the weekends I like to visit my family and collect free food.</p>
        </>
    );
}

export default Intro
