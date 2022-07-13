//first code
let age: number = 20;
//types
let angka: number = 123 456 789;//type dideklarasikan setelah variabel
let huruf: string = "tes";
let is_true: boolean = true;
//array
let numbers: number[] = [1,2,3];
numbers.forEach(n => n.toString)
//tuples (fixed array)
let user: [number,string] = [1,"tes"];//jumlah elemen gk bisa dirubah dan harus sesuai type
//enums (numeric,string)
	//numeric enums - default
	enum CardinalDirections {
	  North,
	  East,
	  South,
	  West
	  //secara default nilai pertama "North" bernilai 0 "East" = 1 dst
	}
	let currentDirection = CardinalDirections.North;
	// logs 0
	console.log(currentDirection);
	// throws error as 'North' is not a valid enum
	currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'. 
	//numeric enums dengan inisialisasi
	enum CardinalDirections {
	  North = 1,
	  East,
	  South,
	  West
	  //bisa juga setiap nilai dinisiasi tapi harus semuanya
	}
	// logs 1
	console.log(CardinalDirections.North);
	// logs 4
	console.log(CardinalDirections.West);
	//string enums
	enum CardinalDirections {
	  North = 'North',
	  East = "East",
	  South = "South",
	  West = "West"
	  //klo make string semua nilai harus string
	};
	// logs "North"
	console.log(CardinalDirections.North);
	// logs "West"
	console.log(CardinalDirections.West);
//function contoh: https://www.w3schools.com/typescript/typescript_functions.php
	function functionName(): Type {//klo return tidak ada pake void
	  //isi fungsi
	  //contoh lain seperti penggunaan parameter bisa cek link
	}

//objek
let employee: {
		readonly id: number,//readonly biar gk dirubah
		name: string,
		retire: (date: Date) => void //bisa dikasi fungsi
	} = {
		id: 1,
		name: 'Fal',
		retire: (date: Date) => {console.log(date);}
};
//type alias
type Employee ={
		readonly id: number,
		name: string,
		retire: (date: Date) => void 
	} 
let employee: = Employee = {
		id: 1,
		name: 'Fal',
		retire: (date: Date) => {console.log(date);}
	};//memcegah boilerplate dengan mendefinisikan objek dengan type
//union type
function printStatusCode(code: string | number) {//bisa me-return beberapa type dengan simbol pipa (|)
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
//intersection type
	//karena gak mungkin kita butuh me return 2 type di satu fungsi makanya intersection dipake buat objek
	type Draggabe = {
		drag: () => void//anggap ada fungsi
	};
	type Resizable = {
		resize: () => void
	};
	type UIWidget = Draggable & Resizable;//gabungin pake simbol &
	let textBox: UIwidget ={//baru objek intersection dimasukin fungsi
		//isi fungsi
	}

//literal type
	//digunakan untuk mereturn type secara literal/spesifik
	let quantity: 50 = 50 //nilai harus 50 karena type dideklarasikan 50
	//contoh lain
	type QuantityPcs = 50 | "Fifty";//buat beberapa kondisi pake OR
	let quantityPcs: QuantityPcs = 50//cuman bisa diisi 50/ string "Fifty"
//optional chaining
type Customer ={
	birthday: Date
}
function gettCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date };
}
let customer = getCustomer(0);

if (customer !== null && customer !== undefined)
	console.log(customer.birthday)

//ln 111-112 bisa disederhanakan menjadi
console.log(customer?.birthday)//dengan menambahkan optional operator pada customer