import React, {Component} from 'react';
//import {InputText} from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/portfolio.css';

class Contact extends Component{
 render(){
  return(
   <React.Fragment>
    <div class="container-fluid">
     <div class="row">
       <div class="col-lg-12" >
        <h1 class="text-center contact-title">Contact Me</h1>
       </div>
     </div>
      <div class="row">
       <div class="col-lg-4" >
        <div class="row">
         <div class="col-lg-12 text-center contact-title" >
           Contact Details
         </div>
        </div>
        <div class="row">
         <div class="col-lg-4 text-white text-left" >
          Email:
         </div>
         <div class="col-lg-8 text-white" >
          chris@server.com
         </div>
        </div>
        <div class="row">
         <div class="col-lg-4 text-white text-left" >
          Phone:
         </div>
         <div class="col-lg-8 text-white" >
          0999 765432
         </div>
        </div>
        <div class="row">
          <div class="col-lg-4 text-white text-left" >
           Social media:
          </div>
          <div class="col-lg-8 text-white" >
          <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/chris-hunter-johnson/" class="social-media">
          <span><FontAwesomeIcon icon={['fab','linkedin'] } size="lg" /></span></a>
          <a target="_blank"  rel="noopener noreferrer" href="https://github.com/ChrisHunter-Johnson/" class="social-media">
          <span><FontAwesomeIcon icon={['fab','github']} size="lg" /></span></a>
          </div>

        </div>

       </div>
       <div class="col-lg-8">
        <div class="panel panel-default">
         <div class="panel-heading panel-header">
          <div class="panel-title text-center ">
           <h4> Send a Message</h4>
          </div>
         </div>
         <div class="panel-body">
          <form class="form-horizontal">
           <div class="form-group">
            <label class="col-lg-2 control-label" >Name:</label>
            <div class="col-lg-10">
             <input type="text" class="form-control " id="contName" />
            </div>
           </div>
           <div class="form-group">
            <label class="col-lg-2 control-label" >Email:</label>
            <div class="col-lg-10">
             <input type="email" class="form-control "  />
            </div>
           </div>
           <div class="form-group">
            <label class="col-lg-2 control-label" >Message:</label>
            <div class="col-lg-10">
             <textarea class="form-control" rows="3"></textarea>
            </div>
           </div>
           <div class="form-group">
            <div class="col-lg-offset-2 col-lg-10">
             <button type="submit" class="btn btn-primary">Send Your Message</button>
            </div>
           </div>
          </form>

         </div>
        </div>
       </div>
      </div>

    </div>
   </React.Fragment>
  );
 }
}
export default Contact;
