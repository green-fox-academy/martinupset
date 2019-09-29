function carWrapper(model, color, year, doors, specPropName, specPropValue){
    let obj = {
        model : model,
        color : color,
        year : year,
        doors : doors
    }
    obj[specPropName] = specPropValue
    return obj
    // the function should create and return an object with assigning the model, color year and doors to properties with the same name as the variable and it should assign to the specPropName named property the specPropValue
    
}

let func = (model, color, year, doors, specPropName, specPropValue)=>{
    let obj = {
        model,
        color,
        year,
        doors,
        [specPropName] : specPropValue
    }

    return obj
}

console.log(JSON.stringify(func('Benz','black',1886,0,'historical',true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}