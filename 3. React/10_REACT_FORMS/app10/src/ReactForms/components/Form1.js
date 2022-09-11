import React from "react";
import image1 from './image1.jpg';

function Form1() {
    return (
        <div>
            <h3>Form-1</h3>
            <p>ID : <input type='number'/></p>
            <p>NAME : <input type='text'/></p>
            <p>EMAIL : <input type='email'/></p>
            <p>PASSWORD : <input type='password'/></p>
            <p>COMMENT : <textarea rows='5' cols='40' /></p>
            <p>
                GENDER : 
                <input type='radio' name='rb1' checked/> Male |
                <input type='radio' name='rb1'/> Female |
                <input type='radio' name='rb1'/> Other
            </p> 
            <p>
                HOBBIES : 
                <input type='checkbox' name='chk1' checked/> Reading |
                <input type='checkbox' name='chk2'/> Playing |
                <input type='checkbox' name='chk3'/> Others
            </p> 
            <p>
                QUALIFICATION : 
                <select>
                    <option>SEE</option>
                    <option selected>+2</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>Others</option>
                </select>
            </p>
            <p>
               <input type='hidden' value='12345'/>
            </p>
            <p>
               PHOTO : <input type='file'/>
            </p>
            <p>
               <input type='button' value='Button'/>
               <input type='submit' value='SEND'/>
               <input type='reset' value='RESET'/>
               <input type='image' src={image1} alt='' />
            </p>
        </div>
    );
}

export default Form1;