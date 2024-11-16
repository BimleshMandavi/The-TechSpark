"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import MyComponent from '@/components/googleMap/page';

const ContactPage: React.FC = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
    email: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });

    // Validation logic
    if (id === 'phone') {
      const isValidPhone = /^\d{10}$/.test(value);
      setErrors({ ...errors, phone: isValidPhone ? '' : 'Phone number must be exactly 10 digits.' });
    }

    if (id === 'email') {
      const isValidEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
      setErrors({ ...errors, email: isValidEmail ? '' : 'Email must be a valid @gmail.com address.' });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!errors.phone && !errors.email && formValues.phone && formValues.email) {
      // EmailJS integration
      emailjs.send(
        'service_tm9icba', // Replace with your EmailJS service ID
        'template_ml78c8s', // Replace with your EmailJS template ID
        formValues, // Form data
        'Y9QpykyPUz1628IX3' // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Form submitted and email sent successfully!');

         setFormValues({
        fullName: '',
        phone: '',
        email: '',
        message: '',
      });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
      });
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  return (
    <div className='min-h-[100vh] w-full'>
      <div className="relative min-h-[100vh] w-full bg-custom-bg bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <div className='relative flex flex-col items-center sm:flex-row sm:justify-center'>
          <div className='bg-black w-[358px] h-full m-14 text-white rounded sm:w-[50%] mt-[120px]'>
            <div className='text-center pt-5 sm:flex sm:flex-col sm:justify-center items-center mt-16'>
              <h1 className='text-[24px] font-black'>Get In Touch</h1>
              <Image className='pt-3 text-center' src="rtc1.svg" width={383} height={1} alt='map' />
            </div>
            <div className='text-center mt-2 text-4xl'>
              <h1>Let’s discuss your project</h1>
            </div>

            <div className='flex flex-col justify-between gap-8 sm:flex-row sm:pt-8'>
              <div>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  noValidate
                  autoComplete="on"
                >
                  <TextField
                    id="fullName"
                    label="Full Name"
                    variant="outlined"
                    value={formValues.fullName}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    className="bg-[#202020]"
                  />
                  <TextField
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    value={formValues.phone}
                    onChange={handleChange}
                    helperText={errors.phone}
                    error={!!errors.phone}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    className="bg-[#202020]"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={formValues.email}
                    onChange={handleChange}
                    helperText={errors.email}
                    error={!!errors.email}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    className="bg-[#202020]"
                  />
                  <TextField
                    id="message"
                    label="Message"
                    placeholder="Write a message about your ideas or project"
                    multiline
                    maxRows={8}
                    value={formValues.message}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    className="bg-[#202020]"
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>

                <div className='bg-[#0A0A0A] w-[358px] h-[165px] flex flex-wrap items-center gap-6 p-4'>
                  <div className='flex gap-3'>
                    <div>
                      <Image src="phone02.svg" width={28} height={28} alt='phone' />
                    </div>
                    <div>
                      <h1>PHONE</h1>
                      <p className='text-[#0C487B] text-[13px] font-semibold'>6265761531</p>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <div>
                      <Image src="fax.svg" width={28} height={28} alt='fax' />
                    </div>
                    <div>
                      <h1>FAX</h1>
                      <p className='text-[#0C487B] text-[13px] font-semibold'>0354321234</p>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <div>
                      <Image src="email-box.svg" width={28} height={28} alt='email' />
                    </div>
                    <div>
                      <h1>EMAIL</h1>
                      <p className='text-[#0C487B] text-[13px] font-semibold'>info@marcc.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[168px] sm:w-[50%] sm:h-[50%]'>
                <MyComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
