const unique = (arr) => arr.filter((v, i, a) => a.indexOf(v) === i); console.log(unique([1, 2, 2, 3, 4, 4]));