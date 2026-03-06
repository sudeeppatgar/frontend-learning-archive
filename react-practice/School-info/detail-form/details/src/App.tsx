import React, { useState } from 'react';

// student form 
interface FormData1 {
  fname: string;
  lname: string;
  mname: string;
  dob: string;
  pname:string;
  pmname:string;
  plname:string;
  pnumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface FormData2 {
  tfname: string;
  tlname: string;
  tmname: string;
  tdob: string;
  tphoneno: string;
  tqualification: string;
  texperience: string;
  taddress1: string;
  taddress2: string;
  tcity: string;
  tstate: string;
  tzip: string;
  tcountry: string;
}

const Form: React.FC = () => {
  const [formData1, setFormData1] = useState<FormData1>({
    fname: '',
    lname: '',
    mname: '',
    dob: '',
    pname:'',
    pmname:'',
    plname:'',
    pnumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',   
    country:''
  });

  const [formData2, setFormData2] = useState<FormData2>({
    tfname: '',
    tlname: '',
    tmname: '',
    tdob: "",
    tphoneno: '',
    tqualification: '',
    texperience: '',
    taddress1: '',
    taddress2: '',
    tcity: '',
    tstate: '',
    tzip: '',   
    tcountry: ''
  });

  const [responseMessage, setResponseMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitting1, setIsSubmitting1] = useState<boolean>(false);

  // Handle change for student form
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData1((prev) => ({ ...prev, [name]: value }));
  };

  // Handle change for teacher form
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData2((prev) => ({ ...prev, [name]: value }));
  };

  // Student form submit
  const handleSubmit1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData1)
      });

      const result = await response.json();
      if (result.success) {
        setResponseMessage('Form submitted successfully!');
        setFormData1({
          fname: '',
          lname: '',
          mname: '',
          dob: '',
          pname: '',
          pmname: '',
          plname: '',
          pnumber:'',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          country: ''
        }); // Clear form
      } else {
        setResponseMessage('Failed to submit the form.');
      }
    } catch (error) {
      setResponseMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Teacher form submit
  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting1(true);

    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData2)
      });

      const result = await response.json();
      if (result.success) {
        setResponseMessage('Form submitted successfully!');
        setFormData2({
          tfname: '',
          tlname: '',
          tmname: '',
          tdob: '',
          tphoneno: '',
          tqualification: '',
          texperience: '',
          taddress1: '',
          taddress2: '',
          tcity: '',
          tstate: '',
          tzip: '',
          tcountry: ''
        }); // Clear form
      } else {
        setResponseMessage('Failed to submit the form.');
      }
    } catch (error) {
      setResponseMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting1(false);
    }
  };

  return (
    <>
      {/* Student form */}
      <div className="container">
      <div className="std">
        <h1>Student Form</h1>
        <form onSubmit={handleSubmit1}>
          <div className="form-group1">
            <h3>Student Details :</h3>
              <div className='info'>
               <label htmlFor="fname">First Name:</label><br />
                 <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData1.fname}
                    onChange={handleChange1}
                     required
                  />
              </div>

              <div className='info'>
                <label htmlFor="mname">Middle Name:</label><br />
                 <input
                  type="text"
                  id="mname"
                  name="mname"
                  value={formData1.mname}
                  onChange={handleChange1}
                  required
            />
          </div>

          <div className='info'>
            <label htmlFor="lname">Last Name:</label><br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData1.lname}
              onChange={handleChange1}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="dob">Date of Birth:</label><br />
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData1.dob}
              onChange={handleChange1}
              required
            />
          </div>
          </div>
          <div className="form-group2">
            <h3>Parents Details :</h3>
              <div className='info'>
               <label htmlFor="pname">First Name:</label><br />
                 <input
                    type="text"
                    id="pname"
                    name="pname"
                    value={formData1.pname}
                    onChange={handleChange1}
                     required
                  />
              </div>

              <div className='info'>
                <label htmlFor="pmname">Middle Name:</label><br />
                 <input
                  type="text"
                  id="pmname"
                  name="pmname"
                  value={formData1.pmname}
                  onChange={handleChange1}
                  required
            />
          </div>

          <div className='info'>
            <label htmlFor="plname">Last Name:</label><br />
            <input
              type="text"
              id="plname"
              name="plname"
              value={formData1.plname}
              onChange={handleChange1}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="pnumber">Phone Number:</label><br />
            <input
              type="text"
              id="pnumber"
              name="pnumber"
              value={formData1.pnumber}
              onChange={handleChange1}
              required
            />
          </div>
          </div>
          <div className='form-group2'>
          <h3>Address Details :</h3>
          <div className='info'>
            <label htmlFor="address1">Address Line 1:</label><br />
            <input
              type="text"
              id="address1"
              name="address1"
              value={formData1.address1}
              onChange={handleChange1}
              required
            />
          </div>
          <div className='info'>
            <label htmlFor="address2">Address Line 2:</label><br />
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData1.address2}
              onChange={handleChange1}
            />
          </div>
          < div className='info'>
            <label htmlFor="city">City:</label><br />
            <input
              type="text"
              id="city"
              name="city"
              value={formData1.city}
              onChange={handleChange1}
            />
          </div>
          <div className='info'>
            <label htmlFor="state">State:</label><br />
            <input
              type="text"
              id="state"
              name="state"
              value={formData1.state}
              onChange={handleChange1}
            />
          </div>
          <div className='info'>
            <label htmlFor="zip">Zip Code:</label><br />
            <input
              type="number"
              id="zip"
              name="zip"
              value={formData1.zip}
              onChange={handleChange1}
            />
          </div>
          <div className='info'>
            <label htmlFor="country">Country:</label><br />
            <input
              type="text"
              id="country"
              name="country"
              value={formData1.country}
              onChange={handleChange1}
            />
          </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      {/* Teacher form */}
      <div className="tch">
        <h1>Teacher Form</h1>
        <form onSubmit={handleSubmit2}>
          <div className='form-group3'>
          <div className='info'>
            <label htmlFor="tfname">First Name:</label><br />
            <input
              type="text"
              id="tfname"
              name="tfname"
              value={formData2.tfname}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="tmname">Middle Name:</label><br />
            <input
              type="text"
              id="tmname"
              name="tmname"
              value={formData2.tmname}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="tlname">Last Name:</label><br />
            <input
              type="text"
              id="tlname"
              name="tlname"
              value={formData2.tlname}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="tdob">Date of Birth:</label><br />
            <input
              type="date"
              id="tdob"
              name="tdob"
              value={formData2.tdob}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="tphoneno">Phone Number:</label><br />
            <input
              type="number"
              id="tphoneno"
              name="tphoneno"
              value={formData2.tphoneno}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="tqualification">Qualification:</label><br />
            <input
              type="text"
              id="tqualification"
              name="tqualification"
              value={formData2.tqualification}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="texperience">Experience:</label><br />
            <input
              type="text"
              id="texperience"
              name="texperience"
              value={formData2.texperience}
              onChange={handleChange2}
              required
            />
          </div>
          </div>
          <div className='form-group4'>
          <h3>Address Details</h3>
          <div className='info'>
            <label htmlFor="taddress1">Address Line 1:</label><br />
            <input
              type="text"
              id="taddress1"
              name="taddress1"
              value={formData2.taddress1}
              onChange={handleChange2}
              required
            />
          </div>

          <div className='info'>
            <label htmlFor="taddress2">Address Line 2:</label><br />
            <input
              type="text"
              id="taddress2"
              name="taddress2"
              value={formData2.taddress2}
              onChange={handleChange2}
            />
          </div>
          <div className='info'>
            <label htmlFor="tcity">City:</label><br />
            <input
              type="text"
              id="tcity"
              name="tcity"
              value={formData2.tcity}
              onChange={handleChange2}
            />
          </div>
          <div className='info'>
            <label htmlFor="tstate">State:</label><br />
            <input
              type="text"
              id="tstate"
              name="tstate"
              value={formData2.tstate}
              onChange={handleChange2}
            />
          </div>
          <div className='info'>
            <label htmlFor="tzip">Zip Code:</label><br />
            <input
              type="number"
              id="tzip"
              name="tzip"
              value={formData2.tzip}
              onChange={handleChange2}
            />
          </div>
          <div className='info'>
            <label htmlFor="tcountry">Country:</label><br />
            <input
              type="text"
              id="tcountry"
              name="tcountry"
              value={formData2.tcountry}
              onChange={handleChange2}
            />
          </div>
          </div>
          <button type="submit" disabled={isSubmitting1}>
            {isSubmitting1 ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      </div>
    </>
  );
};

export default Form;
