import React, { Component } from "react";
import {Accordion,AccordionTab} from 'primereact/accordion';
import './about.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class About extends Component {
 render(){
  return(
   <React.Fragment>

      <Accordion>
       <AccordionTab id="bio" header="Biographical">
       <div class="row">
        <div class="col-lg-2 fieldLabel">
        1980 - 1997
        </div>
        <div class="col-lg-10">
        Management Accountant
        </div>
       </div>
       <div class="row">
        <div class="col-lg-2 fieldLabel">
        1997 - 2018
        </div>
        <div class="col-lg-10">
        SAP Analyst covering FICO configuration, ABAP program developemnt and BASIS system Adminiistration.
        </div>
       </div>
       <div class="row">
        <div class="col-lg-2 fieldLabel">
        1997 - 2018
        </div>
        <div class="col-lg-10">
        <div class="list-group">
         <button type="button" class="list-group-item">Made redundant following successful migration from SAP to ALFA V5</button>
         <button type="button" class="list-group-item">Started Company Rationem to develop J2EE Accounting package using WildFly and PosrgeSQL</button>
         <button type="button" class="list-group-item">Started OpenClassroom Full-stack BA program</button>
        </div>

        </div>
       </div>


       </AccordionTab >
       <AccordionTab id="quals" header="Qualifications">
        <table class="table table-condensed">
         <thead>
          <tr>
           <th>Year</th>
           <th>Awarded by</th>
           <th>Qualification</th>
          </tr>
         </thead>
         <tbody>
          <tr>
           <td>2018</td>
           <td>OpenClassroom</td>
           <td>Build quick and beautiful WordPress sites</td>
          </tr>
          <tr>
           <td>2018</td>
           <td>OpenClassroom</td>
           <td>Manage your code with Git and GitHub</td>
          </tr>
          <tr>
           <td>2017</td>
           <td>SAP AG</td>
           <td>SAP Certified Application Professional – S/4 HANA 1610 – Financials experts</td>
          </tr>
          <tr>
           <td>1993-1997</td>
           <td>Open University</td>
           <td>Post Graduate diploma – Computer science at Open University</td>
          </tr>
          <tr>
           <td>1982-1985</td>
           <td>Chartered Institute of Management Accountants</td>
           <td>CIMA Associtate Member <br/>
               GCMA Global Certified Management Accountant</td>
          </tr>
         </tbody>
        </table>

       </AccordionTab >
       <AccordionTab id="Summ" header="Summary">
        <ul class="list-group">
         <li class="list-group-item">An organised and achievement driven SAP Finance Configuration Expert, ABAP programmer and
           qualified Management Accountant with over 18 years experience.
           Achieves results through: <br/><br/>
           Actively discussing with Finance stakeholders to fully understand the
           change to business process and confirm the understanding in Finance terminology.

         </li>

        </ul>
       </AccordionTab >

      </Accordion>


   </React.Fragment>
  );
 }

}
export default About;
