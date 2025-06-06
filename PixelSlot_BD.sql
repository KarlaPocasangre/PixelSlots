-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: casino_pixel
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `puntaje`
--

DROP TABLE IF EXISTS `puntaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puntaje` (
  `id` int NOT NULL AUTO_INCREMENT,
  `puntaje` int DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `puntaje_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntaje`
--

LOCK TABLES `puntaje` WRITE;
/*!40000 ALTER TABLE `puntaje` DISABLE KEYS */;
INSERT INTO `puntaje` VALUES (1,0,1),(2,100,2),(3,250,3),(4,300,4),(5,50,5),(6,180,6),(7,220,7),(8,90,8),(9,310,9),(10,150,10),(11,0,14),(12,0,15),(13,0,16),(14,1500,17),(15,0,18),(16,0,19),(17,1300,20),(18,650,21);
/*!40000 ALTER TABLE `puntaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `fichas` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Karla','karla@example.com',18,'Moru','1234',5),(2,'Luis','luis@example.com',24,'Luigi','abcd',5),(3,'Ana','ana@example.com',21,'Anita','5678',5),(4,'Carlos','carlos@example.com',30,'Carlitros','pass123',5),(5,'Sofía','sofia99@example.com',26,'Sofi99','sofia2023',5),(6,'José','jose123@example.com',29,'Pepe123','josepass',5),(7,'María','maria_m@example.com',23,'Mery','contraseña',5),(8,'Diego','diegox@example.com',32,'D1ego','qwerty',5),(9,'Lucía','lucia.lulu@example.com',22,'Lulu','123lucia',5),(10,'Andrés','andy.g@example.com',27,'AndyG','andresg',5),(11,'Nabil','nabil@example.com',22,'bagre777','$2b$10$Ngj97iKfsFHxYhHkAAgnhOY.05hFscBGzJtnczKIFDseD9BFxERq2',5),(12,'yourass','tuculo@example.com',25,'ass123','$2b$10$B3WBT5fmtFiSSxe.SmlpDur0DFudF0LhLPGFhoQrRE9DcpFjXGsOa',5),(14,'yourass','tu@example.com',25,'ass','$2b$10$bQBQsNStoDWIXFsiBCgLt.j3us3GGnHr/Re/N9Zw6s.aXcIwvG.ja',5),(15,'Salvador','berserker@example.com',25,'Berserker','$2b$10$ttWN0FXzqoP11wP51ZXf6.ZPbOf9xPCkmooEek8v8KRIEaz1TWxxi',5),(16,'Alfredo','Sunshine@example.com',26,'MaelSunshine','$2b$10$LwhsCmV9uxVl4cfC5PFAqe5bOnKPXv4z/uqvG3kta3hJ2cFeB41gC',5),(17,'Ejemplo','ejemplo123@example.com',20,'ejemplo123','$2b$10$mRI6WSVxsYZIUQsjS7ieEu8lTy2.29ppJy1E0TwbBc624yBa.tCi.',5),(18,'Armando','armandusky@gay.com',22,'ArmGei','$2b$10$j1as/ZrhJPU5JJk6Hx9vNOK.rg5YrrfRUpRZr6XiwAprTcn0Cph4G',5),(19,'Armando2','armandusky2@gay.com',25,'ArmGei2','$2b$10$zwIwxhw/eJo7OoTb8/FBueHGssexWlo/J1.qXczXKMkRxDxm99PWe',5),(20,'ChambitaBB','algo@algo.com',25,'Berserker13','$2b$10$AWTTJsMrjri2mQjTy3NmB.vgHrcR06kycJMdNAfIYjFPNO1WO/4BC',0),(21,'ErikcitoBB','Erikejemplo@gmail.com',20,'UlisesBB','$2b$10$CsXJF6qxfXyrZ64pS..m3OtTIqnzR73c88XmWH7IvdNZ3VwvLR./2',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-29 16:50:07
