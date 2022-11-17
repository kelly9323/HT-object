function returnFamilyProperty(){
    
    const family = {
        Arthur: 'father',
        Mandy: 'mother',
        Kevin: 'son'
    }
    return family
}
const content = returnFamilyProperty()

for (const key in content ) {
console.log(`${key} is a ${content[key]}`)
}