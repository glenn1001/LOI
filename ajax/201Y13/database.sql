-- phpMyAdmin SQL Dump
-- version 3.5.0
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 08 apr 2012 om 12:08
-- Serverversie: 5.0.77-cll
-- PHP-Versie: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `glenn_loi`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Gegevens worden uitgevoerd voor tabel `blog`
--

INSERT INTO `blog` (`id`, `title`, `description`, `date`) VALUES
(1, '1', 'Fusce in metus id ligula molestie mollis. Fusce mollis malesuada faucibus. In hac habitasse platea dictumst. Nunc dictum, ipsum eget.', '2012-04-07 07:10:36'),
(2, '2', 'Fusce sit amet nulla in nulla aliquam consequat eget vitae magna. Aenean nec nibh vel massa adipiscing tempor nec id.', '2012-04-07 07:10:49'),
(3, '3', 'Nullam dictum magna id libero eleifend pharetra. Sed tristique libero vel tellus facilisis convallis. Suspendisse imperdiet venenatis dui ac iaculis.', '2012-04-07 07:10:57'),
(4, '4', 'Vivamus at risus sed urna accumsan adipiscing. Aenean tempus erat a turpis sagittis pharetra. Mauris feugiat dapibus purus ac volutpat.', '2012-04-07 07:11:07'),
(5, '5', 'Proin sit amet magna vel quam ultricies dapibus. Sed interdum nibh et nulla eleifend ultrices. Quisque ullamcorper ante egestas arcu.', '2012-04-07 07:19:56');
(6, '6', 'Donec et dolor sed dolor aliquet facilisis. Donec quis eleifend urna. Vestibulum viverra metus at velit ullamcorper vel rutrum orci.', '2012-04-07 07:21:16'),
(7, '7', 'Cras faucibus cursus orci quis condimentum. Curabitur magna odio, consequat ut bibendum sed, aliquam non libero. Donec gravida aliquam augue.', '2012-04-07 07:29:27'),
(8, '8', 'Nullam et libero non dui convallis feugiat non non felis. Curabitur dignissim sodales scelerisque. Ut dui leo, vulputate a gravida.', '2012-04-07 07:30:04'),
(9, '9', 'Cras suscipit dolor eu nisi rhoncus vel tincidunt nulla adipiscing. Nunc porttitor dignissim massa, et mattis tellus rutrum eu. Vivamus.', '2012-04-07 07:30:30'),
(10, '10', 'Morbi sed nisi eget ligula dapibus dignissim. In consectetur semper odio. In placerat luctus ipsum a ornare. Phasellus interdum dignissim.', '2012-04-07 07:30:50'),
(11, '11', 'In hac habitasse platea dictumst. Integer ac nunc volutpat velit feugiat adipiscing. Suspendisse ut dolor at augue accumsan cursus pellentesque.', '2012-04-07 07:31:03'),
(12, '12', 'Donec nibh sem, accumsan eu condimentum et, sollicitudin mollis lacus. Sed ullamcorper vehicula elementum. Ut augue sem, egestas quis viverra.', '2012-04-07 07:31:21'),

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `type` enum('A','U') NOT NULL,
  PRIMARY KEY  (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden uitgevoerd voor tabel `user`
--

INSERT INTO `user` (`user`, `pass`, `type`) VALUES
('loi', 'loi', 'A');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
