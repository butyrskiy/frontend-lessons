const STATUS = {
    'TODO': 'To Do',
    'IN_PROGRESS': 'In progress',
    'DONE': 'Done'
}

let todo = [
    {name:'create task list', status: STATUS.IN_PROGRESS},
    {name:'go to the shop', status: STATUS.DONE},
    {name:'read new article', status: STATUS.TODO}
]

function addTask(name) {
    todo.push({name, status: STATUS.TODO});
}

function changeStatus(name, status) {
    const task = todo.find(task => task.name === name);
    if (task) {
        task.status = status;
    } else {
        console.log(`Task with name "${name}" not found.`);
    }
}

function deleteTask(name) {
    todo = todo.filter(task => task.name !== name);
}

function showList() {
    for (const status in STATUS) {
        const taskStatus = todo.filter(task => task.status === STATUS[status]);
        if (taskStatus.length === 0) {
            console.log(`\n Nothing is ${STATUS[status]}`);
        } else {
            taskStatus.forEach(task => console.log(`${task.name} - ${task.status}`));
        }
    }
}
addTask("go to the work");
deleteTask("go to the shop");
changeStatus("go to library", STATUS.IN_PROGRESS);
showList();
