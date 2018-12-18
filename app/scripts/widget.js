import $ from 'jquery';

function htmlFromLinkParam(links, fLeft) {
	let HTML = '';
	let fHasLinkBefor = false;

	links.forEach(link => {
		if (link.length === 1) {
			HTML += '<a class = "mywdgt_a ';
			if (fLeft === true) {
				HTML += 'mywdgt_left';
			} else {
				HTML += 'mywdgt_right';
			}
			if ((fHasLinkBefor === true) && (fLeft === true)) {
				HTML += ' border_left';
			}
			if ((fHasLinkBefor === true) && (fLeft === false)) {
				HTML += ' border_right';
			}
			HTML += '" href="' + link[0].split('|')[1] + '">&nbsp;' + link[0].split('|')[0] + '&nbsp;</a>';
			fHasLinkBefor = true;
		}
		if (link.length > 1) {
			link.forEach((dropDnLink, index) => {
				if (index === 0) {
					HTML += '<div class="mywdgt_bar_dropdown ';
					if (fLeft === true) {
						HTML += 'mywdgt_left">';
					} else {
						HTML += 'mywdgt_right">';
					}
					HTML += 	'<button class="mywdgt_bar_dropbtn">&nbsp;' +
									dropDnLink + '&nbsp;<i class="fa fa-caret-down"></i>' +
								'</button>' +
							'<div class="mywdgt_bar_dropdown_content">';
				}
				if (index > 0) {
					HTML += '<a class = "mywdgt_dropdown_a" href="' + dropDnLink.split('|')[1] + '">&nbsp;' + dropDnLink.split('|')[0] + '&nbsp;</a>';
				}
			});
			HTML += '</div></div>';
			fHasLinkBefor = false;
		}
	});

	return HTML;
}

$(() => {
	let mywdgtCenter = true;
	let mywdgtTheme = 'dark';
	let mywdgtLeftLinks = '{}';
	let mywdgtRightLinks = '{}';

	const mywdgtScripts = document.getElementsByTagName('script');
	const mywdgtScript = mywdgtScripts[0];
	let mywdgtAttr;

	mywdgtAttr = mywdgtScript.getAttribute('center');
	mywdgtCenter = (mywdgtAttr === 'true');
	mywdgtAttr = mywdgtScript.getAttribute('theme');
	mywdgtTheme = (mywdgtAttr === 'dark') ? 'dark' : 'light';
	mywdgtAttr = mywdgtScript.getAttribute('left');
	mywdgtLeftLinks = JSON.parse((mywdgtAttr !== undefined) ? mywdgtAttr : '{}');
	mywdgtAttr = mywdgtScript.getAttribute('right');
	mywdgtRightLinks = JSON.parse((mywdgtAttr !== undefined) ? mywdgtAttr : '{}');

	let mywdgtStartTags = '';
	let mywdgtEndTags = '';

	const mywdgtLeftLinksTags = htmlFromLinkParam(mywdgtLeftLinks, true);
	const mywdgtRightLinksTags = htmlFromLinkParam(mywdgtRightLinks, false);

	if (mywdgtCenter){
		mywdgtStartTags = '<div class="mywdgt_navbar">' + '<div class="mywdgt_center_block mywdgt_flex">';
		mywdgtEndTags	= '</div>' + '</div>';
	} else {
		mywdgtStartTags	= '<div class="mywdgt_navbar mywdgt_flex ">';
		mywdgtEndTags	= '</div>';
	}

	$('body').prepend(	mywdgtStartTags +
						'<div class="mywdgt_bar_left">' +
							mywdgtLeftLinksTags +
						'</div>' +
						'<div class="mywdgt_bar_right">' +
							mywdgtRightLinksTags +
						'</div>' +
						mywdgtEndTags);

	$('head').append('<link rel="stylesheet" type="text/css" href="http://vh152449.eurodir.ru/web-widget-source/assets/styles/widget.min.css">');
	$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');

	if (mywdgtTheme === 'dark') {
		$('head').append('<link rel="stylesheet" type="text/css" href="http://vh152449.eurodir.ru/web-widget-source/assets/styles/widget_dark.min.css">');
	} else {
		$('head').append('<link rel="stylesheet" type="text/css" href="http://vh152449.eurodir.ru/web-widget-source/assets/styles/widget_light.min.css">');
	}

});
