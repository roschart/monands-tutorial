const flyd = require('flyd')
const Task = require('data.task')
const _ = undefined

// #Constructor
// Stream(2)
const stream = flyd.stream().of(2)
// Task(2)
const task = Task.of(2)
// List(2)
const list = Array.of(2)

console.log(stream())
console.log(list[0])
task.fork(_, console.log)
