import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import CampaignDate from './CampaignDate' ;
import Campaign from './Campaign' ;
import CampaignView from './CampaignView' ;
import CampaignAction from './CampaignAction' ;
import PricingModal from './PriceModal' ;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F1F1F4",
    color: "#556789",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: 550,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const NoDesignButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',    
    padding: '0px 0px 0px 0px',
    border: '0px',
    lineHeight: '1',
    backgroundColor: 'transparent',
    borderColor: 'transparent', 
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: 'transparent',      
    },
    '&:focus': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
    },
  },
})(Button);

export default function CompleteCampaigns(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  
  if(props.campaignData.length==0){
    return <h4 className="nodatafound">No Data Found</h4>;
  }



  return (
  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Campaign</StyledTableCell>
            <StyledTableCell>View</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>        
        <TableBody>
          {props.campaignData.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <CampaignDate createdOn={row.createdOn} />                
              </StyledTableCell>
              <StyledTableCell>
                <Campaign name={row.name} region={row.region} />
              </StyledTableCell>
              <StyledTableCell>
                <NoDesignButton onClick={handleOpen}>
                  <CampaignView />
                </NoDesignButton> 
                <Modal
                  open={open}
                  onClose={handleClose}                              
                >
                  <PricingModal
                    handleClose={handleClose}                     
                    name={row.name} 
                    region={row.region}/>
                </Modal> 
              </StyledTableCell>
              <StyledTableCell>
                <CampaignAction  createdOn={row.createdOn} onHandleSchedule={(date)=>{props.onHandleSchedule(row.id,date)}}/>
              </StyledTableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
