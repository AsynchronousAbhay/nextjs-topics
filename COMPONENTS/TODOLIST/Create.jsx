import React, { useRef, useState } from 'react'
import { nanoid } from "nanoid";
import css from "../../styles/Create.module.css";


const Create = (props) => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [error, seterror] = useState(false)
    const [descerror, setdescerror] = useState(false)
    const inpuTref = useRef();

    const { tasks, settasks } = props;

    const submitHandler = (e) => {
        e.preventDefault();

        const todo = {
            id: nanoid(),
            title,
            desc
        };

        // console.log(todo);
        // const copyTasks = [...tasks];
        // copyTasks.push(todo);
        // setTasks(copyTasks);"

        let inputlength = inpuTref.current.value.length;

        if (inputlength >= 4) {
            seterror(false);
        } else {
            seterror(true)
        }

        settasks([...tasks, todo]);
        settitle('')
        setdesc('')
        // console.log(tasks)
    };

    const styling = {
        color: "grey",
        fonsize: "10px",
        textAlign: "center"
    };

    const onchangeDesc = () => {
        let descInputlength = inpuTref.current.value.length;

        if (descInputlength >= 4) {
            setdescerror(false);
        } else {
            setdescerror(true)
        }
    }

    return (
        <div>
            {/* extrenal css */}
            <h1 className='parent_head-title'>Create Task</h1>
            {/* internal css */}
            <p style={styling}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus molestias ducimus iure beatae fugiat.</p>
            <form onSubmit={submitHandler}>
                {/* inline css */}
                <input ref={inpuTref} style={{ border: "1px solid yellow" }} type="text" placeholder='title' value={title} onChange={(e) => settitle(e.target.value)} />
                <small className={css.error}>
                    {error && "input must be filled!"}
                </small>
                <input ref={inpuTref} type="text" placeholder='desc' value={desc} onChange={(e) => {
                    setdesc(e.target.value)
                    onchangeDesc()
                }} />
                <small className={css.error}>
                    {descerror && "input must be filled!"}
                </small>
                <br /><br />
                {/* module.css */}
                <button className={css.btn}>create</button>
            </form>
        </div>
    )
}

export default Create