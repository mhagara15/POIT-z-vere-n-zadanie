function sendRequest() {
  var brightnessValue = document.getElementById("myRange").value;
  document.getElementById("logger").innerHTML = brightnessValue;
  if(brightnessValue.length > 0 && brightnessValue >= 0 && brightnessValue <= 255){
    
    $.ajax({
        url: 'https://fcm.googleapis.com/fcm/send',
        type: 'post',
        data: JSON.stringify({
            to: 'exxI1Du_vxY:APA91bEIlBBQaryON-Ao5tsO79D9zasuSFG21xvvwScl5X54aGAHnCdLSMkRl8lFV9_r14KDwUev7gQHIyrb1VqE9PN18NpYJE_znNYRRzBjGJ0AjBcnVZcrlhRbQ1egKJi7jFXIdAL_',
            priority: 'high',
            notification: {
                title: 'BrightnessNotification',
                body: 'BrightnessNotification',
                text: 'Brightness will be set to: '+brightnessValue
            },
            data: {
                brightness: brightnessValue
            }
        }),
        headers: {
            Authorization: 'key=AAAAGbnThXU:APA91bGdPQuR9SfTrb9kaY12YgKioTo6PxJ3LIT_kXzf8f8wOHmCM5ffP3Nl26hJJ5GyIjNyVOlKW99auFOVs_k8ZedaZjVsnT9KkOJPTz6nZUBTHfEMngLhgOFJ3ML8SQAvk9aAZlx0',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            document.getElementById("logger").innerHTML = 'SUCCESS';
            console.log(data)
            document.getElementById("console-view").innerHTML += "<span> Brightness was set to " + brightnessValue + "</span><br>";
        },
        error: function(jqXHR, textStatus, errorThrown) {
            document.getElementById("logger").innerHTML = 'ERROR';
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
    
  } else {
    document.getElementById("logger").innerHTML = "Value not in range 0-255"
  }
 var gauge = new RadialGauge({
          renderTo: 'canvasID',
          width: 400,
          height: 400,
          units: "Level of Brightness",
          minValue: 0,
          maxValue: 255,
          majorTicks: [
              "0",
              "15",
              "30",
              "45",
              "60",
              "75",
              "90",
              "105",
              "120",
              "135",
              "150",
              "165",
              "180",
              "195",
              "210",
              "225",
              "240",
              "255"
          ],
          minorTicks: 2,
          strokeTicks: true,
          highlights: [
              {
                  "from": 0,
                  "to": 255,
                  "color": "rgba(200, 50, 50, .75)"
              }
          ],
          colorPlate: "#fff",
          borderShadowWidth: 0,
          borders: false,
          needleType: "arrow",
          needleWidth: 2,
          needleCircleSize: 7,
          needleCircleOuter: true,
          needleCircleInner: false,
          animationDuration: 0,
          animationRule: "linear"
        }); 
		gauge.draw();
        gauge.value = brightnessValue;
}