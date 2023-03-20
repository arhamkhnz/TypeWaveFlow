# TypeWaveFlow
TypeWaveFlow is a simple package which displays each character of word in an type wave effect.

![TypeWaveFlow in action](https://github.com/arhamkhnz/TypeWaveFlow/blob/main/demo.gif)


## Usage

### Via NPM

To install the package, run `npm install type-wave-flow`

*Note: The characters array needs to be specified to run the TypeWaveFlow effect as it doesn't contain any byDefault array.

```javascript
// Sample Array
 const characters = [
    ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "'", '!', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
```

#### Function Parameters

- word (string, required): The word to be displayed in the TypeWaveFlow effect.
- characters (array, required): An array of characters to be displayed in the effect. 
- consoleElem (DOM element, required): The DOM element where the effect should be displayed.
- delay (number, required): The delay (in milliseconds) between each frame of the effect.

#### In React

```javascript
import React, { useEffect, useRef } from 'react';
import rotateAllText from 'type-wave-flow';

function MyComponent() {
  const consoleRef = useRef(null);

  useEffect(() => {
    rotateAllText('hello', {
      characters: [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "'", '!', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ],
      consoleElem: consoleRef.current,
      delay: 20
    });
  }, []);

  return <div ref={consoleRef}></div>;
}
```

#### In Angular

```javascript
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import rotateAllText from 'type-wave-flow';

@Component({
  selector: 'app-my-component',
  template: '<div #console></div>'
})
export class MyComponent implements AfterViewInit {
  @ViewChild('console', { static: false }) consoleRef: ElementRef;

  ngAfterViewInit(): void {
    rotateAllText('hello', {
      characters: [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "'", '!', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ],
      consoleElem: this.consoleRef.nativeElement,
      delay: 20
    });
  }
}
```

## Features 

- [x] TypeWaveFlow effect for displaying text in a wave-like motion
- [x] Dynamic word, character set, console element, and delay settings
- [x] Works in JavaScript, React, and Angular
- [ ] Option to display the effect in different colors or gradients
- [ ] Option to display effect in different patterns
- [ ] Ability to pause and resume the effect
- [ ] Option to change the direction of the wave animation (e.g. left-to-right, right-to-left)

We are constantly working to improve and expand the capabilities of TypeWaveFlow, so stay tuned for updates and new features!

We are always looking for ways to improve and enhance our software, so please feel free to share any feedback or ideas you may have!

## Contribution

If you'd like to contribute to TypeWaveFlow, please fork the repository and submit a pull request.

## License 

[MIT](https://github.com/arhamkhnz/TypeWaveFlow/blob/add-license-1/LICENSE.md)
