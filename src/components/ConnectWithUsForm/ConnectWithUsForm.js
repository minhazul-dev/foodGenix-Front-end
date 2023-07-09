import React from 'react';
import '../Header/nav.css';
import { Toast } from 'bootstrap';
import Swal from 'sweetalert2'
const ConnectWithUsForm = () => {

  const alert = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const area = form.area.value;
    const textmsg = form.textmsg.value;


    const volunteerDetails = {
      name,
      number,
      area,
      textmsg,

    };
    console.log(volunteerDetails);

    fetch('http://localhost:9000/addVolunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(volunteerDetails)
    })
      .then(res => res.json())
      .then(result => {
        form.reset();
        Toast.success('Successful.');
      })
      .catch(error => {
        console.error('Error:', error);
        Toast.error('An error occurred.');
      });
  }
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="heading">
          <h2>Connect With Us</h2>
          <p>Fill this form, our team will <span>Contact</span> <span>With You</span> for further procedure.</p>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="number" name="number" className=" form-control" placeholder="Mobile No." />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" name="area" className="form-control" placeholder="Your Area" />
                          {/* <select name="category" id="donation">
                            <option value>Choose your working category</option>
                            <option name="category">Food</option>
                            <option value="category">Clothes</option>
                            <option name="category">Footware</option>
                            <option name="category">Books</option>
                            <option name="category">Fund</option>
                            <option name="category">Ele. Gadgets</option>
                          </select> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Address" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" name="textmsg" id cols={90} rows={1} placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button onClick={alert} type="submit" className="btn btn-blue">Become a Volunteer</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsForm;