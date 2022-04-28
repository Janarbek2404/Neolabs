function code(name) {
    let array1="abcdefghijklmnopqrstuvwxyz"
    let array2="hijklmnopqrstuvwxyzabcdefg"
    let ar1=array1.length
    let ar2=array2.length
    array1=array1.split("")
    array2=array2.split("")
    let name1=name.length
    name=name.split("")
    
    for (let arr1 = 0; arr1 < ar1; arr1++) {
        return array1[arr1]
    }
    for (let arr2 = 0; arr2 < ar2; arr2++) {
        return array2[arr2]
    }
    for (let i = 0; i < name1; i++) {
        return name[i]
    }
    // if (name[i]===array1[arr1]) {
        console.log("true")
    // }

}
code("janarbek")