REFER TO THIS FOR FILTERING COMMENTS BY ID:

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// SEEDS DON'T WORK RIGHT NOW

// TODO:

1. Fix the signup mutations, not connecting with gql server

# Installation Steps

1. npm i
2. npm run dev
