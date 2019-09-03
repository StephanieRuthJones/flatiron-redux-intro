import { createStore, combineReducers } from 'redux'
// const counter = document.querySelector("#counter")
const up = document.querySelector("#up")
const down = document.querySelector("#down")
const downByTen = document.querySelector("#downByTen")

const store = createStore(combineReducers({
    counter: counterReducer,
    name: nameReducer
}))

//reducer takes in state and action as arguments

const nameReducer = (state = "Stephanie", action) => {
    switch (action, type) {
        default:
            return state
    }
}

const counterReducer = (state = 0, action) => {
    //always a switch statement
    switch (action.type) {
        case 'UP':
            return state++
        case 'DOWN':
            return state--
        case 'UPBYTEN':
            return state + 10
        //need default case / default return
        default:
            return state
    }
}

//need counter reducer to be passed into store so have state
store.subscribe(() => console.log(store.getState()))

const upAction = { type: 'UP' }

const downAction = { type: 'DOWN' }

const upByTenAction = { type: 'UPBYTEN' }

console.log("store", store)

up.addEventListener('click', function () {
    store.dispatch(upAction)
})

down.addEventListener('click', function () {
    store.dispatch(downAction)
})

downByTen.addEventListener('click', function () {
    store.dispatch(upByTenAction)
})