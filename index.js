const products = [
  {
    id: 1,
    name: "xxl",
    qty: 4,
  },
  {
    id: 3,
    name: "xxl",
    qty: 4,
  },
  {
    id: 1,
    name: "xxl",
    qty: 4,
  },
  {
    id: 2,
    name: "xxl",
    qty: 4,
  },
  {
    id: 1,
    name: "xxl",
    qty: 4,
  },
  {
    id: 1,
    name: "xxl",
    qty: 4,
  },
  {
    id: 2,
    name: "xxl",
    qty: 4,
  },
];
let arr = [];
for (let i = 0; i < products.length; i++) {
    if(!arr.includes(products[i].id)){
        arr.push(products[i].id)
    }
}

let finalArr=[]
for (let i = 0; i < arr.length; i++) {
 let filterArr= products.filter(item=>item.id===arr[i])
 finalArr=[...finalArr,...filterArr,{sum: filterArr.reduce((a,b)=>+a + +b.qty,0)}]

}


console.log(arr);
console.log(finalArr);