export enum SlugToken {
  put,
  plus,
  minus,
  write,
  drop,
  flip,
  mult,
  div,
  askey,
  job,
  call,
}
export enum SlugTypes {
  SlugInt,
  SlugStr,
  SlugOp,
}

export const slug = {
  curtok: "",
  name: "",
  code: 0,
  value: 0
}
