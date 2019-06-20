import 'whatwg-fetch';

export const downloadData = async () => {
  const request = new Request('./data-mock.json', {
    headers: new Headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8'
    })
  });

  const cardsResponse = await window.fetch(request);
  const cardsData = await cardsResponse.json();

  return cardsData;
}