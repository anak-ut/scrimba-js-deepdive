const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];

  // challenge 1 totalkan semua weight mobil

  const totalWeight = cars.reduce((acc,car)=>{
    return acc + car.weight
  },0)

  console.log(`berat total semua mobil = ${totalWeight}`);

  // challenge total mobil listrik saja (versi sendiri)

//   const carListrik = cars.filter(car=> car.isElectric)
//   console.log(carListrik);

//  const listrikWeigh = carListrik.reduce((acc,mboil)=>{
//     return acc + mboil.weight
//  },0)

//  console.log(listrikWeigh)

// versi chaining (bikinan sendiri)
 const listrikWeight = cars.filter(car=> car.isElectric).
reduce((acc,mboil)=>{
   return acc + mboil.weight
},0)

console.log(`berat total mobil listrik ${listrikWeight}`);

// versi sepuh scrimba ( bjir cuma pake conditional)

const totalWeightListrik = cars.reduce((akumulator,mboil)=>{
    if (mboil.isElectric){
        return akumulator + mboil.weight;
    } else {
        return akumulator;
    }
},0)
console.log(`total berat mobil listrik versi code sepuh scrimba ${totalWeightListrik}`);