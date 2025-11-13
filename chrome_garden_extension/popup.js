(() => {
	window.onload = () => {
		document.getElementById("sonic_on").onclick = () => {
			chrome.storage.sync.set({"sonic" : true}, () => {});
		};
		document.getElementById("sonic_off").onclick = () => {
			chrome.storage.sync.set({"sonic" : false}, () => {});
		}
		document.getElementById("bk_green").onclick = () => {
			chrome.storage.sync.set({"bkc" : 251}, () => {});
		}
		document.getElementById("bk_darkgreen").onclick = () => {
			chrome.storage.sync.set({"bkc" : 230}, () => {});
		}
		document.getElementById("bk_blue").onclick = () => {
			chrome.storage.sync.set({"bkc" : 258}, () => {});
		}
		document.getElementById("bk_blue").onclick = () => {
			chrome.storage.sync.set({"bkc" : 53}, () => {});
		}
		document.getElementById("bk_grey").onclick = () => {
			chrome.storage.sync.set({"bkc" : 222}, () => {});
		}
		document.getElementById("bk_other").onclick = () => {
			chrome.storage.sync.set({"bkc" : document.getElementById("bk_other_color").value}, () => {});
		}
		document.getElementById("scale").onchange = () => {
			chrome.storage.sync.set({"scale" : document.getElementById("scale").value}, () => {});
			document.getElementById("scale_display").innerText = "(" + document.getElementById("scale").value + ")";
		}
	}
})();
