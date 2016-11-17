import $ from 'jquery';

import { requestData, extractData} from "./datainfo";


requestData().then(extractData);


// $(".formInput").append(separatedData);
// $(".formInput").append(firstHTML);
