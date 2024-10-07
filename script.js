const contactBtn = document.getElementById("contact");

document.addEventListener("mousemove", (e) => {
  const rect = contactBtn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  contactBtn.style.setProperty("--x", `${x}px`);
  contactBtn.style.setProperty("--y", `${y}px`);
});

const shakeAnimation = () => {
    setInterval(() => {
        contactBtn.style.animation = 'shake .8s ease forwards';
        setTimeout(() => contactBtn.style.animation = '', 800)
    }, 4000);
};

shakeAnimation();

window.addEventListener('scroll', () => {
  const header = document.getElementById('header')

  window.scrollY > 110 ? header.setAttribute('fixed', '') : header.removeAttribute('fixed')
})

const options = document.querySelectorAll('.option')

const changeContent = (name) => {
  options.forEach(option => {
      option.classList.remove('selected')

      document.querySelector(`.option[onclick="changeContent('${name}')"]`).classList.add('selected')
      
      const contentTitle = document.getElementById('contentTitle')
      const contentText = document.getElementById('contentText')

      if (name === 'Desain') {
        contentTitle.textContent = name
        contentText.textContent = 'Proses perencanaan, pembuatan, dan penyusunan elemen-elemen untuk menciptakan sesuatu yang fungsional, estetis, dan komunikatif. Desain dapat berupa rencana atau gambar yang dibuat untuk menunjukkan penampilan dan fungsi suatu benda, pakaian, atau bangunan.'
      } else if (name === 'Komunikasi') {
        contentTitle.textContent = name
        contentText.textContent = 'proses pengiriman dan penerimaan pesan atau berita antara dua orang atau lebih sehingga pesan tersebut dapat dipahami. Komunikasi merupakan aktivitas dasar yang paling banyak dilakukan oleh manusia sebagai makhluk sosial.'
      } else if (name === 'Visual') {
        contentTitle.textContent = name
        contentText.textContent = 'Visual adalah elemen yang dapat dilihat, seperti gambar, warna, bentuk, dan pola, yang menyampaikan pesan atau informasi. Dalam komunikasi dan desain, visual berperan penting untuk menarik perhatian, memperjelas makna, dan menciptakan pengalaman estetis.'
      }
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute('href'))
    console.log(target)
    
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
})