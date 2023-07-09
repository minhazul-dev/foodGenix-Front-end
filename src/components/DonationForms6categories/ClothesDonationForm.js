import React, { useState } from 'react';
import axios from 'axios';

const ClothesDonationForm = () => {
    const [donation, setDonation] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        clothesType: '',
        clothesSize: '',
        quantity: 1,
        pickupDate: '',
        pickupTime: '',
        additionalNotes: '',
        image: '',
    });

    const [imageURL, setImageURL] = useState(null)
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '68ff9082aa166953b8cd94b99c87d9cf');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const image = imageURL;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonation((prevDonation) => ({
            ...prevDonation,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:9000/donateClothes', donation);
            console.log('Donation data saved successfully!');
            // Reset the form after successful submission
            setDonation({
                name: '',
                email: '',
                phone: '',
                address: '',
                clothesType: '',
                clothesSize: '',
                quantity: 1,
                pickupDate: '',
                pickupTime: '',
                additionalNotes: '',
                image: '',
            });
        } catch (error) {
            console.error('Error saving donation data:', error);
        }
    };

    return (
        <div className="donation-form">
            <h2>Clothes Donation</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="clothesType">Clothes Type:</label>
                    <select id="clothesType" name="clothesType" value={donation.clothesType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="Shirts">Shirts</option>
                        <option value="Pants">Pants</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="clothesSize">Clothes Size:</label>
                    <input type="text" id="clothesSize" name="clothesSize" value={donation.clothesSize} onChange={handleChange} required />
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ClothesDonationForm;