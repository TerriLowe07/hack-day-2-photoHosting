function encode_img_base64(img) {
  console.log(img.files)
  let file = img.files[0]
  let reader = new FileReader()
  reader.onloadend = function () {
    callback(reader.result)
  }
  reader.readAsDataURL(file)
}

function callback(res) {
  console.log(res)
}
