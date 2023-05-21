const convertNumber = (el) => {
  if (el < 1000) {
    return el;
  }
  if (el >= 1000 && el < 10000) {
    return (
      el.toString().slice(0, 1) +
      "," +
      el.toString().slice(1, el.toString().length)
    );
  }
  if (el >= 10000 && el < 100000) {
    return (
      el.toString().slice(0, 2) +
      "," +
      el.toString().slice(2, el.toString().length)
    );
  }
  if (el >= 100000) {
    return (
      el.toString().slice(0, 3) +
      "," +
      el.toString().slice(3, el.toString().length)
    );
  }
};

export default convertNumber;
