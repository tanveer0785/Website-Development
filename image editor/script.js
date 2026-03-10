const filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  exposure: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 200,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
};

const filterContainer = document.querySelector(".filters");
// const placeholder = document.querySelector(".placeholder");

// const imageCavas = document.querySelector("#image-canvas");
// const cavasCTx = imageCavas.getContext("2d");

// const imageInput = document.querySelector("#image-input");

function createFilterElement(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  ((input.min = min),
    (input.max = max),
    (input.value = value),
    (input.id = name));

  const p = document.createElement("p");
  p.innerHTML = name[0].toUpperCase() + name.slice(1);

  div.append(p, input);

  return div;
}

Object.keys(filters).forEach((key) => {
  const filterElement = createFilterElement(
    key,
    filters[key].unit,
    filters[key].value,
    filters[key].min,
    filters[key].max,
  );

  filterContainer.append(filterElement);
});

// imageInput.addEventListener("change", (dets) => {
//   let file = dets.target.files[0];
//   placeholder.style.display = "none";
//   imageCavas.style.display = "block";
//   let img = new Image();
//   img.src = URL.createObjectURL(file);

//   img.onload = () => {
//     cavasCTx.drawImage(img, 0, 0, imageCavas.width, imageCavas.height);
//   };
// });