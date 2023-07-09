import React, { useState } from 'react';
import axios from 'axios';

const FoodDonationForm = () => {
    const [donation, setDonation] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        foodType: '',
        quantity: '',
        cookingTime: '',
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
        formData.append('foodType', donation.foodType);
        formData.append('quantity', donation.quantity);
        formData.append('cookingTime', donation.cookingTime);
        formData.append('pickupDate', donation.pickupDate);
        formData.append('pickupTime', donation.pickupTime);
        formData.append('additionalNotes', donation.additionalNotes);
        donation.photos.forEach((photo, index) => {
            formData.append(`photo${index + 1}`, photo);
        });

        try {
            await axios.post('http://localhost:9000/fooddonate', formData, {
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
                foodType: '',
                quantity: '',
                cookingTime: '',
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
        <div>
            <h2>Food Donation</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" value={donation.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={donation.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={donation.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={donation.address} onChange={handleChange} rows="4" required></textarea>
                </div>
                <div>
                    <label htmlFor="foodType">Food Type:</label>
                    <input type="text" id="foodType" name="foodType" value={donation.foodType} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity" value={donation.quantity} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="cookingTime">Cooking Time:</label>
                    <input type="text" id="cookingTime" name="cookingTime" value={donation.cookingTime} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="pickupDate">Pickup Date:</label>
                    <input type="date" id="pickupDate" name="pickupDate" value={donation.pickupDate} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="pickupTime">Pickup Time:</label>
                    <input type="time" id="pickupTime" name="pickupTime" value={donation.pickupTime} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea id="additionalNotes" name="additionalNotes" value={donation.additionalNotes} onChange={handleChange} rows="4"></textarea>
                </div>
                <div>
                    <label htmlFor="photos">Photos:</label>
                    <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FoodDonationForm;
