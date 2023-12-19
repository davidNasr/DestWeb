/*function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj_cust = document.getElementById("cust-num");
  const obj_rev = document.getElementById("rev-num");
  animateValue(obj_cust, 0, 20000, 3000);
  animateValue(obj_rev, 0, 2500, 3000);*/


