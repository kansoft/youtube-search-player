const request = async (url, method = 'GET', headers = {}, body = null) => {
  const result = { ok: false, status: null, content: null, errors: [] };
  const options = { method, headers };

  try {
    const response = await fetch(url, options);
    result.ok = response.ok;
    result.status = response.status;
    const content = await response.json();
    result.content = content;
    result.errors = (content && content.errors) || [];
  } catch (e) {
    console.error(e);
  }

  return result;
};

const get = async url =>
  request(url, 'GET', {
    Accept: 'application/json',
  });

export default class HttpApiClient {
  static async searchVideos(searchTerm) {
    return (
      await get(
        `${process.env.REACT_APP_API_URL}part=snippet&q=${searchTerm}&maxResults=1&type=video&key=${process.env.REACT_APP_API_KEY}`,
      )
    ).content;
  }
}
