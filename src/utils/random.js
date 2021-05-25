const random = (e) => {
  if (e === 0) {
    return Math.floor(Math.random() * 20) + 1;
  }
  return Math.floor(Math.random() * e * 500) + 1;
};

export default random;
