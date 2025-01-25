import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/DocumentUpload.css'; // Import CSS file for styling

function DocumentUpload({ projectId }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    // Handle file uploads here, e.g., send them to your backend API
    setUploadedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.error('file reading failed')
      reader.onload = () => {
        // Do something with the file contents, e.g., send to server
        const binaryStr = reader.result;
        console.log('Uploading file:', file.name, binaryStr);
        // Here you would typically make an API call to upload the file
        // Example using fetch:
        // fetch(`/api/projects/${projectId}/documents`, {
        //   method: 'POST',
        //   body: file, // Assuming your API handles single file uploads
        //   headers: {
        //     'Content-Type': file.type,
        //     // Add any necessary headers like authorization tokens
        //   },
        // })
        // .then(response => {
        //   if (!response.ok) throw new Error('Network response was not ok');
        //   return response.json();
        // })
        // .then(data => {
        //   console.log('File uploaded successfully:', data);
        //   // Update UI to reflect successful upload
        // })
        // .catch(error => {
        //   console.error('Error uploading file:', error);
        //   setUploadError('Error uploading file.');
        //   // Handle upload error, possibly revert optimistic state update
        // });
      }

      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = (fileName) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  return (
    <div className="document-upload-section">
      <h3 className="document-upload-title">Document Upload</h3>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {uploadError && <div className="error">{uploadError}</div>}
      <aside>
        <h4>Uploaded Files</h4>
        <ul>
          {uploadedFiles.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes 
              <button onClick={() => removeFile(file.name)}>Remove</button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default DocumentUpload;