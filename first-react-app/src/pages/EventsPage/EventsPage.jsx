import { useState } from 'react'
import './EventsPage.css'

function EventsPage() {
    const [count, setCount] = useState(5)
    const [inputText, setInputText] = useState('Hello')

    const plus1Handler = () => setCount(count + 1)
    const minus1Handler = () => setCount(count - 1)

    const inputHandler = (event) => setInputText(event.target.value)
    const textChangeHandler = () => setInputText(Math.random().toString().slice(2, 10))

    let textColor = 'green'
    
    if (inputText.length > 12) {
        textColor = 'red' 
    } else if (inputText.length > 8) {
        textColor = 'orange' 
    } else if (inputText.length > 5) {
        textColor = 'white' 
    } 

    return (
        <div id='events-page'>
            <input value={inputText} onChange={inputHandler} type='text' />

            <button onClick={textChangeHandler}>Change Text</button>

            <div>
                <button onClick={plus1Handler}>+1</button>
                <button onClick={minus1Handler}>-1</button>
            </div>

            <h2>{count}</h2>
            <h3 style={{ color: textColor }}>{inputText}</h3>
        </div>
    )
}

export default EventsPage
