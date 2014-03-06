function vignereTransform(plaintext, keyword, operation) {
  var plainChars = plaintext.toLocaleLowerCase().split(''),
    keywordChars = keyword.toLocaleLowerCase().split(''),
    transformed = "";

  plainChars.forEach(function(char, i) {
    var shiftCode = charCode(keywordChars[i % keywordChars.length]),
      transformedCode = modularArith(charCode(char), shiftCode, operation);
    transformed += String.fromCharCode(transformedCode);
  });

  return transformed;
}

function encrypt(plaintext, keyword) {
  return vignereTransform(plaintext, keyword, function(a,b) { return a + b; });
};

function decrypt(plaintext, keyword) {
  return vignereTransform(plaintext, keyword, function(a,b) { return a - b; });
};

function modularArith(first, second, operation) {
  return ((operation((first - 97), (second - 97)) % 26) + 26) % 26 + 97;
};

function charCode(char) {
  return char.charCodeAt(0);
};

console.log(encrypt("ATTACKATDAWN", "LEMON"));
console.log(decrypt("LXFOPVEFRNHR", "LEMON"));