import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData, logout } from '../actions';
// import { PlusCircle } from "react-feather";

class MainPage extends React.Component {


  componentDidMount() {
      if (localStorage.getItem("user_id")) {
        let user_id = parseInt(localStorage.getItem("user_id"))
        this.props.getData(user_id);
      }
  }
 
  toNotes = (e, note) => {
    e.preventDefault();
    console.log(`${note.id}`);
    this.props.history.push(`/notes/${note.id}`);
  };

 
  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  }

  toForm = e => {
    e.preventDefault();
    this.props.history.push("/main-page/note-form");
  };

 

  render() {
    return (
      <div className="main">
        <h1> Satellite Storage </h1>
        <div className='button-wrapper'>
        <button onClick={this.toForm}> Create Note</button> {' '}
        <button onClick={this.logoutButton}>Logout</button>
        </div>
        {/* {this.props.notes.length === 0 ? (
          <h1> Nothing Stored In Satellite!!</h1>
        ) : ( */}

          {this.props.fetchingNotes ? (<h1>Loading Notes...</h1>) : (
          <div className="notes">
            {this.props.notes.map(note => {
              return (
                <div
                  onClick={e => this.toNotes(e, note)}
                  key={note.id}
                  className="note"
                >
                  {note.message}
                </div>
              );
            })}
          </div>
        )}
        {/* <PlusCircle onClick={this.toForm} color="white"></PlusCircle> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetchingNotes: state.fetchingNotes,
  updatingNotes: state.updatingNotes
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, logout }
  )(MainPage)
);

