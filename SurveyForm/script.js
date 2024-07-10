
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel !== "string" || rel.length === 0 || rel.toLowerCase() === "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') === -1 ? '?' : '&') + '_cacheOverride=' + (new Date().valueOf());
					}
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload')
					window.location.reload();
				else if (msg.data == 'refreshcss')
					refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	} else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}

       document.querySelectorAll('input, select').forEach(function(element) {
            element.addEventListener('input', function() {
                var star = this.nextElementSibling;
                if (this.value.trim() !== '') {
                    star.classList.add('hide');
                } else {
                    star.classList.remove('hide');
                }
            });
        });




        document.addEventListener('DOMContentLoaded', function() {
            const inputElement = document.getElementById('workedYearInput');
            const incrementBtn = document.querySelector('.increment-btn');
            const decrementBtn = document.querySelector('.decrement-btn');
        
            incrementBtn.addEventListener('click', function() {
                inputElement.stepUp();
            });
        
            decrementBtn.addEventListener('click', function() {
                inputElement.stepDown();
            });
        });
        