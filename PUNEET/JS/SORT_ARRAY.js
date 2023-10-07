const az = [1, 3, 5, 7, 9, 11, 13, 15, 17];
function arrSort(a) {
  a.sort((x, y) => x - y);
  a.reverse();
  return a;
}
console.log(arrSort(az));
