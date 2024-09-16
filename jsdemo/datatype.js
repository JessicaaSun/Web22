//object
let obj = {
    username : "Kimlang",
    age: 19,
    book: {
        id: 1
    },
    printInfo: function() {
        console.log(this.username, this.age)
    }
}
console.log(obj.book.id)
console.log(obj.printInfo())