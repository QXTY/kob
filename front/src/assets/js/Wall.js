import { GameObject } from './GameObject';

export class Wall extends GameObject {
    constructor(r, c, gamemap) {
        super();
        this.r = r;
        this.c = c;
        this.gamemap = gamemap; 

        this.wall_color = "#B37226"
    }
    updated() {
        this.render();
    }
    render() {
        const L = this.gamemap.L; // 动态变化，所以每次动态取
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.wall_color;
        ctx.fillRect(this.c * L, this.r * L, L, L);
    }
}