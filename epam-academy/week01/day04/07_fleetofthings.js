'use strict';

const Thing = require('./thing');

const Fleet = require('./fleet');


class FleetOfThings{
    main(){
        const fleet = new Fleet()
        let arr = [
            new Thing('Get milk'),
            new Thing('Remove the obstales'),
            new Thing('Stand up'),
            new Thing('Lunch')
        ]

        arr[2].complete()

        arr[3].complete()

        for (let i = 0; i < arr.length; i++){
            fleet.add(arr[i])
        }

        this.print(fleet.getThings())
    }

    print(things) {

        for (let thing of things) {

            console.log((thing.getCompleted() ? '[x] ' : '[ ] ') + thing.getName());

        }

    }

}

let obj = new FleetOfThings()

obj.main()

// -  You have the `Thing` class

// -  You have the `Fleet` class

// -  Create the `FleetOfThings` class with a `main` method

// -  Download those, use those

// -  In the `main` method create a fleet

// -  Achieve this output:

//  Crete a fleet of things to have this output:



// 1. [ ] Get milk

// 2. [ ] Remove the obstacles

// 3. [x] Stand up

// 4. [x] Eat lunch



// Hint: You have to create a `print()` method as well