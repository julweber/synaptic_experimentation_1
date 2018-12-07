console.log("Performing XOR Testbed");


console.log("Constructing neural network...");
var configuration = {
  hiddenLayerNeuronCount: 4,
  learningRate: 0.2
};

console.log("Configuration:");
console.log(configuration);

// create the network
const { Layer, Network } = window.synaptic;

debugger;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(configuration["hiddenLayerNeuronCount"]);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

// train the network - learn XOR
var learningRate = configuration["learningRate"];
console.log("Performing XOR Learning...");
for (var i = 0; i < 40000; i++)
{
	// 0,0 => 0
	myNetwork.activate([0,0]);
	myNetwork.propagate(learningRate, [0]);

	// 0,1 => 1
	myNetwork.activate([0,1]);
	myNetwork.propagate(learningRate, [1]);

	// 1,0 => 1
	myNetwork.activate([1,0]);
	myNetwork.propagate(learningRate, [1]);

	// 1,1 => 0
	myNetwork.activate([1,1]);
	myNetwork.propagate(learningRate, [0]);
}
console.log("Finished performing XOR Learning!");

// test the network
console.log("Performing test with trained network...");

console.log(myNetwork.activate([0,0])); // [0.015020775950893527]
console.log(myNetwork.activate([0,1])); // [0.9815816381088985]
console.log(myNetwork.activate([1,0])); // [0.9871822457132193]
console.log(myNetwork.activate([1,1])); // [0.012950087641929467]

console.log("Finished test with trained network!");
