const apiUrl = 'http://api.trantien.free.nf/ajax.php';
const currentUrl = new URL(window.location.href);
const id = currentUrl.searchParams.get("id");

function loadContent(password){
$.ajax({
  url: apiUrl,
  type: 'GET',
  data: {
    password: password,
    id: id
  },
  success: function(data) {
    console.log('Dữ liệu từ API:', data);
    const jsonObject = JSON.parse(data);
    console.log('Dữ liệu từ API:', data);
   return data;
  },
  error: function(error) {
    console.error('Đã có lỗi khi tải dữ liệu từ API:', error);
  }
});
};