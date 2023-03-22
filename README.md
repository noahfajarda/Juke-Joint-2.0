REFER TO THIS FOR FILTERING COMMENTS BY ID:

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// SEEDS DON'T WORK RIGHT NOW
