import { fromEvent } from 'https://cdn.skypack.dev/rxjs';

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

const clicks$ = fromEvent(button, 'click');

clicks$.subscribe(() => console.log('Button clicked!'));
