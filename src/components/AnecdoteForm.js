import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
import anecdotes from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    const addedAnecdote = await anecdoteService.createNew(content)
    props.createNotification(`you added '${addedAnecdote.content}'`)

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

