import React, { useState } from "react";
import "./NewCostumerForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "../Cards/Card";

function NewCostumerForm() {
  const [showForm, setShowForm] = useState(true);
  // ? Porque há um showForm se ele não está sendo usado?

  const data = {
    customerTitle: [ 'Mr.', 'Mrs.', 'Miss', 'Ds.', 'Dr.' ],
    jobsStatus: [ 'Employed Full Time', 'Employed Part Time', 'Self-Employed', 'Student', 'Unemployed']
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      jobStatus: "",
      income: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      dob: Yup.string().required("Date of Birth is Required"),
      jobStatus: Yup.string().required("Job Status is Required"),
      income: Yup.number().required("Annual Income is Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form className="formData" onSubmit={formik.handleSubmit}>
        <div className="NewCostumerForm">
          <h1 className="label">Check your eligibility </h1>
          <label className="label">Title</label>
          <select
            className="selectInput"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          >
            { data.customerTitle.map( title => (
              <option value={ title }>{ title }</option>
            ) ) }
          </select>

          <label className="label">First Name</label>

          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            className="formInput"
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <p className="formError">{formik.errors.firstName}</p>
          ) : null}
          
          <label className="label">Middle Name</label>
          <input
            id="middleName"
            type="text"
            name="middleName"
            className="formInput"
            placeholder="Middle Name"
            onChange={formik.handleChange}
            value={formik.values.middleName}
          />
          <label className="label">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="formInput"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? (
            <p className="formError">{formik.errors.lastName}</p>
          ) : null}
          <label className="label">Date of Birth</label>
          <input
            id="dob"
            type="date"
            name="dob"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          {formik.errors.dob ? (
            <p className="formError">{formik.errors.dob}</p>
          ) : null}
          <label className="label">Job Status</label>
          <select
            id="jobStatus"
            name="jobStatus"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.jobStatus}
          >
            <option value="Employed">Choose One</option>
            { data.jobsStatus.map(job => (
              <option value={ job }>{ job }</option>
            ))}
          </select>
          {formik.errors.jobStatus ? (
            <p className="formError">{formik.errors.jobStatus}</p>
          ) : null}
          <label className="label">Annual Income Before Tax:</label>
          <input
            type="number"
            id="income"
            name="income"
            placeholder="£"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.income}
          />
          {formik.errors.income ? (
            <p className="formError">{formik.errors.income}</p>
          ) : null}
          <button
            onClick={() => setShowForm(false)}
            type="submit"
            className="submitButton"
          >
            Submit
          </button>
        </div>
        { formik.isSubmitting &&
          <>
            <Card 
              selectCard="Anywhere"
            />
            { formik.values.jobStatus === "Student" && 
              <Card 
                selectCard="Student"
              />
            }
            { formik.values.income >= 16000 && 
              <Card 
                selectCard="Liquid"
              />
            }
          </>
        }
      </form>
    </>
  );
}

export default NewCostumerForm;
