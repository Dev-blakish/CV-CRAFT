import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputPage from './components/CvInput';
import EditInput from './components/EditInput';
import CvTemplate1 from './components/CvTemplate1';
import CvTemplate2 from './components/CvTemplate2';
import CvTemplate3 from './components/CvTemplate3';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const navigate = useNavigate(); // For programmatic navigation

  const handleFormSubmit = (data) => {
    setFormData(data);
    navigate('/select-template'); // Navigate to the template selection page after form submission
  };

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <CvTemplate1 formData={formData} />;
      case 'template2':
        return <CvTemplate2 formData={formData} />;
      case 'template3':
        return <CvTemplate3 formData={formData} />;
      default:
        return <CvTemplate1 formData={formData} />;
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InputPage onSubmit={handleFormSubmit} formData={formData} />} />
        
        <Route path="/edit" element={<EditInput formData={formData} onSubmit={setFormData} />} />
        
        <Route path="/edit" element={<EditInput formData={formData} onSubmit={handleFormSubmit} />} />


        <Route
          path="/select-template"
          element={
            <div className="container my-5">
              <div className="text-center mb-4">
                <h2>Select CV Template</h2>
                <select
                  className="form-select w-50 mx-auto"
                  value={selectedTemplate}
                  onChange={handleTemplateChange}
                >
                  <option value="template1">Template 1</option>
                  <option value="template2">Template 2</option>
                  <option value="template3">Template 3</option>
                </select>
              </div>
              {renderTemplate()}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
