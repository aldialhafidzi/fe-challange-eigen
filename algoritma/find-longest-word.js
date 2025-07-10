const findLongestWord = (str) => {
  const words = str?.split(" ");
  const countWords = words?.map((v) => v?.length);
  const findBiggestNumber = Math.max(...countWords);
  return words?.find((v) => v?.length === findBiggestNumber);
};

console.log(findLongestWord("Saya sangat senang mengerjakan soal algoritma"));
