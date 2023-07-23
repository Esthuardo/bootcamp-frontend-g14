const taskInput=document.querySelector('.task__input')
const taskAdd=document.querySelector('.task__add')
const taskList=document.querySelector('.task__list')

taskAdd.addEventListener('click',function(event){
    if(taskInput.value===''){
        alert('El campo es requerido')
        return
    }
    const li=document.createElement('li')

    let checkbox=document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    li.appendChild(checkbox)

    let span=document.createElement('span')
    span.innerText=taskInput.value
    li.appendChild(span)

    let button=document.createElement('button')
    button.innerText='Borrar'
    li.appendChild(button)

    taskList.appendChild(li)
    taskInput.value=''
})
taskList.addEventListener('click',function(event){
    const target = event.target
    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('checked')
    }
    if (target.tagName==='BUTTON') {
        target.parentElement.remove()
    }
})