import './App.css'

function Form() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <form>
                <h2>You want more reccomendations?</h2>
                <label htmlFor="fname">Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <label htmlFor="femail">Email:</label><br/>
                <input type="email" id="femail" name="femail"/><br/>


                <input type="checkbox" id="fnotify" name="fnotify"/>
                <label htmlFor="fnotify"> Notifications? </label><br/>

                <input type="checkbox" id="fterms" name="fterms"/>
                <label htmlFor="fterms">I agree to terms and service </label><br/>

                <p>Enter how long you've been reading manga</p>
                <input type="radio" id="long" name="long"/>
                <label htmlFor="long">Very Long Time</label><br/>

                <input type="radio" id="med" name="long"/>
                <label htmlFor="med">Some time</label><br/>

                <input type="radio" id="never" name="long"/>
                <label htmlFor="never">Never</label><br/>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Form
