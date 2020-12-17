// Import stylesheets
import "./style.css";
// Write Javascript code!
const appDiv = document.getElementById("app");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.getElementById("date").innerHTML = today;

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;

var jsonfile1;
var Myfun1 = function() {
  var xhttp1;
  xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this);
    }
  };
  xhttp1.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/wl_program.json",
    true
  );
  xhttp1.send();
};
Myfun1();
setInterval(Myfun1(), 10000);
function myFunction1(xhttp1) {
  document.getElementById("wl_program").innerHTML = JSON.parse(
    xhttp1.responseText
  );
}

var jsonfile2;
var Myfun2 = function() {
  var xhttp2;
  xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xhttp2.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/wl_test.json",
    true
  );
  xhttp2.send();
};
Myfun2();
setInterval(Myfun2(), 10000);
function myFunction2(xhttp2) {
  document.getElementById("wl_test").innerHTML = JSON.parse(
    xhttp2.responseText
  );
}

var jsonfile3;
var Myfun3 = function() {
  var xhttp3;
  xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction3(this);
    }
  };
  xhttp3.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/wlc_confirmed.json",
    true
  );
  xhttp3.send();
};
Myfun3();
setInterval(Myfun3(), 10000);
function myFunction3(xhttp3) {
  document.getElementById("wlc_confirm").innerHTML = JSON.parse(
    xhttp3.responseText
  );
}

var jsonfile4;
var Myfun4 = function() {
  var xhttp4;
  xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction4(this);
    }
  };
  xhttp4.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/vl_started.json",
    true
  );
  xhttp4.send();
};
Myfun4();
setInterval(Myfun4(), 10000);
function myFunction4(xhttp4) {
  document.getElementById("vl_started").innerHTML = JSON.parse(
    xhttp4.responseText
  );
}

var jsonfile5;
var Myfun5 = function() {
  var xhttp5;
  xhttp5 = new XMLHttpRequest();
  xhttp5.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction5(this);
    }
  };
  xhttp5.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/vl_packed.json",
    true
  );
  xhttp5.send();
};
Myfun5();
setInterval(Myfun5(), 10000);
function myFunction5(xhttp5) {
  document.getElementById("vl_packed").innerHTML = JSON.parse(
    xhttp5.responseText
  );
}

var jsonfile6;
var Myfun6 = function() {
  var xhttp6;
  xhttp6 = new XMLHttpRequest();
  xhttp6.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction6(this);
    }
  };
  xhttp6.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/eg_started.json",
    true
  );
  xhttp6.send();
};
Myfun6();
setInterval(Myfun6(), 10000);
function myFunction6(xhttp6) {
  document.getElementById("eg_started").innerHTML = JSON.parse(
    xhttp6.responseText
  );
}

var jsonfile7;
var Myfun7 = function() {
  var xhttp7;
  xhttp7 = new XMLHttpRequest();
  xhttp7.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction7(this);
    }
  };
  xhttp7.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/eg_packed.json",
    true
  );
  xhttp7.send();
};
Myfun7();
setInterval(Myfun7(), 10000);
function myFunction7(xhttp7) {
  document.getElementById("eg_packed").innerHTML = JSON.parse(
    xhttp7.responseText
  );
}

var jsonfile8;
var Myfun8 = function() {
  var xhttp8;
  xhttp8 = new XMLHttpRequest();
  xhttp8.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction8(this);
    }
  };
  xhttp8.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/rp1_started.json",
    true
  );
  xhttp8.send();
};
Myfun8();
setInterval(Myfun8(), 10000);
function myFunction8(xhttp8) {
  document.getElementById("rp1_started").innerHTML = JSON.parse(
    xhttp8.responseText
  );
}

var jsonfile9;
var Myfun9 = function() {
  var xhttp9;
  xhttp9 = new XMLHttpRequest();
  xhttp9.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction9(this);
    }
  };
  xhttp9.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/rp1_packed.json",
    true
  );
  xhttp9.send();
};
Myfun9();
setInterval(Myfun9(), 10000);
function myFunction9(xhttp9) {
  document.getElementById("rp1_packed").innerHTML = JSON.parse(
    xhttp9.responseText
  );
}

var jsonfile10;
var Myfun10 = function() {
  var xhttp10;
  xhttp10 = new XMLHttpRequest();
  xhttp10.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction10(this);
    }
  };
  xhttp10.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/va_started.json",
    true
  );
  xhttp10.send();
};
Myfun10();
setInterval(Myfun10(), 10000);
function myFunction10(xhttp10) {
  document.getElementById("va_started").innerHTML = JSON.parse(
    xhttp10.responseText
  );
}

var jsonfile11;
var Myfun11 = function() {
  var xhttp11;
  xhttp11 = new XMLHttpRequest();
  xhttp11.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction11(this);
    }
  };
  xhttp11.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/daily/0/va_packed.json",
    true
  );
  xhttp11.send();
};
Myfun11();
setInterval(Myfun11(), 10000);
function myFunction11(xhttp11) {
  document.getElementById("va_packed").innerHTML = JSON.parse(
    xhttp11.responseText
  );
}

var jsonfile16;
var Myfun16 = function() {
  var xhttp16;
  xhttp16 = new XMLHttpRequest();
  xhttp16.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction16(this);
    }
  };
  xhttp16.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test1_averagetestingTime.json",
    true
  );
  xhttp16.send();
};
Myfun16();
setInterval(Myfun16(), 10000);
function myFunction16(xhttp16) {
  document.getElementById("test1_averagetestingTime").innerHTML = JSON.parse(
    xhttp16.responseText
  );
}

var jsonfile17;
var Myfun17 = function() {
  var xhttp17;
  xhttp17 = new XMLHttpRequest();
  xhttp17.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction17(this);
    }
  };
  xhttp17.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test1_averageidleTime.json",
    true
  );
  xhttp17.send();
};
Myfun17();
setInterval(Myfun17(), 10000);
function myFunction17(xhttp17) {
  document.getElementById("test1_averageidleTime").innerHTML = JSON.parse(
    xhttp17.responseText
  );
}

var jsonfile18;
var Myfun18 = function() {
  var xhttp18;
  xhttp18 = new XMLHttpRequest();
  xhttp18.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction18(this);
    }
  };
  xhttp18.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test2_averagetestingTime.json",
    true
  );
  xhttp18.send();
};
Myfun18();
setInterval(Myfun18(), 10000);
function myFunction18(xhttp18) {
  document.getElementById("test2_averagetestingTime").innerHTML = JSON.parse(
    xhttp18.responseText
  );
}

var jsonfile19;
var Myfun19 = function() {
  var xhttp19;
  xhttp19 = new XMLHttpRequest();
  xhttp19.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction19(this);
    }
  };
  xhttp19.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test2_averageidleTime.json",
    true
  );
  xhttp19.send();
};
Myfun19();
setInterval(Myfun19(), 10000);
function myFunction19(xhttp19) {
  document.getElementById("test2_averageidleTime").innerHTML = JSON.parse(
    xhttp19.responseText
  );
}

var jsonfile20;
var Myfun20 = function() {
  var xhttp20;
  xhttp20 = new XMLHttpRequest();
  xhttp20.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction20(this);
    }
  };
  xhttp20.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test1_count.json",
    true
  );
  xhttp20.send();
};
Myfun20();
setInterval(Myfun20(), 10000);
function myFunction20(xhttp20) {
  document.getElementById("test1_count").innerHTML = JSON.parse(
    xhttp20.responseText
  );
}

var jsonfile21;
var Myfun21 = function() {
  var xhttp21;
  xhttp21 = new XMLHttpRequest();
  xhttp21.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction21(this);
    }
  };
  xhttp21.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/testing/0/test2_count.json",
    true
  );
  xhttp21.send();
};
Myfun21();
setInterval(Myfun21(), 10000);
function myFunction21(xhttp21) {
  document.getElementById("test2_count").innerHTML = JSON.parse(
    xhttp21.responseText
  );
}

var jsonfile22;
var Myfun22 = function() {
  var xhttp22;
  xhttp22 = new XMLHttpRequest();
  xhttp22.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction22(this);
    }
  };
  xhttp22.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/wl_program_monthly.json",
    true
  );
  xhttp22.send();
};
Myfun22();
setInterval(Myfun22(), 10000);
function myFunction22(xhttp22) {
  document.getElementById("wl_program_monthly").innerHTML = JSON.parse(
    xhttp22.responseText
  );
}

var jsonfile23;
var Myfun23 = function() {
  var xhttp23;
  xhttp23 = new XMLHttpRequest();
  xhttp23.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction23(this);
    }
  };
  xhttp23.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/wl_test_monthly.json",
    true
  );
  xhttp23.send();
};
Myfun23();
setInterval(Myfun23(), 10000);
function myFunction23(xhttp23) {
  document.getElementById("wl_test_monthly").innerHTML = JSON.parse(
    xhttp23.responseText
  );
}

var jsonfile24;
var Myfun24 = function() {
  var xhttp24;
  xhttp24 = new XMLHttpRequest();
  xhttp24.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction24(this);
    }
  };
  xhttp24.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/wlc_confirmed_monthly.json",
    true
  );
  xhttp24.send();
};
Myfun24();
setInterval(Myfun24(), 10000);
function myFunction24(xhttp24) {
  document.getElementById("wlc_confirm_monthly").innerHTML = JSON.parse(
    xhttp24.responseText
  );
}

var jsonfile25;
var Myfun25 = function() {
  var xhttp25;
  xhttp25 = new XMLHttpRequest();
  xhttp25.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction25(this);
    }
  };
  xhttp25.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/vl_started_monthly.json",
    true
  );
  xhttp25.send();
};
Myfun25();
setInterval(Myfun25(), 10000);
function myFunction25(xhttp25) {
  document.getElementById("vl_started_monthly").innerHTML = JSON.parse(
    xhttp25.responseText
  );
}

var jsonfile26;
var Myfun26 = function() {
  var xhttp26;
  xhttp26 = new XMLHttpRequest();
  xhttp26.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction26(this);
    }
  };
  xhttp26.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/vl_packed_monthly.json",
    true
  );
  xhttp26.send();
};
Myfun26();
setInterval(Myfun26(), 10000);
function myFunction26(xhttp26) {
  document.getElementById("vl_packed_monthly").innerHTML = JSON.parse(
    xhttp26.responseText
  );
}

var jsonfile27;
var Myfun27 = function() {
  var xhttp27;
  xhttp27 = new XMLHttpRequest();
  xhttp27.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction27(this);
    }
  };
  xhttp27.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/eg_started_monthly.json",
    true
  );
  xhttp27.send();
};
Myfun27();
setInterval(Myfun27(), 10000);
function myFunction27(xhttp27) {
  document.getElementById("eg_started_monthly").innerHTML = JSON.parse(
    xhttp27.responseText
  );
}

var jsonfile28;
var Myfun28 = function() {
  var xhttp28;
  xhttp28 = new XMLHttpRequest();
  xhttp28.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction28(this);
    }
  };
  xhttp28.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/eg_packed_monthly.json",
    true
  );
  xhttp28.send();
};
Myfun28();
setInterval(Myfun28(), 10000);
function myFunction28(xhttp28) {
  document.getElementById("eg_packed_monthly").innerHTML = JSON.parse(
    xhttp28.responseText
  );
}

var jsonfile29;
var Myfun29 = function() {
  var xhttp29;
  xhttp29 = new XMLHttpRequest();
  xhttp29.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction29(this);
    }
  };
  xhttp29.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/rp1_started_monthly.json",
    true
  );
  xhttp29.send();
};
Myfun29();
setInterval(Myfun29(), 10000);
function myFunction29(xhttp29) {
  document.getElementById("rp1_started_monthly").innerHTML = JSON.parse(
    xhttp29.responseText
  );
}

var jsonfile30;
var Myfun30 = function() {
  var xhttp30;
  xhttp30 = new XMLHttpRequest();
  xhttp30.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction30(this);
    }
  };
  xhttp30.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/rp1_packed_monthly.json",
    true
  );
  xhttp30.send();
};
Myfun30();
setInterval(Myfun30(), 10000);
function myFunction30(xhttp30) {
  document.getElementById("rp1_packed_monthly").innerHTML = JSON.parse(
    xhttp30.responseText
  );
}

var jsonfile31;
var Myfun31 = function() {
  var xhttp31;
  xhttp31 = new XMLHttpRequest();
  xhttp31.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction31(this);
    }
  };
  xhttp31.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/va_started_monthly.json",
    true
  );
  xhttp31.send();
};
Myfun31();
setInterval(Myfun31(), 10000);
function myFunction31(xhttp31) {
  document.getElementById("va_started_monthly").innerHTML = JSON.parse(
    xhttp31.responseText
  );
}

var jsonfile32;
var Myfun32 = function() {
  var xhttp32;
  xhttp32 = new XMLHttpRequest();
  xhttp32.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction32(this);
    }
  };
  xhttp32.open(
    "GET",
    "https://siemensag-login.firebaseio.com/BGP_Metrics/monthly/0/va_packed_monthly.json",
    true
  );
  xhttp32.send();
};
Myfun32();
setInterval(Myfun32(), 10000);
function myFunction32(xhttp32) {
  document.getElementById("va_packed_monthly").innerHTML = JSON.parse(
    xhttp32.responseText
  );
}
