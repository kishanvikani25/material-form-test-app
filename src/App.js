import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Modal } from './components/Modal';
import { Form } from './components/Form';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <Button
        onClick={() => setOpen(!open)}
        color="secondary"
        variant="contained"
      >
        Open
      </Button>
      <Modal open={open} form={<Form />} />
    </div>
  );
}

export default App;
