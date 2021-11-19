const res = document.querySelector("#res");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");
const btnOpt = [...document.querySelectorAll(".btnOpt")];
const btnNum = [...document.querySelectorAll(".btnNum")];

const makeDec = (num) => {
  return parseInt(num, 2);
};

const makeBin = (num) => {
  return num.toString(2);
};

btnClr.addEventListener("click", () => {
  res.innerHTML = "";
});

btnOpt.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (res.innerHTML !== "" || res.innerHTML !== undefined) {
      const re = /\d$/.test(res.innerHTML);
      if (re) {
        res.innerHTML += btn.innerHTML;
      }
    }
  });
});

btnNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    res.innerHTML += btn.innerHTML;
  });
});

btnEql.addEventListener("click", () => {
  const val = res.innerHTML;
  if (val !== "" || val !== undefined) {
    const reOpt = /[\+\-\*\/]/g;
    if (reOpt.test(val)) {
      const opts = val.match(reOpt);
      let nums = val.match(/\d+/g);
      nums = nums.map((num) => makeDec(num));

      for (let i = 0; i < opts.length; i++) {
        let result = 0;
        switch (opts[i]) {
          case "*":
            result = nums[i] * nums[i + 1];
            break;
          case "/":
            result = parseInt(nums[i] / nums[i + 1]);
            break;
          case "+":
            result = nums[i] + nums[i + 1];
            break;
          case "-":
            result = Math.abs(nums[i] - nums[i + 1]);
            break;
          default:
            result = nums[i];
        }
        res.innerHTML = makeBin(result);
      }
    }
  }
});
