import React, { Component } from "react";
import './project.css'

class Project extends Component{
 render(){
  return(
   <React.Fragment>
   <div class="container-fluid ">
    <div class="row">
     <div class=" col-lg-12">
      <div class="panel panel-default ">
       <div class="panel-heading panel-header ">
        SAP Interfacing using SOAP and REST webservices
       </div>
       <div class="panel-body">
        Use WebMethods product to add SOAP and REST webservices before added to the main ERP package <br/>
        <ul class="square">
         <li>Install and configure SAPBC including SAPBC to SAP bi-directional connection threads </li>
         <li>Write additional Java modules using OData data Interface to extend functationality </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div class="row">
     <div class=" col-lg-12">
      <div class="panel panel-default ">
       <div class="panel-heading panel-header ">
        OpenClassroom Full-stack program Projects
       </div>
       <div class="panel-body">
        <div class="row">
         <div class="col-lg-12">
        <table class="table">
         <thead>
          <tr class="oc-th">
           <td>Project</td>
           <td>Topic</td>
          </tr>
         </thead>
         <tbody>
          <tr>
           <td>Integrate WordPress theme for a client </td>
           <td>Use of WordPress to meet requirements of a brief. </td>
          </tr>
          <tr>
           <td>Express Food</td>
           <td>
            <ul class="square">
             <li>Create project brief document</li>
             <li>Document in UML</li>
            <li>create database structures and SQL</li>
            </ul>

           </td>
          </tr>
         </tbody>
        </table>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

   </React.Fragment>

  );
 }

}

export default Project;
