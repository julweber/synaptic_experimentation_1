console.log("Performing addition testbed");


console.log("Constructing neural network...");
var configuration = {
  hiddenLayerNeuronCount: 4,
  learningRate: 0.2,
  iterationCount: 80000
};

console.log("Configuration: ", configuration);

// create the network
const { Layer, Network } = window.synaptic;

debugger;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(configuration["hiddenLayerNeuronCount"]);
var outputLayer = new Layer(2);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

// train the network - learn XOR
var learningRate = configuration["learningRate"];
console.log("Performing addition Learning...");
for (var i = 0; i < configuration["iterationCount"]; i++)
{
	// 0,0 => 00
	myNetwork.activate([0,0]);
	myNetwork.propagate(learningRate, [0,0]);

	// 0,1 => 01
	myNetwork.activate([0,1]);
	myNetwork.propagate(learningRate, [0,1]);

	// 1,0 => 01
	myNetwork.activate([1,0]);
	myNetwork.propagate(learningRate, [0,1]);

	// 1,1 => 10
	myNetwork.activate([1,1]);
	myNetwork.propagate(learningRate, [1,0]);
}
console.log("Finished performing addition Learning!");

// test the network
console.log("Performing test with trained network...");

console.log("0+0 :");
var res00 = myNetwork.activate([0,0]);
console.log("%s%s",Math.round(res00[0],8),Math.round(res00[1],8));
console.log("Detailed: ", res00)

console.log("0+1 :");
var res01 = myNetwork.activate([0,1]);
console.log("%s%s",Math.round(res01[0]),Math.round(res01[1]));
console.log("Detailed: ", res01)

console.log("1+0 :");
var res10 = myNetwork.activate([1,0]);
console.log("%s%s",Math.round(res10[0]),Math.round(res10[1]));
console.log("Detailed: ", res10)

console.log("1+1 :");
var res11 = myNetwork.activate([1,1]);
console.log("%s%s",Math.round(res11[0]),Math.round(res11[1]));
console.log("Detailed: ", res11)

console.log("Finished test with trained network!");

console.log(myNetwork.toJSON());
