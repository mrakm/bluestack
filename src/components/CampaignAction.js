import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function CampaignAction(props){ 
    const [date,setDate] =useState(new Date(props.createdOn))
    const[datePickerIsOpen,openDatePicker]=useState(false);
    const handleChange=(d)=>{
        setDate(d);
    };

    return (    
        <div className="container-flex-inline ">
            <div className="child-inline">
                
            <img 
                className="ViewLogo"
                alt="File" 
                src={require('../assets/img/file.png').default}   
                width="18"
                height="24" 
            />            
            <p className="Actions ActionsSpace">CSV</p>
            </div>
            <div className="child-inline">
                
            <img 
                className="StatisticsLogo"
                alt="Statistics" 
                src={require('../assets/img/statistics-report.png').default}   
                width="24"
                height="20" 
            />            
            <p className="Actions ActionsSpace">Report</p>
            </div>
            <div className="child-inline" onClick={()=>{openDatePicker(true)}} >
                
            <img 
                className="CalendarLogo"
                alt="Calendar" 
                src={require('../assets/img/calendar.png').default}   
                width="24"
                height="22" 
            />            
            <p className="Actions ActionsSpace">Schedule Again</p>
            
            <DatePicker
            //   selected={this.state.startDate}
            onChange={(d)=>handleChange(d)}
            onClickOutside={()=>{openDatePicker(false)}}
            open={datePickerIsOpen}
            selected={date}
            >  
                <div >
                  
                  <button className="datepicker-button" onClick={()=>{
                      openDatePicker(false);
                
                      props.onHandleSchedule(date);}}>Save</button>
                  
                </div>
                

            </DatePicker>
             

            </div>
        </div>
    );
}

export default CampaignAction;
