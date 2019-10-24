import gitHubApiInstance from '../../utils/gitHubApiInstance';

const params = {
  in: 'name',
  order: 'desc',
  per_page: 10,
  sort: 'stars',
};

export default function reposByKeywordApi(keyword) {
  return gitHubApiInstance({
    url: 'search/repositories',
    method: 'get',
    params: {
      ...params,
      q: `${keyword}`,
    },
  })
    .then(({ data }) => data.items)
}