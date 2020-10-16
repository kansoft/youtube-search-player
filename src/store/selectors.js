export const getVideoUrl = state =>
  state?.videos?.[0]?.id ? process.env.REACT_APP_VIDEO_BASE_URL + state.videos[0].id : '';

export const getTitle = state => (state?.videos?.[0] ? state.videos[0].title : '');

export const getDescription = state => (state?.videos?.[0] ? state.videos[0].description : '');

export const getChannelTitle = state => (state?.videos?.[0] ? state.videos[0].channelTitle : '');

export const getLoading = state => state.isLoading || false;
