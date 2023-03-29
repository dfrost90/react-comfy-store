// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'john doe' },
  { id: 2, name: 'susan doe' },
];
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
