const getId = () => (100000 * Math.random()).toFixed(0)

export const createVote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export const createAnecdote = (content) => {
  return {
  type: 'NEW_ANECDOTE',
      data: {
        content,
        votes: 0,
        id: getId()
      }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('anecdote state now: ', state)
  console.log('anecdote action', action)

  switch (action.type){
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)

      const votedAnecdote = { 
        ...anecdoteToVote, 
        votes: anecdoteToVote.votes + 1 
      }

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer