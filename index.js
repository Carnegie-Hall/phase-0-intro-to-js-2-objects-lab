// const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options")

// Write your solution in this fix.
const employee = {
    name: "Dre",
    streetAddress: "9th Ave",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
    [key]: value,
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee [key] = value;
        return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const ralph = {...employee};
    delete ralph[key]
    return ralph
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee
}
