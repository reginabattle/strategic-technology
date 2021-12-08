export async function updateCount(e, id, count) {
  fetch(`${process.env.GATSBY_API_URL}/charities/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + process.env.JWT_TOKEN,
    },
    body: JSON.stringify({
      acf: {
        count: count + 1,
      },
    }),
  }).then(res => {
    if (res.status === 200) {
      e.target.disabled = true
      e.target.innerText = "Thank you!"
    }
  })
}

export async function updateVisits(addresses, ip) {
  fetch(`${process.env.GATSBY_API_URL}/pages/2`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + process.env.JWT_TOKEN,
    },
    body: JSON.stringify({
      acf: {
        ip_addresses: `${addresses}, ${ip}`,
      },
    }),
  }).then(res => {
    console.log("update visits", res)
  })
}
