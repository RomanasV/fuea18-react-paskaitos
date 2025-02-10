import { useState } from 'react'
import './CounterPage.css'

function CounterPage() {
    const initialValue = 5
    const [count, setCount] = useState(initialValue)
    const [grades, setGrades] = useState([1, 5, 8])

    const inputHandler = event => setCount(event.target.value)
    
    // const minus5Handler = () => setCount(prevState => prevState - 5)
    // const minus2Handler = () => setCount(prevState => prevState - 2)
    // const minus1Handler = () => setCount(prevState => prevState - 1)
    // const plus1Handler = () => setCount(prevState => prevState + 1)
    // const plus2Handler = () => setCount(prevState => prevState + 2)
    // const plus5Handler = () => setCount(prevState => prevState + 5)

    const countHandler = num => setCount(prevState => prevState + num)
    
    const resetHandler = () => setCount(initialValue)

    const addGradeHandler = () => setGrades(prevState => [count, ...prevState])

    const deleteGradeHandler = index => {
        setGrades(prevState => {
            const updatedGrades = [...prevState]
            updatedGrades.splice(index, 1)
            return updatedGrades
        })
    }

    const removeAllGradesHandler = () => setGrades([])

    const getColor = num => {
        if (num > 7) {
            return 'green'
        }

        if (num > 4) {
            return 'orange'
        }

        return 'red'
    }

    return (
        <div className='counter-content'>
            <input value={count} onChange={inputHandler} type='number' min='1' max='10' />

            <h3 style={{ color: getColor(count) }}>{count}</h3>

            {/* <button onClick={minus5Handler} disabled={count < 6}>-5</button>
            <button onClick={minus2Handler} disabled={count < 3}>-2</button>
            <button onClick={minus1Handler} disabled={count < 2}>-1</button> */}
           
            <button onClick={() => countHandler(-5)} disabled={count < 6}>-5</button>
            <button onClick={() => countHandler(-2)} disabled={count < 3}>-2</button>
            <button onClick={() => countHandler(-1)} disabled={count < 2}>-1</button>
           
            <button onClick={resetHandler}>Reset</button>

            {/* <button onClick={plus1Handler} disabled={count > 9}>+1</button>
            <button onClick={plus2Handler} disabled={count > 8}>+2</button>
            <button onClick={plus5Handler} disabled={count > 5}>+5</button>
             */}
             
            <button onClick={() => countHandler(1)} disabled={count > 9}>+1</button>
            <button onClick={() => countHandler(2)} disabled={count > 8}>+2</button>
            <button onClick={() => countHandler(5)} disabled={count > 5}>+5</button>
            
            <button onClick={addGradeHandler}>Add Grade</button>
            <button onClick={removeAllGradesHandler}>Remove All Grades</button>

            <h4>{grades.length > 0 ? 'Grades:' : 'No grades yet...'}</h4>

            {grades.length > 0 && (
                <ul>
                    {grades.map((grade, index) => (
                        <li 
                            key={index} 
                            style={{ color: getColor(grade) }}
                        >
                            <span>{grade}</span>
                            <button onClick={() => deleteGradeHandler(index)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CounterPage
