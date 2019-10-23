import gitHubApiInstance from '../../utils/gitHubApiInstance';

const params = {
  order: 'desc',
  per_page: 10,
};

export default function getUsersByName(keyword) {
  return gitHubApiInstance({
    url: 'search/users',
    method: 'get',
    params: {
      ...params,
      q: `${keyword}`,
    },
  })
    .then(({ data }) => data.items)
}