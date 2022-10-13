import React, { useState } from "react";
import useIcon from "../../assets/user.svg";
import userIconLight from "../../assets/user-light.svg";
import parcelIcon from "../../assets/parcel.svg";
import barIcon from "../../assets/bars.svg";
import arrow from "../../assets/arrow.svg";
import "./SingleToSingle.scss";

const SingleToSingle = () => {
  const [formData, setFormData] = useState({
    destination: "",
    dropAtHome: true,
    dropAtBooth: false,
    receiverName: "",
    receiverEmailAddress: "",
    addressline1: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: "",
    deliveyTime9to12: false,
    deliveyTime12to3: false,
    deliveyTime3to6: false,
    deliveyTimeAnytime: false,
    weight: "",
    size: "",
    parcelType: "",
    detailedDesc: "",
    insured: false,
  });

  console.log(formData);

  function handlechange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function showMenu(e) {
    e.target.parentElement.classList.toggle("active");
  }

  function handleClick(e) {
    let dataKey = e.target.parentElement.attributes[0].value;
    let value = e.target.textContent;

    setFormData((prevData) => ({
      ...prevData,
      [dataKey]: value,
    }));

    e.target.parentElement.parentElement.classList.toggle("active");

    e.target.parentElement.previousElementSibling.placeholder = value;
  }

  //   function extras() {
  //     let allDropdowns = document.querySelectorAll(".dropdown");
  //     allDropdowns.forEach(item => {
  //         if(item.classList.contains("active")){
  //              item.classList.remove("active");
  //         }
  //     })
  //   }

  return (
    <section className="single-container">
      {/* Navigation Buttons */}
      <div className="sub-container">
        <button className="light-button btn">
          <img src={useIcon} />1
        </button>

        <button className="dark-button btn">
          <img src={userIconLight} />+
          <img src={parcelIcon} />2
        </button>

        <button className="light-button btn">
          <img src={barIcon} />3
        </button>
      </div>

      {/* Form Container */}
      <form className="form-container">
        {/* Receiver Information */}
        <div className="form-receiver-info">
          <h3>Receiver's Information</h3>

          {/* Custom Select Option */}
          <div onClick={showMenu} className="dropdown">
            <input
              type="text"
              className="textBox"
              placeholder="Destination"
              readOnly
            />
            <div name="destination" className="options">
              <div onClick={handleClick}>Inter-State</div>
              <div onClick={handleClick}>Within State</div>
            </div>
            <span className="custom-arrow">
              <img id="arrow-icon" src={arrow} />
            </span>
          </div>

          {/* Drop-Off Checkboxes */}
          <h4>Drop-Off Option:</h4>
          <div className="form-radio-btn-container">
            <input
              id="dropAtHome"
              type="checkbox"
              name="dropAtHome"
              checked={formData.dropAtHome}
              onChange={handlechange}
              className="radio-input"
            />{" "}
            <label htmlFor="dropAtHome">
              <h4>Drop at Home</h4>
            </label>
            <input
              type="checkbox"
              id="dropAtBooth"
              checked={formData.dropAtBooth}
              onChange={handlechange}
              name="dropAtBooth"
              className="radio-input"
            />{" "}
            <label htmlFor="dropAtBooth">
              <h4>Drop at Booth</h4>
            </label>
          </div>

          {/* Receiver Details */}

          <input
            className="input"
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handlechange}
            placeholder="Receiver's Name"
          />
          <input
            className="input"
            type="text"
            name="receiverEmailAddress"
            value={formData.receiverEmailAddress}
            onChange={handlechange}
            placeholder="Receiver's Email/Mobile Number"
          />

          <h4>Receiver's Address</h4>

          <button className="location-btn" onClick={(e) => e.preventDefault()}>
            Search Adress from location
          </button>

          <input
            className="input"
            type="text"
            name="addressline1"
            value={formData.addressline1}
            onChange={handlechange}
            placeholder="Address Line 1"
          />

          <input
            className="input"
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handlechange}
            placeholder="Landmark"
          />

          <div className="sub-container">
            <input
              className="input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handlechange}
              placeholder="City"
            />

            <input
              className="input"
              type="text"
              name="state"
              value={formData.state}
              onChange={handlechange}
              placeholder="State"
            />

            <input
              className="input"
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handlechange}
              placeholder="Postal Code"
            />
          </div>

          {/* Select Preffered Delivery Time Checkboxes */}
          <h4>Select Preffered Delivery Time:</h4>
          <div className="form-radio-btn-container">
            <input
              id="deliveyTime9to12"
              type="checkbox"
              name="deliveyTime9to12"
              checked={formData.deliveyTime9to12}
              onChange={handlechange}
              className="radio-input"
            />{" "}
            <label className="label2" htmlFor="deliveyTime9to12">
              <h4>9AM - 12PM</h4>
            </label>
            <input
              type="checkbox"
              id="deliveyTime12to3"
              checked={formData.deliveyTime12to3}
              onChange={handlechange}
              name="deliveyTime12to3"
              className="radio-input"
            />{" "}
            <label htmlFor="deliveyTime12to3">
              <h4>12PM - 3PM</h4>
            </label>
          </div>

          <div className="form-radio-btn-container">
            <input
              id="deliveyTime3to6"
              type="checkbox"
              name="deliveyTime3to6"
              checked={formData.deliveyTime3to6}
              onChange={handlechange}
              className="radio-input"
            />{" "}
            <label className="label2" htmlFor="deliveyTime3to6">
              <h4>3PM - 6PM</h4>
            </label>
            <input
              type="checkbox"
              id="deliveyTimeAnytime"
              checked={formData.deliveyTimeAnytime}
              onChange={handlechange}
              name="deliveyTimeAnytime"
              className="radio-input"
            />{" "}
            <label htmlFor="deliveyTimeAnytime">
              <h4>Anytime</h4>
            </label>
          </div>
        </div>

        {/* Parcel Description */}
        <div className="form-parcel-desc">
          <h3>Parcel Description</h3>
          {/* Weight */}
          <div onClick={showMenu} className="dropdown">
            <input
              type="text"
              className="textBox"
              placeholder="Weight"
              readOnly
            />
            <div name="weight" className="options">
              <div onClick={handleClick}>0-5Kg (Light)</div>
              <div onClick={handleClick}>5-20Kg (Medium)</div>
              <div onClick={handleClick}>20-50Kg (Heavy)</div>
              <div onClick={handleClick}>{`50Kg> (Very Heavy)`}</div>
            </div>
            <span className="custom-arrow">
              <img id="arrow-icon" src={arrow} />
            </span>
          </div>
          {/* Size */}
          <div onClick={showMenu} className="dropdown">
            <input
              type="text"
              className="textBox"
              placeholder="Size"
              readOnly
            />
            <div name="size" className="options">
              <div onClick={handleClick}>0 – (L)50cm / (B) 50cm (Small)</div>
              <div onClick={handleClick}>
                50cm – (L) 80cm / (B) 80cm (Medium)
              </div>
              <div onClick={handleClick}>
                80cm – (L) 122cm / (B) 122cm (Large)
              </div>
              <div onClick={handleClick}>{`122cm > (Very Large)`}</div>
            </div>
            <span className="custom-arrow">
              <img id="arrow-icon" src={arrow} />
            </span>
          </div>
          {/* Parcel type */}
          <div onClick={showMenu} className="dropdown">
            <input
              type="text"
              className="textBox"
              placeholder="Parcel Type"
              readOnly
            />
            <div name="parcelType" className="options">
              <div onClick={handleClick}>High Values</div>
              <div onClick={handleClick}>Fragile</div>
              <div onClick={handleClick}>Sensitive Documents</div>
              <div onClick={handleClick}>Electronics</div>
              <div onClick={handleClick}>Others (Please Specify)</div>
            </div>
            <span className="custom-arrow">
              <img id="arrow-icon" src={arrow} />
            </span>
          </div>
          {/* Detailed Description of Parcel */}
          <textarea
            className="input"
            type="textarea"
            name="detailedDesc"
            value={formData.detailedDesc}
            onChange={handlechange}
            placeholder="Detailed Description of Parcel"
            rows="15"
            style={{ resize: "none" }}
          ></textarea>

          {/* Insure Your Parcel */}
          <div style={{ gap: "20px" }} className="form-radio-btn-container">
            <input
              id="insured"
              type="checkbox"
              name="insured"
              checked={formData.insured}
              onChange={handlechange}
              className="radio-input"
            />
            <label style={{ color: "#4F4F4F" }} htmlFor="insured">
              Insure your Parcel (subject to additional charges)
            </label>
          </div>

          <div>
            <button style={{ margin: "60px auto" }} className="dark-button">
              SAVE & ADD PARCEL
            </button>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "1rem",
              marginTop: "auto",
            }}
          >
            <button
              style={{ width: "100%", flexBasis: "46%" }}
              className="light-button"
            >
              BACK
            </button>
            <button
              style={{ width: "100%", flexBasis: "54%" }}
              className="dark-button"
            >
              PROCEED TO SUMMARY
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SingleToSingle;
