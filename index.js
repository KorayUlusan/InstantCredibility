const images = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Abrid_n_temzi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Above_Sprouts_Gorcery_Store_Tonight_Fort_Collins_Colorado_O_%28229896797%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/95865267_Jpg_%28165471921%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/5/52/500px_photo_%2869274049%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b6/500px_photo_%2869274077%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/500px_photo_%2869846341%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/4197590619_Jpg_%28165456841%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/6/60/15038704942_Jpg_%28165453195%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/15361545496_Jpg_%28165453177%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5b/080307-188-Kekeko.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/-newbeginning_-sunraising.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/-nature.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/%22%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D1%88%D0%B8%D0%B9%D1%81%D1%8F%22.jpg",
];

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

var bg = document.getElementById("bg");
bg.src = get_random(images);
bg.style.maxWidth = "90vw"
bg.style.maxHeight = "80vh"