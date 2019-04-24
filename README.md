# Checkpoint-Generator for Tellurium network

This NodeJS utility generates the current checkpoints.csv file from a daemon and saves it to disk.

## Requirements
- [turtlecoin-rpc](https://github.com/brandonlehmann/turtlecoin-rpc)
- [export-to-csv](https://github.com/alexcaza/export-to-csv)

## Setup

It's super easy to set up. Just type
```bash
git clone https://github.com/TheDevMinerTV/Checkpoint-Generator && cd Checkpoint-Generator && npm install && npm start
```
Then it will fetch every 50th block's hash and save it into checkpoints.csv.

## Forking

Forking is also super easy. You just need to edit checkpoint_generator.js in line 6, 7 and 33.
The 33rd line defines the spacing in blocks between each checkpoint. Set it to 1 when you want checkpoints every block that has been generated.
