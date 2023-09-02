const add =()=> {
    const addBar = document.createElement(`div`)
    addBar.classList.add(`add-bar`)
    const addTask = document.createElement(`button`)
    addTask.classList.add(`add-task`)    
    addTask.classList.add(`add`)
    addTask.dataset.type = `Task`
    addTask.innerText = `addTask`
    const addProject = document.createElement(`button`)
    addProject.classList.add(`add-project`)    
    addProject.classList.add(`add`)
    addProject.dataset.type = `Project`
    addProject.innerText = `addProject`
    addBar.appendChild(addTask)
    addBar.appendChild(addProject)    
    return addBar
}

export default add