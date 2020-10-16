const video = item => ({
  id: item?.id?.videoId,
  title: item?.snippet?.title,
  description: item?.snippet?.description,
  channelTitle: item?.snippet?.channelTitle,
});

export function mapVideos(data = []) {
  try {
    return data?.items.map(item => video(item));
  } catch (e) {
    console.error(e);
  }
}
