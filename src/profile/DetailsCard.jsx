

import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailsCard = ({ profile }) => {
  const [fields, setFields] = useState({
    height: "",
    weight: "",
    gender: "",
    address: "",
  });

  const [editingField, setEditingField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = profile?.user?.id;
  console.log(userId);

  useEffect(() => {
    if (profile) {
      setFields({
        height: profile?.additional_info?.height || "",
        weight: profile?.additional_info?.weight || "",
        gender: profile?.additional_info?.gender || "",
        address: profile?.additional_info?.address || "",
      });
    }
  }, [profile]);

  // Handler to save changes
  const handleSave = async (field) => {
    setIsSubmitting(true);
    try {
      // Send the updated field to the API
      const response = await axios.post(`${baseUrl}/user-profile/${userId}/additional-info/`, {
        [field]: fields[field], // Update the specific field dynamically
      });

      if (response.status === 200) {
        // Set success message and reset the editing field
        setSuccessMessage(`${field} updated successfully!`);
        setEditingField(null); // Stop editing mode
        // Refresh fields (this will automatically re-render with updated data)
        setFields((prevFields) => ({
          ...prevFields,
          [field]: fields[field], // This ensures the updated value is shown
        }));
      } else {
        // Handle failure (you can add a failure message here)
        setSuccessMessage("Failed to update. Please try again.");
      }
    } catch (error) {
      console.error("Error updating field:", error);
      setSuccessMessage("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handler for editing field
  const handleEdit = (field) => {
    setEditingField(field);
    setSuccessMessage(""); // Clear any previous success message
  };

  // Update local field state dynamically
  const handleFieldChange = (field, value) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
<div className="bg-white p-6 rounded-lg shadow-md max-w-md min-h-[400px] mx-auto flex flex-col">
{/* Display success or error message */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-2 rounded-md mb-4">
          {successMessage}
        </div>
      )}
      <ul className="space-y-7">
        {/* Height */}
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Height (cm)</p>
            {editingField === "height" ? (
              <input
                type="number"
                value={fields.height}
                onChange={(e) => handleFieldChange("height", e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-gray-800 font-medium">{fields.height || "N/A"}</p>
            )}
          </div>
          {editingField === "height" ? (
            <button
              onClick={() => handleSave("height")}
              className="text-green-500 hover:underline"
              disabled={isSubmitting}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit("height")}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          )}
        </li>

        {/* Weight */}
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Weight (kg)</p>
            {editingField === "weight" ? (
              <input
                type="number"
                value={fields.weight}
                onChange={(e) => handleFieldChange("weight", e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-gray-800 font-medium">{fields.weight || "N/A"}</p>
            )}
          </div>
          {editingField === "weight" ? (
            <button
              onClick={() => handleSave("weight")}
              className="text-green-500 hover:underline"
              disabled={isSubmitting}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit("weight")}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          )}
        </li>

        {/* Gender */}
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Gender</p>
            {editingField === "gender" ? (
              <select
                value={fields.gender}
                onChange={(e) => handleFieldChange("gender", e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Gender</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
                <option value="O">Other</option>
              </select>
            ) : (
              <p className="text-gray-800 font-medium">{fields.gender || "N/A"}</p>
            )}
          </div>
          {editingField === "gender" ? (
            <button
              onClick={() => handleSave("gender")}
              className="text-green-500 hover:underline"
              disabled={isSubmitting}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit("gender")}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          )}
        </li>

        {/* Address */}
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Address</p>
            {editingField === "address" ? (
              <input
                type="text"
                value={fields.address}
                onChange={(e) => handleFieldChange("address", e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-gray-500 font-medium">{fields.address || ""}</p>
            )}
          </div>
          {editingField === "address" ? (
            <button
              onClick={() => handleSave("address")}
              className="text-green-500 hover:underline"
              disabled={isSubmitting}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit("address")}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DetailsCard;
