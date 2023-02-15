function changeContext(func, obj) {
  // const res = obj.func()
  const boundFunc = func.bind(obj); //
  return boundFunc(obj);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
