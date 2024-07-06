export async function getApiDataAsync(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getApiDataIDAsync(url, id) {
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
