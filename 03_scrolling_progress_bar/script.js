const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let per = `${Math.round((windowScroll / windowHeight) * 100)}`;
  progress.style.width = `${per}%`;
}
