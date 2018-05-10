'use strict';

/**
 * Source: https://github.com/raimanadh/vh-fix
 * Category: Browswer compatibility
 * Purpose: The hero image on the homepage uses vh units to set the background image to 100% height (i.e take up 100% of the user's viewport). 
 * Chrome iOS doesn't include the address bar as part of the vh area calculation, so when the user scrolls down on Chrome iOS, the addres bar minimises.
 * This causes the viewport area to change, resulting in the user seeing the background image dynamically rescale itself. This is not intended.
 * This fix checks to see if the user is using Chrome iOS, and if so, applies the fix.
 * Instructions: Add 'vh-fix' class wherever vh units are used.
 *
 * 
 * Notes from Author:
 * Regex tested and matched against the following userAgents:
 * iPhone
 *   Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)
 *   AppleWebKit/602.1.50 (KHTML, like Gecko)
 *   CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1
 * iPad
 *   Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X)
 *   AppleWebKit/600.1.4 (KHTML, like Gecko)
 *   CriOS/45.0.2454.89 Mobile/13A344 Safari/600.1.4 (000205)
 */
 
const iOSChromeDetected = /CriOS/.test(navigator.userAgent);

if (iOSChromeDetected) {
  const getHeight = function getComputedHeightFrom(element) {
    const computedHeightString = getComputedStyle(element).height;
    const elementHeight = Number(computedHeightString.replace('px', ''));
    return elementHeight;
  };

  const calculateVh = function calculateVhFrom(elementHeight) {
    const approximateVh = (elementHeight / initialViewportHeight) * 100;
    const elementVh = Math.round(approximateVh);
    return elementVh;
  };

  const setDataAttribute = function setDataAttributeUsing(elementVh, element) {
    const dataAttributeValue = `${elementVh}`;
    element.setAttribute('data-vh', dataAttributeValue);
  };

  const setHeight = function setHeightBasedOnVh(element) {
    const landscape = orientation;
    const vhRatio = Number(element.dataset.vh / 100);
    if (landscape) {
      element.style.height = `${vhRatio * landscapeHeight}px`;
    } else {
      element.style.height = `${vhRatio * portraitHeight}px`;
    }
  };

  const initialize = function initializeDataAttributeAndHeight(element) {
    const elementHeight = getHeight(element);
    const elementVh = calculateVh(elementHeight);
    setDataAttribute(elementVh, element);
    setHeight(element);
  };

  const initialViewportHeight = window.innerHeight;
  const elements = Array.from(document.getElementsByClassName('vh-fix'));
  const statusBarHeight = 20;
  const portraitHeight = screen.height - statusBarHeight;
  const landscapeHeight = screen.width - statusBarHeight;

  window.onload = function() {
    window.addEventListener('orientationchange', function() {
      elements.forEach(setHeight);
    });

    elements.forEach(initialize);
  };
}
