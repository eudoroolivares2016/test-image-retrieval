  const url = "https://cmr.earthdata.nasa.gov/browse-scaler/browse_images/datasets/C1561222826-GES_DISC?h=85&w=85"
  const value = fetch(url)
  .then((res) => {
    console.log("🚀 Resonse from the img server", res.body)
    console.log(res.ok);
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.headers.get("content-type"));
    return res.text();
  }).then(function(data) {
    console.log(data);
  });