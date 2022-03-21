const employee = {
    name: 'James Smith',
    streetAddress: '123 Broadway'
};

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObject = {...object};
    newObject[key]=value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
    const newObject = {...object};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;
}