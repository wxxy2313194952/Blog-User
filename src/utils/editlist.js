export const catesFirst = (data) => {
  //先从本地存储获取uuid（看一下本地存储里面是否有）
  let catesFirst = sessionStorage.getItem('catesFirst');
  //如果没有
  if (!catesFirst) {
    //本地存储存储一次
    sessionStorage.setItem('catesFirst', JSON.stringify(data));
  }
  //切记有返回值,没有返回值undefined
  return catesFirst;
}
export const catesSecond = (data) => {
  //先从本地存储获取uuid（看一下本地存储里面是否有）
  let catesSecond = sessionStorage.getItem('catesSecond');
  //如果没有
  if (!catesSecond) {
    //本地存储存储一次
    sessionStorage.setItem('catesSecond', JSON.stringify(data));
  }
  //切记有返回值,没有返回值undefined
  return catesSecond;
}