import React from "react";

function Contact(){
    return (
    <>
       
       <form action="mailto:dove51903@gmail.com" method="post" className="Form" >
        <h1>Contact Me </h1>
            <br />
            <label htmlFor="">Name</label>
            <input type="text" name="name" /><br />
            <br />
            <label htmlFor="">Email</label>

            <input type="text" name="mail" /><br />
            <br />
            <label htmlFor="" >Comment</label>

            <input className="CommentBox"  type="text" name="comment" size="50" /><br /><br />
            <input type="submit" value="Send" id="BTN" />
            <input type="reset" value="Reset" id="BTN2" />

        </form>
    </>
    )
};
export default Contact;