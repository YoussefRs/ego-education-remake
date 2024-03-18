import React, { useState } from "react";
import "./Purchase.css";
import axios from "axios";

function EnrollmentForm() {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   program: "MASTER OF SCIENCE IN JAVA PROGRAMMING",
  //   document: null,
  // });

  // const handleStepClick = (step) => {
  //   setCurrentStep(step);
  // };

  // const handleNext = () => {
  //   setCurrentStep((prevStep) => prevStep + 1);
  // };

  // const handlePrev = () => {
  //   setCurrentStep((prevStep) => prevStep - 1);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     document: file,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("firstName", formData.firstName);
  //   formData.append("lastName", formData.lastName);
  //   formData.append("email", formData.email);
  //   formData.append("phoneNumber", formData.phoneNumber);
  //   formData.append("program", formData.program);
  //   formData.append("document", formData.document);
  //   try {
  //     const result = await axios.post(
  //       "http://127.0.0.1:9090/form/submit",
  //       formData
  //     );
  //     console.log(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(formData);
  // return (
  //   <div className="container mt-5">
  //     <div className="stepwizard">
  //       <div className="stepwizard-row setup-panel">
  //         {[1, 2, 3, 4].map((step) => (
  //           <div key={step} className="stepwizard-step">
  //             <button
  //               onClick={() => handleStepClick(step)}
  //               type="button"
  //               className={`btn ${
  //                 step === currentStep ? "btn-primary" : "btn-default"
  //               } btn-circle`}
  //               disabled={step > currentStep}
  //             >
  //               {step}
  //             </button>
  //             <p>Step {step}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     <form role="form">
  //       <div
  //         className={`row setup-content ${currentStep === 1 ? "show" : "hide"}`}
  //         id="step-1"
  //       >
  //         <div className="col-xs-12">
  //           <div className="col-md-12">
  //             <h3>Step 1</h3>
  //             <div className="form-group">
  //               <label className="control-label">First Name</label>
  //               <input
  //                 maxLength="100"
  //                 type="text"
  //                 required="required"
  //                 name="firstName"
  //                 className="form-control"
  //                 placeholder="Enter First Name"
  //                 value={formData.firstName}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Last Name</label>
  //               <input
  //                 maxLength="100"
  //                 type="text"
  //                 required="required"
  //                 name="lastName"
  //                 className="form-control"
  //                 placeholder="Enter Age"
  //                 value={formData.lastName}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Email</label>
  //               <input
  //                 maxLength="100"
  //                 type="email"
  //                 required="required"
  //                 name="email"
  //                 className="form-control"
  //                 placeholder="Enter Your Email"
  //                 value={formData.email}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Phone Number</label>
  //               <input
  //                 maxLength="100"
  //                 type="number"
  //                 required="required"
  //                 name="phoneNumber"
  //                 className="form-control"
  //                 placeholder="Enter Phone Number"
  //                 value={formData.phoneNumber}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Program</label>
  //               <input
  //                 maxLength="100"
  //                 type="text"
  //                 required="required"
  //                 className="form-control"
  //                 value="MASTER OF SCIENCE IN JAVA PROGRAMMING"
  //                 placeholder="Enter Phone Number"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Document</label>
  //               <input
  //                 maxLength="100"
  //                 type="file"
  //                 required="required"
  //                 className="form-control"
  //                 placeholder="upload document"
  //                 onChange={handleFileChange}
  //               />
  //             </div>
  //             <button
  //               className="btn btn-primary nextBtn btn-lg pull-right"
  //               type="button"
  //               onClick={handleSubmit}
  //             >
  //               Next
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //       <div
  //         className={`row setup-content ${currentStep === 2 ? "show" : "hide"}`}
  //         id="step-2"
  //       >
  //         <div className="col-xs-12">
  //           <div className="col-md-12">
  //             <h3> Step 2</h3>
  //             <div className="form-group">
  //               <label className="control-label">Company Name</label>
  //               <input
  //                 maxLength="200"
  //                 type="text"
  //                 required="required"
  //                 className="form-control"
  //                 placeholder="Enter Company Name"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label className="control-label">Company Address</label>
  //               <input
  //                 maxLength="200"
  //                 type="text"
  //                 required="required"
  //                 className="form-control"
  //                 placeholder="Enter Company Address"
  //               />
  //             </div>
  //             <button
  //               className="btn btn-default prevBtn btn-lg pull-left"
  //               type="button"
  //               onClick={handlePrev}
  //             >
  //               Prev
  //             </button>
  //             <button
  //               className="btn btn-primary nextBtn btn-lg pull-right"
  //               type="button"
  //               onClick={handleNext}
  //             >
  //               Next
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Steps 3 and 4 content */}
  //     </form>
  //   </div>
  // );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [file, setFile] = useState();
  const [msg, setMsg] = useState("");

  const upload = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("salary", salary);
    formData.append("file", file);
    axios
      .post("http://localhost:3001/create", formData)
      .then((response) => {
        console.log(response);
        if (response.data.Status === "Success") {
          setMsg("File Successfully Uploaded");
        } else {
          setMsg("Error");
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="row">
        <h1>React JS Node Express JS Upload File with Mysql Insert data</h1>
        <div className="col-12">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            autoComplete="off"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter salary"
            autoComplete="off"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Required Documents</label>
          <input
            className="form-control form-control-lg"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={upload}
          style={{ marginTop: "20px" }}
        >
          Upload
        </button>
        <h1
          style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
        >
          {msg}
        </h1>
      </div>
    </div>
  );
}

export default EnrollmentForm;
