const STATUS = {
    'TODO': 'To Do',
    'IN_PROGRESS': 'In progress',
    'DONE': 'Done'
}
const todo = {
    'create task list': STATUS.IN_PROGRESS,
    'go to the shop': STATUS.DONE,
    'read new article': STATUS.TODO
}

function addTask(taskName) {
    todo[taskName] = STATUS.TODO;
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

let checkDone = false;
let checkInProgress = false;
let checkTodo = false;

function showList() {
for (key in todo) {
    if (todo[key] === STATUS.DONE) {
        console.log(`${key} - ${todo[key]}`);
checkDone = false;
    }
    if (todo[key] === STATUS.IN_PROGRESS) {
        console.log(`${key} - ${todo[key]}`);
    checkInProgress = false;
    }
    if (todo[key] === STATUS.TODO) {
        console.log(`${key} - ${todo[key]}`);
    checkTodo = false;
}
}
if(checkDone) {
    console.log(`\n Nothing is ${STATUS.DONE}`);
}
if(checkInProgress) {
    console.log(`\n Nothing is ${STATUS.IN_PROGRESS}`);
}
if(checkTodo) { 
    console.log(`\n Nothing is ${STATUS.TODO}`);
}
}

addTask('walk the dog');
changeStatus("read new article", STATUS.IN_PROGRESS);
deleteTask('go to the shop');
showList();