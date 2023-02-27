
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  } 

  matrix = matrix.map(function(a, b) {
    if(b % 2 == 0){return a}
     return a.reverse()   
  });
  return matrix = matrix.flat()  
}
