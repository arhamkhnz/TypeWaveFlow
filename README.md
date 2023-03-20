# TypeWaveFlow
TypeWaveFlow is a simple package which displays each character of word in an type wave effect.

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
import { printWord } from 'type-wave-flow';

@Component({
  selector: 'app-my-component',
  template: '<div #console></div>'
})
export class MyComponent implements AfterViewInit {
  @ViewChild('console', { static: false }) consoleRef: ElementRef;

  ngAfterViewInit(): void {
    printWord('hello', {
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

## Contribution

If you'd like to contribute to TypeWaveFlow, please fork the repository and submit a pull request.
