let student = [
    {
        username: "Kimleang",
        age: 19,
        address: {
            city: "Phnom Penh",
            district: "Chamkarmon"
        }
    },
    {
        username: "Sokheng",
        age: 20,
        address: {
            city: "Phnom Penh",
            district: "Toul Kork"
        }
    },
    {
        username: "Sokha",
        age: 21,
        address: {
            city: "Phnom Penh",
            district: "Dangkao"
        }
    }
]
let myJson = JSON.stringify(student)
console.log(myJson)
let myObj = JSON.parse(myJson)
console.log(myObj)