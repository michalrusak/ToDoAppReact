import './styles/Task.scss'

const Task = (props) => { 
    return ( 
        <p className='task' key={props.id}>
            {props.className ? <span className={props.className}>{props.task}</span> : <span>{props.task}</span>}
            {props.changeStatus ? <button className="done-btn" onClick={() => props.changeStatus(props.id)}>done</button> : null}
            <button className='delete-btn' onClick={() => props.delete(props.id)}>delete</button>
        </p>
         );
}
 
export default Task;