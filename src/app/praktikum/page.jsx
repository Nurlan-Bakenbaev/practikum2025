"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Database,
  Network,
  Router,
  Cable,
  SwitchCamera,
  Power,
  Fan,
} from "lucide-react";
import Image from "next/image";
const serverInfo = [
  {
    title: "Was ist ein Server?",
    text: "Ein Server ist ein leistungsstarker Computer oder ein spezielles Gerät, das Ressourcen, Daten, Dienste oder Programme anderen Computern (Clients) über ein Netzwerk bereitstellt. Server gibt es in verschiedenen Typen: Datei-, Web-, E-Mail- und Datenbankserver. Sie sind für den Dauerbetrieb und hohe Auslastung ausgelegt.",
    icon: <Server size={48} />,
    imgAlt: "Server",
    imgSrc: "/praktikum/server.jpg",
  },
  {
    title: "Komponenten eines Serverraums",
    text: "Im Serverraum befinden sich Server, Speichersysteme, Netzwerkausrüstung, unterbrechungsfreie Stromversorgungen (USV), Kühlsysteme, Racks und Kabeltrassen. All diese Komponenten sorgen für einen sicheren und unterbrechungsfreien Betrieb.",
    icon: <Cpu size={48} />,
    imgAlt: "Serverraum-Komponenten",
    imgSrc: "/praktikum/komponenten.jpg",
  },
  {
    title: "Woraus besteht ein Server?",
    text: "Die Hauptkomponenten eines Servers sind: Prozessor (CPU), Arbeitsspeicher (RAM), Festplatten (HDD/SSD), Netzwerkkarten (NIC), Netzteil, Mainboard und Kühlsystem. Alle Komponenten sind für hohe Leistung und Zuverlässigkeit ausgelegt.",
    icon: <HardDrive size={48} />,
    imgAlt: "Server-Bestandteile",
    imgSrc: "/praktikum/server-komponent.jpg",
  },
  {
    title: "Netzwerkausrüstung",
    text: "Zur Verbindung der Server untereinander und mit externen Netzwerken werden Switches, Router, Patchpanels und Netzwerkkabel verwendet. Diese Geräte sorgen für eine schnelle und zuverlässige Datenübertragung.",
    icon: <Network size={48} />,
    imgAlt: "Netzwerkausrüstung",
    imgSrc: "/praktikum/Netzwerkausrüstung.jpg",
  },
  {
    title: "Speichersysteme",
    text: "Für die Speicherung großer Datenmengen werden Speichersysteme wie RAID-Arrays, NAS (Network Attached Storage) und SAN (Storage Area Network) eingesetzt. Sie bieten Ausfallsicherheit und schnellen Datenzugriff.",
    icon: <Database size={48} />,
    imgAlt: "Speichersysteme",
    imgSrc: "/praktikum/speicher-system.jpg",
  },
  {
    title: "Switch (Netzwerk-Switch)",
    text: "Ein Switch ist ein Netzwerkgerät, das mehrere Geräte in einem Netzwerk verbindet und den Datenverkehr zwischen ihnen steuert. In Serverräumen werden meist Managed Switches mit VLAN-Unterstützung eingesetzt.",
    icon: <SwitchCamera size={48} />,
    imgAlt: "Switch",
    imgSrc: "/praktikum/switch.jpg",
  },
  {
    title: "Router",
    text: "Ein Router verbindet das lokale Netzwerk mit externen Netzwerken (z.B. dem Internet), steuert die Weiterleitung von Datenpaketen und sorgt mit integrierten Firewalls für Sicherheit.",
    icon: <Router size={48} />,
    imgAlt: "Router",
    imgSrc: "/praktikum/router.jpg",
  },
  {
    title: "Ethernet-Kabel",
    text: "Ethernet-Kabel (Twisted Pair) werden zur Verbindung von Servern, Switches und anderer Netzwerktechnik verwendet. Sie ermöglichen eine schnelle Datenübertragung und sind in verschiedenen Kategorien erhältlich (Cat5e, Cat6, Cat6a usw.).",
    icon: <Cable size={48} />,
    imgAlt: "Ethernet-Kabel",
    imgSrc: "/praktikum/ethernet-kabel.jpg",
  },
  {
    title: "USV (Unterbrechungsfreie Stromversorgung)",
    text: "Eine USV versorgt Server und Netzwerktechnik bei Stromausfall weiterhin mit Energie und verhindert so Datenverlust und Ausfälle. In Serverräumen werden leistungsstarke USVs mit Monitoring eingesetzt.",
    icon: <Power size={48} />,
    imgAlt: "USV",
    imgSrc: "/praktikum/ups.jpg",
  },
  {
    title: "Kühlsystem",
    text: "Zur Aufrechterhaltung der optimalen Temperatur im Serverraum werden Klimaanlagen, Lüfter und Klimamonitoring-Systeme eingesetzt. Eine gute Kühlung ist entscheidend für den stabilen Betrieb der Technik.",
    icon: <Fan size={48} />,
    imgAlt: "Kühlsystem",
    imgSrc: "/praktikum/cooling-system.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const Praktikum = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-8">Serverraum und Server</h1>
      </motion.div>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {serverInfo.map((item, idx) => (
          <motion.div
            key={item.title}
            className={`flex flex-col md:flex-row 
                bg-linear-90 from-slate-900 to-gray-800
                items-center 
                md:items-stretch
                 rounded-lg shadow-md p-4 gap-2 ${
                   idx % 2 === 1 ? "md:flex-row-reverse" : ""
                 }`}
            custom={idx}
            initial={{
              opacity: 0,
              x: idx % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: idx * 0.15, duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.2 }}>
            <div className="flex flex-col flex-1 items-center justify-center ">
              <div className="flex  flex-col items-center justify-center ">
                <Image
                  width={500}
                  height={400}
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className="rounded-lg shadow-lg 
                  drop-shadow-xl
                  transition-transform duration-300 ease-in-out
                  transform hover:scale-105
                  w-96 h-64 object-cover object-center"
                  placeholder="blur"
                  blurDataURL={item.imgSrc}
                />
              </div>
              <p className="text-xl mt-2 ">{item.imgAlt}</p>
            </div>
            <div className="flex   flex-col justify-center w-full md:w-1/2">
              <div className="flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-base">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Praktikum;
