// Return the factorial of the provided integer.
function factorialize(num) {
   var i =1;
   test = num;
   if(num ==0 ){
    return 1;
    }
   else{
     while(i<test){
      num = num *i;
      i++;
     }
   }
  return num;
}

factorialize(5);
