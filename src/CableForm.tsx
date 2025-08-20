import React, { useState } from 'react';

// Define the type for our cable data
interface CableData {
  connectorSideA: string;
  connectorSideB: string;
  spec: string;
  length: number;
  color: string;
  sheathMaterial: string;
  shielded: boolean;
  maxDataTransferRate: string;
  maxChargeWattage: number;
}

const CableForm = () => {
  const [formData, setFormData] = useState<CableData>({
    connectorSideA: '',
    connectorSideB: '',
    spec: '',
    length: 0,
    color: '',
    sheathMaterial: '',
    shielded: false,
    maxDataTransferRate: '',
    maxChargeWattage: 0
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Cable data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Example field for connector side A */}
      <div>
        <label htmlFor="connectorSideA" className="block text-sm font-medium">
          Connector Side A
        </label>
        <select
          id="connectorSideA"
          name="connectorSideA"
          value={formData.connectorSideA}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select connector type</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Example field for length */}
      <div>
        <label htmlFor="length" className="block text-sm font-medium">
          Length (cm)
        </label>
        <input
          type="number"
          id="length"
          name="length"
          value={formData.length}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Example field for color */}
      <div>
        <label htmlFor="color" className="block text-sm font-medium">
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Example field for shielded status */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="shielded"
          name="shielded"
          checked={formData.shielded}
          onChange={handleInputChange}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="shielded" className="ml-2 block text-sm">
          Shielded
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Cable
      </button>
    </form>
  );
};

export default CableForm;