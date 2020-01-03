const notificationAtStart = 'Take note'

export const createNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      content
    }
  }
}

const initialState = notificationAtStart

const notificationReducer = (state = initialState, action) => {
  console.log('notification state now: ', state)
  console.log('noticifation action', action)

  switch (action.type){
    case 'NEW_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}

export default notificationReducer