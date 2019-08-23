import React from 'react';




class EditForm extends React.Component {
    state = {
        animate: false,
        newNote: this.props.note
        
    }


    handleAnimate = () => {
        this.setState(prevState => ({
            animate: !prevState.animate
          }));
          this.props.handleAnimate(this.state.newNote.id);
    }


    handleInput = e => {
        e.persist();
        this.setState(prevState => ({
          newNote: { ...prevState.newNote, [e.target.name]: e.target.value }
        }));
      };


      updateNote = e => {
          this.props.updateNote(e, this.state.newNote);
      }


    render() {
        return (
            <div className="note-form">
            <h1 className="form-header">Say Goodbye To All Of Your Problems</h1>
            <textarea
              placeholder="Vent it all away..."
              value={this.state.newNote.message}
              type="text"
              name="message"
              onChange={this.handleInput}
              className={this.state.animate ? 'gone' : null}
            />
              <div className="select-box">
              <h3> Days To Store In Satellite: </h3>
              <select
                name="delete_at"
                onChange={this.handleInput}
                value={this.state.newNote.delete_at}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            <div className="storage-btn">
              <button onClick={this.handleAnimate}> Blackhole </button>
              <button onClick={this.updateNote}> Store In Satellite </button>
            </div>
          </div>
        )
    }
}



  

export default EditForm;