import gitHubApiInstance from '../../utils/gitHubApiInstance';

const params = {
  order: 'desc',
  per_page: 10,
  q: 'stars:>0',
  sort: 'stars',
};

export default function popularReposApi(pageNumber) {
  return gitHubApiInstance({
    url: 'search/repositories',
    method: 'get',
    params: {
      ...params,
      page: `${pageNumber}`,
    },
  })
    .then(({ data }) => data.items)
}