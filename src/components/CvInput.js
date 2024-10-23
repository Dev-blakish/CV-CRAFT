import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function InputPage({ onSubmit, initialData }) {
  // Safely access initialData properties with optional chaining (?.) or provide default values
  const [profilePic, setProfilePic] = useState(initialData?.profilePicture || '');

  useEffect(() => {
    if (initialData?.profilePicture) {
      setProfilePic(initialData.profilePicture);
    }
  }, [initialData]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    contact: Yup.object({
      phone: Yup.string().required('Phone number is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
    }),
    summary: Yup.string().required('Summary is required'),
    skills: Yup.string().required('Skills are required'),
    certifications: Yup.string(),
    experience: Yup.string().required('Experience is required'),
    education: Yup.array().of(
      Yup.object({
        institution: Yup.string().required('Institution is required'),
        degree: Yup.string().required('Degree is required'),
        year: Yup.string().required('Year is required'),
      })
    ),
  });

  return (
    <div className="container my-5">
      <div
        style={{
          height: '90vh',
          borderRadius: '10px',
          backgroundColor: 'SlateBlue',
          color: 'white',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          className="display-4"
          style={{
            fontFamily: "'Rowdies', sans-serif",
            fontWeight: '700',
          }}
        >
          You're one step closer <br /> to achieving a simplified <br /> and well-structured CV layout.
        </h1>

        <button
          className="btn-main"
          style={{
            fontFamily: "'Rowdies', sans-serif",
            fontWeight: '90',
          }}
          onClick={() => {
            const formElement = document.getElementById('cvForm');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Start Now
        </button>
      </div>

      <div id="cvForm">
        <Formik
          initialValues={{
            fullName: initialData?.fullName || '',
            jobTitle: initialData?.jobTitle || '',
            contact: {
              phone: initialData?.contact?.phone || '',
              email: initialData?.contact?.email || '',
              website: initialData?.contact?.website || '',
            },
            summary: initialData?.summary || '',
            skills: initialData?.skills || '',
            certifications: initialData?.certifications || '',
            experience: initialData?.experience || '',
            education: initialData?.education || [{ institution: '', degree: '', year: '' }],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            values.profilePicture = profilePic;
            onSubmit(values); // Send the data back when submitting
          }}
        >
          {({ values }) => (
            <Form className="my-4">
              <div className="mb-3">
                <label>Full Name</label>
                <Field className="form-control" name="fullName" />
                <ErrorMessage name="fullName" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Job Title</label>
                <Field className="form-control" name="jobTitle" />
                <ErrorMessage name="jobTitle" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Phone Number</label>
                <Field className="form-control" name="contact.phone" />
                <ErrorMessage name="contact.phone" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <Field className="form-control" name="contact.email" />
                <ErrorMessage name="contact.email" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Website (Optional)</label>
                <Field className="form-control" name="contact.website" />
              </div>

              <div className="mb-3">
                <label>Profile Picture (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleProfilePictureChange}
                />
              </div>

              <div className="mb-3">
                <label>Summary</label>
                <Field as="textarea" className="form-control" name="summary" />
                <ErrorMessage name="summary" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Skills</label>
                <Field as="textarea" className="form-control" name="skills" />
                <ErrorMessage name="skills" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Certifications</label>
                <Field as="textarea" className="form-control" name="certifications" />
              </div>

              <div className="mb-3">
                <label>Professional Experience</label>
                <Field as="textarea" className="form-control" name="experience" />
                <ErrorMessage name="experience" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Education</label>
                <FieldArray name="education">
                  {({ push, remove }) => (
                    <div>
                      {values.education.map((_, index) => (
                        <div key={index} className="mb-3">
                          <Field
                            className="form-control mb-1"
                            name={`education[${index}].institution`}
                            placeholder="Institution"
                          />
                          <ErrorMessage
                            name={`education[${index}].institution`}
                            component="div"
                            className="text-danger"
                          />

                          <Field
                            className="form-control mb-1"
                            name={`education[${index}].degree`}
                            placeholder="Degree"
                          />
                          <ErrorMessage
                            name={`education[${index}].degree`}
                            component="div"
                            className="text-danger"
                          />

                          <Field
                            className="form-control mb-1"
                            name={`education[${index}].year`}
                            placeholder="Year of Studies (2020-2024))"
                          />
                          <ErrorMessage
                            name={`education[${index}].year`}
                            component="div"
                            className="text-danger"
                          />

                          <button
                            type="button"
                            className="btn btn-danger mb-2"
                            onClick={() => remove(index)}
                            disabled={values.education.length === 1}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => push({ institution: '', degree: '', year: '' })}
                      >
                        Add More Education
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default InputPage;
