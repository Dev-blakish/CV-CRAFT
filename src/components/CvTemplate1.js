import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CvTemplate2({ formData }) {
  return (
    <div className="container my-5">
      <div className="cv-output p-4" style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className="d-flex align-items-center mb-4" style={{ borderBottom: '2px solid #ddd', paddingBottom: '15px' }}>
          {formData.profilePicture && (
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: '120px', height: '120px', marginRight: '20px' }}
            />
          )}
          <div>
            <h1>{formData.fullName}</h1>
            <h4 className="text-muted">{formData.jobTitle}</h4>
          </div>
        </div>

        <div className="my-4">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{formData.contact.phone}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{formData.contact.email}</td>
              </tr>
              {formData.contact.website && (
                <tr>
                  <td><strong>Website:</strong></td>
                  <td><a href={formData.contact.website} target="_blank" rel="noreferrer">{formData.contact.website}</a></td>
                </tr>
              )}
            </tbody>
          </table>
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
            className="btn btn-primary"
            onClick={() => window.print()}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default CvTemplate2;
