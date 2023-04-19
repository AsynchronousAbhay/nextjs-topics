import React, { useState } from 'react'
import Create from '../COMPONENTS/TODOLIST/Create';
import Show from '../COMPONENTS/TODOLIST/Show';
import Ajax from '@/COMPONENTS/AJAX/Ajax';
import LifeCycle from '@/COMPONENTS/LIFECYCLE/LifeCycle';
import Gallery from '@/COMPONENTS/GALLERY/Gallery';

const index = () => {
  const [tasks, settasks] = useState([]);
  const [isShow, setisShow] = useState(false);


  return (
    <div>
      {/* <Create tasks={tasks} settasks={settasks} /> */}
      <hr />
      {/* <Show tasks={tasks} settasks={settasks} /> */}
      <br />
      {/* <button className='btn btn-success' onClick={() => setisShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button> */}
      <br />
      {/* {isShow ? <Ajax /> : "...loading"} */}
      <br /><br />
      {/* <LifeCycle /> */}
      <br />
      <br />
      <Gallery />
    </div>
  )
}

export default index;