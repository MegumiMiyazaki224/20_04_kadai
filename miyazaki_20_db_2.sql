-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018 年 3 月 16 日 15:33
-- サーバのバージョン： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `miyazaki_20_db_2`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `miyazaki_20_table_2`
--

CREATE TABLE IF NOT EXISTS `miyazaki_20_table_2` (
`id` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `memo` text COLLATE utf8_unicode_ci NOT NULL,
  `indate` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `miyazaki_20_table_2`
--

INSERT INTO `miyazaki_20_table_2` (`id`, `name`, `score`, `memo`, `indate`) VALUES
(1, 'てすとさん', 20000, 'ゲーム中の画像が変わらないんだよねえ…涙。とりあえず登録されるかな？', '2018-03-15 22:36:08'),
(17, 'てすと２回目', 31110, 'スコアが反映しないよう〜〜〜涙', '2018-03-15 22:51:18'),
(18, 'ほげ〜〜', 1000, 'ほげほげ〜〜', '2018-03-15 23:44:36'),
(25, 'ほげえ', 1000, 'あああ、テスト', '2018-03-16 10:25:50'),
(26, '名前さん', 12345, 'お腹すいた', '2018-03-16 10:32:50'),
(27, 'めめめ', -1000, '間違えまくった', '2018-03-16 10:33:25'),
(28, 'てすとあああ', 33333, 'うおおお', '2018-03-16 17:51:34'),
(29, '８にんめ', 440, 'んむむ', '2018-03-16 17:53:33'),
(30, '９人目', 100, 'ひょ〜', '2018-03-16 17:53:45'),
(31, '１０人目', -50, 'うっひゅ', '2018-03-16 17:54:03'),
(32, '１１人目', -30000, 'これが表示されたらおかしい。', '2018-03-16 17:54:23'),
(33, 'むむむぅ', 20000, '悔しい。エラーが多すぎる', '2018-03-16 22:50:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `miyazaki_20_table_2`
--
ALTER TABLE `miyazaki_20_table_2`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `miyazaki_20_table_2`
--
ALTER TABLE `miyazaki_20_table_2`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
