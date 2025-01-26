// import React, { useState, useEffect } from "react";
// import API from "../../api/index.js";
// import "./styles/EditEquipmentModal.css";

// function EditEquipmentModal({ isOpen, onClose, equipment, onSave }) {
//   const [name, setName] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [model, setModel] = useState("");
//   const [serialNumber, setSerialNumber] = useState("");
//   const [condition, setCondition] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     if (equipment) {
//       setName(equipment.name || "");
//       setManufacturer(equipment.manufacturer || "");
//       setModel(equipment.model || "");
//       setSerialNumber(equipment.serial_number || "");
//       setCondition(equipment.condition || "");
//       setQuantity(equipment.quantity || 1);
//     }
//   }, [equipment]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const updatedEquipment = {
//       name,
//       manufacturer,
//       model,
//       serial_number: serialNumber,
//       condition,
//       quantity,
//     };

//     try {
//       const response = await API.put(
//         `/api/equipment/${equipment.id}`,
//         updatedEquipment
//       );
//       onSave(response.data);
//       onClose();
//     } catch (error) {
//       console.error("Error updating equipment:", error);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Edit Equipment</h2>
//           <button className="close-button" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           {/* Add form fields for manufacturer, model, serial_number, condition, quantity */}
//           <div className="modal-footer">
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="submit">Save Changes</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditEquipmentModal;

import React, { useState, useEffect } from "react";
import API from "../../api/index";
import "./styles/EditEquipmentModal.css"; // Import CSS file for styling

function EditEquipmentModal({ isOpen, onClose, equipment, onSave }) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [condition, setCondition] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (equipment) {
      setName(equipment.name || "");
      setManufacturer(equipment.manufacturer || "");
      setModel(equipment.model || "");
      setSerialNumber(equipment.serial_number || "");
      setCondition(equipment.condition || "");
      setQuantity(equipment.quantity || 1);
    }
  }, [equipment]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedEquipment = {
      name,
      manufacturer,
      model,
      serial_number: serialNumber,
      condition,
      quantity,
    };

    try {
      const response = await API.put(
        `/api/equipment/${equipment.id}`,
        updatedEquipment
      );
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error("Error updating equipment:", error);
      // Handle error (e.g., display an error message)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="edit-equipment-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Equipment</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input
              type="text"
              id="manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="serial-number">Serial Number:</label>
            <input
              type="text"
              id="serial-number"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
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
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEquipmentModal;