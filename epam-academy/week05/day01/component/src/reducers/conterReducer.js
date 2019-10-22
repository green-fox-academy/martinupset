const initstate = {counter : 0, tags: []}

const counterReducer = (state = initstate, action) => {
  let newCounter = state.counter
  if (action.type === 'INCREASE'){
    return {counter : newCounter + 1, tags: []}
  }

  return state;
}

export default counterReducer