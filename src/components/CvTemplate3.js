import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CvTemplate3({ formData }) {
  return (
    <div className="container my-5">
      <div className="cv-output p-4" style={{ backgroundColor: '#ffffff', padding: '40px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <div className="text-center mb-5">
          <h1 className="mb-0" style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>{formData.fullName}</h1>
          <h4 className="text-muted" style={{ fontSize: '20px', color: '#666' }}>{formData.jobTitle}</h4>
        </div>

        <div style={{ borderBottom: '2px solid #333', marginBottom: '20px' }}></div>

        <div className="my-4">
          <h5 style={{ color: '#555', fontSize: '18px' }}>Contact Information</h5>
          <div className="d-flex justify-content-between" style={{ color: '#777' }}>
            <p><strong>Phone:</strong> {formData.contact.phone}</p>
            <p><strong>Email:</strong> {formData.contact.email}</p>
            {formData.contact.website && (
              <p><strong>Website:</strong> <a href={formData.contact.website} target="_blank" rel="noreferrer">{formData.contact.website}</a></p>
            )}
          </div>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div>

        <div className="my-4">
          <h5 style={{ color: '#555', fontSize: '18px' }}>Summary</h5>
          <p style={{ color: '#777', lineHeight: '1.6', fontSize: '16px' }}>{formData.summary}</p>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div>

        <div className="my-4">
          <h5 style={{ color: '#555', fontSize: '18px' }}>Skills</h5>
          <p style={{ color: '#777', lineHeight: '1.6', fontSize: '16px' }}>{formData.skills}</p>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div>

        {formData.certifications && (
          <div className="my-4">
            <h5 style={{ color: '#555', fontSize: '18px' }}>Certifications</h5>
            <p style={{ color: '#777', lineHeight: '1.6', fontSize: '16px' }}>{formData.certifications}</p>
          </div>
        )}

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div>

        <div className="my-4">
          <h5 style={{ color: '#555', fontSize: '18px' }}>Professional Experience</h5>
          <p style={{ color: '#777', lineHeight: '1.6', fontSize: '16px' }}>{formData.experience}</p>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div>

        <div className="my-4">
          <h5 style={{ color: '#555', fontSize: '18px' }}>Education</h5>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-3" style={{ color: '#777', fontSize: '16px' }}>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Year of Studies:</strong> {edu.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="btn btn-secondary"
            onClick={() => window.print()}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default CvTemplate3;
