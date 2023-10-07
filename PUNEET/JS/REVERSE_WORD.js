function rev(s) {
  let w = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") w.unshift(s[i]);
    else {
      while (w.length != 0) {
        process.stdout.write(w[0]);
        w.shift();
      }
      process.stdout.write(" ");
    }
  }
  while (w.length != 0) {
    process.stdout.write(w[0]);
    w.shift();
  }
}
let s = "This is a sunny day";
rev(s);
