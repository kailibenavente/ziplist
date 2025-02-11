function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  if (list1.length !== list2.length) {
    return [];
  }

  const returnList: unknown[] = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i]);
    returnList.push(list2[i]);
  }
  return returnList;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const returnList: unknown[] = [];
  list1.forEach((element, index) => {
    returnList.push(element);
    returnList.push(list2[index]);
  });
  return returnList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
