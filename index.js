import { createStore } from 'redux'
const counter = document.querySelector("#counter")
const up = document.querySelector("#up")
const down = document.querySelector("#down")

const store = createStore(() => { })

//reducer takes in state and action as arguments
const counterReducer = (state = 0, action) => {
    //always a switch statement
    switch (action.type) {
        case 'UP':
            return state++
        //default case / default return

        default:
            return state
    }
}

const upAction = { type: 'UP' }
console.log("store", store)

up.addEventListener('click', function () {
    counter.innerText++
})

down.addEventListener('click', function () {
    counter.innerText--
})