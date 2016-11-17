import $ from 'jquery';


var API = "http://json-data.herokuapp.com/forms"
function requestData () {
     return $.ajax({
    url: `${API}`

  });
};

//using the for loop
// function extractData(data) {
//   for (var i = 0; i<data.length; i++){
//     var form= data(i);
//     console.log(form);
//   }
// }

// using higher order functions
function extractData(data) {
  data.map(function(separate) {
    // console.log(separate);
    if (separate.type==="text"){
          var firstHTML=  `

                  <div class="outerbox">
                    <p class="fa ${separate.icon} aria-hidden="true">
                      <input type="${separate.type}" placeholder="${separate.label}">
                    </p>
                  </div>

                   `;
                   $(".form").append(firstHTML);
    } else if (separate.type ==="email") {
        var emailHTML= `
                  <div class="outerbox">
                    <p class="fa ${separate.icon} aria-hidden="true">
                      <input type="${separate.type}" placeholder="${separate.label}">
                    </p>
                  </div>
                  `;
                  $(".form").append(emailHTML);
    } else if (separate.type ==="select") {
        var languageHTML= `
                  <div class="outerbox">
                    <select id="select">
                      <option>${separate.label}...</option>
                      <option>${separate.options[0].label}</option>
                      <option>${separate.options[1].label}</option>
                      <option>${separate.options[2].label}</option>
                      <option>${separate.options[3].label}</option>
                      <option>${separate.options[4].label}</option>
                    </select>
                  </div>
                  `;
                  console.log(separate.options);
                  console.log(separate.options[0]);
                    console.log(separate.options[0].label);
                    console.log(separate.options[1].label);
                  $(".form").append(languageHTML);
    } else if (separate.type ==="textarea") {
        var commentHTML= `
                  <div class="outerbox">
                    <p class="fa ${separate.icon} aria-hidden="true">
                      <textarea type="${separate.type}"  cols="75" rows="5" placeholder="${separate.label}"></textarea>
                    </p>
                  </div>
                  `;
                  $(".form").append(commentHTML);
    } else if (separate.type ==="tel") {
        var telHTML= `
                  <div class="outerbox">
                    <p class="fa ${separate.icon} aria-hidden="true">
                      <input type="${separate.type}" placeholder="${separate.label}">
                    </p>
                  </div>
                  `;
                  $(".form").append(telHTML);
    };
    // var icon = separate.icon;
    // console.log(separate.icon);
  })

};

//the promise is going to be pulled from the main.js file .. so its being omited here
// requestData().then(extractData);

export { requestData, extractData};
