const apiUrl = 'http://api.trantien.free.nf/ajax.php';
const password = '';
const currentUrl = new URL(window.location.href);
const id = currentUrl.searchParams.get("id");

fetch(`${apiUrl}?password=${password}&id=${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Có lỗi khi tải dữ liệu từ API');
    }
    return response.json();
  })
  .then(data => {
    const jsonObject = JSON.parse(data);
    console.log('Dữ liệu từ API:', data);
    const myParagraph = document.getElementById('noidung');
    myParagraph.innerText = jsonObject.noidung;
  })
  .catch(error => {
    console.error(error.message);
  });
