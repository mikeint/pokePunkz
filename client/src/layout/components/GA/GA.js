import TagManager from 'react-gtm-module';
const dev = process.env.REACT_APP_ENV === 'DEV';
const tagManagerArgs = {
	gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER,
	...(process.env.REACT_APP_GOOGLE_TAG_MANAGER_AUTH
	? {
		auth: process.env.REACT_APP_GOOGLE_TAG_MANAGER_AUTH,
		preview: process.env.REACT_APP_GOOGLE_TAG_MANAGER_PREVIEW
		}
	: {})
};

const tracking = !dev && process.env.REACT_APP_GOOGLE_TAG_MANAGER;

export const initTagManager = () => {
  if (tracking) {
		TagManager.initialize(tagManagerArgs);
		TagManager.dataLayer({
			dataLayer: {}
		});
	}
};