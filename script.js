$(document).ready(function () {
	var last_commit_title = document.querySelector('relative-time').title;
	var last_commit_datetime = document.querySelector('relative-time').getAttribute('datetime');
	var date = moment(last_commit_datetime);
	var now = moment();
	var diff_date = date.diff(now, 'months');

	var insertElement = document.createElement('p');
	insertElement.setAttribute('class', 'container');
	insertElement.style.cssText = 'background-color: #fafafa;' +
                                'margin-top: 15px;' +
                                'font-size: 15px;' +
                                'font-weight: bold;' +
                                'margin-bottom: 15px;';

	if (diff_date <= -12) {
		insertElement.style.cssText += 'color: #FF2D2D';
	} else if (diff_date <= -6) {
		insertElement.style.cssText += 'color: #FDDC2B';
	} else {
		insertElement.style.cssText += 'color: #888';
	}

	insertElement.innerHTML = 'Latest commit：' + last_commit_title;
	$('.container.repohead-details-container').after(insertElement);
});
