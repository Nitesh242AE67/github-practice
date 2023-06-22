const btn=document.querySelector('.btn');

btn.addEventListener('click', () => {
    dotheneedful(3000, '.first', 'red')
      .then(() => {
        // Callback function executed when the promise is resolved
        console.log("Promise resolved successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  
  
  function dotheneedful(time, givenclass, color) {
    const element = document.querySelector(givenclass);
    return new Promise((resolve, reject) => {
      if (!element) {
        reject(`There is no such element here: "${givenclass}"`);
      } else {
        setTimeout(() => {
          element.style.color = color;
          resolve();
        }, time);
      }
    });
  }
  