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
    // + 2 is for border
    viewport: {
      width: v.clientWidth + 2,
      height: v.clientHeight + 2,
      formatted: `${v.clientWidth + 2}×${v.clientHeight + 2}`,
    },
    dynamicViewport: {
      width: dv.clientWidth + 2,
      height: dv.clientHeight + 2,
      formatted: `${dv.clientWidth + 2}×${dv.clientHeight + 2}`,
    },
  };
};

const copyJson = function () {
  let size = getScreenSize();

  let json = JSON.stringify(size, null, 2);
  console.log(json);
  navigator.clipboard.writeText(json);
};

displaySize();

window.addEventListener('resize', (e) => {
  displaySize();
});
