function fibsRec (n){
   if(n <= 0 ) return [];
   if (n === 1) return [0]
   if (n === 2) return [0,1]

   let arr = fibsRec(n - 1)
   let nextNum = arr[arr.length - 1] + arr[arr.length - 2]
   arr.push(nextNum)
   return arr
}
console.log(fibsRec(8))

// ***************by loop******************
function fibs(n){
    arr = [0,1]
    for (let i = 2; i < n; i++) {
      nextNum = arr[i - 1] + arr[i - 2] 
      arr.push(nextNum)
    }
    return arr 
}
console.log(fibs(8))
