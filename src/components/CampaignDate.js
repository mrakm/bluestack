import React from 'react';
import {getMonthLabel} from '../utils/getMonthText';

function CampaignDate(props){  
    

       const date = new Date(props.createdOn)

        const createdOn = `${getMonthLabel(
            date.getMonth()
        )} ${date.getFullYear()}, ${date.getDate().toString().padStart(2, 0)}`  


    const numOfDays = parseInt(
        (props.createdOn - Date.now()) / (1000 * 60 * 60 * 24)
      )

    let timeString;  
    if(numOfDays > 0) {
        if(numOfDays > 1) {
            timeString = "Live in " + numOfDays + " Days" ;    
        }
        else {
            timeString = "Live in " + numOfDays + " Day" ;
        }        
    } else if(numOfDays === 0) {
        timeString = "Live today" ;
    } else if(numOfDays < 0) {
        timeString = -numOfDays + " Days Ago" ;
    }
    
    return (    
        <div className="CampaignContainer">
            <h1 className="Date" >{createdOn}</h1>
            <p className="numofDays">{timeString}</p>
        </div>
    );
}

export default CampaignDate;
