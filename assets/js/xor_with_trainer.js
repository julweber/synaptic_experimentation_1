var myNetwork = new synaptic.Architect.Perceptron(2, 2, 1)
var trainer = new synaptic.Trainer(myNetwork)

// xor training set
var trainingSet = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  },
]

var trainerOptions = {
  // learn rate
  rate: .1,
  // max iterations
	iterations: 20000,
  // stop when max error is < value
	error: .005,
  // shuffle the training set
  // this only makes sense for networks without context (without memory)
	shuffle: true,
  // this commands the trainer to console.log the error and iterations every X number of iterations.
	log: 100,
  // you can set what cost function to use for the training,
  // there are three built-in cost functions
  // (Trainer.cost.CROSS_ENTROPY, Trainer.cost.MSE and Trainer.cost.BINARY)
  // to choose from cross-entropy or mean squared error.
  // You can also use you own cost function(targetValues, outputValues).
	cost: synaptic.Trainer.cost.CROSS_ENTROPY
}

console.log("Performing XOR Learning...");
trainer.train(trainingSet, trainerOptions);
console.log("Finished performing XOR Learning!");

console.log("Network structure:");
console.log(myNetwork.toJSON());


// convert the network to a standalone function
var standalone = myNetwork.standalone();

// test the network
console.log("Performing test with standalone function if trained network...");

console.log(standalone([0,0])); // [0.015020775950893527]
console.log(standalone([0,1])); // [0.9815816381088985]
console.log(standalone([1,0])); // [0.9871822457132193]
console.log(standalone([1,1])); // [0.012950087641929467]

console.log("Finished test with standalone function of trained network!");
