$(function() {
  var dlContainer = $('.dl-container');
  if (!dlContainer || !dlContainer.length) {
    return;
  }

  $.get('https://s3.amazonaws.com/neutral-releases/dapp/latest.json', function(data) {
    try {
      $('.app-dl-v').text('v' + data.version);
      $('.windows-dl').attr('href', data.windows);
      $('.mac-dl').attr('href', data.mac);
      $('.linux-dl').attr('href', data.linux);
    } catch(e) {
      console.log(e);
    }
  });
});
