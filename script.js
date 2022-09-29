let chooseButton = document.querySelector(".choose-img");
let inputButton = document.querySelector(".file-input");
let image = document.querySelector("img");

//adding button id's to an array
let brightnessBut = document.getElementById("brightness");
let inversionBut = document.getElementById("inversion");
let saturationBut = document.getElementById("saturation");
let grayscaleBut = document.getElementById("grayscale");
let buttonNames = [brightnessBut, inversionBut, saturationBut, grayscaleBut];

//slider input
let sliderInput = document.querySelector(".filter input");

//slider value displayed
let sliderValue = document.querySelector(".filter-info .value");

//button selected for applying effect
let sliderTitle = document.querySelector(".filter-info .name");

//setting brightness, saturation, contrast and grayscale
let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0,
  blur = 0,
  rotate = 0,
  sepia = 0;

//getting slider id's for bottom three sliders
let blurSliderVal = document.getElementById("blur-slider");
let rotateSliderVal = document.getElementById("rotate-slider");
let sepiaSliderVal = document.getElementById("sepia-slider");

//getting inner text of bottom three sliders
let blurSliderText = document.getElementById("blur-value");
let rotateSliderText = document.getElementById("rotate-value");
let sepiaSliderText = document.getElementById("sepia-value");

//button for resseting filters
let resetButton = document.querySelector("button.reset-filter");

//button for saving image
let saveButton = document.querySelector("button.save-img");

//for uploading image
chooseButton.addEventListener("click", function () {
  inputButton.click();
});

inputButton.addEventListener("click", function () {
  inputButton.addEventListener("change", function (e) {
    image.src = URL.createObjectURL(e.target.files[0]);
  });
});

//for changing name of heading
buttonNames.forEach((selected) => {
  //if active class present
  selected.addEventListener("click", function () {
    if (document.querySelector(".filter .active")) {
      document.querySelector(".filter .active").classList.remove("active"); //remove it for the next button to be active
    }
    selected.classList.add("active"); //add active to the button clicked
    sliderTitle.innerText = selected.innerText; //change name of title to whatever button pressed

    //setting the sliders to the value of each filter thats been stored or to the default values if none stored
    switch (selected.id) {
      case "brightness":
        setSliderValues(200, brightness, brightness + "%");
        break;
      case "saturation":
        setSliderValues(200, saturation, saturation + "%");
        break;
      case "inversion":
        setSliderValues(100, inversion, inversion + "%");
        break;
      case "grayscale":
        setSliderValues(100, grayscale, grayscale + "%");
    }
  });
});

//adding values to the sliders
function setSliderValues(sliderMaxIn, sliderVal, sliderText) {
  sliderInput.max = sliderMaxIn;
  sliderInput.value = sliderVal;
  sliderValue.innerText = sliderText;
}

//for changin value of slider
sliderInput.addEventListener("input", function () {
  sliderValue.innerText = sliderInput.value + "%";
  chosenButton = document.querySelector(".filter .active");
  switch (chosenButton.id) {
    case "brightness":
      brightness = sliderInput.value;
      break;
    case "saturation":
      saturation = sliderInput.value;
      break;
    case "inversion":
      inversion = sliderInput.value;
      break;
    case "grayscale":
      grayscale = sliderInput.value;
      break;
  }

  image.style.filter =
    "brightness(" +
    brightness +
    "%) saturate(" +
    saturation +
    "%) invert(" +
    inversion +
    "%) grayscale(" +
    grayscale +
    "%)";
});

//setting initial values for blur slider
blurSliderVal.max = 100;
blurSliderVal.value = blur;
blurSliderText.innerText = blur + "px";

//setting initial values for rotate
rotateSliderVal.max = 360;
rotateSliderVal.value = rotate;
rotateSliderText.innerText = rotate + "deg";

//setting initial values for sepia
sepiaSliderVal.max = 100;
sepiaSliderVal.value = sepia;
sepiaSliderText.innerText = sepia + "%";

//event listener for rotate effect
rotateSliderVal.addEventListener("input", function () {
  rotate = rotateSliderVal.value;
  rotateSliderText.innerText = rotate + "deg";
  image.style.transform = "rotate(" + rotate + "deg)";
});

//event listener for blur effect
blurSliderVal.addEventListener("input", function () {
  blur = blurSliderVal.value;
  blurSliderText.innerText = blur + "px";
  image.style.filter =
    "sepia(" +
    sepia +
    "%) blur(" +
    blur +
    "px)brightness(" +
    brightness +
    "%) saturate(" +
    saturation +
    "%) invert(" +
    inversion +
    "%) grayscale(" +
    grayscale +
    "%)";
});

//event listener for sepia effect
sepiaSliderVal.addEventListener("input", function () {
  sepia = sepiaSliderVal.value;
  sepiaSliderText.innerText = sepia + "%";
  image.style.filter =
    "sepia(" +
    sepia +
    "%) blur(" +
    blur +
    "px)brightness(" +
    brightness +
    "%) saturate(" +
    saturation +
    "%) invert(" +
    inversion +
    "%) grayscale(" +
    grayscale +
    "%)";
});

//button for resetting filters
resetButton.addEventListener("click", function () {
  //resetting blur
  blur = 0;
  blurSliderVal.value = 0;
  blurSliderText.innerText = 0 + "px";
  image.style.filter = "blur(" + blur + "px)";

  //resetting rotate
  rotate = 0;
  rotateSliderVal.value = 0;
  rotateSliderText.innerText = rotate + "deg";
  image.style.transform = "rotate(" + rotate + "deg)";

  //resetting sepia
  sepia = 0;
  sepiaSliderVal.value = sepia;
  sepiaSliderText.innerText = sepia + "%";
  image.style.filter = "sepia(" + sepia + "%)";

  brightness = 100;
  saturation = 100;
  inversion = 0;
  grayscale = 0;

  buttonNames[0].click();

  image.style.filter =
    "sepia(" +
    sepia +
    "%) blur(" +
    blur +
    "px)brightness(" +
    brightness +
    "%) saturate(" +
    saturation +
    "%) invert(" +
    inversion +
    "%) grayscale(" +
    grayscale +
    "%)";
});
