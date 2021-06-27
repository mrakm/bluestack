import React from 'react';


function Campaign(props){         
    // const numOfDays = props.date - Date() ;
    return (    
        <div className="Campaign CampaignContainer">
            <img 
                className="CampaignLogo"
                alt="Girl in a jacket" 
                src={require('../assets/img/Bitmap.png').default}   
                width="40"
                height="40" 
            />
            <div className="NameRegion">
                <h1 className="CampaignName" >{props.name}</h1>
                <p className="CampaignRegion">{props.region}</p>
            </div>
        </div>
    );
}

export default Campaign;
