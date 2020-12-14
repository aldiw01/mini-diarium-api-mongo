-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2020 at 06:44 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_diarium`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `name` text NOT NULL,
  `status` int(11) NOT NULL,
  `created` varchar(24) NOT NULL,
  `updated` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `archives`
--

CREATE TABLE `archives` (
  `id` varchar(64) NOT NULL,
  `name` text NOT NULL,
  `year` int(4) NOT NULL,
  `info` text NOT NULL,
  `standard_level_id` varchar(20) NOT NULL,
  `file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `archives`
--

INSERT INTO `archives` (`id`, `name`, `year`, `info`, `standard_level_id`, `file`) VALUES
('0-12-207892', 'Fiber Optic Data Communication - Technological Trends and Advances', 2002, '1', 'P3', '0-12-207892_v2002_Fiber Optic Data Communication  Technological Trends and Advances.pdf'),
('07-135604-5', 'Fiber Optic Installers Field Manual', 2000, '1', 'P3', '0-07-135604-5_v2000_Fiber Optic Installers Field Manual.pdf'),
('978-0-470-09742-7', 'Fiber Optic Essentials', 2007, '1', 'P3', '978-0-470-09742-7_v2007_Fiber Optic Essentials.pdf'),
('978-0-470-47707-6', 'Cabling - The Complete Guide to Copper and Fiber-Optic Networking', 2009, '4', 'P3', '978-0-470-47707-6_v2009_Cabling  The Complete Guide to Copper and FiberOptic Networking.pdf'),
('978-0-470-51867-0', 'Fiber Optic Communications', 2014, '1', 'P3', '978-0-470-51867-0_v2014_Fiber Optic Communications.pdf'),
('9781119601999', 'Fiber Optic and Atmospheric Optical Communication', 2020, '1', 'P3', '9781119601999_v2020_Fiber Optic and Atmospheric Optical Communication.pdf'),
('A1E9FCFDKA', 'Tarif uji lokasi', 2019, 'v.1', 'P1', 'A1E9FCFDKA2019_Tarif uji lokasi.jpeg'),
('A1E9FCL6C8', 'Penutupan sementara lab device', 2019, 'v.1', 'P1', 'A1E9FCL6C82019_Penutupan sementara lab device.jpeg'),
('A1E9FCO3CQ', 'Penutupan lab kabel 2019', 2019, 'v.1', 'P1', 'A1E9FCO3CQ2019_Penutupan lab kabel 2019.jpeg'),
('A1E9FCTQL3', 'Persyaratan sertifikat mutu', 2019, 'v.1', 'P1', 'A1E9FCTQL32019_Persyaratan sertifikat mutu.jpeg'),
('A1E9FD1M4Q', 'Pemberitahuan SPB bebas Pph', 2019, 'v.1', 'P1', 'A1E9FD1M4Q2019_Pemberitahuan SPB bebas Pph.jpeg'),
('A1E9FDAFP6', 'Persyaratan sertifikat mutu', 2019, 'v.2', 'P1', 'A1E9FDAFP62019_Persyaratan sertifikat mutu.jpeg'),
('A1E9FDG841', 'Info uji fungsi', 2019, 'v.1', 'P1', 'A1E9FDG8412019_Info uji fungsi.jpeg'),
('A1E9FDJIO6', 'Tips lolos uji fungsi.', 2020, 'v.1', 'P1', 'A1E9FDJIO62019_Tips lolos uji fungsi..jpg'),
('A1E9FDO2C1', 'Peluncuran STEL ODP CA Solid', 2020, 'v.1', 'P1', 'A1E9FDO2C12019_Peluncuran STEL ODP CA Solid.jpg'),
('A1E9FDRU7V', 'Kewajiban untuk mempunyai sertifikat mutu CIQS', 2020, 'v.1', 'P1', 'A1E9FDRU7V2020_Kewajiban untuk mempunyai sertifikat mutu CIQS.jpg'),
('A1E9FE0POB', 'Pembayaran menggunakan kode unik', 2020, 'v.1', 'P1', 'A1E9FE0POB2020_Pembayaran menggunakan kode unik.jpg'),
('A1E9FJ2Q36', 'Pemberitahuann perubahan harga STEL', 2019, 'v.1', 'P1', 'A1E9FJ2Q362019_Pemberitahuann perubahan harga STEL.jpg'),
('A1E9FJCRQP', 'Pastikan informasi perangkat akurat', 2020, 'v.1', 'P1', 'A1E9FJCRQP2020_Pastikan informasi perangkat akurat.jpg'),
('A1E9FKEBEV', 'Pengumuman tutup pendaftaran uji', 2020, 'v.1', 'P1', 'A1E9FKEBEV2020_Pengumuman tutup pendaftaran uji.jpg'),
('A1E9FKJRKV', 'Pencegahan covid-19', 2020, 'v.1', 'P1', 'A1E9FKJRKV2020_Pencegahan covid-19.jpg'),
('A1E9FKM909', 'Pembatasan layanan pengujian', 2020, 'v.1', 'P1', 'A1E9FKM9092020_Pembatasan layanan pengujian.jpg'),
('A1EMT7MJ8L', 'Aldi Wiranata', 222, '1', 'P2', 'A1EMT7MJ8L_222_Aldi Wiranata.png'),
('ASTM A90/A90M - 13', 'Standard Test Method for Weight [Mass] of Coating on Iron and Steel Articles with Zinc or Zinc-Alloy Coatings', 2018, '13', 'I1', 'ASTM A90A90M - 13_v2018_Standard Test Method for Weight Mass of Coating on Iron and Steel Articles with Zinc or ZincAlloy Coatings.pdf'),
('ASTM D792 - 08', 'Standard Test Methods for Density and Specific Gravity (Relative Density) of Plastics by Displacement', 2008, '8', 'I1', 'ASTM D792-08_v2007_Standard Test Methods for Density and Specific Gravity Relative Density of Plastics by Displacement.pdf'),
('BN RI NO 5 - 17JAN92 TAMBAHAN NO 210 & HAM RI- 8JUN18 & 2JULI18', 'Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk dan entitas anaknya', 2018, '1', 'N4', 'BN RI NO 5 - 17JAN92 TAMBAHAN NO 210 & HAM RI- 8JUN18 & 2JULI18_v2018_Perusahaan Perseroan Persero PT Telekomunikasi Indonesia Tbk dan entitas anaknya.pdf'),
('C.TEL. 30/PS 300/COP-E7000000/2019', 'Pendelegasian Pimpinan Sidang Komite Validasi QA', 2019, '1', 'N4', 'C.TEL. 30PS 300COP-E70000002019_v2019_Pendelegasian Pimpinan Sidang Komite Validasi QA.pdf'),
('C.TEL. 568/LB 000/DDS-10000000/2018', 'Pendelegasian Pimpinan Sidang Komite Validasi QA dan Penandatanganan Sertificate Uji QA', 2018, '1', 'N4', 'C.TEL. 568LB 000DDS-100000002018_v2018_Pendelegasian Pimpinan Sidang Komite Validasi QA dan Penandatanganan Sertificate Uji QA.pdf'),
('C.TEL.01/LB 000/COP-J2600000/2020', 'Revisi STEL ODP Solid dan STEL CA Solid', 2020, '1', 'N4', 'C.TEL.01LB 000COP-J26000002020_v2020_Revisi STEL ODP Solid dan STEL CA Solid.pdf'),
('C.TEL.03/LB 000/DDS-10000000/2020', 'Pengesahan Dokumen STEL Tiang Galvanis 6 Meter Tanpa Sambungan Versi 1.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.03LB 000DDS-100000002020_v2020_Pengesahan Dokumen STEL Tiang Galvanis 6 Meter Tanpa Sambungan Versi 10 Tahun 2020.pdf'),
('C.TEL.09/LB 200/DDS-10000000/2020', 'Penetapan Tarif Spesifikasi Telekomunikasi ODP Closure Aerial dengan Solid Spliter', 2020, '1', 'N4', 'C.TEL.09LB 200DDS-100000002020_v2020_Penetapan Tarif Spesifikasi Telekomunikasi ODP Closure Aerial dengan Solid Spliter.pdf'),
('C.TEL.101/PW 000/DDS-10B00000/2019', 'Pelaksanaan Asesmen LSP Telecommunication Indonesia Menjadi BS CIQS', 2019, '1', 'N4', 'C.TEL.101PW 000DDS-10B000002019_v2019_Pelaksanaan Asesmen LSP Telecommunication Indonesia Menjadi BS CIQS.pdf'),
('C.TEL.107/LB 000/DDS-10B00000/2019', 'Revisi STEL Aksesoris Tiang', 2019, '1', 'N4', 'C.TEL.107LB 000DDS-10B000002019_v2019_Revisi STEL Aksesoris Tiang.pdf'),
('C.TEL.15/LB 000/DDS-10B40000/2019', 'Update STEL OTP versi 1.1', 2019, '1', 'N4', 'C.TEL.15LB 000DDS-10B400002019_v2019_Update STEL OTP versi 11.pdf'),
('C.TEL.162/LG 000/COP-I9000000/2020', 'Penyampaian Peraturan Direktur Keuangan No.PR.301.08/r.03/HK240/COPA00110000/2020 tentang Pedoman Pelaksanaan Pengadaan', 2020, '1', 'N4', 'C.TEL.162LG 000COP-I90000002020_v2020_Penyampaian Peraturan Direktur Keuangan NoPR30108r03HK240COPA001100002020 tentang Pedoman Pelaksanaan Pengadaan.pdf'),
('C.TEL.215/LB 000/DDS-10000000/2019', 'Penunjukkan Tim ISO_IEC 17025_ 2017 - Sistem Manajemen Mutu Lab. QA - Bidang PIA - DDS', 2017, '1', 'N4', 'C.TEL.215LB 000DDS-100000002019_v2017_Penunjukkan Tim ISO_IEC 17025_ 2017  Sistem Manajemen Mutu Lab QA  Bidang PIA  DDS.pdf'),
('C.TEL.221/LB 000/DDS-10000000/2019', 'Pengesahan Dokumen STEL Aksesoris Tiang L-076 Versi 2.0 Tahun 2019', 2019, '1', 'N4', 'C.TEL.221LB 000DDS-100000002019_v1_Pengesahan Dokumen STEL Aksesoris Tiang L076 Versi 20 Tahun 2019.pdf'),
('C.TEL.222/LB 000/DDS-10000000/2019', 'Pengesahan Dokumen STEL ODP Closure Aerial L-075 Versi 2.0 Tahun 2019', 2019, '1', 'N4', 'C.TEL.222LB 000DDS-100000002019_v2019_Pengesahan Dokumen STEL ODP Closure Aerial L075 Versi 20 Tahun 2019.pdf'),
('C.TEL.231/LB 000/DDS-10000000/2019', 'Pengesahan Dokumen STEL ACCESS POINT - WIRELESS ACCESS CONTROLLER FOR WIFI MANAGED SYSTEM STEL T-107 Versi 1.0 Tahun 2019', 2019, '1', 'N4', 'C.TEL.231LB 000DDS-100000002019_v2019_Pengesahan Dokumen STEL ACCESS POINT  WIRELESS ACCESS CONTROLLER FOR WIFI MANAGED SYSTEM STEL T107 Versi 10 Tahun 2019.pdf'),
('C.TEL.232/LB 000/DDS-10000000/2019', 'Pengesahan Dokumen STEL STB HYBRID DEVICE Q-080 Versi 1.2 Tahun 2019', 2019, '1', 'N4', 'C.TEL.232LB 000DDS-100000002019_v2019_Pengesahan Dokumen STEL STB HYBRID DEVICE Q080 Versi 12 Tahun 2019.pdf'),
('C.TEL.26/LB 000/COP-J2000000/2020', 'Pengesahan Dokumen STEL Open OLT XGS-PON versi 2.0', 2020, '1', 'N4', 'C.TEL.26LB 000COP-J20000002020_v2020_Pengesahan Dokumen STEL Open OLT XGSPON versi 20.pdf'),
('C.TEL.30/HK 000/COP-J2000000/2020', 'Penetapan Tarif Spesifikasi Telekomunikasi (STEL)', 2020, '1', 'N4', 'C.TEL.30HK 000COP-J20000002020_v2020_Penetapan Tarif Spesifikasi Telekomunikasi STEL.pdf'),
('C.TEL.31/UM 000/COP-J2000000/2020', 'Penamaan Telkom Test House Pada Pengelolaan Sistem Mutu ISO/IEC 17025: 2017 Di Laboratorium Quality Assurance', 2020, '1', 'N4', 'C.TEL.31UM 000COP-J20000002020_v2020_Penamaan Telkom Test House Pada Pengelolaan Sistem Mutu ISOIEC 17025 2017 Di Laboratorium Quality Assurance.pdf'),
('C.TEL.34/UM 000/COP-J2000000/2020', 'Penomoran Dokumen Keluar dan Watermark Dokumen STEL/S-TSEL Di TTH', 2020, '1', 'N4', 'C.TEL.34UM 000COP-J20000002020_v2020_Penomoran Dokumen Keluar dan Watermark Dokumen STELSTSEL Di TTH.pdf'),
('C.TEL.36/LB 000/COP-J2000000/2020', 'Pengesahan Dokumen STEL METRO IP Versi 1.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.36LB 000COP-J20000002020_v2020_Pengesahan Dokumen STEL METRO IP Versi 10 Tahun 2020.pdf'),
('C.TEL.44/LB 000/COP-J2000000/2020', 'Pengesahan Dokumen STEL MINI OLT FOR XGS-PON/XG-PON/GPON SYSTEM T-102 Versi 2.1 Tahun 2020', 2020, '1', 'N4', 'C.TEL.44LB 000COP-J20000002020_v2020_Pengesahan Dokumen STEL MINI OLT FOR XGSPONXGPONGPON SYSTEM T102 Versi 21 Tahun 2020.pdf'),
('C.TEL.47/HK 000/COP-J2000000/2020', 'Permohonan Penambahan KBLI 71205 (Jasa Kalibrasi) pada Anggaran Dasar PT Telekomunikasi Indonesia Tbk', 2020, '1', 'N4', 'C.TEL.47HK 000COP-J20000002020_v2020_Permohonan Penambahan KBLI 71205 Jasa Kalibrasi pada Anggaran Dasar PT Telekomunikasi Indonesia Tbk.pdf'),
('C.TEL.60/LB 000/PND-C1020000/2020', 'Permohonan Penambahan Item STEL Bundled core dan Uji Pesanan Material Bundled Core PT. Indonesia Optic Technology', 2020, '1', 'N4', 'C.TEL.60LB 000PND-C10200002020_v2020_Permohonan Penambahan Item STEL Bundled core dan Uji Pesanan Material Bundled Core PT Indonesia Optic Technology.pdf'),
('C.TEL.76/LB 000/DDS-10000000/2020', 'Pengesahan Dokumen STEL ONT Retail Premium For XGSPON STEL Q-089-2020 Versi 1.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.76LB 000_v2020_Pengesahan Dokumen STEL ONT Retail Premium For XGSPON STEL Q0892020 Versi 10 Tahun 2020.pdf'),
('C.TEL.83/LB 000/DDS-10000000/2020', 'Pengesahan Dokumen STEL MINI OLT FOR XGS-PON/XG-PON/GPON SYSTEM T-102 Versi 2.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.83LB 000DDS-100000002020_v2020_Pengesahan Dokumen STEL MINI OLT FOR XGSPONXGPONGPON SYSTEM T102 Versi 20 Tahun 2020.pdf'),
('C.TEL.84/PS 150/COP-A2000000/2020', 'PR Organisasi Digital Business', 2020, '1', 'N4', 'C.TEL.84PS 150COP-A20000002020_v2020_PR Organisasi Digital Business.pdf'),
('C.TEL.95/LB 000/DDS-10B00000/2019', 'Kebijakan Pengujian Ulang Uji QA & Persyaratan Uji VT', 2019, '1', 'N4', 'C.TEL.95LB 000DDS-10B000002019_v2019_Kebijakan Pengujian Ulang Uji QA  Persyaratan Uji VT.pdf'),
('C.TEL.96/LB 000/COP-J2000000/2020', 'Pengesahan Dokumen STEL ONT Retail Premium Customer (ONT Premium) for GPON with WiFi Mesh System Q-091 Versi 1.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.96LB 000COP-J20000002020_v2020_Pengesahan Dokumen STEL ONT Retail Premium Customer ONT Premium for GPON with WiFi Mesh System Q091 Versi 10 Tahun 2020.pdf'),
('C.TEL.97/LB 000/COP-J2000000/2020', 'Pengesahan Dokumen STEL ETHERNET SWITCH D-006 Versi 3.0 Tahun 2020', 2020, '1', 'N4', 'C.TEL.97LB 000COP-J20000002020_v2020_Pengesahan Dokumen STEL ETHERNET SWITCH D006 Versi 30 Tahun 2020.pdf'),
('EXSUM PR.301.08/R.03/HK240/COP-A00110000/2020', 'Executive Summary tentang Pedoman Pelaksanaan Pengadaan', 2020, '1', 'N4', 'EXSUM PR.301.08R.03HK240COP-A001100002020_v2020_Executive Summary tentang Pedoman Pelaksanaan Pengadaan.pdf'),
('IDN-002', 'Sertifikat Penetapan Balai Uji Dalam Negeri oleh SDPPI', 2016, 'Berlaku hingga 31 Oktober 2019', 'A1', 'IDN-002_2016_Sertifikat Penetapan Balai Uji Dalam Negeri oleh SDPPI.pdf'),
('IDN-002/2019', 'Sertifikat Penetapan Balai Uji Dalam Negeri', 2019, '1', 'N4', 'IDN-0022019_v2019_Sertifikat Penetapan Balai Uji Dalam Negeri.pdf'),
('ISO / IEC 17025', 'ISO-IEC-17025-2017 Ver Indonesia Google Translate_Rhinta', 2017, '3', 'I1', 'ISO  IEC 17025_v2017_ISOIEC170252017 Ver Indonesia Google Translate_Rhinta.docx'),
('ISO/IEC 17025', 'General requirements for the competence of testing and calibration laboratories', 2017, '3', 'I1', 'ISOIEC 17025_v2017_General requirements for the competence of testing and calibration laboratories.pdf'),
('ISO/IEC 17025:2017', 'ISO-IEC 17025-2017', 2017, '1', 'A1', 'ISOIEC 17025:2017_2017_ISO-IEC 17025-2017.pdf'),
('KAN-G-01', 'Guide on Measurement Uncertainty (EN)', 2016, '1', 'N4', 'KAN-G-01_v2016_Guide on Measurement Uncertainty EN.pdf'),
('KEPDIR NOMOR 124 TAHUN 2020', 'PENGAKUAN BALAI UJI LUAR NEGERI', 2020, '1', 'N2', 'KEPDIR NOMOR 124 TAHUN 2020_v2020_PENGAKUAN BALAI UJI LUAR NEGERI.pdf'),
('LAMP IDN-002/2019', 'Nota Dinas Penetapan Laboratorium Uji Dalam Negeri', 2019, 'Nota Dinas, Sertifikat, dan Lampiran', 'A1', 'LAMP IDN-0022019_2019_Nota Dinas Penetapan Laboratorium Uji Dalam Negeri.pdf'),
('LAMPIRAN IDN-002/2019', 'Lampiran Sertifikat Penetapan Balai Uji Dalam Negeri', 2019, '1', 'N4', 'LAMPIRAN IDN-0022019_v2019_Lampiran Sertifikat Penetapan Balai Uji Dalam Negeri.pdf'),
('LAMPIRAN LP-490-IDN ', 'Lampiran Sertifikat Akreditasi Laboratorium No. LP-490-IDN', 2019, 'Berlaku hingga 1 September 2024', 'A1', 'LAMPIRAN LP-490-IDN _2019_Lampiran Sertifikat Akreditasi Laboratorium No. LP-490-IDN.pdf'),
('LAMPIRAN PR.202.70/R.00/HK.200/COP-A2000000/2020', 'Organisasi Digital Business', 2020, '1', 'N4', 'LAMPIRAN PR.202.70R.00HK.200COP-A20000002020_v2020_Organisasi Digital Business.PDF'),
('LP-490-IDN', 'Lampiran Sertifikat Akreditasi Laboratorium', 2019, '1', 'N4', 'LP-490-IDN_v2019_Lampiran Sertifikat Akreditasi Laboratorium.pdf'),
('MOM-04052020', 'Pembahasan Format Test Procedure & Tampilan Web Sidomo', 2020, '1', 'N4', 'MOM-04052020_v2020_Pembahasan Format Test Procedure  Tampilan Web Sidomo.pdf'),
('MOM-06052020', 'Rakor Bidang IAS Bulan Mei 2020 #4', 2020, '1', 'N4', 'MOM-06052020_v2020_Rakor Bidang IAS Bulan Mei 2020 4.pdf'),
('MOM-09042020', 'Pembahasan Penetapan Tarif Baru Spesifikasi Telekomunikasi (STEL)', 2020, '1', 'N4', 'MOM-09042020_v2020_Pembahasan Penetapan Tarif Baru Spesifikasi Telekomunikasi STEL.pdf'),
('MOM-11032020', 'Penggunaan Digital Invoice pada Produk Telkom Test House (TTH)', 2020, '1', 'N4', 'MOM-11032020_v2020_Penggunaan Digital Invoice pada Produk Telkom Test House TTH.pdf'),
('MOM-20042020', 'Rapat Koordinasi Bidang IAS Bulan April 2020 #3', 2020, '1', 'N4', 'MOM-20042020_v2020_Rapat Koordinasi Bidang IAS Bulan April 2020 3.pdf'),
('MOM-20112019', 'Rapat Koordinasi Bidang PIA Bulan Nopember 2019 #2', 2020, '1', 'N4', 'MOM-20112019_v2020_Rapat Koordinasi Bidang PIA Bulan Nopember 2019 2.pdf'),
('MOM-22072020', 'MoM Pembahasan Pemanfaatan MPS untuk TTH', 2020, '1', 'N4', 'MOM-22072020_v2020_MoM Pembahasan Pemanfaatan MPS untuk TTH.pdf'),
('MOM-30042020', 'Pembahasan Kerahasiaan Data Pelanggan IAS dg Legal', 2020, '1', 'N4', 'MOM-30042020_v2020_Pembahasan Kerahasiaan Data Pelanggan IAS dg Legal.pdf'),
('PD.201.01-R.00-PS1500-COP-B0400000-2014', 'ETIKA BISNIS DI LINGKUNGAN TELKOM GROUP', 2014, '1', 'N4', 'PD.201.01-R.00-PS1500-COP-B0400000-2014_v2014_ETIKA BISNIS DI LINGKUNGAN TELKOM GROUP.pdf'),
('PD.301.01-R.00-HK240-COP-A00110000-2015', 'KEBIJAKAN PENGELOLAAN LOGISTIK', 2015, '1', 'N4', 'PD.301.01-R.00-HK240-COP-A00110000-2015_v2015_KEBIJAKAN PENGELOLAAN LOGISTIK.pdf'),
('PD.602.00R.00HK000COP-D00300002011', 'PEDOMAN PENGELOLAAN GCG TELKOM GROUP', 2011, '1', 'N4', 'PD.602.00R.00HK000COP-D00300002011_v2011_PEDOMAN PENGELOLAAN GCG TELKOM GROUP.pdf'),
('PERDIRJEN NO.111/DIRJEN/2008', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Router', 2008, '1', 'N2', 'PERDIRJEN NO.111DIRJEN2008_v2008_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Router.pdf'),
('PERDIRJEN NO.167/DIRJEN/2002', 'Persyaratan Teknis Alat Dan Perangkat Broadband Wireless Access Pada Frekuensi 10 Ghz', 2002, '1', 'N2', 'PERDIRJEN NO.167DIRJEN2002_v2002_Persyaratan Teknis Alat Dan Perangkat Broadband Wireless Access Pada Frekuensi 10 Ghz.pdf'),
('PERDIRJEN NO.169/DIRJEN/2002', 'Persyaratan Teknis Alat dan Perangkat Televisi Siaran Sistem Analog', 2002, '-', 'N2', 'PERDIRJEN NO.169DIRJEN2002_v2002_Persyaratan Teknis Alat dan Perangkat Televisi Siaran Sistem Analog.pdf'),
('PERDIRJEN NO.171/DIRJEN/2009', 'Persyaratan Teknis Alat Dan Perangkat Radio Komunikasi HF, VHF dan UHF', 2009, '-', 'N2', 'PERDIRJEN NO.171DIRJEN2009_v2009_Persyaratan Teknis Alat Dan Perangkat Radio Komunikasi HF VHF dan UHF.pdf'),
('PERDIRJEN NO.173/DIRJEN/2009', 'Persyaratan Teknis Alat dan Perangkat Terminal Wideband Code Division Multiple Access (WCDMA)', 2009, '-', 'N2', 'PERDIRJEN NO.173DIRJEN2009_v2009_Persyaratan Teknis Alat dan Perangkat Terminal Wideband Code Division Multiple Access WCDMA.pdf'),
('PERDIRJEN NO.193/DIRJEN/2005', 'Persyaratan Teknis Alat Dan Perangkat Komunikasi Radio Microwave Link', 2005, '-', 'N2', 'PERDIRJEN NO.193DIRJEN2005_v2005_Persyaratan Teknis Alat Dan Perangkat Komunikasi Radio Microwave Link.pdf'),
('PERDIRJEN NO.195/DIRJEN/2011', 'Persyaratan Teknis Perangkat Video Conference', 2011, '-', 'N2', 'PERDIRJEN NO.195DIRJEN2011_v2011_Persyaratan Teknis Perangkat Video Conference.pdf'),
('PERDIRJEN NO.2/DIRJEN/2019', 'Wireless Local Area Network (WLAN)', 2019, '1', 'N2', 'PERDIRJEN NO.002DIRJEN2019_v2019_Wireless Local Area Network WLAN.pdf'),
('PERDIRJEN NO.200/DIRJEN/2011', 'Persyaratan Teknis Perangkat Integrated Receiver/Decoder (IRD)', 2011, '-', 'N2', 'PERDIRJEN NO.200DIRJEN2011_v2011_Persyaratan Teknis Perangkat Integrated ReceiverDecoder IRD.pdf'),
('PERDIRJEN NO.201/DIRJEN/2011', 'Persyaratan Teknis Alat Dan Perangkat Encoder IPTV', 2011, '-', 'N2', 'PERDIRJEN NO.201DIRJEN2011_v2011_Persyaratan Teknis Alat Dan Perangkat Encoder IPTV.pdf'),
('PERDIRJEN NO.202/DIRJEN/2011', 'Persyaratan Teknis Perangkat IP Set Top Box', 2011, '-', 'N2', 'PERDIRJEN NO.202DIRJEN2011_v2011_Persyaratan Teknis Perangkat IP Set Top Box.pdf'),
('PERDIRJEN NO.209/DIRJEN/2009', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Subscriber Station Broadband Wireless Access (BWA) Nomadic Pada Pita Frekuensi 2.3 Ghz', 2009, '-', 'N2', 'PERDIRJEN NO.209DIRJEN2009_v2009_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Subscriber Station Broadband Wireless Access BWA Nomadic Pada Pita Frekuensi 23 Ghz.pdf'),
('PERDIRJEN NO.222/DIRJEN/2009', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Metro Ethernet', 2009, '-', 'N2', 'PERDIRJEN NO.222DIRJEN2009_v2009_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Metro Ethernet.pdf'),
('PERDIRJEN NO.223/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Digital Loop Carrier (DLC)', 2010, '-', 'N2', 'PERDIRJEN NO.223DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Digital Loop Carrier DLC.pdf'),
('PERDIRJEN NO.23/DIRJEN/2004', 'Persyaratan Teknis Alat Dan Perangkat Jaringan Global System For Mobile (Gsm) 900 Mhz / Digital Communication System (Dcs) 1800 Mhz', 2004, '-', 'N2', 'PERDIRJEN NO.023DIRJEN2004_v2004_Persyaratan Teknis Alat Dan Perangkat Jaringan Global System For Mobile Gsm 900 Mhz  Digital Communication System Dcs 1800 Mhz.pdf'),
('PERDIRJEN NO.233/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Broadnand Wireless Access (BWA) Pada Pita Frekuensi Radio 5,8 Ghz', 2010, '-', 'N2', 'PERDIRJEN NO.233DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Broadnand Wireless Access BWA Pada Pita Frekuensi Radio 58 Ghz.pdf'),
('PERDIRJEN NO.238/DIRJEN/2009', 'Persyaratan Teknis Alat Dan Perangkat Modem High Speed Downlink Packet Access (HSDPA)', 2009, '-', 'N2', 'PERDIRJEN NO.238DIRJEN2009_v2009_Persyaratan Teknis Alat Dan Perangkat Modem High Speed Downlink Packet Access HSDPA.pdf'),
('PERDIRJEN NO.257/DIRJEN/2008', 'Persyaratan Teknis Alat dan Perangkat Telekomunikasi Akses Berbasis Passive Optical Network (PON)', 2008, '-', 'N2', 'PERDIRJEN NO.257DIRJEN2008_v2008_Persyaratan Teknis Alat dan Perangkat Telekomunikasi Akses Berbasis Passive Optical Network PON.pdf'),
('PERDIRJEN NO.266/DIRJEN/2005', 'Persyaratan Teknis Alat dan Perangkat Radio Maritim', 2005, '-', 'N2', 'PERDIRJEN NO.266DIRJEN2005_v2005_Persyaratan Teknis Alat dan Perangkat Radio Maritim.pdf'),
('PERDIRJEN NO.270/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi untuk Pesawat Telepon Seluler Global System For Mobile Communications (GSM)', 2010, '-', 'N2', 'PERDIRJEN NO.270DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi untuk Pesawat Telepon Seluler Global System For Mobile Communications GSM.pdf'),
('PERDIRJEN NO.277/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Key Telephone System (KTS)', 2010, '-', 'N2', 'PERDIRJEN NO.277DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Key Telephone System KTS.pdf'),
('PERDIRJEN NO.29/DIRJEN/2009', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Internet Protocol (IP) Phone', 2019, '-', 'N2', 'PERDIRJEN NO.029DIRJEN2009_v2019_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Internet Protocol IP Phone.pdf'),
('PERDIRJEN NO.3/DIRJEN/2019', 'Low Power WIde Area (LPWA)', 2019, '1', 'N2', 'PERDIRJEN NO.003DIRJEN2019_v2019_Low Power WIde Area LPWA.pdf'),
('PERDIRJEN NO.306/DIRJEN/2010', 'Persyaratan Teknis Alat dan Perangkat Terminal untuk Aplikasi Komunikasi Data Land dan Mobile Portable dan Aplikasi Maritime dengan menggunakan Satelit INMARSAT Generasi 4', 2010, '-', 'N2', 'PERDIRJEN NO.306DIRJEN2010_v2010_Persyaratan Teknis Alat dan Perangkat Terminal untuk Aplikasi Komunikasi Data Land dan Mobile Portable dan Aplikasi Maritime dengan menggunakan Satelit INMARSAT Generasi 4.pdf'),
('PERDIRJEN NO.313/DIRJEN/2010', 'Kelompok Alat dan Perangkat Telekomunikasi', 2010, '-', 'N2', 'PERDIRJEN NO.313DIRJEN2010_v2010_Kelompok Alat dan Perangkat Telekomunikasi.pdf'),
('PERDIRJEN NO.370/DIRJEN/2010', 'Penetapan Persyaratan Teknis Global System for Mobile communication (GSM)', 2010, '-', 'N2', 'PERDIRJEN NO.370DIRJEN2010_v2010_Penetapan Persyaratan Teknis Global System for Mobile communication GSM.pdf'),
('PERDIRJEN NO.397/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Media Converter', 2010, '-', 'N2', 'PERDIRJEN NO.397DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Media Converter.pdf'),
('PERDIRJEN NO.4/DIRJEN/2019', 'Dedicated Short Range Communication (DSRC)', 2019, '1', 'N2', 'PERDIRJEN NO.004DIRJEN2019_v2019_Dedicated Short Range Communication DSRC.pdf'),
('PERDIRJEN NO.5/DIRJEN/2019', 'Persyaratan Teknis Perangkat Telekomunikasi Bergerak Seluler', 2019, '1', 'N2', 'PERDIRJEN NO.005DIRJEN2019_v2019_Persyaratan Teknis Perangkat Telekomunikasi Bergerak Seluler.pdf'),
('PERDIRJEN NO.80/DIRJEN/2006', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Multiplex Sdh (Synchronous Digital Hierarchy)', 2006, '-', 'N2', 'PERDIRJEN NO.080DIRJEN2006_v2006_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Multiplex Sdh Synchronous Digital Hierarchy.pdf'),
('PERDIRJEN NO.84/DIRJEN/2010', 'Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Wavelength Division Multiplexing / WDM', 2010, '-', 'N2', 'PERDIRJEN NO.084DIRJEN2010_v2010_Persyaratan Teknis Alat Dan Perangkat Telekomunikasi Wavelength Division Multiplexing  WDM.pdf'),
('PERDIRJEN NO.9/DIRJEN/2004', 'Persyaratan Teknis Bluetooth', 2004, '1', 'N2', 'PERDIRJEN NO.009DIRJEN2004_v2004_Persyaratan Teknis Bluetooth.pdf'),
('PERDIRJEN POSTEL NO.161/DIRJEN/2019', 'Spesifikasi Telekomunikasi Persyaratan Teknis Dan/Atau Short Range Device (SRD)', 2019, '1', 'N2', 'PERDIRJEN POSTEL NO.161DIRJEN2019_v2019_Spesifikasi Telekomunikasi Persyaratan Teknis DanAtau Short Range Device SRD.pdf'),
('PERDIRJEN POSTEL NO.269/DIRJEN/2009', 'Spesifikasi Telekomunikasi Persyaratan Teknis Alat & Perangkat Telekomunikasi Terminal Global Mobile Personal Communication (GMPCS) dengan Menggunakan Sistem Satelit Thuraya', 2009, '1', 'N2', 'PERDIRJEN POSTEL NO.269DIRJEN2009_v2009_Spesifikasi Telekomunikasi Persyaratan Teknis Alat  Perangkat Telekomunikasi Terminal Global Mobile Personal Communication GMPCS dengan Menggunakan Sistem Satelit Thuraya.pdf'),
('PERMEN KOMINFO 33/PER/M.KOMINFO/08/2009', 'Penyelenggaraan Amatir Radio', 2009, '-', 'N1', 'PERMEN KOMINFO 33PERM.KOMINFO082009_v2009_Penyelenggaraan Amatir Radio.pdf'),
('PERMEN KOMINFO NO.031 TAHUN 2013', 'Persyaratan Teknis Alat dan Perangkat Radar Maritim dan Radar Surveillance', 2013, '1', 'N1', 'PERMEN KOMINFO NO.031 TAHUN 2013_v2013_Persyaratan Teknis Alat dan Perangkat Radar Maritim dan Radar Surveillance.pdf'),
('PERMEN KOMINFO NO.1 TAHUN 2019', 'Penggunaan Spektrum Frekuensi Radio', 2019, '1', 'N1', 'PERMEN KOMINFO NO.001 TAHUN 2019_v2019_Penggunaan Spektrum Frekuensi Radio.pdf'),
('PERMEN KOMINFO NO.10 TAHUN 2019', 'Persyaratan Teknis Alat Dan/Atau Perangkat Telekomunikasi Jaringan Internet Protocol', 2019, '1', 'N1', 'PERMEN KOMINFO NO.010 TAHUN 2019_v2019_Persyaratan Teknis Alat DanAtau Perangkat Telekomunikasi Jaringan Internet Protocol.pdf'),
('PERMEN KOMINFO NO.14/PER/M.KOMINFO/05/2012', 'Persyaratan Teknis Perangkat Telekomunikasi Densewavelength Digital Multiplexer', 2012, '-', 'N1', 'PERMEN KOMINFO NO.14PERM.KOMINFO052012_v2012_Persyaratan Teknis Perangkat Telekomunikasi Densewavelength Digital Multiplexer.pdf'),
('PERMEN KOMINFO NO.16 TAHUN 2016', 'Persyaratan Teknis Perangkat Near Field Communication (NFC)', 2016, '1', 'N1', 'PERMEN KOMINFO NO.016 TAHUN 2016_v2016_Persyaratan Teknis Perangkat Near Field Communication NFC.pdf'),
('PERMEN KOMINFO NO.16 TAHUN 2017', 'Monitor Spektrum Frekuensi Radio', 2017, '-', 'N1', 'PERMEN KOMINFO NO.016 TAHUN 2017_v2017_Monitor Spektrum Frekuensi Radio.pdf'),
('PERMEN KOMINFO NO.17 TAHUN 2015', 'Persyaratan Teknis Pembaca Kartu Cerdas Nirkontak (Contactless Smart Card Reader)', 2015, '-', 'N1', 'PERMEN KOMINFO NO.17 TAHUN 2015_v2015_Persyaratan Teknis Pembaca Kartu Cerdas Nirkontak Contactless Smart Card Reader.pdf'),
('PERMEN KOMINFO NO.18 TAHUN 2015', 'Penggunaan Spektrum Frekuensi Radio Pada Pita Frekuensi Radio 350 - 438 Mhz', 2015, '-', 'N1', 'PERMEN KOMINFO NO.018 TAHUN 2015_v2015_Penggunaan Spektrum Frekuensi Radio Pada Pita Frekuensi Radio 350  438 Mhz.pdf'),
('PERMEN KOMINFO NO.2 TAHUN 2019', 'Penggunaan Spektrum Frekuensi Radio untuk Keperluan Microwave Link Titik ke Titik (Point-To-Point)', 2019, '1', 'N1', 'PERMEN KOMINFO NO.002 TAHUN 2019_v2019_Penggunaan Spektrum Frekuensi Radio untuk Keperluan Microwave Link Titik ke Titik PointToPoint.pdf'),
('PERMEN KOMINFO NO.27 TAHUN 2015', 'Persyaratan Teknis Alat dan Perangkat Telekomunikasi Berbasis Standar Teknologi Long Term Evolution', 2015, '1', 'N1', 'PERMEN KOMINFO NO.27 TAHUN 2015_v2015_Persyaratan Teknis Alat dan Perangkat Telekomunikasi Berbasis Standar Teknologi Long Term Evolution.pdf'),
('PERMEN KOMINFO NO.28 TAHUN 2015', 'Perangkat Telekomunikasi yang Beroperasi pada Pita Frekuensi Radio 2,4 GHz dan/atau Pita Frekuensi Radio 5,8 GHz', 2014, '1', 'N1', 'PERMEN KOMINFO NO.028 TAHUN 2015_v2014_Perangkat Telekomunikasi yang Beroperasi pada Pita Frekuensi Radio 24 GHz danatau Pita Frekuensi Radio 58 GHz.pdf'),
('PERMEN KOMINFO NO.35 TAHUN 2015', 'Persyaratan Teknis Alat dan Perangkat Telekomunikasi Jarak Dekat', 2015, '-', 'N1', 'PERMEN KOMINFO NO.35 TAHUN 2015_v2015_Persyaratan Teknis Alat dan Perangkat Telekomunikasi Jarak Dekat.pdf'),
('PERMEN KOMINFO NO.9 TAHUN 2019', 'Persyaratan Teknis Alat Dan/Atau Perangkat Telekomunikasi Wavelength Division Multiplexing', 2019, '1', 'N1', 'PERMEN KOMINFO NO.009 TAHUN 2019_v2019_Persyaratan Teknis Alat DanAtau Perangkat Telekomunikasi Wavelength Division Multiplexing.pdf'),
('PR C.TEL.84/PS 150/COP-A2000000/2020', 'PR Organisasi Digital Business', 2020, '1', 'N4', 'PR C.TEL.84PS 150COP-A20000002020_v2020_PR Organisasi Digital Business.pdf'),
('PR.202.70/R.00/HK.200/COP-A2000000/2020', 'PERATURAN DIREKTUR HUMAN CAPITAL MANAGEMENT PERUSAHAAN PERSEROAN (PERSERO) PT TELEKOMUNIKASI INDONESIA TBK', 2020, '1', 'N4', 'PR.202.70R.00HK.200COP-A20000002020_v2020_PERATURAN DIREKTUR HUMAN CAPITAL MANAGEMENT PERUSAHAAN PERSEROAN PERSERO PT TELEKOMUNIKASI INDONESIA TBK.PDF'),
('PR.301.08/R.03/HK240/COP-A00110000/2020', 'Pedoman Pelaksanaan Pengadaan', 2020, '1', 'N4', 'PR.301.08R.03HK240COP-A001100002020_v2020_Pedoman Pelaksanaan Pengadaan.pdf'),
('PUB/01/2019', 'Penutupan lab uji 2019', 2019, 'v.1', 'P1', 'PUB0120192019_Penutupan lab uji 2019.jpeg'),
('SNI 04-1985-1990', 'Ruang sambung Besar (Manhole) untuk Telekomunikasi', 1990, '1', 'N3', 'SNI 04-1985-1990_v1990_Ruang sambung Besar Manhole untuk Telekomunikasi.pdf'),
('SNI 04-1986-1990', 'Ruang Sambung Kecil (Handhole) Untuk  Jaringan Telekomunikasi', 1990, '1', 'N3', 'SNI 04-1986-1990_v1990_Ruang Sambung Kecil Handhole Untuk  Jaringan Telekomunikasi.pdf'),
('SNI 04-2074-2020', 'Tiang Besi Telekomunikasi Dengan Sambungan', 2020, '1', 'N3', 'SNI 04-2074-2020_v2020_Tiang Besi Telekomunikasi Dengan Sambungan.pdf'),
('SNI 04-3508-1994', 'SPESIFIKASI TEKNIS PERANGKAT TELEKOMUNIKASI PESAWAT FAKSIMILE GROUP II DAN III', 1994, '1', 'N3', 'SNI 04-3508-1994_v1994_SPESIFIKASI TEKNIS PERANGKAT TELEKOMUNIKASI PESAWAT FAKSIMILE GROUP II DAN III.pdf'),
('SNI 04-7042-2004', 'Pesawat Telepon Analog', 2004, '1', 'N3', 'SNI 04-7042-2004_v2004_Pesawat Telepon Analog.pdf'),
('TEL.02/LB 200/DDS-10B00000/2020', 'Pemberitahuan Pemberlakuan STEL L-075-2019 v1.0 ODP CA Solid', 2020, '1', 'N4', 'TEL.02LB 200DDS-10B000002020_v2020_Pemberitahuan Pemberlakuan STEL L0752019 v10 ODP CA Solid.pdf'),
('TEL.193/UM 000/DDS-10000000/2019', 'Hasil Asesmen Lembaga Sertifikasi Telecommunication Indonesia', 2019, '1', 'N4', 'TEL.193UM 000DDS-100000002019_v2019_Hasil Asesmen Lembaga Sertifikasi Telecommunication Indonesia.pdf'),
('TELCORDIA - GR-326-CORE', 'Generic Requirements for Singlemode Optical Connectors and Jumper Assemblies', 2010, '4', 'I1', 'TELCORDIA - GR-326-CORE_v2010_Generic Requirements for Singlemode Optical Connectors and Jumper Assemblies.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` varchar(64) NOT NULL,
  `reference_id` text NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `step_id` varchar(24) NOT NULL,
  `message` text NOT NULL,
  `created` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `reference_id`, `user_id`, `step_id`, `message`, `created`) VALUES
('H1EP09I8DO', '970037', '970037', 'LOG2', '970037', '2020-12-08T04:25:46.168Z'),
('H1EP09N52O', '970037', '970037', 'LOG1', '970037', '2020-12-08T04:28:26.584Z'),
('H1EP09NBCI', '970037', '970037', 'LOG2', '970037', '2020-12-08T04:28:33.042Z'),
('H1EP09P4I8', '970037', '970037', 'LOG1', '970037', '2020-12-08T04:29:31.592Z'),
('H1EP09P7E2', '970037', '970037', 'LOG2', '970037', '2020-12-08T04:29:34.530Z'),
('H1EP09PLKT', '010101', '010101', 'LOG1', '010101', '2020-12-08T04:29:49.085Z'),
('H1EP09Q20B', '010101', '010101', 'LOG2', '010101', '2020-12-08T04:30:01.739Z'),
('H1EP09QCFG', '010101', '010101', 'LOG1', '010101', '2020-12-08T04:30:12.464Z'),
('H1EP09QIUU', '010101', '010101', 'LOG2', '010101', '2020-12-08T04:30:19.102Z'),
('H1EP09SOBA', '010101', '010101', 'LOG1', '010101', '2020-12-08T04:31:30.154Z'),
('H1EP09T41C', '010101', '010101', 'LOG2', '010101', '2020-12-08T04:31:42.124Z'),
('H1EP09T945', '123456', '123456', 'LOG1', '123456', '2020-12-08T04:31:47.333Z'),
('H1EP09THL5', '123456', '123456', 'LOG2', '123456', '2020-12-08T04:31:56.069Z'),
('H1EPBF64O1', '970037', '970037', 'LOG1', '970037', '2020-12-12T12:35:39.393Z'),
('H1EPBHH060', '970037', '970037', 'LOG2', '970037', '2020-12-12T13:16:32.320Z'),
('H1EPBHHDJC', '970037', '970037', 'LOG1', '970037', '2020-12-12T13:16:46.060Z'),
('H1EPH1U332', '123456', '123456', 'LOG1', '123456', '2020-12-14T16:39:30.658Z'),
('H1EPH1U5NA', '123456', '123456', 'LOG2', '123456', '2020-12-14T16:39:33.354Z'),
('H1EPH1UAK8', '970037', '970037', 'LOG1', '970037', '2020-12-14T16:39:38.376Z'),
('H1EPH2O1TT', '970037', '970037', 'LOG2', '970037', '2020-12-14T16:53:41.437Z'),
('H1EPH41RNN', '121212', '121212', 'LOG1', '121212', '2020-12-14T17:16:31.351Z'),
('H1EPH4K8DK', '121212', '121212', 'USR6', '121212', '2020-12-14T17:26:34.164Z'),
('H1EPH4KEBM', '121212', '121212', 'LOG2', '121212', '2020-12-14T17:26:40.246Z'),
('H1EPH4KKDK', '121212', '121212', 'LOG1', '121212', '2020-12-14T17:26:46.452Z'),
('H1EPH4PT75', '121212', '121212', 'LOG2', '121212', '2020-12-14T17:29:39.301Z'),
('H1EPH4SNQS', '123456', '123456', 'LOG1', '123456', '2020-12-14T17:31:12.092Z'),
('H1EPH5IJ39', '123456', '123456', 'LOG2', '123456', '2020-12-14T17:43:08.137Z'),
('H1EPH5ILQJ', '123456', '123456', 'LOG1', '123456', '2020-12-14T17:43:10.931Z');

-- --------------------------------------------------------

--
-- Table structure for table `presences`
--

CREATE TABLE `presences` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `status` int(11) NOT NULL,
  `created` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` varchar(5) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
('1', 'Super Admin'),
('2', 'User'),
('5', 'Guest'),
('9', 'Deactivated');

-- --------------------------------------------------------

--
-- Table structure for table `standard_levels`
--

CREATE TABLE `standard_levels` (
  `id` varchar(20) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `standard_levels`
--

INSERT INTO `standard_levels` (`id`, `name`) VALUES
('A1', 'Akreditasi Lab Uji'),
('A2', 'Akreditasi Lab Kalibrasi'),
('I1', 'Internasional'),
('N1', 'Permenkominfo'),
('N2', 'Perdirjen'),
('N3', 'SNI'),
('N4', 'Kebijakan Internal'),
('P1', 'Publikasi'),
('P2', 'Informasi'),
('P3', 'Ebook');

-- --------------------------------------------------------

--
-- Table structure for table `steps`
--

CREATE TABLE `steps` (
  `id` varchar(20) NOT NULL,
  `name` text NOT NULL,
  `step_number` int(5) NOT NULL,
  `info` text NOT NULL,
  `created` varchar(24) NOT NULL,
  `updated` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `steps`
--

INSERT INTO `steps` (`id`, `name`, `step_number`, `info`, `created`, `updated`) VALUES
('ARV1', 'Add', 0, 'has add the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('ARV2', 'Edit', 0, 'has edit the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('ARV3', 'Delete', 0, 'has delete the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('ARV4', 'Retrieval', 0, 'has retrieve the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('INF1', 'Add', 0, 'has add the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('INF2', 'Edit', 0, 'has edit the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('INF3', 'Delete', 0, 'has delete the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('LOG1', 'Login', 0, 'has login into system', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('LOG2', 'Logout', 0, 'has logout from system', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR1', 'Add', 0, 'has add the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR2', 'Edit', 0, 'has edit the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR3', 'Delete', 0, 'has delete the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR4', 'Retrieval', 0, 'has retrieve the record', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR5', 'Edit Photo', 0, 'has change the profile photo', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z'),
('USR6', 'Reset Password', 0, 'has reset the password', '2020-04-19T15:40:53.729Z', '2020-04-19T15:40:53.729Z');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `name` text NOT NULL,
  `password` text NOT NULL,
  `role` varchar(5) NOT NULL,
  `email` text,
  `photo` text,
  `registered` varchar(24) DEFAULT NULL,
  `updated` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `role`, `email`, `photo`, `registered`, `updated`) VALUES
('010101', 'guest', 'Qg0hNbPN7NLGKTKHLEpGCv424Iyz+61YEf2Eavg+LQ8=', '5', 'test@mail.com', NULL, '2020-05-10T12:01:39.524Z', '2020-05-10T12:01:39.524Z'),
('121212', 'Test', '7VcoapVGWAXXcRJETh4YZCF/dU8qrz5k5h/6zQWpgzg=', '2', 'test@test.com', '', '2020-12-14T17:14:58.280Z', '2020-12-14T17:26:32.174Z'),
('123456', 'user', 'mPdsf6fDWqRMU4hQIKewxgJMvO+1tqGavhzREcDOiM8=', '2', '123456@telkom.co.id', NULL, '2020-05-10T12:01:39.524Z', '2020-05-10T12:01:39.524Z'),
('970037', 'Aldi Wiranata', 'OgbSS2F9R43wwZBoQsIpxIl+0GvimhMMarH0/f3NapY=', '1', 'aldiw01@gmail.com', '', '2020-05-07T04:51:54.211Z', '2020-06-05T09:19:39.053Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archives`
--
ALTER TABLE `archives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standard_level_id` (`standard_level_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK` (`user_id`,`step_id`),
  ADD KEY `step_id` (`step_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `standard_levels`
--
ALTER TABLE `standard_levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK` (`role`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `archives`
--
ALTER TABLE `archives`
  ADD CONSTRAINT `archives_ibfk_1` FOREIGN KEY (`standard_level_id`) REFERENCES `standard_levels` (`id`);

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
