import gitHubApiInstance from '../../utils/gitHubApiInstance';

const params = {
  order: 'desc',
  per_page: 10,
  q: 'stars:>0',
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