import React,{useState} from 'react';
import { Tabs, Tab} from '@material-ui/core' ;
import { makeStyles } from '@material-ui/core/styles';
import CTabs from './CTabs' ;
import moment from 'moment';
import { response } from "../utils/data"
import {dateFormate} from '../utils/getDateFormated'

 
const TabManager = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    console.log(response);
    const [data,setData]=useState(response.data);

    

    const handleSchedule = (id, date) => {
        const elementIndex = data.findIndex((element) => element.id === id)
        const newData = [...data]
    
        newData[elementIndex] = {
          ...newData[elementIndex],
          createdOn: new Date(date).getTime(),
        }
    
        setData(newData)
      }


    
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };     

    const useStyles = makeStyles((theme) => ({        
        tabStyle: {
            textTransform: "none", 
            fontSize: 18, 
            fontWeight: 500,
        },        
    }));

    const classes = useStyles();

    function upcomingCampaigns(item) {
        return dateFormate(item.createdOn) > dateFormate() && item
    }

    function liveCampaigns(item) {
        

        return dateFormate(item.createdOn) === dateFormate() && item
    }

    function pastCampaigns(item) {
        return dateFormate(item.createdOn) < dateFormate() && item
    }

    return (
        <div >
            
            <Tabs 
                value={selectedTab} 
                onChange={handleChange}                 
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#83A515",
                        height: "4px",
                    }
                }} 
                className="select-tabs"        
            >
                <Tab label="Upcoming Campaigns"  className={classes.tabStyle} />
                <Tab label="Live Campaigns"   className={classes.tabStyle} />
                <Tab label="Past Campaigns"  className={classes.tabStyle} />                
            </Tabs>
            <div className="InternalTabs">
            { selectedTab === 0 && <CTabs campaignData={data.filter(upcomingCampaigns)} onHandleSchedule={handleSchedule} /> }
            { selectedTab === 1 && <CTabs campaignData={data.filter(liveCampaigns)} onHandleSchedule={handleSchedule} /> }
            { selectedTab === 2 && <CTabs campaignData={data.filter(pastCampaigns)} onHandleSchedule={handleSchedule} /> }
            </div>
        </div>
    );
}

export default TabManager;
