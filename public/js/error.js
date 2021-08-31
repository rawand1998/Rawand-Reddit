if (document.cookie) {
    const message = document.cookie.split('=')[1].replace(/%20/g, ' ');
    const error = document.querySelector('#error');
    error.textContent = message;
    document.cookie = 'error=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }