import React, { useState, useEffect } from "react";
import ContactService from "../services/ContactService";

const Contact = props => {
  const initalContactState = {
    id: null,
    name: "",
    imageUrl: ""
  };
  const [currentContact, setCurrentContact] = useState(initalContactState);
  const [message, setMessage] = useState("");

  const getContact = id => {
    ContactService.get(id)
      .then(response => {
        setCurrentContact(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getContact(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentContact({ ...currentContact, [name]: value });
  };





  const updateContact = () => {
    ContactService.update(currentContact.id, currentContact)
      .then(response => {
        console.log(response.data);
        setMessage("The contact was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteContact = () => {
    ContactService.remove(currentContact.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/contacts");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentContact ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentContact.name}
                onChange={handleInputChange}
              />
            </div>
            <div >
              <label htmlFor="description">Image</label>
              <img
              src={currentContact.imageUrl}
              width="200"
              height="160"
              onChange={handleInputChange}
              />

            </div>


          </form>




          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
        </div>
      )}
    </div>
  );
};

export default Contact;
