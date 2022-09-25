function formatOutput(output) {
  let fromIndex = output.search("{");
  let toIndex = output.search("}");
  let json = output.slice(fromIndex, toIndex + 1).replaceAll('\\"','"');
  return JSON.parse(json);
}

module.exports = { formatOutput };
