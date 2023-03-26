# TypeWaveFlow
TypeWaveFlow is a lightweight package that provides a simple yet visually appealing effect for displaying text in a wave-like motion. With just a few lines of code, you can add a TypeWaveFlow effect to your web application, giving your users an engaging and dynamic experience.

## Features

* TypeWaveFlow effect for displaying text in a wave-like motion
* Dynamic word, character set, console element, and delay settings
* Works in JavaScript, React, and Angular


### Rotation Print
![TypeWaveFlow in action](https://github.com/arhamkhnz/TypeWaveFlow/blob/main/demo/rotationPrint.gif)


### Smooth Print
![TypeWaveFlow in action](https://github.com/arhamkhnz/TypeWaveFlow/blob/main/demo/smoothPrint.gif)


### After Effect
![TypeWaveFlow in action](https://github.com/arhamkhnz/TypeWaveFlow/blob/main/demo/afterEffect.gif)


### Scroll Print
![TypeWaveFlow in action](https://github.com/arhamkhnz/TypeWaveFlow/blob/main/demo/scrollPrint.gif)
*Do use CSS `overflow-y: scroll` in the element in which you're printing to give scrolling effect

## Usage

#### Function Parameters

- word (string, required): The word to be displayed in the TypeWaveFlow effect.
- consoleElemId (DOM element, required): The DOM element where the effect should be displayed.
- characters (array, contains default value): An array of characters to be displayed in the effect. By Default it contains 36 characters consisting 26 alphabets & 0 - 9 integers.
- delay (number, contains default value): The delay (in milliseconds) between each frame of the effect. By Default it is 20 (in milliseconds)
- completeLimit (number, contains default value): Only required when using scroll print effect to define how many times the complted word should print. By Default it is 10.

```javascript

// order of function parameters
TypeWaveFlow.rotationPrint(word, consoleElemId, characters, delay)

// parameter completeLimit should only be required in Scroll Print Effect
TypeWaveFlow.rotationPrint(word, consoleElemId, characters, delay, completeLimit)
```

```javascript

// available functions

TypeWaveFlow.rotationPrint(word, consoleElemId, characters, delay)

TypeWaveFlow.smoothPrint(word, consoleElemId, characters, delay)

TypeWaveFlow.afterEffect(word, consoleElemId, characters, delay)

TypeWaveFlow.scrollPrint(word, consoleElemId, characters, delay, completeLimit) // parameter completeLimit should only be required in Scroll Print Effect


```

### Via CDN

```javascript 

<script src="https://cdn.jsdelivr.net/npm/type-wave-flow"></script>

```

```javascript
 const word = 'hello world'
 const consoleElemId = 'console'
 const characters = ['q', 'w', 'e', 'r', 't', 'y']
 const delay = 50

 // Using default values for characters & delay (in milliseconds)
 window.onload = () =>  TypeWaveFlow.rotationPrint(word, consoleElemId); 
 
 
 // Using custom parameters for characters & delay (in milliseconds)
 window.onload = () =>  TypeWaveFlow.rotationPrint(word, consoleElemId, characters, delay); 
```


### Via NPM

To install the package, run `npm install type-wave-flow`

#### In React

```javascript
import React, { useEffect, useRef } from 'react';
import { TypeWaveFlow } from 'type-wave-flow';

function MyComponent() {
  const consoleRef = useRef(null);
  const consoleRefTwo = useRef(null);

  useEffect(() => {
    // using default values for characters & delay
    const word = 'hello world'
    
    TypeWaveFlow.rotationPrint(word, consoleRef);
  }, []);

  return <div ref={consoleRef}></div>;
  
  
  
  useEffect(() => {
    // using custom parameters
    const word = 'hello world'
    const characters = ['q', 'w', 'e', 'r', 't', 'y']
    const delay = 50
    
    TypeWaveFlow.smoothPrint(word, consoleRefTwo, characters, delay);
  }, []);

  return <div ref={consoleRefTwo}></div>;
  
}
```

#### In Angular

```javascript
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { TypeWaveFlow } from 'type-wave-flow';

@Component({
  selector: 'app-my-component',
  template: '<div #console></div>   <div style="overflow-y: scroll" #printScroll></div>'
})
export class MyComponent implements AfterViewInit {
  @ViewChild('console', { static: false }) consoleRef: ElementRef;
  @ViewChild('printScroll', { static: false }) printScrollRef: ElementRef;

  ngAfterViewInit(): void {
    // using default values for characters & delay
    const word = 'hello world'
    
    TypeWaveFlow.rotationPrint(word, this.consoleRef.nativeElement);
  }
  
  
  
  ngAfterViewInit(): void {
    // using custom parameters
    // argument completeLimit is number of times the completed word should print while scrolling
    const word = 'hello world'
    const characters = ['q', 'w', 'e', 'r', 't', 'y']
    const delay = 50
    const completeLimit = 20
    
    TypeWaveFlow.scrollPrint(word, this.printScrollRef.nativeElement, characters, delay, completeLimit);
}
```

## Upcoming Features 

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
