-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2023 at 06:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `womeniya_parlour`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `service_name` varchar(50) DEFAULT NULL,
  `orderid` varchar(50) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `service` int(11) DEFAULT NULL,
  `photo` varchar(50) NOT NULL,
  `price` varchar(50) DEFAULT NULL,
  `subtotal` varchar(50) DEFAULT NULL,
  `payment_status` varchar(50) DEFAULT NULL,
  `payment` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(50) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `service_name`, `orderid`, `user`, `category`, `service`, `photo`, `price`, `subtotal`, `payment_status`, `payment`, `date`, `time`, `category_name`, `user_name`) VALUES
(1, 'Deep Pore Cleansing Facial', '1', 1, 1, 1, '', '600', '600', 'Sucess', 'Online Payment', '2023-07-08', '11:30', 'Facial', 'samiksha kamble');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`, `photo`) VALUES
(1, 'Facial', '1688577613988-1.jpg'),
(2, 'Body waxing', '1688579327172-2.jpg'),
(3, 'Makeup', '1688579539113-3.jpeg'),
(4, 'Hair Cut', '1688579704774-13.jpg'),
(5, 'Hair Colouring', '1688580044914-15.jpeg'),
(6, 'Head Massage', '1688580109232-16.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `percent` varchar(50) DEFAULT NULL,
  `service` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `offerprice` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `fromdate` varchar(50) DEFAULT NULL,
  `todate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`id`, `percent`, `service`, `category`, `offerprice`, `price`, `photo`, `fromdate`, `todate`) VALUES
(1, '3', 2, 1, '420', '600', '', '7/10/2023', '19/10/2023');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `service_name` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `category`, `service_name`, `photo`, `price`) VALUES
(1, 'Facial', 'Deep Pore Cleansing Facial', '', '400'),
(2, 'Facial', 'European Facial', '', '600'),
(3, 'Facial', 'Acne Facial', '', '500'),
(4, 'Facial', 'Hydrating Facial', '', '900'),
(5, 'Facial', 'Microdermabrasion', '', '900'),
(6, 'Facial', 'Pumpkin Peel', '', '900'),
(7, 'Facial', 'Glycolic Peel', '', '900'),
(8, 'Facial', 'Pumpkin Peel', '', '900'),
(9, 'Facial', 'Eye Treatmentl', '', '900');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`firstname`, `lastname`, `email`, `phone`, `username`, `password`, `role`, `photo`, `city`, `id`) VALUES
('samiksha', 'kamble', 'samiksha@123', '7876787678', 'samiksha123', 'samiksha@123', 'USER', NULL, 'nagpur', 1),
('kajal', 'ukey', 'kajal@gmail.com', '7876787678', 'kajal', 'a2FqYWwxMjM=', 'USER', '', 'nagpur', 2),
('Asmita', 'Gaikwad', 'asmitagaikwad2000@gm', '07410560033', 'asmitag@inouvelle.com', 'asmita123', 'USER', '1688552799500-loginimage-removebg-preview.png', 'nagpur', 3),
('komal', 'narware', 'komal@gmail.com', '7898789878', 'komal', 'a29tYWwxMjM=', 'customer', NULL, 'nagpur', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
