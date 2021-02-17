const fs = require('fs');
const { TurtleCoind } = require('turtlecoin-rpc');

const daemon = new TurtleCoind({
	host: '127.0.0.1', // ip address or hostname of the Telluriumd host
	port: 32769, // what port is the RPC server running on
	timeout: 30000, // request timeout
	ssl: false // whether we need to connect using SSL/TLS
});

class Checkpoint {
	constructor(height, hash) {
		this.height = height;
		this.hash = hash;
	}
}

daemon.blockCount().then(async (height) => {
	const checkpoints = [];

	console.log("Got blockheight " + height + "!");

	for (let i = 1; i < height; i++) {
		console.log("Getting block info for height " + i);

		const blockHash = await daemon.blockHeaderByHeight(i)

		checkpoints.push(new Checkpoint(i - 1, blockHash));
	}

	console.log('Got', checkpoints.length, 'checkpoints from 0 to', checkpoints[checkpoints.length - 1].height, 'blocks');

	const csv = checkpoints.map((c) => `${checkpoint.height},${checkpoint.hash}`).join('\n'));

	fs.writeFileSync('checkpoints.csv', csv);
})
.catch((error) => {
	throw new Error(`An error occurred whilst getting height of the blockchain : ${error}`);
});
