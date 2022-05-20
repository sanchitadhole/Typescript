let message:string = "Helloo world"
console.log(message)


// Data Type

let numberOne:number = 10
let isAdult:boolean = true
let fullname:"Sanchita Dhole"

let notDefined:undefined = undefined
let notPresent:null = null

let fruits = ['apple','mango','banana']
console.log(fruits)

let vegetables:Array<string> = ['Apple','Banana']
let marks:number[] = [1,2,3,4]
let mark:[number,number] = [1,3]
let regExp:RegExp = new RegExp('hi')
let setA:Set<number>=new Set([1,2,12,14,15,16,34,8])

// Array
let countries:string[] = ['India','Pakistan','Japan']
countries.push('londan')

// Tuple

let countries2:[string,string] = ['India','Japan']
countries2.push('helooo')


//Object 
let obj:{
    x:number,
    y:number
} = {
    x:10,
    y:20
}

