import { animate, animation, keyframes, query, style, transition, trigger } from '@angular/animations';


export const progressBar = animation([
    animate('{{duration}}s {{timingFunction}}', keyframes([
        style({ width: '0%', offset: 0 }),
        style({ width: '100%', offset: 1 })
    ]))
]);

export const moveInLeft = [
    animate('{{duration}}s', keyframes([
        style({ transform: 'translate(-50rem)', offset: 0 }),
        style({ transform: 'translate(0)', offset: 1 })
    ]))
];

export const moveInRight = [
    animate('{{duration}}s', keyframes([
        style({ transform: 'translate(50rem)', offset: 0 }),
        style({ transform: 'translate(0)', offset: 1 })
    ]))
];

export const moveInBottom = [
    animate('{{duration}}s', keyframes([
        style({ opacity: 0, transform: 'translateY(4rem)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
    ]))
];

export const zoomIn = [
    animate('{{duration}}s', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.25)', offset: 0.25 }),
        style({ transform: 'scale(1.5)', offset: 0.5 }),
        style({ transform: 'scale(1.75)', offset: 0.75 }),
        style({ transform: 'scale(2)', offset: 1 }),
    ]))
];

export const toBottomFromTop = [
    animate('{{duration}}s', keyframes([
        style({ transform: 'translateY(100%)', offset: 0.49 }),
        style({ opacity: 0, transform: 'scale(-100%)', offset: 0.5 }),
        style({ opacity: 1, offset: 0.51 }),
    ]))
];
