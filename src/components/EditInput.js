import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditInput({ formData, onSubmit }) {
  const [profilePic, setProfilePic] = useState(formData?.profilePicture || '');

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
      <h2>Edit Your CV</h2>
      <Formik
        initialValues={{
          fullName: formData.fullName || '',
          jobTitle: formData.jobTitle || '',
          contact: {
            phone: formData.contact?.phone || '',
            email: formData.contact?.email || '',
            website: formData.contact?.website || '',
          },
          summary: formData.summary || '',
          skills: formData.skills || '',
          certifications: formData.certifications || '',
          experience: formData.experience || '',
          education: formData.education || [{ institution: '', degree: '', year: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values.profilePicture = profilePic; // Ensure the profile picture is included
          onSubmit(values); // Pass updated form data to the parent component
        }}
      >
        {({ values, handleSubmit }) => (
          <Form className="my-4">
            {/* Full Name */}
            <div className="mb-3">
              <label>Full Name</label>
              <Field className="form-control" name="fullName" />
              <ErrorMessage name="fullName" component="div" className="text-danger" />
            </div>

            {/* Job Title */}
            <div className="mb-3">
              <label>Job Title</label>
              <Field className="form-control" name="jobTitle" />
              <ErrorMessage name="jobTitle" component="div" className="text-danger" />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label>Phone Number</label>
              <Field className="form-control" name="contact.phone" />
              <ErrorMessage name="contact.phone" component="div" className="text-danger" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <Field className="form-control" name="contact.email" />
              <ErrorMessage name="contact.email" component="div" className="text-danger" />
            </div>

            {/* Website */}
            <div className="mb-3">
              <label>Website (Optional)</label>
              <Field className="form-control" name="contact.website" />
            </div>

            {/* Profile Picture */}
            <div className="mb-3">
              <label>Profile Picture (Optional)</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleProfilePictureChange}
              />
            </div>

            {/* Summary */}
            <div className="mb-3">
              <label>Summary</label>
              <Field as="textarea" className="form-control" name="summary" />
              <ErrorMessage name="summary" component="div" className="text-danger" />
            </div>

            {/* Skills */}
            <div className="mb-3">
              <label>Skills</label>
              <Field as="textarea" className="form-control" name="skills" />
              <ErrorMessage name="skills" component="div" className="text-danger" />
            </div>

            {/* Certifications */}
            <div className="mb-3">
              <label>Certifications</label>
              <Field as="textarea" className="form-control" name="certifications" />
            </div>

            {/* Experience */}
            <div className="mb-3">
              <label>Professional Experience</label>
              <Field as="textarea" className="form-control" name="experience" />
              <ErrorMessage name="experience" component="div" className="text-danger" />
            </div>

            {/* Education */}
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
                          placeholder="Year of Studies (2020-2024)"
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

            {/* Submit Changes Button */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit} // Use Formik's handleSubmit to trigger form submission
            >
              Submit Changes
            </button>


          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditInput;
