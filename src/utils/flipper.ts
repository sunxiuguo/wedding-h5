export class Flipper {
    isFlipping = false;
    flipNode: Element;
    frontNode: HTMLElement | null;
    backNode: HTMLElement | null;
    duration: number = 600;
    animateClassName: string;

    constructor(node: Element, currentTime: string, nextTime: string, animateClassName: string) {
        this.flipNode = node;
        this.frontNode = node.querySelector('.front');
        this.backNode = node.querySelector('.back');
        this.animateClassName = animateClassName;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
    }

    setFrontTime(time: string) {
        this.frontNode!.dataset.number = time;
    }

    setBackTime(time: string) {
        this.backNode!.dataset.number = time;
    }

    flipDown(currentTime: string, nextTime: string) {
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
        this.flipNode.classList.add(this.animateClassName);
        setTimeout(() => {
            this.flipNode.classList.remove(this.animateClassName);
            this.isFlipping = false;
            this.setFrontTime(nextTime);
        }, this.duration);
    }
}
