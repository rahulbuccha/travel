import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Place from "./place";

class Placeprops extends Component
{
    render()
    {

        
        return(          
                
            <div className="div.container-fluid d-flex justify-content-center" >
                <div className="row">
                    <div className="col-md-3" ><Place image={'https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg'} Title="India Gate" long="28.612894" lat="77.229446" next="https://www.holidify.com/places/delhi/india-gate-sightseeing-1718.html"  
                    data="The All India War Memorial, popularly known as the India Gate, is located along the Rajpath in New Delhi."></Place></div>
                    <div className="col-md-3"><Place image={'https://www.holidify.com/images/cmsuploads/compressed/attr_1448_20190212100722jpg'} Title="Taj Mahal" lat="78.042068" long="27.173891"  next="https://www.holidify.com/places/agra/taj-mahal-sightseeing-1020.html"
                     data="One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra."></Place></div>
                     <div className="col-md-3"><Place image={'https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg'} Title="Qutub Minar" long="28.5244281" lat="77.1854559" next="https://www.holidify.com/places/delhi/qutub-minar-and-complex-sightseeing-1727.html"
                     data="Qutub Minar is a victory tower located in Qutub complex, a UNESCO World Heritage Site in Delhi."></Place></div>
                     <div className="col-md-3"><Place image={'https://holidify.com/images/attr_wiki/compressed/attr_wiki_203.jpg'} next="https://www.holidify.com/places/jaipur/hawa-mahal-sightseeing-2131.html"
                      data="The massive edifice of Hawa Mahal stands at the intersection of the main road in Jaipur" long="26.912417" lat="75.787288"></Place> </div>
                </div>
            </div>
 
          

        )
    }
}

export default Placeprops