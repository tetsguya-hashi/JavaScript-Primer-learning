if (true) {
  console.log("実行されます");
}

const year = new Date().getFullYear();
if (year % 4 === 0) {
  console.log("うるう年です");
} else if (year % 100 === 0) {
  console.log("うるう年ではありません");
} else if (year % 400 === 0) {
  console.log(`${year}はうるう年です。`);
} else {
  console.log(`${year}はうるう年ではありません`);
}
//switch文
switch (year) {
  case "2000":
    console.log("2000");
    break;
  case "2010":
    console.log("2010");
    break;
  case "2020":
    console.log("2020");
    break;
  case 2022:
    console.log("2022");
    break;
  default:
  case "2030":
    console.log("2030");
    break;
}
