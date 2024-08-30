
function unicode(inputWordVelthuis) {
  console.log(inputWordVelthuis);
  let inputSearchWord = document.getElementById("searchInput").value
  document.getElementById("searchInput").value = inputSearchWord + inputWordVelthuis
  liveSearch()
}

let ENG_PALI_DICT = engPali.split("\n") 
//clear empty array
ENG_PALI_DICT.filter(n => n)

function liveSearch() {
  let inputWord =  document.getElementById("searchInput").value;
  if (inputWord.length > 1) {
    let PATTERN = new RegExp(`(${(inputWord)})`, "g");
        let PATTERN_NOSPACE = new RegExp(`(${(inputWord)})`, "g");
        let DICT_RESULTS = ENG_PALI_DICT.filter(function(str) {
          return PATTERN.test(str);
        });
        if (DICT_RESULTS.length === 0) {
        document.getElementById("searchResult").innerHTML = "NO WORD!"
        } else {
          let dictResult = DICT_RESULTS.join("+").toString()
          .replace(/\+/g, "<hr>")
          .replace(PATTERN_NOSPACE, "<u>$1</u>")
          document.getElementById("searchResult").innerHTML = dictResult
        }
      } else {
        document.getElementById("searchResult").innerHTML = ""
  }
}
