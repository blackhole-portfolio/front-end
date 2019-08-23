// Import all dependencies

import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { deleteNotes, updateNotes } from '../actions/index';

import EditForm from './EditForm';

// Notes class

class Notes extends React.Component {
    // state
    state = {
        animate: false ,
        updatingNoteId: null
    }

    // Back button functionallity
    back = e => {
        e.preventDefault();

        this.props.history.push('/main-page');
    };

    // Update Note functionallity
    updateNote = (e, note) => {
        e.preventDefault();

        this.props.updateNote(note);

        setTimeout( () => 
        this.setState({
            updatingNOteID: null
        }), 300)

        setTimeout( () => {
            this.props.history.push('/main-page')
        }, 400)
    }

    // Animation properties
    handleAnimate = (id) => {
        this.setState(prevState => ({
            animate: !prevState.animate
        }));

    setTimeout( () => { this.props.deleteNotes(id); }, 3000)

    setTimeout( () => { this.props.history.push('/main-page') }, 3200)
    };
};