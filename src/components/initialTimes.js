export const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; 
    return times;
  };
  
  export const updateTimes = async (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const times = await fetchAPI(action.payload); 
            return times;
      default:
        return state;
    }
  };