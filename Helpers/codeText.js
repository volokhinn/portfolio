export const codeText = (text) => {
  let lines = text.split('\n');

  let lineNumbers = [];
  for (let i = 1; i <= lines.length; i++) {
    lineNumbers.push(i);
  }

  return (newText = lines.map((line, index) => (
    <div key={index}>
      <div className={`flex`}>
        <div
          className={`flex justify-center`}
          style={{
            marginRight: '20px',
            minWidth: '30px',
          }}>
          {lineNumbers[index]}
        </div>
        <div>{line}</div>
      </div>
    </div>
  )));
};
