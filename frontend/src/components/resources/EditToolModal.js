import React, { useState, useEffect } from 'react';
import API from '../../api/index';
import './styles/EditToolModal.css'; // Your CSS file for styling

function EditToolModal({ isOpen, onClose, tool, onSave }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  useEffect(() => {
    if (tool) {
      setName(tool.name || '');
      setType(tool.type || '');
      setCondition(tool.condition || '');
      // Format date for date input field
      setPurchaseDate(tool.purchase_date ? tool.purchase_date.substring(0, 10) : '');
    }
  }, [tool]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedTool = {
      name,
      type,
      condition,
      purchase_date: purchaseDate,
    };

    try {
      const response = await API.put(`/tools/${tool.id}`, updatedTool);
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error('Error updating tool:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="edit-tool-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Tool</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="condition">Condition:</label>
            <input
              type="text"
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="purchase-date">Purchase Date:</label>
            <input
              type="date"
              id="purchase-date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditToolModal;