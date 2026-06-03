// Menu responsive
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
}

// Modal detail produk
const detailButtons = document.querySelectorAll(".detail-btn");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

detailButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    modalName.textContent = button.dataset.name;
    modalPrice.textContent = button.dataset.price;
    modalDesc.textContent = button.dataset.desc;
    productModal.classList.add("show");
  });
});

if (modalClose) {
  modalClose.addEventListener("click", function () {
    productModal.classList.remove("show");
  });
}

if (productModal) {
  productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
      productModal.classList.remove("show");
    }
  });
}

// Form pemesanan
const orderForm = document.getElementById("orderForm");
const namaInput = document.getElementById("nama");
const produkSelect = document.getElementById("produk");
const jumlahInput = document.getElementById("jumlah");
const totalHarga = document.getElementById("totalHarga");
const namaError = document.getElementById("namaError");
const jumlahError = document.getElementById("jumlahError");

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);
}

function updateTotal() {
  if (!produkSelect || !jumlahInput || !totalHarga) return;

  const harga = Number(produkSelect.value);
  const jumlah = Number(jumlahInput.value);
  const total = harga * jumlah;

  if (jumlah > 0) {
    totalHarga.textContent = formatRupiah(total);
  } else {
    totalHarga.textContent = "Rp0";
  }
}

if (produkSelect && jumlahInput) {
  produkSelect.addEventListener("change", updateTotal);
  jumlahInput.addEventListener("input", updateTotal);
  updateTotal();
}

// Modal sukses pemesanan
const successModal = document.getElementById("successModal");
const successClose = document.getElementById("successClose");
const successOk = document.getElementById("successOk");
const successText = document.getElementById("successText");

function closeSuccessModal() {
  if (successModal) {
    successModal.classList.remove("show");
  }
}

if (successClose) {
  successClose.addEventListener("click", closeSuccessModal);
}

if (successOk) {
  successOk.addEventListener("click", closeSuccessModal);
}

if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    namaError.textContent = "";
    jumlahError.textContent = "";

    if (namaInput.value.trim().length < 3) {
      namaError.textContent = "Nama minimal 3 huruf.";
      valid = false;
    }

    if (Number(jumlahInput.value) < 1 || jumlahInput.value === "") {
      jumlahError.textContent = "Jumlah harus lebih dari 0.";
      valid = false;
    }

    if (valid) {
      const produkText = produkSelect.options[produkSelect.selectedIndex].text;
      successText.textContent = 
        "Terima kasih, " + namaInput.value + ". Pesanan " + produkText + 
        " sebanyak " + jumlahInput.value + " item berhasil dibuat. Total: " + totalHarga.textContent + ".";

      successModal.classList.add("show");
      orderForm.reset();
      jumlahInput.value = 1;
      updateTotal();
    }
  });
}
