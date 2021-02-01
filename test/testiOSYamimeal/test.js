var arr = [
    '510.00','262.78','-306.00','2.00','35.38','1.00','20.40','0.99','-0.99','10.00','20.00'
  ]
  console.log(arr);
  Array.prototype.insert = function(index, value){
    this.splice(index,0, value);
}
var arr_01 = new Array();
// arr.insert(1,'321');
arr_01.insert(0,arr[0]);
arr_01.insert(1,arr[5]);
console.log(arr_01);