'use strict';

import Printable from './04_printable'

// Add "My todo:" to the beginning of the todoText

// Add " - Download games" to the end of the todoText

// Add " - Diablo" to the end of the todoText but with indention



// Expected outpt:



// My todo:

//  - Buy milk

//  - Download games

//      - Diablo




class todo implements Printable{
    todo : string
    
    constructor(todo : string ) {
        this.todo = todo
    }

    printAllFields() : string{
        return `${this.todo}`
    }
}
