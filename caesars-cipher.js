function rot13(str) { // LBH QVQ VG!
  var arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  str = str.split("");

  for(var i = 0; i <= str.length - 1; i++){
      var letter = str[i];
      
if(arr.indexOf(letter) >= 0 && arr.indexOf(letter) <= 12){
        letter = arr.indexOf(letter) + 13;
        str[i] = arr[letter];
      }
      else if(arr.indexOf(letter) >= 13 && arr.indexOf(letter) <= 25){
        letter = arr.indexOf(letter) - 13;
        str[i] = arr[letter];
      }
  }
  str = str.join("");
  return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
