type User = {
	firstName: string;
	lastName: string;
	age: number
}

interface User2 {
	firstName: string;
	lastName: string;
	age: number
}

type GreetArg = {
    id: number | string
}

function greet(id: GreetArg) {

}

console.log(greet({id: 10}))