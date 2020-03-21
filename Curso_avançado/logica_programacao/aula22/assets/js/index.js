function relogio() {
  function getTimeFromSecunds(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC"
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let secunds = 0;
  let timer;

  function startTime() {
    timer = setInterval(() => {
      secunds++;
      relogio.innerHTML = getTimeFromSecunds(secunds);
    }, 1000);
  }

  document.addEventListener("click", function(event) {
    const el = event.target;
    if (el.classList.contains("iniciar")) {
      start();
    }
    if (el.classList.contains("pausar")) {
      pause();
    }

    if (el.classList.contains("zerar")) {
      clear();
    }
  });

  function start() {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startTime();
  }

  function pause() {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }

  function clear() {
    secunds = 0;
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
  }
}

relogio();
