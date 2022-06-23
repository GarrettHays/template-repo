// This is for the backend logic

export default function Euler(number) {
  this.number = number;  
}

Euler.prototype.over1k = function () {
  if (this.number > 1000) {
    return true;
  } else {
    return false;
  }
};

Euler.prototype.mult3 = function (number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

Euler.prototype.mult5 = function (number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

Euler.prototype.problem01 = function () {
  let result = 0;
  for (let i = 1; i < this.number; i++) {
    if (this.mult3(i) || this.mult5(i)) {
      result += i;
    }
  }
  return result;
}