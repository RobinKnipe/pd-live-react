import {
  useState, useEffect,
} from 'react';
import {
  connect,
} from 'react-redux';

import {
  Modal, Form, Button,
} from 'react-bootstrap';

import {
  toggleDisplayAddNoteModal as toggleDisplayAddNoteModalConnected,
  addNote as addNoteConnected,
} from 'redux/incident_actions/actions';

import './AddNoteModalComponent.scss';

const AddNoteModalComponent = ({
  incidentActions,
  incidentTable,
  toggleDisplayAddNoteModal,
  addNote,
}) => {
  const {
    displayAddNoteModal,
  } = incidentActions;
  const {
    selectedRows,
  } = incidentTable;

  const [note, setNote] = useState('');
  useEffect(() => {
    setNote('');
  }, [displayAddNoteModal]);

  return (
    <div className="add-note-modal-ctr">
      <Modal show={displayAddNoteModal} onHide={toggleDisplayAddNoteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              as="textarea"
              placeholder="Add note to incident(s) here"
              minLength={1}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => addNote(selectedRows, note)}
            disabled={note === ''}
          >
            Add Note
          </Button>
          <Button variant="light" onClick={toggleDisplayAddNoteModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  incidentActions: state.incidentActions,
  incidentTable: state.incidentTable,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDisplayAddNoteModal: () => dispatch(toggleDisplayAddNoteModalConnected()),
  addNote: (incidents, note) => dispatch(addNoteConnected(incidents, note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteModalComponent);
