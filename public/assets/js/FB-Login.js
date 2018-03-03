
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=350512398783242&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function facebookLogin() {
  var FB = window.FB;
  var scopes = 'public_profile';

  FB.login(function (response) {
    if (response.status === 'connected') {
      console.log('The user has logged in!');
      FB.api('/me', function (response) {
        console.log('Good to see you, ' + response.name + '.');
      });
      FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    }
  }, {
    scope: scopes
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '1979273519013549',
    cookie: true,
    xfbml: true,
    version: 'v2.12'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
  console.log(response);
}



