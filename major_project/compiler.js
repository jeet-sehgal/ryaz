// dekh=let
// kaho=console.log
// yadi=if
// varna=else
// chayan=switch
// case=case
// default=default
// ruko=break
// jabTak=while
// karya=function

function token(code) {
  let tokens = [];
  for (i = 0; i < code.length; i++) {
    if (code.charAt(i) === " ") {
      tokens.push({ type: "space", value: " " });
    } else if (/^[a-zA-Z]$/.test(code.charAt(i))) {
      let word = code.charAt(i);
      i++;
      while (/^[a-zA-Z0-9]$/.test(code.charAt(i))) {
        word += code.charAt(i);
        i++;
      }
      i--;
      if (word == "kaho" || word == "dekh" || word=="yadi" || word=="varna" || word=="chayan" || word=="ruko" || word=="chalteRaho" || word=="jabTak" || word=="karya") {
        tokens.push({ type: "keyword", value: word });
      } else {
        tokens.push({ type: "identifier", value: word });
      }
    } else if (/^['"]$/.test(code.charAt(i))) {
      let quoteType = code.charAt(i);
      let word = quoteType;
      i++;

      while (code.charAt(i) !== quoteType) {
        word += code.charAt(i);
        i++;
      }

      word += quoteType;

      tokens.push({ type: "literal", value: word });
    } else if (/^[0-9]$/.test(code.charAt(i))) {
      let word = code.charAt(i);
      i++;
      while (/^[0-9]$/.test(code.charAt(i))) {
        word += code.charAt(i);
        i++;
      }
      i--;
      tokens.push({ type: "number", value: word });
    } else if (/^[~!@#$%^&*()_+`\-=[\]{};:<>,./?]$/.test(code.charAt(i))) {
      tokens.push({ type: "symbol", value: code.charAt(i) });
    }
  }
    return tokens;
}
function gen(tokens) {
  const js = tokens.map((ele) => {
    if (ele.type == "keyword") {
      if (ele.value == "dekh") {
        ele.value = "let";
      } else if (ele.value == "kaho") {
        ele.value = "console.log";
      }
      else if (ele.value == "yadi") {
        ele.value = "if";
      }
      else if(ele.value == "varna"){
        ele.value="else"
      }
      else if(ele.value == "chayan"){
        ele.value="switch"
      }
      else if(ele.value == "ruko"){
        ele.value="break"
      }
      else if(ele.value == "chalteRaho"){
        ele.value="continue"
      }
      else if(ele.value == "jabTak"){
        ele.value="while"
      }
      else if(ele.value == "karya"){
        ele.value="function"
      }
    }
    return ele;
  });
  return js
    .map((ele) => {
      val = ele.value;
      return val;
    })
    .join("");
}
let code =
  `dekh i=0;
  kaho(i);
  i=1;
  kaho(i);
  karya add(a,b){
  return a+b;}
  kaho(add(1,2))`;

function compile(code) {
  const tokens = token(code);
  const jeetCode = gen(tokens);
  return jeetCode;
}
function execute(code) {
  eval(code)
}

let compiledCode = compile(code);
execute(compiledCode);
