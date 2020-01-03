export const createFilter = (content) => {
  return {
    type: 'CREATE_FILTER',
    data: {
      content
    }
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER'
  }
}

const initialState = null

const filterReducer = (state = initialState, action) => {
  console.log('filter state now: ', state)
  console.log('filter action', action)

  switch (action.type){
    case 'CREATE_FILTER':
      return action.data.content
    case 'CLEAR_FILTER':
      return null
    default:
      return state
  }
}

export default filterReducer
