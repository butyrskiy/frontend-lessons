const todo = {
    'create task list': 'In progress',
    'go to the shop': 'Done',
    'read new article': 'To Do'
}

function addTask(taskName) {
    todo[taskName] = 'To Do';
}

function changeStatus(taskName, status) {
    if (todo[taskName]) {
        todo[taskName] = status;
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

function deleteTask(taskName) {
    if (todo[taskName]) {
        delete todo[taskName];
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

function showList() {
    let isEmpty = true;
    for (let task in todo) {
        console.log(`"${task}": ${todo[task]}`);
        isEmpty = false;
    }
    if (isEmpty) {
        console.log("Nothing is Done");
    }
}

addTask('walk the dog');
changeStatus("read new article", "In progress");
deleteTask('go to the shop');
showList();