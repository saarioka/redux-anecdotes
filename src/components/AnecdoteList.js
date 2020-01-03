import React from 'react'
import {createVote} from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({store}) => {
  const anecdotes = store.getState().anecdotes
  anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  const vote = (id) => {
    const voted = anecdotes.find(a => { return a.id === id })
    store.dispatch( createVote(id) )
    store.dispatch( createNotification(`you voted '${voted.content}'`) )
    setTimeout(() => {
			store.dispatch(clearNotification())
		}, 5000)
  }
  
  const filterAnecdotes = (condition) => {
    return(
      condition
      ? anecdotes.filter(a => a.content.includes(condition))
      : anecdotes
    )
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      {filterAnecdotes(store.getState().filter).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
