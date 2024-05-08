// STRICT MODE
let personName = 'test'

personName = 'hi'

let age = 80

// STRICT WITH TYPE
let ageWithNumberType: number

ageWithNumberType = 12

// STRICT WITH STRING
let testString: string
testString = 'hi'

// STRICTG WITH BOOLEAN
let testBoolean: boolean
testBoolean = false

// MULTIPLE TYPE
let testStringOrNumber: string | number
testStringOrNumber = 'test'
testStringOrNumber = 2

// ARRAY
let names = ["john", "juvy", "Mel"]
names.push('Melon')

let numbersArr = [1,2,3]
numbersArr.push(12)

// DEFINE ARRAY TYPES
let testStringArray: string[]
testStringArray = ['test', 'test2', 'test3']
testStringArray.push('test5')

let testNumbersArr: number[]
testNumbersArr = [12, 1, 123]

// MULTITPLE TYPE ARRAY
let stringOrNumber: (string | number)[]
stringOrNumber = ['test', 2, 12]

// OBJECTS
let user = {
  userName: 'John',
  age: 22,
  isAdmin: false
}

user.userName = 'Mel'
user.age = 25
user.isAdmin = true

// ADDDING TYPE ON OBJECTS
let userObject: {
  userName: string,
  age: number,
  isAdmin: boolean
}

// WHEN DEFINING AN OBJECT WITH TYPES YOU MUST BE CALLING THE WHOLE OBJECT
userObject = {
  userName: "Mel",
  age: 29,
  isAdmin: true
}

let userObject2: {
  userName: string,
  age: number,
  isAdmin: boolean
  phone?: number
}

userObject2 = {
  userName: 'John',
  age: 30,
  isAdmin: false,
  phone: 827394872
}

// ANY TYPE - risky type but not recommended to use since it is typescript
let testAny;

testAny = 12,
testAny = 'Test'
testAny = true 
testAny = [23423423]

let anyArray: any[]
anyArray = [1, 'test', false, []]

// FUNCTIONS
const sayHi = () => {
  console.log("Hi welcome")
}

let functionReturnString = ():string => {
  console.log("Mel Pualon")
  return 'mel pualon'
}

// FUNCTIONS WITH ARGUMENT
let multiple = (num: number) => {
  return num * 2
}

let sum1 = (num1: number, num2: number) => {
  return num1 + num2
}

sum1(2, 3)

// CREATE NOT REQUIRED PARAMETER
let sum2 = (num1: number, num2: number, num3?:number) => {
  return num1 + num2
}

// EITHER YOU ADD THE 3rd parameter it will work since this is an optional
sum2(5, 6, 8)

// function object
let func = (user:{userName:string, age:number, phone?:number}) => {
  console.log(user.userName)
}

// TYPE ALLIACES
type UserType = {
  userName: string,
  age: number,
  phone?: number
}

let func2 = (user: UserType) => {
  user.userName = 'Mel',
  user.age = 29,
  user.phone = 2342342
}

// FUNCTION TYPE ALLIACES
type myFunc = (
  a: number,
  b: string
) => void

let write: myFunc = (num, str) => {
  console.log(num + " times" + str)
}

// CREATING OPTIONS
type UserType2 = {
  userName: string,
  age: number,
  phone?: string
  theme: 'dark' | 'light'
}

// ONCE YOU SETUP AN OPTIONS THAT IS THE ONLY ITEMS YOU CAN SELECT
const userWithTheme: UserType2 = {
  userName: 'Mel',
  age: 29,
  theme: 'light'
}

// INTERFACES
interface IUser {
  username: string,
  email: string,
  age: number
}

// EMPLOYEE INTERFACE
interface IEmployee extends IUser {
  employeeID: string
}

const employee : IEmployee = {
  username: 'Mel',
  email: 'fake@gmail.com',
  age: 25,
  employeeID: '1231'
}

const client : IUser = {
  username: 'Mel',
  email: 'mel@gmail.com',
  age: 25
}

// GENERICS