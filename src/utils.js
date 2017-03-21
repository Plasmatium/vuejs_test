/* like python range function */
module.exports = {
  range (n) {
    let rslt = new Array(n);
    for(let i=0; i<n; i++) {
      rslt[i] = i;
    }
    return rslt;
  }
}
