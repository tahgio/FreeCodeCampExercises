class ator {
  constructor(ntoc) {
    this.value = ntoc;
    this.numeral = "";
  }
  proNum(sym, symval) {
    while (this.value >= symval) {
      this.numeral += sym;
      this.value -= symval;
    }
  }
}


function convertToRoman(num) {
  const converter = new ator(num);
  converter.proNum('M', 1000);
  converter.proNum('CM', 900);
  converter.proNum('D', 500);
  converter.proNum('CD', 400);
  converter.proNum('C', 100);
  converter.proNum('XC', 90);
  converter.proNum('L', 50);
  converter.proNum('XL', 40);
  converter.proNum('X', 10);
  converter.proNum('IX', 9);
  converter.proNum('V', 5);
  converter.proNum('IV', 4);
  converter.proNum('I', 1);
  return converter.numeral;
}

//console.log(convertToRoman(3999));
