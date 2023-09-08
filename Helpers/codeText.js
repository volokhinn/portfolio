export const codeText = (text) => {
  let lines = text.split('\n');

  let lineNumbers = [];
  for (let i = 1; i <= lines.length; i++) {
    lineNumbers.push(i.toString().padStart(2, ' '))
  }

  return (newText = lines.map((line, index) => (
    <div key={index}>
      <span style={{ marginRight: '20px', WebkitUserModify: 'read-write-plaintext-only' }}>{lineNumbers[index]}</span>
      <span>{line}</span>
    </div>
  )));
};