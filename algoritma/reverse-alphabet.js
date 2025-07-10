const reverseAlphabet = (str) => {
  const letters = str.match(/[a-zA-Z]/g) || [];
  const numbers = str.match(/\d+/g) || [];
  const reversed = letters.reverse();
  return reversed.join("") + numbers?.join("");
};

console.log(reverseAlphabet("NEGIE1"));
