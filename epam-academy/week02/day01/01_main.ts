'use strict'
import StringedInstrument from './01_app'

class Electric_Gitar extends StringedInstrument {
    constructor(numberOfString : number = 6 , name: string = 'Eectric_Gitar' ) {
        super(name, numberOfString)
    }

    sound() : string{
        return 'Twang'
    }
}

class Bass_Guitar extends StringedInstrument{
    constructor(numberOfString : number = 4 , name: string = 'Bass_Gitar') {
        super(name, numberOfString)
    }


    sound() : string{
        return  'Duum-duum-duum'
    }
}

class Violin extends StringedInstrument {
    constructor(numberOfString : number = 4 , name: string = 'violin') {
        super(name, numberOfString)
    }

    sound() : string{
        return 'Screech'
    }
}

console.log(
    'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
  );
  const guitar = new Electric_Gitar;
  const bassGuitar = new Bass_Guitar();
  const violin = new Violin();
  
  console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();
  
  console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
  );
  const guitar2 = new Electric_Gitar(7);
  const bassGuitar2 = new Bass_Guitar(5);
  
  console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();