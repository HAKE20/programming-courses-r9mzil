//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let list: number[][];
let i: number;
let j: number;
list = [];
for (i = 0; i < 5; i++) {
  list[i] = [];
}
for (j = 0; j < 4; j++) {
  list[j] = [];
  list[i][j] = parseInt(prompt('nemr'));
}
for (i = 0; i < list.length; i++) {
  console.log('list[' + i + ']=' + list[i]);
}
for (j = 0; j < list.length; j++) {
  console.log('list[' + j + ']=' + list[j]);
}
console.log('list[' + i + j + ']=' + list[i][j]);
