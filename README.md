# Checkpoint-Generator for all Turtlecoin forks

This NodeJS utility generates the current checkpoints.csv file from a daemon and saves it to disk.

## Requirements
- [turtlecoin-rpc](https://github.com/brandonlehmann/turtlecoin-rpc)

## Setup

It's super easy to set up. Just type

```bash
git clone https://github.com/TheDevMinerTV/Checkpoint-Generator && cd Checkpoint-Generator && npm install && npm start
```

Then it will fetch all block hashes and save it into checkpoints.csv.

## Forking

Forking is also super easy. You just need to edit checkpoint_generator.js in line 6 and 7.
