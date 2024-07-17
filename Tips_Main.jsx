import React from 'react';
import './Tips_Main.css';
import "react-accessible-accordion/dist/fancy-example.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import {
    MdOutlineArrowDropDown,
} from "react-icons/md";
import data from "../../utils/tips-accordion.jsx";

const Tips_Main = () => {
  return (
    <section>
        <div className="paddings innerWidth flexCenter tips-container">

=
            {/* Right Side */}
            <div className="flexCenter tips-right">

                <div className='flexCenter' style={{ height: '70px' }}>
                    <div className='flexColCenter'>
                        <span className='orangeText'>Golden Rules</span>
                        <span className='secondaryText'>It's not a lot of reading, I swear!</span>                    
                    </div>
                </div>

                <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                {
                  data.map((item, i)=>{
                    return(
                        <AccordionItem className="accordionItem" key={i} uuid={i}>
                            
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton">      
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="primaryText">{item.heading}</span>
                                    <div className="flexCenter icon"> <MdOutlineArrowDropDown size={20} /> </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p className="secondaryText"> {item.detail}</p>
                            </AccordionItemPanel>

                        </AccordionItem>

                    )
                  })
                }
                </Accordion>

            </div>

        </div>
    </section>
  )
}

export default Tips_Main