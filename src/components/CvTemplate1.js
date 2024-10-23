import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CvTemplate2({ formData }) {
  const navigate = useNavigate(); // Initialize useNavigate

  
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
          <button className="btn btn-primary" onClick={() => window.print()}>
            Download CV
          </button>
          {' '}

<button class="edit-button"
 type="button"
 onClick={() => navigate('/edit')}


>
  <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
</button>



        </div>
      </div>
    </div>
  );
}

export default CvTemplate2;
