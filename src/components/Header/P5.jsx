import p5 from "p5";
import { useEffect, useRef } from "react";

let w = window.innerWidth;
let h = window.innerHeight / 4;

export default function P5() {
  const canvasRef = useRef(null);
  let p5Instance = useRef(null);
  useEffect(() => {
    p5Instance.current = new p5(sketch, canvasRef.current);
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  const sketch = (p) => {
    let counter = 0;

    function _random(x, a) {
      return Math.random() * x + a;
    }
    function _round(x, a) {
      return Math.round(_random(x, a));
    }

    let ball = {
      r: 12,
      x: 0,
      y: h,
      v: 3,
      vec_x: 1,
      vec_y: -1,
    };

    class Ball {
      constructor(obj) {
        this.obj = obj;
      }
      move() {
        let b = this.obj;
        b.x += b.v * b.vec_x;
        b.y += b.v * b.vec_y;
        if (b.x < 0 + b.r) b.vec_x = 1;
        if (b.x > w - b.r) b.vec_x = -1;
        if (b.y < b.r) b.vec_y = 1;
        if (b.y > h - b.r) b.vec_y = -1;
      }
      draw() {
        let b = this.obj;

        p.fill(17, 24, 39);
        p.circle(b.x, b.y, b.r * 2);
        this.move();
      }
    }

    let block = {
      form: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      para: [],
      pad: 3,
      //   h_size: 20,
    };

    class Block {
      constructor(obj) {
        this.obj = obj;
        this.w = this.obj.form[0].length;
        this.h = this.obj.form.length;
        this.h_size = (h - this.obj.pad * (this.h + 1)) / this.h;
        this.w_size = (w - this.obj.pad * (this.w + 1)) / this.w;
      }
      rect_block(x, y) {
        // let b = this.obj;
        p.noStroke();
        p.fill(17, 24, 39);
        p.rect(x, y, this.w_size, this.h_size);
      }
      draw() {
        let b = this.obj;
        for (let bh = 0; bh < this.h; bh++) {
          b.para[bh] = [];
          for (let bw = 0; bw < this.w; bw++) {
            b.para[bh][bw] = {
              x: b.pad * (bw + 1) + this.w_size * bw,
              y: this.h_size * bh + b.pad * (bh + 1),
              w: this.w_size,
              h: this.h_size,
              c: b.form[bh][bw],
              bh: bh,
              bw: bw,
            };
            let bp = b.para[bh][bw];
            if (bp.c === 1) {
              this.rect_block(bp.x, bp.y);
              this.move_ball(bp);
            }
          }
        }
      }
      move_ball(bp) {
        if (
          ball.x >= bp.x &&
          ball.x <= bp.x + bp.w &&
          ball.y >= bp.y - ball.r &&
          ball.y <= bp.y + bp.h + ball.r
        ) {
          ball.vec_y = -ball.vec_y;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        } else if (
          ball.x >= bp.x - ball.r &&
          ball.x <= bp.x + bp.w + ball.r &&
          ball.y >= bp.y &&
          ball.y <= bp.y + bp.h
        ) {
          ball.vec_x = -ball.vec_x;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        } else if (
          ball.vec_x > 0 &&
          ball.vec_y > 0 &&
          ball.r ** 2 > (ball.x - bp.x) ** 2 + (ball.y - bp.y) ** 2
        ) {
          ball.vec_y = -ball.vec_y;
          ball.vec_x = -ball.vec_x;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        } else if (
          ball.vec_x < 0 &&
          ball.vec_y > 0 &&
          ball.r ** 2 > (ball.x - (bp.x + bp.w)) ** 2 + (ball.y - bp.y) ** 2
        ) {
          ball.vec_y = -ball.vec_y;
          ball.vec_x = -ball.vec_x;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        } else if (
          ball.vec_x > 0 &&
          ball.vec_y < 0 &&
          ball.r ** 2 > (ball.x - bp.x) ** 2 + (ball.y - (bp.y + bp.h)) ** 2
        ) {
          ball.vec_y = -ball.vec_y;
          ball.vec_x = -ball.vec_x;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        } else if (
          ball.vec_x < 0 &&
          ball.vec_y < 0 &&
          ball.r ** 2 >
            (ball.x - (bp.x + bp.w)) ** 2 + (ball.y - (bp.y + bp.h)) ** 2
        ) {
          ball.vec_y = -ball.vec_y;
          ball.vec_x = -ball.vec_x;
          this.obj.form[bp.bh][bp.bw] = 0;
          counter++;
        }
      }
    }

    // let ber = {
    //   x: 200,
    //   vec_x: 1,
    // };

    // class Ber {
    //   constructor(obj) {
    //     this.x = obj.x;
    //     this.w = w / 5;
    //     this.h = 10;
    //     this.y = h - this.h;
    //     this.v = 5;
    //   }
    //   ber_move() {
    //     if (this.x > p.mouseX) {
    //       ber.x -= this.v;
    //       ber.vec_x = -1;
    //     }
    //     if (this.x + this.w < p.mouseX) {
    //       ber.x += this.v;
    //       ber.vec_x = 1;
    //     }
    //     if (this.x < 0) ber.x = 0;
    //     if (this.x + this.w > w) ber.x = w - this.w;
    //   }

    //   ball_reflection() {
    //     if (ball.y + ball.r >= h) {
    //       ball.v = 0;
    //     }
    //     if (ball.x > this.x && ball.x < this.x + this.w) {
    //       if (ball.y + ball.r > this.y) {
    //         ball.vec_y *= -1;
    //         if (ber.vec_x > 0) {
    //           ball.vec_x = 1;
    //         } else {
    //           ball.vec_x = -1;
    //         }
    //       }
    //     }
    //   }

    //   draw() {
    //     p.fill(255, 0, 0);
    //     p.rect(this.x, this.y, w / 5, 5);
    //     this.ber_move();
    //     this.ball_reflection();
    //   }
    // }

    p.setup = () => {
      p.createCanvas(w, h);
    };

    p.draw = () => {
      // p.textSize();
      //   p.text("ポートフォリオBLOG", 0, 0, 30, 30);
      p.background(255);
      if (counter < 36) {
        new Block(block).draw();
        new Ball(ball).draw();
      }
      //   new Ber(ber).draw();
    };
    p.windowResized = () => {
      w = window.innerWidth;
      h = window.innerHeight / 4;
      p.resizeCanvas(w, h);
    };
  };

  return (
    <>
      <div ref={canvasRef}></div>
    </>
  );
}
