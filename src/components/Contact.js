import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


export default function Contact(){
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_hnvbrdy', 'template_9pc4hce', form.current, 'J5FqVyJEonk-vdDF1')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{ color: "black", paddingTop: "5%", paddingBottom: "5%" }}>
                        <span>Contact</span>
                    </h1>
                </div>
                <StyledContactForm>
                    <div className="frame">
                        <div className="camera"></div>
                        <div className="inner-frame">
                            <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-left-mobile">9:11</div>
                            <div className="screen-header-button btnclose"></div>
                            <div className="screen-header-button btnmaximize"></div>
                            <div className="screen-header-button btnminimize"></div>
                            </div>
                                <div className="screen-header-right">
                                    <div className="battery">
                                        <div className="battery-level"></div>
                                    </div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form>
                            <div className="button">
                                <div className="inner-button">
                                </div>
                            </div>
                        </div>
                    </div>
                </StyledContactForm>
                    </section>


        );
}
// Styles
const StyledContactForm = styled.div`
    padding-bottom: 3rem;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .frame {
  width: 60%;
  height: 550px;
  border-radius: 15px;
  background: grey;
  position: relative;
  z-index: 1;
  align-items: center;
    display: flex;
    flex-direction: column;
}

.camera {
  width: 10px;
  height: 10px;
  background: #000000;
  border-radius: 50px;
  position: relative;
  top: 10px;
  z-index: 2;
}

.inner-frame {
  width: 85%;
  height: 425px;
  background: lightgrey;
  position: absolute;
  left: 7.5%;
  top: 30px;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button {
  width: 60px;
  height: 60px;
  background: #DAE2DF;
  border-radius: 50px;
  position: absolute;
  top: 440px;
  z-index: 4;
}

.inner-button {
  width: 30px;
  height: 30px;
  background: grey;
  border-radius: 15px;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 5;
}

//Apple buttons

.screen-header {
  width: 100%;
  padding: 10px 20px;
  background: #4d4d4f;
}

.screen-header-left {
  margin-right: auto;
  float: left;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.btnclose {
  background: #ed1c6f;
}

.screen-header-button.btnmaximize {
  background: #e8e925;
}

.screen-header-button.btnminimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
  float: right;
  padding-top: 5px;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-header-left-mobile {
    display: none;
    color: white;
    padding-top: 25%;
}

.screen-header-right-mobile {
    display: none;
}

.battery {
  display: none;
  border: 3px solid #333;
  width: 18px;
  height: 28px;
  padding: 2px;
  border-radius: 4px;
  position: relative;
}

.battery-level {
  background: #30b455;  
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 75%;
}

//Form

form {
    padding-top: 5%;
    display: flex;
    flex-direction: column;
}

label {
    padding-top: 5%;
}

[type=submit] {
    margin-top: 5%;
}

//Media width

@media only screen and (max-width: 480px) {
  .screen-header-button.btnclose{
    display: none;
  }
  .screen-header-button.btnminimize{
    display: none;
  }
  .screen-header-button.btnmaximize{
    display: none;
  }
  .screen-header-ellipsis{
    display: none;
  }
  .screen-header-left-mobile{
    display: block;
  }
  .screen-header-left-mobile{
    display: block;
  }
  .battery{
    display: block;
  }
  .screen-header{
    padding: 5px 20px;
  }
  .screen-header-right{
    padding: 0;
  }
}

    `;