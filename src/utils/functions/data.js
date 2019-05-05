export function fetchAll(urls) {

    return Promise.all(urls.map(url=>fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json())))
            .then(resp => {
                return resp;
            })
}

export function fusionData(dataArray) {
    
    if(dataArray.length < 2) {
        return
    }
    
    let array = [];
    dataArray.forEach(data=>{
        array = [array,...data]
    })
    return array
}

export function fusionDataById(mainArray,arrayTwo, KeyId) {

    const newdata =  [...mainArray].map(prop=>{
        
        const bond = [...arrayTwo].filter(propTwo=>{
            
            return propTwo[KeyId] === prop[KeyId]
            
        })[0]
        
        delete prop[KeyId];

        return {
            ...bond,
            ...prop,
        }

    })
    return newdata
}


export function convertToYear(elemnt){
    const getYear = /[0-9]{2}\/[0-9]{2}\/([0-9]{4,})/g
    return elemnt.replace(getYear, "$1");
}

export function SuperFilter(array, propName, value){
    return array.filter(elem=>{
        return elem[propName] === Number(value)
    })
}