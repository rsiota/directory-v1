import { skaler } from '../libs/skaler.js';
import { state } from '../state.js';

function avatar() {

	const picker = document.getElementById('picture-file');

	picker.addEventListener('change', async () => {
		if (state.record == "new") {
			var id = state.lastId + 1;
		} else {
			var id = state.user['id'];
		}
		let file = picker.files[0];
		var fd = new FormData();

		fd.append('file', await skaler(file, { width: 115 }));
		fd.append('id', id);

		upload(fd);
	});

	function upload(fd) {

		$.ajax({
			url: './libs/php/uploadImage.php',
			type: 'post',
			data: fd,
			contentType: false,
			async: false,
			processData: false,
			success: function(response) {
				if (response != 0) {
					var path = 'libs/images/faces/' + response;
					$("#picture").attr("src", path);
					$("#picture").show();
				} else {
					alert('File not uploaded');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});
	}
}

export { avatar };