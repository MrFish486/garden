//get dimensions
const scale = 20;

const scalex = window.innerWidth / scale;
const scaley = window.innerHeight / scale;

document.getElementById("main").width = window.innerWidth;
document.getElementById("main").height = window.innerHeight;


let images = ["./svg/0.svg", "./svg/1.svg", "./svg/2.svg", "./svg/3.svg", "./svg/4.svg", "./svg/5.svg", "./svg/6.svg", "./svg/7.svg", "./svg/8.svg", "./svg/9.svg", "./svg/10.svg"];
var cache = [];
var world = [];
for (let x = 0; x < scalex; x ++) {
	world.push([]);
	for (let y = 0; y < scaley; y ++) {
		if (x == 0 && y == 0) {
			world[x].push(Math.floor(Math.random() * images.length));
		} else if (x == 0 && world[x][y - 1] == 4 && Math.random() > 0.2) {
			world[x].push(4)
		} else if (y == 0 && world[x - 1][y] == 4 && Math.random() > 0.2) {
			world[x].push(4)
		} else if (x != 0 && y != 0 && (world[x - 1][y] == 4 && world[x][y - 1] == 4) && Math.random() > 0.2) {
			world[x].push(4);
		} else {
			world[x].push(Math.random() > 0.8 ? Math.floor(Math.random() * 6) : 0);
		}
	}
}
for (let i = 0; i < images.length; i ++) {
	let q = new Image();
	q.src = images[i];
	cache.push(q);
}

gen = q => {
	let c = document.getElementById("main").getContext("2d");
	c.canvas.width = c.canvas.width;
	if (q) {
		for (let x = 0; x < scalex; x ++) {
			for (let y = 0; y < scaley; y ++) {
				setTimeout(() => {
					c.drawImage(cache[world[x][y]], x * scalex, y * scaley, scalex, scaley);
				}, Math.random() * 1000);
			}
		}
	} else {
		for (let x = 0; x < scalex; x ++) {
			for (let y = 0; y < scaley; y ++) {
				c.drawImage(cache[world[x][y]], x * scale, y * scale, scale, scale);
			}
		}
	}
}
act = () => {
	for (let x = 0; x < scalex; x ++) {
		for (let y = 0; y < scaley; y ++) {
			if (world[x][y] == 0 && Math.random() < 0.025) {
				if (x >= world.length - 1 || y >= world[0].length - 1) {
					//nada	
				} else if (x == 0 && y == 0) {
					if (world[x + 1][y] == 3 || world[x][y + 1] == 3) {
						world[x][y] = Math.random() > 0.2 ? 3 : 2;
					}
				} else if (x == 0) {
					if (world[x + 1][y] == 3 || world[x][y + 1] == 3 || world[x][y - 1] == 3) {
						world[x][y] = Math.random() > 0.2 ? 3 : 2;
					}
				} else if (y == 0) {
					if (world[x + 1][y] == 3 || world[x][y + 1] == 3 || world[x - 1][y] == 3) {
						world[x][y] = Math.random() > 0.2 ? 3 : 2;
					}
				} else {
					if (world[x + 1][y] == 3 || world[x][y + 1] == 3 || world[x - 1][y] == 3 || world[x][y - 1] == 3) {
						world[x][y] = Math.random() > 0.2 ? 3 : 2;
					}
				}
			} else if (world[x][y] == 7 && Math.random() < 0.005) {
				if (x == 0 && y == 0) {
					world[x + 1][y + 1] = 7;
				} else {
					world[x + 1][y] = 7;
					world[x - 1][y] = 7;
					world[x][y + 1] = 7;
					world[x][y - 1] = 7;
					world[x][y] = 6;
				}
			} else if (world[x][y] == 1 && Math.random() < 0.05) {
				world[x][y] = Math.random() < 0.2 ? 0 : 9;
			} else if (world[x][y] == 9 && Math.random() < 0.05) {
				world[x][y] = Math.random() > 0.001 ? 8 : 7;
			} else if (world[x][y] == 8 && Math.random() < 0.05) {
				if ((x == 0 && y == 0) || (x >= world.length - 1 && y >= world[0].length - 1)) {
					world[x][y] = 1;
				} else {
					world[x][y] = 1;
					let targetx = Math.floor(Math.random() * 3) - 1;
					let targety = Math.floor(Math.random() * 3) - 1;
					if (!(x + targetx > world.length - 1) && !(y + targety > world[0].length - 1)) {
						world[x + (Math.floor(Math.random() * 3) - 1)][y + (Math.floor(Math.random() * 3) - 1)] = 1;
					}
				}
			} else if (world[x][y] == 5 && x != 0 && y != 0 && !(x >= world.length - 1) && !(y >= world[0].length - 1) && Math.random() < 0.2) {
				world[x - 1][y - 1] = Math.random() < 0.05 ? 5 : 0;
				world[x - 1][y] = 0;
				world[x - 1][y + 1] = Math.random() < 0.05 ? 5 : 0;

				world[x][y - 1] = 0;
				world[x][y + 1] = 0;

				world[x + 1][y - 1] = Math.random() < 0.05 ? 5 : 0;
				world[x + 1][y] = 0;
				world[x + 1][y + 1] = Math.random() < 0.05 ? 5 : 0;
			} else if (world[x][y] == 4 && x != 0 && y != 0 && !(x >= world.length - 1) && !(y >= world[0].length - 1) && Math.random() < 0.005) {
				if (world[x - 1][y - 1] == 0 || world[x - 1][y - 1] == 1 || world[x - 1]) {
					world[x - 1][y - 1] = 4;
				}
				if (world[x - 1][y + 1] == 0 || world[x - 1][y + 1] == 1) {
					world[x - 1][y + 1] = 4;
				}
				if (world[x + 1][y - 1] == 0 || world[x + 1][y - 1] == 1) {
					world[x + 1][y - 1] = 4;
				}
				if (world[x + 1][y + 1] == 0 || world[x + 1][y + 1] == 1) {
					world[x + 1][y + 1] = 4;
				}
			} else if (world[x][y] == 3 && Math.random() < 0.01) {
				world[x][y] = Math.random() < 0.05 ? 1 : 0;
			} else if (world[x][y] == 7 && x != 0 && x != world.length && y != 0 && y != world[0].length && Math.random() < 0.01) {
				world[x][y] = 10;
			} else if (world[x][y] == 10 && x != 0 && x != world.length && y != 0 && y != world[0].length && Math.random() < 0.005) {
				if (world[x - 1][y] == 7) {
					world[x - 1][y] = 10;
				}
				if (world[x + 1][y] == 7) {
					world[x + 1][y] = 10;
				}
				if (world[x][y - 1] == 7) {
					world[x][y - 1] = 10;
				}
				if (world[x][y + 1] == 7) {
					world[x][y + 1] = 10;
				}
				world[x][y] = Math.random() < 0.5 ? 9 : 0;
			} else if (Math.random() < 0.005) {
				world[x][y] = 0;
			}
		}
	}
}

document.onkeydown = e => {
	if (e.key == "e") {
		act();
	} else if (e.key == "q") {
		gen(!e.ctrlKey);
	}
}
var I=setInterval(() => {gen(false);act()}, 64);
