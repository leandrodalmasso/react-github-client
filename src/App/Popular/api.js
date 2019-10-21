import gitHubApiInstance from '../../utils/gitHubApiInstance';

const params = {
  q: 'stars:>0',
  order: 'desc',
  per_page: 10,
  sort: 'stars',
};

export default function popularReposApi() {
  return gitHubApiInstance({
    url: 'search/repositories',
    method: 'get',
    params,
  })
    .then(({ data }) => data.items)
}