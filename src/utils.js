export function findAverage(acc, item, index, arr) {
  const sum = acc + item;
  if (index === arr.length - 1) {
    return sum / arr.length;
  }

  return sum;
}
