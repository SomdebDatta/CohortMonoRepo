let mystr = "hollebye \\[";
console.log(mystr + " " + mystr.length)
replaced_str = mystr.replace(/[hello\s]/g, "")
console.log(replaced_str + " " + replaced_str.length);