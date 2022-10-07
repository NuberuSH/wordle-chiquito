// No descomentar la siguiente línea
// prettier-ignore
const WORDS = ["abre", "allo", "amas", "amen", "ames", "ampo", "ando", "anos", "anuo", "aoja", "aojo", "aran", "aras", "arda", "ardo", "aren", "ares", "ario", "arma", "asan", "asas", "asen", "aseo", "ases", "asia", "atas", "ates", "auno", "aves", "ayas", "baga", "bala", "bañe", "bisa", "boas", "boba", "boja", "bojo", "bosa", "bota", "bote", "boto", "boya", "boyo", "cace", "caen", "caer", "calo", "case", "cave", "cayo", "cedo", "cefo", "ceno", "cesa", "chad", "coge", "coja", "cojo", "come", "crea", "cree", "cuba", "dañe", "deja", "dias", "dijo", "dime", "dome", "dora", "dore", "duos", "dura", "echa", "echo", "ecos", "emes", "emus", "enes", "eñes", "enya", "eran", "eras", "eres", "esas", "eses", "fico", "fumo", "gato", "goda", "guam", "hace", "haga", "hago", "hala", "hara", "hare", "haya", "hice", "hile", "hube", "hubo", "huna", "huya", "iban", "ibas", "ices", "idas", "idos", "iran", "iras", "iria", "izas", "jade", "jugo", "kiev", "lami", "lave", "lees", "lega", "leia", "lima", "loas", "luca", "lusa", "mala", "mali", "mece", "medi", "mees", "mesa", "mese", "meso", "meto", "mide", "moja", "mojo", "mola", "moño", "more", "moza", "muca", "nace", "ndea", "niue", "note", "nuda", "nuez", "nula", "odas", "ojos", "olas", "Oman", "oras", "oren", "ores", "orno", "orzo"]; // eslint-disable-line no-use-before-define

const WORD_SIZE = 4;
const colors = require("colors");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomWord = WORDS[Math.floor(Math.random() * WORDS.length - 1)];


// recursiveAsyncReadLine();

function coloringLetter(inputLetter, checkingLetter) {
  if (randomWord.includes(inputLetter)) {
    if (inputLetter === checkingLetter) {
      return inputLetter.bold.green;
    } else {
      return inputLetter.bold.yellow;
    }
  } else {
    return inputLetter.bold.red;
  }
}

let intentos = 0;
let xWorldColored = [];
let win = false;
console.log(randomWord);
let recursiveAsyncReadLine = function() {
  readline.question('Introduce una palabra de 4 letras: ', function(wordInput) {
    if (wordInput.length === 4) {
      intentos++;
      if (wordInput === randomWord) {
        console.log(`¡Felicidades! Has acertado, la palabra era ${randomWord}.`.bold.green);
        win = true;
      }
      for (const i in wordInput) {
        xWorldColored[i] = coloringLetter(wordInput[i], randomWord[i]);
      }
      console.log(`${xWorldColored[0]}${xWorldColored[1]}${xWorldColored[2]}${xWorldColored[3]}`);
    } else {
      console.log("Introduce una palabra válida".bold.red);
    }
    if (intentos === 6 || win === true) return readline.close();
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
