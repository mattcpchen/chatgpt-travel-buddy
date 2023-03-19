export const fetchChat = (promptQuestion) => {
  const controller = new AbortController();

  return new Promise((resolve, reject) => {
    fetch('/chat', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ prompt: promptQuestion }),
      signal: controller.signal
    }).then(res => res.json())
      .then(data => resolve(data))
      .catch(error => {
        if (error.name === 'AbortError') {
          reject('AbortError');
        } else {
          reject(error.message)
        }
      });
  });
}