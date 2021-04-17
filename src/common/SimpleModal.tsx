import {
  Box, Button, Dialog, DialogContent, DialogTitle, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

interface SimpleModalProps {
  // Label text for toggled button (optional)
  buttonTitle?: any;
  // Icon for toggled button (optional)
  buttonStartIcon?: any;
  // Title for content in the modal (required)
  modalTitle: string;
  // The following props are used to adjust style of toggled button
  small?: boolean;
  variant?: 'outlined' | 'text' | 'contained';
  color?: string;
  backgroundColor?: string;
}
const SimpleModal: React.FC<SimpleModalProps> = (props) => {
  const {
    buttonTitle, modalTitle, buttonStartIcon, small, variant, color, backgroundColor,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
      color: `${color}`,
      background: 'rgba(0,0,0,0.5)',
      textTransform: 'capitalize',
      fontWeight: 'normal',
      fontFamily: 'Caveat',
      fontSize: '1.5em',
      marginTop: '2vh',
      '&:hover': {
        background: `${backgroundColor}`,
        fontWeight: '800',
      }
    }
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      {
        buttonTitle
        && (
          <Button
            onClick={handleClickOpen}
            startIcon={buttonStartIcon || ''}
            size={small ? 'small' : 'medium'}
            variant={variant}
            className={classes.button}
          >{buttonTitle}
          </Button>
        )
      }
      {
        (!buttonTitle && buttonStartIcon)
        && <IconButton onClick={handleClickOpen}>{buttonStartIcon}</IconButton>
      }
      <Dialog
        style={{ backgroundColor: 'rgba(54, 0, 51, 0.5)' }}
        PaperProps={{
          style: {
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
          }
        }}
        onClose={handleClose} open={open}>
        <Box display="flex">
          <Box flexGrow={1}>
            <DialogTitle>
              {modalTitle}
            </DialogTitle>
          </Box>
          <Box p={1}>
            <IconButton onClick={handleClose}>
              <CloseIcon style={{ color: '#2A9D8F' }} />
            </IconButton>
          </Box>
        </Box>
        <DialogContent style={{ textAlign: 'center' }} dividers>
          {props.children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default SimpleModal;
