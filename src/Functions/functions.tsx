import { Idata } from "../interfaces/interfaces";

export const shuffle = (arr: number[]) => {
  return arr
    .map((item) => [Math.random(), item])
    .sort()
    .map((item) => item[1])
}

export const RandomNumber = (max: number, min: number) => {
  const number = min + Math.random() * (max + 1 - min);

  return Math.floor(number);
}

export const SetAnswersId = (arr:number[],correctId:number,data:Idata[]) => {
  const number = RandomNumber(1, 241);

  if (data[number].author != data[correctId].author) {
    arr.push(number);
  } else {
    SetAnswersId(arr, correctId, data);
  }
}
