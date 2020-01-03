import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value

    props.createAnecdote(content)
    props.createNotification(`you added '${content}'`)

    setTimeout(() => {
      props.clearNotification()
		}, 5000)
  }

  return(
    <div>
      <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdote" /></div>
          <button>create</button>
        </form>
    </div>
  )
}

export default connect(
	null,
	{ createAnecdote, createNotification, clearNotification }
)(AnecdoteForm)

