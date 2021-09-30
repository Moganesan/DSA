function calcCount(str) {
  const strArray = str.replace(/\s+/g, "").toLowerCase().split("");
  var result = {};

  for (i = 0; i < str.length; i++) {
    if (result[strArray[i]]) {
      result[strArray[i]] += 1;
    } else {
      result[strArray[i]] = 1;
    }
  }

  console.log(result);
}

calcCount("Moganesan");
