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

  for (j = 0; j < 4; j++) {
    list[j] = [];
    list[i][j] = parseInt(prompt('nemr'));
    console.log('list[' + i + ']=' + list[i]);
    console.log('list[' + j + ']=' + list[j]);
  }
}
