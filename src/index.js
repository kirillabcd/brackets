module.exports = function check(str, bracketsConfig) {
  // 1. str must be even length
  if (str.length % 2 > 0 ) {
    return false
  }

  let stack = str

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      // 2. replace from stack items from bracketsConfig to empty string.
      stack = stack.replace(bracketsConfig[j][0] + bracketsConfig[j][1],'')
    }
  }
  //3. if stack after replase is not empty string -> return false / else true.
  return stack === '' ? true : false
}
