function blinkDots(elementId, duration) {
    const element = document.getElementById(elementId);
    let dotCount = 0;
    const intervalId = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      const baseText = element.textContent.replace(/\.*$/, "");
      element.textContent = `${baseText}${".".repeat(dotCount)}`;
    }, 100);

    
    setTimeout(() => {
      clearInterval(intervalId);
      const baseText = element.textContent.replace(/\.*$/, "");
      element.textContent = `${baseText}.`;
    }, duration - 100);
  }


  let txt1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const elementId = "txt1js";
      document.getElementById(elementId).textContent = "Initializing Hacking";
      blinkDots(elementId, 3000);
      resolve();
    }, 1000);
  });

  let txt2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const elementId = "txt2js";
      document.getElementById(elementId).textContent = "Reading your Files";
      blinkDots(elementId, 3000);
      resolve();
    }, 5000);
  });

  let txt3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const elementId = "txt3js";
      document.getElementById(elementId).textContent = "Password files Detected";
      blinkDots(elementId, 2800);
      resolve();
    }, 8000);
  });

  let txt4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const elementId = "txt4js";
      document.getElementById(elementId).textContent =
        "Sending all passwords and personal files to server";
      blinkDots(elementId, 3200);
      resolve();
    }, 11000);
  });

  let txt5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const elementId = "txt5js";
      document.getElementById(elementId).textContent = "Cleaning up";
      blinkDots(elementId, 4000);
      resolve();
    }, 14200);
  });
