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

export async function postApiDataAsync(url, data) {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
}

export function resetInput(arrElement) {
  for (const input of arrElement) {
    input.value = "";
  }
}
