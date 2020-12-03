const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
        // console.log(l); -> checking value of l
    } 
    const vertical = transpose(letters);
    const verticalalJoin = vertical.map(ls => ls.join(''))
        for (let l of verticalalJoin) {
            if (l.includes(word)) return true;
        } 
        return false
}
  // for (l of verticalalJoin) {
    //     if (l.includes(word)) return true
const transpose = function(matrix) {
    // Put your solution here
    let newArray = [];
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0; j < matrix[i].length; j++){
         //console.log(matrix[i][j]) //printing everything indivually
        if(matrix[i][j] === undefined){
              continue;
        }
        //console.log(newArray[j])
        if(newArray[j] === undefined){
          newArray[j] = []
        }
        newArray[j][i] = matrix[i][j]
        }
    }
    return newArray;
};
module.exports = wordSearch