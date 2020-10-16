export const SEARCH_REQUESTED = 'YOUTUBE.SEARCH_REQUESTED';

export function searchRequested(searchTerm) {
  return { type: SEARCH_REQUESTED, searchTerm };
}

export const SEARCH_SUCCESS = 'YOUTUBE.SEARCH_SUCCESS';

export function searchSuccess(data) {
  return { type: SEARCH_SUCCESS, data };
}

export const SEARCH_FAILED = 'YOUTUBE.SEARCH_FAILED';

export function searchFailed(error) {
  return { type: SEARCH_FAILED, error };
}
