const fs = require('fs')
const filePath = './task.json'

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        // console.log(dataBuffer);

        const dataJSON = dataBuffer.toString()
        // console.log(dataJSON);

        // console.log(JSON.parse(dataJSON));
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({ task })
    saveTasks(tasks)
    console.log('Task added', task)
}

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => {
        console.log(`${index + 1} : ${task.task}`)
    })
}

const removeTask = (args) => {
    try {
        const tasks = loadTasks()

        // args is process.argv, so indices start from index 3
        // Convert to numbers and filter out invalid ones
        let indices = args
            .slice(3)               // ['2', '5', '7']
            .map(Number)            // [2, 5, 7]
            .filter(n => !isNaN(n) && n > 0 && n <= tasks.length)

        if (indices.length === 0) {
            console.log('todo: No valid task index provided')
            return
        }

        // Remove duplicates and sort in descending order
        indices = [...new Set(indices)].sort((a, b) => b - a)

        const deletedTasks = []

        // Delete from the end to avoid index shifting issues
        for (const idx of indices) {
            const removed = tasks.splice(idx - 1, 1) // idx is 1-based
            if (removed.length > 0) {
                deletedTasks.push(removed[0])
            }
        }

        saveTasks(tasks)

        console.log('\n--- Deleted tasks ---\n')
        deletedTasks.reverse().forEach((task, index) => {
            console.log(`${index + 1} - ${task.task}`)
        })

        console.log('\n--- Remaining tasks ---\n')
        listTasks()
    } catch (error) {
        console.log('todo: task is not deleted')
    }
}


const command = process.argv[2]
const args = process.argv
const argument = process.argv[3]

if (command === 'add') {
    addTask(argument)
} else if (command === 'list') {
    listTasks()
} else if (command === 'remove') {
    removeTask(args)
} else {
    console.log('todo: Command not found')
}
