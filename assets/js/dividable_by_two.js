console.log("Performing dividable by 2 testbed");


console.log("Constructing neural network...");
var configuration = {
  hiddenLayerNeuronCount: 4,
  learningRate: 0.2,
  iterationCount: 100
};

console.log("Configuration: ", configuration);

// create the network
const { Layer, Network } = window.synaptic;

debugger;

var inputLayer = new Layer(6);
var hiddenLayer = new Layer(configuration["hiddenLayerNeuronCount"]);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

// train the network - learn dividable by two
var learningRate = configuration["learningRate"];
console.log("Performing learning...");
var startTime = Date.now();
for (var i = 0; i < configuration["iterationCount"]; i++)
{
  for(var j=0; j<41; j++) {

    inputs = convertNumberToInputArrayGeneral(j, 6);

    myNetwork.activate(inputs);
    var expectedResult = 0
    if((j % 2) == 0) {
      expectedResult = 1
    }

    myNetwork.propagate(learningRate, [expectedResult]);
  }

}
var millis = Date.now() - startTime;
console.log("Finished learning in %s ms!", millis);

// test the network
console.log("Performing test with trained network...");

for(var j=0; j<41; j++) {
  console.log("%s:", j, myNetwork.activate(convertNumberToInputArrayGeneral(j, 6)));
}

console.log("Finished test with trained network!");
