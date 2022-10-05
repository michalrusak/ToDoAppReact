import Task from "./Task";

const TaskList = (props) => {
    const activeTasks = props.tasks.filter(task => task.active === true)
    const activeList = activeTasks.map(task => <Task key={props.id} id={task.id} task={task.task} delete={props.delete} changeStatus={props.changeStatus}/>)
    
    const doneTasks = props.tasks.filter(task => task.active === false);
    const doneList = doneTasks.map(task => <Task key={props.id} id={task.id} task={task.task} delete={props.delete} className="done-task"/>)
    return ( 
        <>
        <p className="break"></p>
        {activeList.length > 0 ? <h4>Active tasks</h4> : null}
        {activeList.length > 0 ? activeList: <h4>No tasks!</h4>}
        <p className="break"></p>
        {doneList.length> 0 ? <h4>Done tasks</h4> : null}
        {doneList}
        
        </>
     );
}
 
export default TaskList;