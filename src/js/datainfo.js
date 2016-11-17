import $ from 'jquery';

var API = "http://json-data.herokuapp.com/forms`"
function requestData () {
    $.ajax({
    url: `${API}`
  });
};

function extractData(data) {
  console.log(data);

}
;


export { requestData, extractData };
