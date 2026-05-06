async function imageToBase64(path) {
  const response = await fetch(path);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result); // full Base64 string
    };

    reader.onerror = reject;

    reader.readAsDataURL(blob); // convert to Base64
  });
}
export default imageToBase64;
