const countSameValue = (inputs, query) => {
  const results = [];

  query?.forEach((val) => {
    const count = inputs?.filter((input) => input === val)?.length || 0;
    results.push(count);
  });

  return results;
};

console.log(countSameValue(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));
