
function func() {
	
console.log("start");
var reader = new FileReader();
var fileToRead = document.querySelector('input').files[0];


// start reading a loaded file
reader.readAsText(fileToRead);

// attach event, that will be fired, when read is end
reader.addEventListener("loadend", function() {
   // reader.result contains the contents of blob as a typed array
   // we insert content of file in DOM here
   let inputVal = reader.result;
   console.log(inputVal);



const trainingData = inputVal.split(".|?|!");


	
	const net = new brain.recurrent.LSTM();
	net.train(trainingData, {
		iterations: 1500,
		errorThresh: 0.011,
		log: (stats) => console.log(stats)
	});
	
	console.log(net.run(''));
	});
}
