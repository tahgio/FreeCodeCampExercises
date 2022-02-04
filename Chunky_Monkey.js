// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let Newarr = [];
  for (let i = 0; i < arr.length; i += size){
    Newarr.push(arr.slice(i, size + i));
  }
  return Newarr;
}

//console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
