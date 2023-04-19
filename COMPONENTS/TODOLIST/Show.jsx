import React from 'react'

const Show = (props) => {

    const { settasks, tasks } = props;

    const deleteHanlder = (id) => {
        // console.log(id);

        const filteredTask = tasks.filter((t) => (
            t.id !== id
        ));

        settasks(filteredTask);

    };

    let tasklist = (
        <h1>no task found!</h1>
    );
    if (tasks.length > 0) {
        tasklist = tasks.map((t, i) => (
            <li key={t.id}>
                {t.title}
                <span onClick={() => deleteHanlder(t.id)}>
                    &emsp;&emsp;✂
                </span>
            </li>
        ))
    };

    return (
        <ul>
            {tasklist}
        </ul>
    )
}

export default Show