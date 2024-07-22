import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface EmailDialogProps {
  open: boolean;
  onClose: () => void;
  onSend: (email: string) => void;
}

const EmailDialog: React.FC<EmailDialogProps> = ({ open, onClose, onSend }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    onSend(email);
    setEmail('');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Send Email</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Recipient Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSend} color="primary">Send</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailDialog;
