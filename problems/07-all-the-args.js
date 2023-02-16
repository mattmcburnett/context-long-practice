function allTheArgs(func, ...args) {
  const calledFunc = func.bind(null, ...args);


  return calledFunc;

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
