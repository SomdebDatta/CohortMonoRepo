my_obj = {bhai: 4, behen: 12}

// console.log(Object.entries(my_obj));
// console.log(my_obj.hasOwnProperty("bhai"));
my_relations = ["bhai", "behen", "cousin"];

for (let i=0; i<my_relations.length; i++) {
    if (my_obj.hasOwnProperty(my_relations[i])) {
        my_obj[my_relations[i]] += 1;
    }
    else {
        my_obj[my_relations[i]] = 1;
    }
}

console.log(my_obj);