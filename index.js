// Write your solution in this file!
const employee = {
    name: "Onyechefu Owen",
    streetAddress: "7 Ajibola Faminu street"
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = {...employee}
    newObj[key] = value;
    return newObj;
}

function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee}
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}