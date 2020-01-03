import React from 'react'
import { connect } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const vote = (id) => {
    const voted = props.visibleAnecdotes.find(a => { return a.id === id })
    props.createVote(id)
    props.createNotification(`you voted '${voted.content}'`)
    setTimeout(() => {
			props.clearNotification()
		}, 5000)
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      {props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  const filtered = filter
    ? anecdotes.filter(a => a.content.includes(filter))
    : anecdotes

  filtered.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  return(filtered)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
  }
}

const mapDispatchToProps = {
  createVote, createNotification, clearNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)