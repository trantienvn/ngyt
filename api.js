const apiUrl = 'https://api.trantien.free.nf/ajax.php';
const currentUrl = new URL(window.location.href);
const id = currentUrl.searchParams.get("id");

function loadContent(password, successCallback, errorCallback) {
  $.ajax({
    url: apiUrl,
    type: 'GET',
    data: {
      password: password,
      id: id
    },
    success: function(data) {
      console.log('Data from API:', data);
      const jsonObject = JSON.parse(data);
      if (successCallback) {
        successCallback(jsonObject);
      }
    },
    error: function(error) {
      console.error('Error loading data from API:', error);
      if (errorCallback) {
        errorCallback(error);
      }
    }
  });
}
