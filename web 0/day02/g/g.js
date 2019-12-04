x = 8
y = 3

x && y < 10
x && y < 9 
x || y =< 8 
y === '3'
!(x == 5)




  function area(height, width) {
      return height * width;
  }

  funtion gotstock (stock, callback) {
      alert(`Getting the stock: $(stock).`);
      callback();
  }

  function gotStock(stock){
    alert(`Got stock: ${stock}`)
}

getStock('HSBC', gotStock('HSBC'))



function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    alert('Finished my homework');
  }
  doHomework('math', alertFinished);