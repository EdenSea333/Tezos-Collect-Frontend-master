function commafy(num: number) {
  var str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}

export const convertNum2DateString = (seconds: number) => {
  seconds = parseInt(seconds.toFixed(0));
  const d = (seconds / 87600).toFixed(0);
  const h = ((seconds % 87600) / 3600).toFixed(0);
  const m = ((seconds % 3600) / 60).toFixed(0);
  const s = seconds % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
};

export const commafyFormatter = (number: number, decimals: number = 2) => {
  return commafy(parseFloat(number.toFixed(decimals)));
};

export const beautifyAddress = (address: string, prefixCnt: number = 5) => {
  return `${address.substr(0, prefixCnt)}...${address.substr(-prefixCnt)}`;
};

export const dateDifFromNow = (_date: Date | string): string => {
  let date: Date = new Date();
  if (typeof _date === "object") date = _date;
  else date = new Date(_date);
  const difSeconds = Math.abs(new Date().getTime() - date.getTime()) / 1000;

  let result = "";
  if (difSeconds < 60) result = "a min";
  else if (difSeconds < 60 * 60)
    result = `${(difSeconds / 60).toFixed(0)} mins`;
  else if (difSeconds < 60 * 60 * 24)
    result = `${(difSeconds / 3600).toFixed(0)} hours`;
  else if (difSeconds < 60 * 60 * 24 * 7)
    result = `${(difSeconds / 87600).toFixed(0)} days`;
  else if (difSeconds < 60 * 60 * 24 * 30)
    result = `${(difSeconds / (60 * 60 * 24 * 7)).toFixed(0)} weeks`;
  else if (difSeconds < 60 * 60 * 24 * 30 * 12)
    result = `${(difSeconds / (60 * 60 * 24 * 30)).toFixed(0)} months`;
  else result = `${(difSeconds / (60 * 60 * 24 * 30 * 12)).toFixed(0)} years`;

  return new Date().getTime() - date.getTime() > 0
    ? `${result} ago`
    : `in ${result}`;
};

export const timerDifFromNow = (_date: Date | string): string => {
  let date: Date = new Date();
  if (typeof _date === "object") date = _date;
  else date = new Date(_date);
  const difSeconds = Math.abs(new Date().getTime() - date.getTime()) / 1000;
  const dayStr = (difSeconds / (3600 * 24)).toFixed(0);
  const hourStr = ((difSeconds % (3600 * 24)) / 3600).toFixed(0);
  const minStr = ((difSeconds % 3600) / 60).toFixed(0);
  const secStr = (difSeconds % 60).toFixed(0);

  return `${dayStr}d  ${hourStr} : ${minStr} : ${secStr}`;
};

export const toInteger = (value: number | string | undefined | boolean) => {
  if (typeof value === "boolean") return value ? 1 : 0;
  return parseInt(value?.toString() || "0");
};

export const toFloat = (value: string | undefined | number) => {
  return parseFloat(value?.toString() || "0");
};

export const beautifyDecimals = (value: undefined | string | number) => {
  let number = toFloat(value);

  if (number > 60) return toInteger(number);
  if (number > 1) return toFloat(number.toFixed(2));
  return toFloat(number.toFixed(3));
};
