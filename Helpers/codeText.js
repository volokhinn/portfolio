export const codeText = (text) => {
  let lines = text.split('\n');

  let lineNumbers = [];
  for (let i = 1; i <= lines.length; i++) {
    lineNumbers.push(i);
  }

  return (newText = lines.map((line, index) => (
    <pre key={index}>{`${lineNumbers[index]} \t ${line}`}</pre>
  )));
};
