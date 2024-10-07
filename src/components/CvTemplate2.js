import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CvTemplate2({ formData }) {
  return (
    <div className="container my-5">
      <div className="cv-output p-4 border rounded" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <div className="text-center">
          {formData.profilePicture && (
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          )}
          <h1 className="mb-0">{formData.fullName}</h1>
          <h4 className="text-muted">{formData.jobTitle}</h4>
        </div>

        <hr />

        <div className="my-4">
          <h5>Contact Information</h5>
          <p><strong>Phone:</strong> {formData.contact.phone}</p>
          <p><strong>Email:</strong> {formData.contact.email}</p>
          {formData.contact.website && (
            <p><strong>Website:</strong> <a href={formData.contact.website} target="_blank" rel="noreferrer">{formData.contact.website}</a></p>
          )}
        </div>

        <div className="my-4">
          <h5>Summary</h5>
          <p>{formData.summary}</p>
        </div>

        <div className="my-4">
          <h5>Skills</h5>
          <p>{formData.skills}</p>
        </div>

        {formData.certifications && (
          <div className="my-4">
            <h5>Certifications</h5>
            <p>{formData.certifications}</p>
          </div>
        )}

        <div className="my-4">
          <h5>Professional Experience</h5>
          <p>{formData.experience}</p>
        </div>

        <div className="my-4">
          <h5>Education</h5>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Year of Studies:</strong> {edu.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="btn btn-success"
            onClick={() => {
              window.print(); 
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default CvTemplate2;
