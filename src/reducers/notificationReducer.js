const notificationAtStart = 'Take note'

export const createNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: {
      content
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const initialState = notificationAtStart

const notificationReducer = (state = initialState, action) => {
  console.log('notification state now: ', state)
  console.log('noticifation action', action)

  switch (action.type){
    case 'CREATE_NOTIFICATION':
      return action.data.content
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer