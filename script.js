window.onload = function () {

  bulb.checked = false;
  const myNode = document.querySelector('.myClass');
  const myButton = document.querySelector('#bulb');
  const toggleBackground = () => {
    const isDarkTheme = myNode.classList.contains('dark-bg');
    const removeDarkBackground = () => myNode.classList.remove('dark-bg');
    const addDarkBackground = () => myNode.classList.add('dark-bg');
    if (isDarkTheme) removeDarkBackground()
    else addDarkBackground();
    return true;
  };

  myButton.addEventListener('click', toggleBackground, false);


}