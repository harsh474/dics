import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image6 from "../Contact/i7.jpg";

function Contact() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Handle form submission logic here
    console.log("TextField Value:", textFieldValue);
  };

  return (
    <div className="flex px-[120px] bg-[#F7F6F7] container">
      <img
        src={image6}
        className=" h-auto w-1/2 px-9 py-12 ml-9"
        alt="Contact Background"
      />
      <div
        className="flex  rounded-xl w-1/2  bg-[#60415A] my-12 justify-center p-[48px] leading-[24px] z-10 gap-9 items-center"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        text-white
      >
        <div>
          <h2 className="text-[42px] font-medium py-5 items-center justify-center flex text-white">
            Contact Us
          </h2>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              name="outlinedField"
              label="Name"
              variant="outlined"
              margin="normal"
              value={textFieldValue}
              onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                width: "327px",
                height: "59px",
              }}
            />
            <TextField
              id="outlined-basic"
              name="outlinedField"
              label="Email"
              variant="outlined"
              margin="normal"
              value={textFieldValue}
              onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                width: "327px",
                height: "59px",
              }}
            />
            <TextField
              id="outlined-basic"
              name="outlinedField"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              value={textFieldValue}
              onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                width: "327px",
                height: "59px",
              }}
            />
            <TextField
              id="outlined-basic"
              name="outlinedField"
              label="Property Name"
              variant="outlined"
              margin="normal"
              value={textFieldValue}
              onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#D9D6D8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                width: "327px",
                height: "59px",
              }}
            />

            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: "16px",
                backgroundColor: "#EB595F",
                color: "white",
                fontWeight: "500", // 500 corresponds to medium weight
                borderRadius: "6px",
                width: "310px",
                height: "59px",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="text-white flex flex-col  text-xl gap-9 ">
          <h1 className="text-5xl font-medium"> CORPORATE OFFICE:</h1>
          <span>
            Devika Tower-6, Office No 1500-C, 16th Floor, Nehru Place, New Delhi
            110019, India
          </span>
          <p>Ph : +91-11 41101656 011- 26980268</p>
          <p className="flex flex-col gap-1">
             
              <h1 className="text-3xl font-medium"> Ashu Dau(Director)</h1>
            <br></br>
            <span> Mobile: +91- 9911 9895 46 | 011-41101656 </span>
            <br></br>
            <span>Email: ikram@torex.in </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
