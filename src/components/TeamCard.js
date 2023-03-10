import React from "react";
import "../styles/teamCards.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function TeamCard(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="at-column">
      <div role="group" className="teamcard" onClick={handleClickOpen}>
        <img src={props.img} alt={props.name} />
        <div className="details">
          <h3 className="chakra-heading css-xbro3j">{props.name}</h3>
          <p className="chakra-text css-1nwprg">{props.role}</p>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="df jcc">
          <img src={props.img} alt={props.name} className="popupimg" />
          <div className="popupdata">
            <DialogTitle id="responsive-dialog-title">{props.name}</DialogTitle>
            <DialogContent>
              {props.role}
              <br />
              <br />
              <DialogContentText>{props.discription}</DialogContentText>
            </DialogContent>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default TeamCard;
