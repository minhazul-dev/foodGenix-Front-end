import React, { useState } from 'react';
import axios from 'axios';
import "./footware.css"
const FootwearDonationForm = () => {
    const [donation, setDonation] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        footwearType: '',
        footwearSize: '',
        quantity: 1,
        pickupDate: '',
        pickupTime: '',
        additionalNotes: '',
        photos: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonation((prevDonation) => ({
            ...prevDonation,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setDonation((prevDonation) => ({
            ...prevDonation,
            photos: files,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', donation.name);
        formData.append('email', donation.email);
        formData.append('phone', donation.phone);
        formData.append('address', donation.address);
        formData.append('footwearType', donation.footwearType);
        formData.append('footwearSize', donation.footwearSize);
        formData.append('quantity', donation.quantity);
        formData.append('pickupDate', donation.pickupDate);
        formData.append('pickupTime', donation.pickupTime);
        formData.append('additionalNotes', donation.additionalNotes);
        donation.photos.forEach((photo, index) => {
            formData.append(`photo${index + 1}`, photo);
        });

        try {
            await axios.post('http://localhost:9000/footdonate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Donation data saved successfully!');
            // Reset the form after successful submission
            setDonation({
                name: '',
                email: '',
                phone: '',
                address: '',
                footwearType: '',
                footwearSize: '',
                quantity: 1,
                pickupDate: '',
                pickupTime: '',
                additionalNotes: '',
                photos: [],
            });
        } catch (error) {
            console.error('Error saving donation data:', error);
        }
    };

    return (
        <div className="donation-form">
            <h2>Footwear Donation</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" value={donation.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={donation.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={donation.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={donation.address} onChange={handleChange} rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="footwearType">Footwear Type:</label>
                    <select id="footwearType" name="footwearType" value={donation.footwearType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="Sandals">Sandals</option>
                        <option value="Sneakers">Sneakers</option>
                        <option value="Boots">Boots</option>
                        <option value="Slippers">Slippers</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="footwearSize">Footwear Size:</label>
                    <input type="text" id="footwearSize" name="footwearSize" value={donation.footwearSize} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" value={donation.quantity} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pickupDate">Pickup Date:</label>
                    <input type="date" id="pickupDate" name="pickupDate" value={donation.pickupDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pickupTime">Pickup Time:</label>
                    <input type="time" id="pickupTime" name="pickupTime" value={donation.pickupTime} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea id="additionalNotes" name="additionalNotes" value={donation.additionalNotes} onChange={handleChange} rows="4"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="photos">Photos:</label>
                    <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FootwearDonationForm;
