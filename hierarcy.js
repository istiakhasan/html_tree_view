const arr = [{ id: 1, child: [{ id: 2, child: [] }] }];

arr[0].child.push({ id: 2, child: [] });
arr[0].child[0].child.push({ id: 3, child: [] });

console.log(arr[0]);
