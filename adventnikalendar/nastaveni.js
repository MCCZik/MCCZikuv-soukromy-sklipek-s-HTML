// Název hlavního obrázku, pokud možno zachovejte
// poměr stran 3:2 pro čtvercové pole.
// Doporučené rozlišení je 1200x800
const ImageName = "image.jpg";

// Mřížka dní
const DayMatrix = [
  7 ,21,24,4 ,15,22,
  19,2 ,12,23,6 ,10,
  3 ,13,18,8 ,20,14,
  16,9 ,1 ,17,11,5 
]

// Počet dní posunu.
// Pokud je hotnota 5, tak 5. prosince budou odkryté čísla 1 až 10.
// Pokud je hotnota -3, tak 5. prosince budou odkryté čísla 1 až 2.
const DayOffset = 0;

// Úlohy
// Formát:
// 1. sloupec je jméno úlohy
// 2. sloupec je text úlohy
// 3. sloupec je obrázek k úloze (pokud ádný není použij null)
// 4. sloupec je formát odpovědi
// 5. sloupec je hash odpovědi*
const Questions = [
  ["Úloha 1", null, null, "Dvě slova", ["15f5fae9fbc9a3b4", "a133cb6627bf5469"]],
  ["Úloha 2", null, null, "Podstatné jméno", ["28c931e0216a56bc","c1eab084314c81dd"]],
  ["Úloha 3", null, null, "Podstatné jméno", ["23ebb69bbd15e76e", "e9875725c7fcac42"]],
  ["Úloha 4", null, null, "Plyne ze zadání", ["0169b2ebc0858eb5", "af749cb3f5902779"]],
  ["Úloha 5", null, null, "Název", ["8ed225c47673a653","50ffac99aa8f3434"]],
  ["Úloha 6", "Kdo je vpravo?", "119.jfif", "Příjmení", "9f6f1d9852ca8da5"],
  ["Úloha 7", "xxx|ooo|x|oxo|xxx|ooox||xox|xoo|o||ooo|o||xo|ox|oxo|xxx|xoo|oo|oxoo||oxxo|xoxx|x|oooo|ox|xxo|xxx|oxo|ox|ooo|", null, "Jedno slovo", "78908160e57094d7"],
  ["Úloha 8", null, null, "Jedno slovo", "86c73bb53a77841e"],
  ["Úloha 9", null, null, "Jméno", "ac8062620b6f4ebf"],
  ["Úloha 10", null, null, "Podstatné jméno", ["e4d6dba6a7aeeaef","49612dc188728874"]],
  ["Úloha 11", null, null, "Plyne ze zadání", "3ce962b3abd63c5a"],
  ["Úloha 12", null, null, "Jméno", ["12a3c40e74237b0c","ae78405cd8d71e42"]],
  ["Úloha 13", null, null, "Jméno", "f72a2a53ea123f3d"],
  ["Úloha 14", null, null, "Jedno slovo", "6a174c934d928d9d"],
  ["Úloha 15", null, null, "Název", ["9a3ae522d4dc653d","1f39474d0c915ce0"]],
  ["Úloha 16", null, null, "České slovo", "ef2708b8e3d7c1ee"],
  ["Úloha 17", null, null, "České slovo", "ef2708b8e3d7c1ee"],
  ["Úloha 18", null, null, "Číslo", "3fc6ea986cb02e9a"],
  ["Úloha 19", null, null, "Číslo", "3fc6ea986cb02e9a"],
  ["Úloha 20", null, null, "Číslo", "3fc6ea986cb02e9a"],
  ["Úloha 21", null, null, "Číslo", "3fc6ea986cb02e9a"],
  ["Úloha 22", null, null, "Příjmení", "3fc6ea986cb02e9a"],
  ["Úloha 23", null, null, "Číslo", "3fc6ea986cb02e9a"],
  ["Úloha 24", null, null, "Číslo", "3fc6ea986cb02e9a"],
]

// *Hash odpovědi vygeneruj v konzoli:
// Hash("odpověď")
