-- Database: hermes_store
CREATE DATABASE IF NOT EXISTS hermes_store;
USE hermes_store;

-- Tabel Produk
CREATE TABLE IF NOT EXISTS Produk (
    id_produk INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    harga BIGINT NOT NULL,
    stok INT DEFAULT 10,
    deskripsi TEXT
);

-- Insert contoh data Produk
INSERT INTO Produk (nama_produk, harga, stok, deskripsi) VALUES
('Hermes Birkin', 50000000, 5, 'Tas luxury ikonik dengan desain klasik, cocok untuk look elegan dan formal.'),
('Hermes Kelly', 45000000, 7, 'Tas elegan dengan bentuk structured yang memberi kesan anggun dan premium.'),
('Hermes Constance', 40000000, 10, 'Tas compact dengan gaya modern, simple, dan cocok untuk daily luxury outfit.'),
('Hermes Garden Party', 35000000, 12, 'Tas roomy dengan desain clean, cocok untuk aktivitas santai namun tetap stylish.'),
('Hermes Evelyne', 30000000, 15, 'Tas casual luxury dengan model praktis dan tetap terlihat chic.');

-- Tabel Pemesanan
CREATE TABLE IF NOT EXISTS Pemesanan (
    id_pesan INT AUTO_INCREMENT PRIMARY KEY,
    nama_pembeli VARCHAR(100) NOT NULL,
    produk VARCHAR(100) NOT NULL,
    jumlah INT NOT NULL,
    metode ENUM('Transfer', 'COD', 'E-Wallet') DEFAULT 'Transfer',
    tanggal_pesan TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert contoh data Pemesanan
INSERT INTO Pemesanan (nama_pembeli, produk, jumlah, metode) VALUES
('Siti Aulia', 'Hermes Birkin', 1, 'Transfer'),
('Dewi Anggraeni', 'Hermes Kelly', 2, 'COD'),
('Rina Putri', 'Hermes Constance', 1, 'E-Wallet');
