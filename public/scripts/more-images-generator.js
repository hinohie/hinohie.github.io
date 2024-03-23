const IdLists = [
    "13G4l_TenpJI6OLcJjtkzx-dsabcALQFh",
    "14ZmbfFtqJPty8cwDoIBRxmT8tC0aVtXU",
    "1zq60kg0UhTXuYpytULj0AmhCIFVVoXP4",
    "1ChU8iPaH6yVbTrSAEIHBoh1mhv4l0BEz",
    "1VTRhqp7B6oOSMcx56sdjUGRBqi9RUJ4U",
    "1ZzT2aCbhOlbxFQZnJYOVq3odn22d9JUL",
    "1d2Mku8yDsUr0z12NyX_lXZj2Y8PW2ypO",
    "1yYYCYADQGp8OYAt0xEElNaty0GQMWUZ0",
];

const MoreIdLists = [
  "1-5vzvZn7HwW2ABb_heidxuTVIn15LSgi",
  "1-hIm0CiLifnhgdMny9EL3REAF3Mm5x5E",
  "1-jZd-vaKesEKE2F0PE20RVzIC5KuqsLM",
  "1-wqcFNL6ZybJRqUnGX3gABtVIAAuklJn",
  "10abf5if7ZUkol2PM1Es4s4P_tybRLgqV",
  "12VQnOqVjRnwVywpNGBG0O6V2fmPaofuz",
  "12umXI754c7jTkB8Es2JZ1tgeJiO6tSaD",
  "13xMt8O44_V5g_XgXqkB0TNmBmoCULVHM",
  "14Mm8D5cdf0NMnYKfF7JzxeNpjnZlobR4",
  "14TUDpOdjq81E5XkoGPkOFYWvHjM_N0WW",
  "15AJo04db5H6dWq2U1l9ZQySvBjYhjs0s",
  "15NucuWfWYGyoIAVblHODv2goO5vyVGXM",
  "15uVNUFRaZUJ_70GW5IpacMYX3LMim9UI",
  "16p7vo-DuGJXxViGVkGcHIpcaMa6mm_VJ",
  "192L9xEb5tWbvJj5CBd7J-yrJkYSohIlT",
  "1AIMVUi-V6oYHkBZcdvHf0UqvFeprwHTO",
  "1BuzcQSor4PjBmQb9oUVro-AlFMMqmx_z",
  /* /// Block this line, for test. Reopen if we prepare complete!
  "1DGEeqKs6MECrt-qVdHs9-j0p8bafLAoP",
  "1DgMA9Az8eY6xT5flU8kYe-uzsCmMfcVj",
  "1DhkoFfiUjLijAYgFeO8jfx8eKnR1grgk",
  "1EdldpkKqeqXquxkMUbA3vALK9T5E_bcA",
  "1FVesNfZNfDT19qSOqZMoumP1DuxREIUC",
  "1FpeGRAYVZ4iloNVC7stS1aTyjR3IGBR-",
  "1GFnwBhR2J6q0ojM6k5RVVOxZWVrMOPyl",
  "1H1hgTUD5FVkrDP_ke3tv58t2tevKiIsw",
  "1HUHky5byD87cup1GPOpwt0FZpo2dbTYk",
  "1IdSOxxR8fflTBJdw9kCy4DjD1z7hxnKO",
  "1JfL8VqQ8K1C8B6h0fQqpkyZgMopZoEbJ",
  "1JsO2ZFu3FKOAOLLBqvcsEh-uA7jl3ujr",
  "1KA5Dh0az170FgC-UTggFk2AmdNbDWHyB",
  "1KBEBDdlAMTJObXzo4zRw5eecsVXNcnXP",
  "1Km6e4qyS9AYw5Nm5PzDzpnRDeVqzcG5E",
  "1LTdKOrMcvrY3lmuoc7H45DVFj4I-nsTD",
  "1Mn9pLrddcdj4lYWbTEuLh3sKCouHGmz5",
  "1NVM2JE7jpY7pSOQV7-RqFJcAED0vpklu",
  "1PUc2P1pjq0xa4u0IALakBiBLA-NxjqKr",
  "1Qm8hlQGq4ieS-z2zURxWiaIuAjUi2s47",
  "1RjCJT9bfSnn7y0f6PGdMN5-xmvqe2JiD",
  "1SS4dgNLEb3xG0zX-_a3AK8Gitu7FEDGV",
  "1VDJwXJfPiNydsQPT3ZSpDW-TsCxcCxxN",
  "1W21EtV1X434e3gzZTxprTqNToNdgsiN0",
  "1WG4t48QPFI1uf3UEph_hbX4rHNB3fGQs",
  "1Z4s8qQY3edCic5EvbXMMp3ZKwU_WoF-b",
  "1ZANiK0rpB_1bLfmH8fl7E6Vr87H_lkqq",
  "1_LBMurY5DVHWPYxBUAA9g2W3-CYrYbRs",
  "1aahR0hE6MD-AKmUV7exWWH_hIjEHMRX2",
  "1axstVsDEFdLAoPkgEvjQVwu23kuG3PjV",
  "1bYWImltCBtcakXmq4yq1Z2M6LlXJ3OAV",
  "1bsv7hvae2ZHAQ09-Ospyxt0lBCipjYlC",
  "1dhQpbtUwRBhEuPR1x4KSixqTDnGSipPw",
  "1e3H2EyF-UGnawy3SYhj8ht-3-j00VvH4",
  "1gGIQ4vtAjBpp76Pf99ojjKLyCICQUH0v",
  "1gxU_ngTZdssnrWD19HUIqLTBy0OW3NPA",
  "1iH5HAGKpm8-p-aWaPTz1T_2Yb1j596GN",
  "1ijHA4jdHr9FznKIq2JFzNCamfhknv-5G",
  "1iuv6RvvptYHFwnoZxw-GtYJcw7xuh_Wj",
  "1jL-n5yiGYaWC2PoqY0YtS8iLElOfd4G2",
  "1kX4VOlBGS_lCPBBOpMkmZtNbkW1oyuC2",
  "1k_469SvKLOCCvwR5TUJ7Hh2Ws81s4QvV",
  "1koL76YYp-PwpCUZFCetRwR4QptYGJ_Iq",
  "1mYj4tzVPi5mICQjelNGUB2Q2W4ngpZA7",
  "1mxbcIi4PqoTT-49j-KaeUUfbQKR1jHg0",
  "1nko3OPkJaYczZj5j9PxOpY0BjP6E6TnP",
  "1qSMiYufFUAnoSIxLFGjaCIrPBzDbWkZe",
  "1rCD3DOVCFnp8E1gGntslBuf3B9ACSZ9H",
  "1sJj-ClKOMMXA7f4_T6oigXIAf_7Qc3x6",
  "1tna53Ah57ZdjbdA_5LRjAPMM1SvwsJlo",
  "1v65EOFNIDmwkkgj7S5HpK4cpcu57azlL",
  "1vctUnPdNftKY9pWgh2jFR_BrxaxlITNs",
  "1vgRSTA8L6YH9h-x2Yxv6V4FSq5bn-qOb",
  "1x-ayvnMBme-tsGSaVwsRuQfyeP1iS2L2",
  "1xPjNT0g_qvPlbWAYYvTJj50-NWuyvwoI",
  "1xsyDUIQwx3aoXaS35mF31QZFCznAcVGb",
  "1zkUFKXeikS1qP5vPz9FUsyWcH8IN1037",
  */
];

function generateMoreImages() {
  const $targets = document.getElementsByClassName("MoreImages");
  if(typeof $targets == "undefined" || $targets.length == 0)
  {
    return;
  }

  const $target = $targets[0];

  let text = "";
  text += `<div class="moreImageContainer">`;
  for(let i = 0; i < MoreIdLists.length; ++i)
  {
    text += `<img src="https://drive.google.com/thumbnail?sz=w300&id=${MoreIdLists[i]}" alt="gallery-image-more-${i+1}" loading="lazy" width="300" onerror="this.src='../resources/image/favicon.ico';" onclick="ModalOpen(this);"/>`;
  }
  text += "</div>";
  // console.log(text);
  $target.innerHTML = text;
}

generateMoreImages();

function generateGallerySwiperImages() {
  const $targets = document.getElementsByClassName("mySwiper");
  if(typeof $targets == "undefined" || $targets.length == 0)
  {
    return;
  }

  const $target = $targets[0];

  let text = "";
  text += `<div class="swiper-wrapper">`;
  for(let i = 0; i < IdLists.length; ++i)
  {
    text += `<div class="swiper-slide"><img src="https://drive.google.com/thumbnail?sz=w300&id=${IdLists[i]}" alt="gallery-image-${i+1}" loading="lazy" width="300" onerror="this.src='resources/image/favicon.ico';" onclick="ModalOpen(this);"/></div>`;
  }
  text += `<div class="swiper-slide"><div style="display:grid;vertical-align:middle;background-color:#FBFBFB;aspect-ratio:1/1;align-items:center;margin:auto;max-width:50%;"><button id="galleryMoreButton" onclick="GalleryMoreClicked()" style="aspect-ratio:1/1;">더 보기<br/>(예상 데이터 사용량 : 약 120MB)</button></div></div>`;
  text += "</div>";
  
  text += `<div class="swiper-button-next"></div>`;
  text += `<div class="swiper-button-prev"></div>`;
  text += `<div class="swiper-pagination"></div>`;
  
  // console.log(text);
  $target.innerHTML = text;
}

generateGallerySwiperImages();