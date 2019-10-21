const initstate = {counter : 0, tags: []}

const counterReducer = (state = initstate, action) => {
  let newCounter = state
  if (action.type === 'INCREASE'){
    return newCounter + 1
  }
}

export default counterReducer