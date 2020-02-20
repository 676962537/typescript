import store from '../store/index'
export const util = async () => {
  await store.dispatch('getData2');
  console.log("util");
  // return 123123
  return Promise.reject('mahenan')
}
export const util3 = async () => {
  let aa = await store.dispatch('getData3');
  console.log("aa:",aa);
  // return 123123
  return Promise.reject('mahenan3')
}
