import React from 'react';

class FileInput extends React.Component {
  handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result;
      console.log(fileContent);
    };

    reader.readAsText(file);
  };

  render() {
    return (
      <input type="file" onChange={this.handleFileChange} />
    );
  }
}

export default FileInput;