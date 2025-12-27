
  const examsData = [
    {
      title: "1회 모의고사",
      description: "1회 모의고사입니다.",
      url: "https://colab.research.google.com/drive/14-EGsAkxohcqj3LgJypDI23iUKuVIOdj?authuser=0",
      width: 200,
      height: 200
    },
    {
      title: "2회 모의고사",
      description: "2회 모의고사입니다.",
      url: "https://colab.research.google.com/drive/1RrtseWGu1s-noaCXN05XT81b-pw-89zV?authuser=0",
      width: 200,
      height: 200
    },
    {
      title: "3회 모의고사",
      description: "3회 모의고사입니다.",
      url: "https://colab.research.google.com/drive/1geC-luKKEh4JfF32ZJpvPdsqau_CjNLQ?authuser=0",
      width: 200,
      height: 200
    },
    {
      title: "4회 모의고사",
      description: "4회 모의고사입니다.",
      url: "https://colab.research.google.com/drive/1jpLCv8z0HzTtJuSd3jHRF28G4L6irw8L?authuser=0",
      width: 200,
      height: 200
    },
    {
      title: "5회 모의고사",
      description: "5회 모의고사입니다.",
      url: "https://colab.research.google.com/drive/19pKhMnXm9psoxlmvbsI6D3VIgxylfWmi?authuser=0",
      width: 200,
      height: 200
    }
  ];

  // QR 코드 생성 함수
  function generateQRCode(element, params) {
    new QRCode(element, {
      text: params.url,
      width: params.width,
      height: params.height,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // 카드 + QR 코드 렌더링
  function renderExams() {
    const container = document.getElementById("exams");
    container.innerHTML = "";

    examsData.forEach((exam) => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card shadow-sm">
          <div class="qrcodes p-5"></div>
          <div class="card-body">
            <p class="card-text">${exam.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="window.open('${exam.url}', '_blank')"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);

      // ✅ 카드가 DOM에 추가된 직후 QR 코드 생성
      const qrDiv = card.querySelector(".qrcodes");
      generateQRCode(qrDiv, exam);
    });
  }

  document.addEventListener("DOMContentLoaded", renderExams);




  // 
  //   // ipify (JSON)
  // fetch('https://api.ipify.org?format=json')
  //   .then(res => res.json())
  //   .then(data => console.log('Public IP:', data.ip));

  // // ifconfig.co (JSON)
  // fetch('https://ifconfig.co/json')
  //   .then(res => res.json())
  //   .then(data => console.log('Public IP:', data.ip));

  // // Cloudflare trace (텍스트)
  // fetch('https://www.cloudflare.com/cdn-cgi/trace')
  //   .then(res => res.text())
  //   .then(text => {
  //     const ip = (text.match(/ip=(.+)/) || [])[1];
  //     console.log('Public IP:', ip);
  //   });