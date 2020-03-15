var marks =[

  { mark: 99 }, { mark: 62 }, { mark: 72 }, { mark: 50 },

  { mark: 67.6}, { mark: 64.2}, { mark: 87.5 }, { mark: 55 }
]

emptyArray = [];

for (let i = 0; i < marks.length; i ++){
  emptyArray.push(marks[i].mark)
  console.log(emptyArray)
}

   let averageResultit = (
     (emptyArray.reduce(function(x, currentVal){
       return x + currentVal;
     }, 0)
   ) / marks.lenght).toFixed();

   console.log('First Method: ' + averageResultit)
