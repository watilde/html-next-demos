var final_transcript = '';
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.onresult = function(event) {
  var interim_transcript = '';
  if (typeof(event.results) == 'undefined') {
    recognition.onend = null;
    recognition.stop();
    upgrade();
    return;
  }
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }
  final_transcript = capitalize(final_transcript);
  final_span.innerHTML = linebreak(final_transcript);
  interim_span.innerHTML = linebreak(interim_transcript);
};

function capitalize(s) {
  return s.replace(/\S/, function(m) { return m.toUpperCase(); });
}

function linebreak(s) {
  return s.replace(/\n\n/g, '<p></p>').replace(/\n/g, '<br>');
}


document.getElementById('start').addEventListener('click', function () {
  final_transcript = '';
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  recognition.start();
})

document.getElementById('stop').addEventListener('click', function () {
  recognition.stop();
})
