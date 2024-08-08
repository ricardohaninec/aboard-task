/* To run this code, run in your terminal:
* npm install
* npm run index  
* 
* After that, check the logs. :) 
* **/

import { User, Task } from './user-task.interface';

const users: User[] = [
    { id: 1, name: 'John', email: 'john@test.com', department: 'IT' },
    { id: 2, name: 'Doe', email: 'Doe@test.com', department: 'Marketing' },
    { id: 3, name: 'Morgan', email: 'Morgan@test.com', department: 'IT' },
    { id: 4, name: 'Martha', email: 'Martha@test.com', department: 'Marketing' },
    { id: 5, name: 'Dave', email: 'Dave@test.com', department: 'Sales' },
    { id: 6, name: 'Oslo', email: 'Oslo@test.com', department: 'Sales' },
    { id: 7, name: 'Qiev', email: 'Qiev@test.com', department: 'Product' },
    { id: 8, name: 'Hanzel', email: 'Hanzel@test.com', department: 'Product' },
    { id: 9, name: 'Mats', email: 'Mats@test.com', department: 'Sales' },
    { id: 10, name: 'Yoshimura', email: 'Yoshimura@test.com', department: 'IT' }
]

const tasks: Task[] = [
    { id: 1, department: 'IT', title: 'Develop company landing page' },
    { id: 2, department: 'IT', title: 'Develop company API' },
    { id: 3, department: 'Product', title: 'Call customers' },
    { id: 4, department: 'Sales', title: 'Sells more!' },
    { id: 5, department: 'IT', title: 'QA' },
]

/* 1. Create a function to map between task and its users.
 *    result:
 *    [
 *      {id: 1, department: 'IT', title: 'Develop company landing page', users: [{ id: 1, ...//omitted }, { id: 3, ...//omitted }] },
 *      ...//omitted
 *    ]
 * */

function userTask() {
    const results: (Task & { users: User[] })[] = []
    tasks.forEach((task) => {
        // Check if department is already checked. If False, add the new department in the array
        if (!results.some(result => result.department === task.department)) {
            // Get users in selected department
            const usersInDepartment: User[] = users.filter((user) => user.department === task.department);
            // Add user in the results array
            results.push({ ...task, users: usersInDepartment })
        }
    })


    console.warn('**** RESULTS ****')
    console.table(results)
    console.warn('--------')

    console.warn('**** USERS PER DEPARTMENT ****')
    results.forEach(result => {
        console.warn(`DEPARTMENT NAME: ${result.department}`)
        console.table(result.users)
    });
}

// Run User Task Function
userTask()

/**
 * 2. Explain the time complexities of your code.
 * The main complexity for this logic was to make a logic to validate if the department was already processed in the results list.
 * Hence, I had to add an IF condition in the line 43 validating if the department was already included in the results array.
 * 
 * Plus: I add Typescript in the file. I really like typing. It helps the user experience.
 * I spend around 30 min setting up the files and organizing the logic.
 */