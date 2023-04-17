import CryptoJS from "crypto-js";
$("#password").change( function() {
  alert(sds);
  ham_bam();

});
function ham_bam() {
  // Sử dụng thuật toán SHA-256
  var data =  document.getElementById("password").value;
  const hash = CryptoJS.SHA256(data);

  // Chuyển đổi giá trị băm sang định dạng hexadecimals
  const hash_value = hash.toString(CryptoJS.enc.Hex);

  // Trả về giá trị băm
  document.getElementById('passwordHash').innerHTML = hash_value;
}