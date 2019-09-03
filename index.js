import { createStore } from 'redux'
const counter = document.querySelector("#counter")
const up = document.querySelector("#up")
const down = document.querySelector("#down")

const store = createStore(counterReducer)

//reducer takes in state and action as arguments
const counterReducer = (state = 0, action) => {
    //always a switch statement
    switch (action.type) {
        case 'UP':
            return state++
        case 'DOWN':
            return state--
        //need default case / default return
        default:
            return state
    }
}

//need counter reducer to be passed into store so have state
store.subscribe(() => console.log(store.getState()))

const upAction = { type: 'UP' }

const downAction = { type: 'DOWN' }

console.log("store", store)

up.addEventListener('click', function () {
    store.dispatch(upAction)
})

down.addEventListener('click', function () {
    store.dispatch(downAction)
})