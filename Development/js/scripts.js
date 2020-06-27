// السؤال الأول
// 1
const name = "tiv"
// 2
let age = 17
// 3 and 4

console.log ("انا"+ name +"عمري" + age )

// 5 and 6

console.log(5*age)


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
const hobbies = [ "كرة الطائرة" ,"تنس الطاولة" , " كرة القدم" 
];
 
// 2
hobbies.push ("17")

hobbies [4] = "17"

console.log (hobbies.length)

// 3

hobbies.pop()

console.log (hobbies)

// 4

let student = { 
    track : " مسار الويب  " ,
    language : "JavaScript" ,
}

// 5

student["TAs"] = ["رهف" , "حسين" , "نانسي" , "موضي"]

// 6

 console.log(student.track)

// 7

console.log(student.TAs[2])

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1

student["sayHello"] = function() {console.log("حمد")}



// 2

student["sayHello"]()

// console results => console.png
