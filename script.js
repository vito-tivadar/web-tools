const displaySize = function () {
  let size = getScreenSize();

  document.getElementById('actual-size').textContent = size.realScreen.formatted;
  document.getElementById('current-size').textContent = size.screen.formatted;
  document.getElementById('viewport-size').textContent = size.viewport.formatted;
  document.getElementById('dynamic-viewport-size').textContent = size.dynamicViewport.formatted;
};

const getScreenSize = function () {
  const { screen, devicePixelRatio } = window;
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const realScreenWidth = Math.round(screenWidth * devicePixelRatio);
  const realScreenHeight = Math.round(screenHeight * devicePixelRatio);

  let v = document.getElementById('v');
  let dv = document.getElementById('dv');

  return {
    realScreen: {
      width: realScreenWidth,
      height: realScreenHeight,
      formatted: `${realScreenWidth}×${realScreenHeight}`,
    },
    screen: {
      width: screenWidth,
      height: screenHeight,
      formatted: `${screenWidth}×${screenHeight}`,
    },
    viewport: {
      width: v.clientWidth,
      height: v.clientHeight,
      formatted: `${v.clientWidth}×${v.clientHeight}`,
    },
    dynamicViewport: {
      width: dv.clientWidth,
      height: dv.clientHeight,
      formatted: `${dv.clientWidth}×${dv.clientHeight}`,
    },
  };
};

const copyJson = function () {
  try {
    let size = getScreenSize();

    let json = JSON.stringify(size);
    console.log(json);
    navigator.clipboard.writeText(json);
  } catch (error) {
    alert(error);
  }
};

displaySize();

window.addEventListener('resize', (e) => {
  displaySize();
});
