function to_Lowercase(text) {
    return text.toLowerCase();
}

function to_Uppercase(text) {
    return text.toUpperCase();
}

function split_by_commas(text) {
    return text.split(',');
}

function find_index(text, key) {
    return text.indexOf(key);
}

let string1 = "ProgammoPhobia";
let string2 = "Progammo,Phobia";

console.log(to_Lowercase(string1));
console.log(to_Uppercase(string1));
console.log(split_by_commas(string2));
console.log(find_index(string2, "Phobia"));