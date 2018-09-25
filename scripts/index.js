//  The canvas in the background made by emma
//  in her Pen Canvas Particles & Cubic Bezier.
//  https://codepen.io/boltaway/pen/PwGxNX/

$(function() {
  var canvas = document.getElementById("nodes"),
    ctx = canvas.getContext("2d"),
    color = "rgba(255, 255, 255, .5)";
  (width = window.innerWidth), (height = window.innerHeight);

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = color;

  var dots = {
    num: 150,
    distance: 200,
    d_radius: 200,
    velocity: -0.9,
    array: []
  };

  function Dot() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    this.vx = dots.velocity + Math.random();
    this.vy = dots.velocity + Math.random();

    this.radius = Math.random() * 2;
  }

  Dot.prototype = {
    create: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function() {
      for (var i = 0; i < dots.num; i++) {
        var dot = dots.array[i];

        if (dot.x < 0 || dot.x > width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        } else if (dot.y < 0 || dot.y > height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
  };

  function createDots() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < dots.num; i++) {
      dots.array.push(new Dot());
      dot = dots.array[i];
      dot.create();
    }
    dot.animate();
  }

  setInterval(createDots, 1000 / 30);

  $(document).on("resize", function() {
    canvas.width = width;
    canvas.height = height;
  });
});


particlesJS("particles-js", {"particles":{"number":{"value":170,"density":{"enable":false,"value_area":6173.136434332263}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":144.30708547789706,"color":"#ffffff","opacity":0.1683582663908799,"width":0},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":130,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});




