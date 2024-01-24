const task = [
    'walk the dog',
    'create the task list'
];
task.push('Denis education');
const indexRemove = 0;
if (indexRemove < task.length) {
    task.splice(indexRemove, 0);
}

task.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task}`);
});
