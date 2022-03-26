const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ♔♕♖♗♘♙CHESS♚♛♜♝♞♟'
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    
    this.text = this.char.charAt(Math.floor(Math.random() * this.char.length))
    context.fillStyle = 'pink';
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if(this.y*this.fontSize>this.canvasHeight && Math.random() > 0.9){
      this.y = 0;
    } else{
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  #initialize() {
    for (let index = 0; index < this.columns; index++) {
      this.symbols[index] = new Symbol(index, 0, this.fontSize, this.canvasHeight);
    }
  }
}

const effect = new Effect(canvas.width, canvas.height)

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = effect.fontSize + 'px monospace'
  effect.symbols.forEach(s => s.draw(ctx))
  requestAnimationFrame(animate);
}

animate()

