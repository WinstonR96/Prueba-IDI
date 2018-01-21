-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-01-2018 a las 17:35:33
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_idi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitores`
--

CREATE TABLE `monitores` (
  `id` bigint(20) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `programa_academico` varchar(100) NOT NULL,
  `semestre` int(11) NOT NULL,
  `cedula` bigint(20) NOT NULL,
  `numero_contacto` bigint(20) NOT NULL,
  `estado` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monitores`
--

INSERT INTO `monitores` (`id`, `nombres`, `apellidos`, `programa_academico`, `semestre`, `cedula`, `numero_contacto`, `estado`) VALUES
(1, 'Romario', 'Parra Barrios', 'Ingenieria de sistemas', 9, 1237598, 369852147, 1),
(2, 'Evelin', 'Silva Hurtado', 'Ingenieria Civil', 10, 147852369, 3554, -1),
(3, 'Jose Elias', 'Barraza', 'Ingenieria de sistemas', 10, 457546, 23563, 1),
(4, 'Winston Junior', 'Rodriguez Stand', 'Ingenieria de Sistemas', 8, 1045742017, 2147483647, 1),
(5, 'Mafe', 'Barrios', 'Ing. Industrial', 8, 24323, 32432, -1),
(7, 'Winston', 'Rodriguez Fernandez', 'Arquitectura', 0, 3715918, 8657, -1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitorias`
--

CREATE TABLE `monitorias` (
  `id` bigint(20) NOT NULL,
  `nombre_materia` varchar(100) NOT NULL,
  `monitor_asignado` bigint(20) NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `salon` varchar(10) NOT NULL,
  `estado` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monitorias`
--

INSERT INTO `monitorias` (`id`, `nombre_materia`, `monitor_asignado`, `fecha`, `salon`, `estado`) VALUES
(1, 'Programacion II', 3, '2018-01-19 13:09:45', '11307', 1),
(2, 'Estructura III', 2, '2018-01-19 13:12:38', '10305', -1),
(3, 'Sistemas Operativos', 4, '2018-01-20 09:55:07', '210', 1),
(4, 'Desarrollo Web', 3, '2018-01-20 22:13:59', '11208', 1),
(5, 'PRueba', 1, '2018-01-21 11:25:22', '223', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monitores`
--
ALTER TABLE `monitores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `monitorias`
--
ALTER TABLE `monitorias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mon` (`monitor_asignado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `monitores`
--
ALTER TABLE `monitores`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `monitorias`
--
ALTER TABLE `monitorias`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `monitorias`
--
ALTER TABLE `monitorias`
  ADD CONSTRAINT `fk_mon` FOREIGN KEY (`monitor_asignado`) REFERENCES `monitores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
