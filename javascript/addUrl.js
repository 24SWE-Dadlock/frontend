const addButton = document.getElementById('addButton');
const urlInput = document.getElementById('urlInput');

const urlList = []; // 입력된 모든 URL을 저장하는 배열

addButton.addEventListener('click', () => {
  const url = urlInput.value;
  const timeLimit = 50; // 분 단위

  // 현재 입력된 URL을 배열에 추가
  urlList.push(url);

  console.log('입력된 URL:', url);
  alert(`입력된 URL: ${url}\n지금까지 입력된 URL 목록:\n${urlList.join('\n')}`);
  
  const requestData = {
    URL: url,
    timeLimit: timeLimit
  };

  fetch('/blocked-urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYWFAZ21haWwuY29tIiwiZXhwIjoxNzA5NTQwMDg0fQ.j4XBajYySaMkYY9l32Q-6cYyUUtNQY2-uvsTfVyRACk'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    if (response.ok) {
      console.log('URL 차단 요청이 성공적으로 전송되었습니다.');
      urlInput.value = ''; // 입력 필드 초기화
    } else {
      console.error('URL 차단 요청 전송 중 오류가 발생했습니다.');
    }
  })
  .catch(error => {
    console.error('네트워크 오류:', error);
  });
});

