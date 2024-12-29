```javascript
const pipeline = [
  {
    $match: {
      "fieldName": {
        $regex: "someRegex",
        $options: "i"
      }
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
];

//This will result in an error if the field 'fieldName' does not exist.
//The error will be "'fieldName' field is not found on document"

const result = await collection.aggregate(pipeline).toArray();
console.log(result);
```