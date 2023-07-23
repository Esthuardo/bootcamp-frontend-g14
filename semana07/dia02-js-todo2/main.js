const taskInput=document.querySelector('.task__input')
const taskList=document.querySelector('.task__list')

const tasks=[]

taskInput.addEventListener('keypress',function (event) {
    if (event.key==='Enter') {
        const value=event.target.value
        tasks.push(value)
        taskInput.value=''
        renderTasks()
    }
})

function checkTarea(event) {
    event.target.parentElement.classList.toggle('isChecked')

}

function removeTask(event, currentIndex){
    console.log('Eliminando ...',currentIndex)
    event.target.parentElement.remove()
    const newTasks=tasks.filter((task,index)=>index !==currentIndex)
    console.log(newTasks)
    tasks=newTasks
}

function renderTasks() {
    let lista = ' '
    tasks.forEach(function(task,index){
        lista=lista + `
            <li>
                <input type="checkbox" onchange="checkTarea(event)" >
                <span>${task}</span>
                <button onclick="removeTask(event, ${index})">Borrar</button>
            </li>`
    })
    taskList.innerHTML = lista
}

