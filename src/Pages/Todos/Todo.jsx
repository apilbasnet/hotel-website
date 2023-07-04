import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Badge, Table } from 'react-bootstrap';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=100").then((response) => {
            console.log(response);
            setTodos(response.data);
        })

        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })


    }, [])


    return (
        <>
            <div className='flex justify-center text-3xl font-bold my-4'>

                To Do List
            </div>
            <Table className='max-w-full' bordered striped>
                <thead>

                    <tr>
                        <th>S.N</th>
                        <th>User Id</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>View Details</th>
                    </tr>
                </thead>

                <tbody>

                    {todos.map((todo) => {
                        return <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Pending</Badge>}</td>
                            <td className='w-40'>View Details</td>
                        </tr>
                    })}

                </tbody>







            </Table>


        </>
    )
}

export default Todo