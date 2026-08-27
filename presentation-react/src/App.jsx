import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { 
  Cpu, Microchip, Binary, Activity,
  BrainCircuit, Eye, Wrench, ThermometerSun, Tractor,
  Code2, Network, Database, MonitorDot,
  Server, Lightbulb, Combine, Sprout, Plane, Factory, GraduationCap, ExternalLink
} from 'lucide-react';

import { PROGRAMS, DIMENSIONS, FINDINGS, BENCHMARK_UPDATED } from './benchmarkData.js';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import './App.css';

// ------------------------------
// DATA STRUCTURES
// ------------------------------
const presentationData = {
  cpe: {
    targetName: "Computer Engineering (RMU)",
    targetAbbr: "CPE",
    targetSubtitle: "The System Builders",
    intersectPercent: 60,
    circleTarget: [
      { name: "Operating Systems", icon: Microchip },
      { name: "Computer Architecture", icon: Cpu },
      { name: "Digital Systems Design", icon: Binary },
      { name: "Microprocessors", icon: Cpu },
      { name: "Engineering Physics", icon: Activity }
    ],
    circleAI: [
      { name: "Machine/Deep Learning", icon: Lightbulb },
      { name: "Computer Vision & NLP", icon: Eye },
      { name: "Mechanics of Solids", icon: Wrench },
      { name: "Thermo & Fluids", icon: ThermometerSun },
      { name: "Smart Agriculture", icon: Tractor }
    ],
    intersect: [
      { name: "Programming & Algorithms", icon: Code2 },
      { name: "Data Structures & DB", icon: Database },
      { name: "Network Systems", icon: Network },
      { name: "Software Engineering", icon: MonitorDot },
      { name: "Embedded & IoT Systems", icon: Cpu }
    ],
    slide3: {
      title: "Computer Engineering",
      icon: Server,
      desc: "มุ่งเน้นการสร้าง 'เครื่องจักรประมวลผล' ตั้งแต่ระดับล่างสุดจนถึงซอฟต์แวร์",
      features: [
        { title: "Hardware Deep-dive", desc: "เข้าใจวงจรดิจิทัลและสถาปัตยกรรมระดับลึก (Digital Systems Design, Microprocessors)", icon: Cpu },
        { title: "System Software", desc: "เชี่ยวชาญการทำงานของระบบปฏิบัติการและการจัดสรรทรัพยากร", icon: Microchip },
        { title: "Fundamental Sciences", desc: "เน้นฟิสิกส์วิศวกรรมและคณิตศาสตร์ดิสครีตเพื่อการประมวลผล", icon: Activity },
      ],
      notLearn: "ไม่ได้เรียนกลศาสตร์, อุณหพลศาสตร์, และไม่ได้เน้นไปที่ระบบเกษตรอัจฉริยะ (Smart Farming)"
    },
    slide4: {
      title: "AI Engineering",
      icon: BrainCircuit,
      desc: "นำเครื่องจักรมาสร้าง 'สมอง' เพื่อแก้ปัญหาและตัดสินใจในโลกกายภาพ",
      features: [
        { title: "Advanced Data Models", desc: "เจาะลึกอัลกอริทึมปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง (Deep Learning, Agentic AI)", icon: Lightbulb },
        { title: "Physical Engineering", desc: "เรียนรู้กลศาสตร์และความร้อน/ของไหล เพื่อควบคุมฮาร์ดแวร์จริง", icon: Wrench },
        { title: "Domain Specific", desc: "สร้างนวัตกรรมประยุกต์ใช้เฉพาะทาง เช่น โดรนเกษตรอัจฉริยะ (Smart Farming)", icon: Tractor },
      ],
      notLearn: "ไม่ได้เรียนการสร้างหรือออกแบบสถาปัตยกรรมซีพียู, ระบบปฏิบัติการ (OS) ระดับล่าง"
    },
    slide5: {
      targetDesc: "สร้างระบบคอมพิวเตอร์\nให้ทรงพลังและเสถียรที่สุด"
    }
  },
  mct: {
    targetName: "Mechatronics Engineering (KSU)",
    targetAbbr: "MCT",
    targetSubtitle: "The Automation Builders",
    intersectPercent: 50,
    circleTarget: [
      { name: "Mechanics of Machinery", icon: Wrench },
      { name: "PLC, Pneumatics & Hydraulics", icon: Activity },
      { name: "Electric Motor Drives & PID", icon: Cpu },
      { name: "Machine Design", icon: Microchip }
    ],
    circleAI: [
      { name: "Deep Learning (CNN, RNN)", icon: BrainCircuit },
      { name: "Computer Vision & NLP", icon: Eye },
      { name: "Agentic AI & Data Science", icon: Database }
    ],
    intersect: [
      { name: "Engineering Foundation (Math, Physics)", icon: Activity },
      { name: "Microcontrollers (Basic IoT)", icon: Cpu },
      { name: "Basic Thermo-Fluids", icon: ThermometerSun },
      { name: "Basic Programming (C/Python)", icon: Code2 }
    ],
    slide3: {
      title: "Mechatronics Eng.",
      icon: Combine,
      desc: "มุ่งเน้นความลึกทาง 'กายภาพและการควบคุม' เพื่อสร้างกลไกที่ทำงานอัตโนมัติตามตรรกะที่วางไว้",
      features: [
        { title: "Physical System Design", desc: "เรียนลึกถึงการออกแบบชิ้นส่วนเครื่องจักรกล กลศาสตร์เครื่องจักร และระบบไฮดรอลิกส์", icon: Wrench },
        { title: "Hard-Wired Automation", desc: "เชี่ยวชาญการเขียนโปรแกรมควบคุมระดับต่ำ (PLC) และการขับเคลื่อนมอเตอร์ไฟฟ้า (Motor Drives)", icon: Activity },
      ],
      notLearn: "ไม่ได้เรียนการสร้างโมเดล 'สมองกล' (Machine Learning) ที่สามารถเรียนรู้และตัดสินใจนอกเหนือจากเงื่อนไขที่เขียนโปรแกรมไว้"
    },
    slide4: {
      title: "AI Engineering",
      icon: BrainCircuit,
      desc: "มุ่งเน้นความลึกทาง 'อัลกอริทึมและข้อมูล' เพื่อสร้างสมองให้ระบบสามารถเรียนรู้ได้เอง",
      features: [
        { title: "Cognitive System Design", desc: "เรียนลึกการสร้างโมเดลโครงข่ายประสาทเทียม (Deep Learning) และการประมวลผลภาษา/ภาพ", icon: Lightbulb },
        { title: "Data-Driven Intelligence", desc: "เชี่ยวชาญการจัดการข้อมูลขนาดใหญ่เพื่อสอนให้ระบบคาดการณ์และตัดสินใจแบบ Agentic AI", icon: Eye },
      ],
      notLearn: "ไม่ได้เรียนลึกถึงการคำนวณออกแบบชิ้นส่วนเครื่องจักรกล (Machine Design) หรือการวิเคราะห์เสถียรภาพการควบคุมมอเตอร์เชิงลึก (PID Control)"
    },
    slide5: {
      targetDesc: "สร้างกลไก กล้ามเนื้อ\nและระบบประสาทสั่งการพื้นฐาน"
    }
  },
  agr: {
    targetName: "Smart Agriculture Eng. (KSU)",
    targetAbbr: "AGR",
    targetSubtitle: "The Agri-Tech Innovators",
    intersectPercent: 45,
    circleTarget: [
      { name: "Tractor Engineering", icon: Tractor },
      { name: "Agricultural Machinery", icon: Wrench },
      { name: "UAVs & Agri-Drones", icon: Plane },
      { name: "Agri-Processing (Mills)", icon: Factory }
    ],
    circleAI: [
      { name: "Deep Learning (CNN, RNN)", icon: BrainCircuit },
      { name: "Computer Vision & NLP", icon: Eye },
      { name: "Big Data Architecture", icon: Database }
    ],
    intersect: [
      { name: "IoT & Smart Sensors", icon: Activity },
      { name: "Basic Programming", icon: Code2 },
      { name: "Engineering Foundation", icon: Cpu }
    ],
    slide3: {
      title: "Smart Agriculture",
      icon: Sprout,
      desc: "มุ่งเน้นการนำเทคโนโลยีไป 'ประยุกต์ใช้' เพื่อยกระดับการเกษตรและการแปรรูปโดยตรง",
      features: [
        { title: "Agricultural Machinery & UAV", desc: "เชี่ยวชาญการออกแบบและใช้งานเครื่องจักรกลเกษตร รถแทรกเตอร์ และโดรนสำรวจ", icon: Tractor },
        { title: "Agri-Processing Tech", desc: "เข้าใจเทคโนโลยีหลังการเก็บเกี่ยว เช่น ระบบโรงสีข้าว โรงงานน้ำตาล แป้งมันสำปะหลัง", icon: Factory },
      ],
      notLearn: "ไม่ได้เจาะลึกการเขียนโปรแกรมสร้างอัลกอริทึม AI (Machine Learning Models) ที่ซับซ้อนจากศูนย์ เน้นการ 'ใช้งาน' เครื่องมือเป็นหลัก"
    },
    slide4: {
      title: "AI Engineering",
      icon: BrainCircuit,
      desc: "มุ่งเน้นการสร้าง 'สมองอัจฉริยะ' ที่สามารถคิดและตัดสินใจได้ในทุกอุตสาหกรรม",
      features: [
        { title: "Advanced Cognitive Models", desc: "สร้างโมเดล Machine Learning และ AI สมองกลที่มีความซับซ้อนและเรียนรู้ได้เอง", icon: Lightbulb },
        { title: "Cross-Industry Application", desc: "ประยุกต์ใช้ระบบอัจฉริยะได้ใน 'ทุกอุตสาหกรรม' ไม่จำกัดเฉพาะภาคการเกษตร", icon: Eye },
      ],
      notLearn: "ไม่ได้เรียนกลไกการทำงานของรถแทรกเตอร์ เครื่องจักรกลการเกษตรหนัก หรือสรีรวิทยาของพืช"
    },
    slide5: {
      targetDesc: "สร้างเครื่องจักรและเทคโนโลยี\nเพื่อยกระดับการเกษตร"
    }
  }
};


// ------------------------------
// COMPONENTS
// ------------------------------
const Slide1 = ({ data }) => (
  <div className="glass-panel text-center title-panel">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      key={data.targetAbbr} // re-animate on change
    >
      <div className="badge">CURRICULUM EVOLUTION</div>
      <h1>AI Engineering <span className="gradient-text-ai">vs</span> {data.targetAbbr}</h1>
      <p className="subtitle">การหลอมรวมและจุดต่างของสองศาสตร์แห่งอนาคต</p>
    </motion.div>
    <motion.div 
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span>Swipe, scroll, or use arrows</span>
      <div className="arrow-down">↓</div>
    </motion.div>
  </div>
);

const Slide2 = ({ data }) => {
  return (
    <>
      <h2 className="slide-title">The Intersection (ส่วนที่ทับซ้อนและแตกต่าง)</h2>
      <div className="venn-wrapper" key={data.targetAbbr}>
        <motion.div 
          className="venn-circle circle-cpe"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="circle-content left-content">
            <h3><data.slide3.icon className="inline-icon"/> {data.targetName}</h3>
            <p className="circle-subtitle">{data.targetSubtitle}</p>
            <ul>
              {data.circleTarget.map((item, idx) => (
                <li key={idx}><item.icon className="list-icon"/> {item.name}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="venn-circle circle-ai"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="circle-content right-content">
            <h3><BrainCircuit className="inline-icon"/> AI Engineering (KSU)</h3>
            <p className="circle-subtitle">The Intelligent Applicators</p>
            <ul>
              {data.circleAI.map((item, idx) => (
                <li key={idx}><span>{item.name}</span><item.icon className="list-icon"/></li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="venn-intersect"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        >
          <div className="intersect-content">
            <div className="percentage-badge">ความเหมือน {data.intersectPercent}%</div>
            <h4>Intersection</h4>
            <ul>
              {data.intersect.map((item, idx) => (
                <li key={idx}><item.icon className="list-icon"/> {item.name}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const Slide3 = ({ data }) => (
  <div className="layout-split" key={data.targetAbbr}>
    <div className="split-left gradient-bg-cpe">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
        <data.slide3.icon className="title-icon" size={64} />
        <h2>{data.slide3.title}</h2>
        <p className="big-text">{data.slide3.desc}</p>
      </motion.div>
    </div>
    <div className="split-right">
      <motion.div className="glass-card full-width" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3>จุดเด่น (Key Strengths)</h3>
        <div className="feature-grid">
          {data.slide3.features.map((item, idx) => (
            <div className="feature-box" key={idx}>
              <item.icon size={32} className="feature-icon cpe-color" />
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
          <div className="feature-box highlight-diff">
            <strong>สิ่งที่ไม่ได้เรียนเหมือน AI:</strong>
            <p>{data.slide3.notLearn}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide4 = ({ data }) => (
  <div className="layout-split" key={data.targetAbbr}>
    <div className="split-left gradient-bg-ai">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
        <BrainCircuit className="title-icon" size={64} />
        <h2>{data.slide4.title}</h2>
        <p className="big-text">{data.slide4.desc}</p>
      </motion.div>
    </div>
    <div className="split-right">
      <motion.div className="glass-card full-width" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3>จุดเด่น (Key Strengths)</h3>
        <div className="feature-grid">
          {data.slide4.features.map((item, idx) => (
            <div className="feature-box" key={idx}>
              <item.icon size={32} className="feature-icon ai-color" />
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
          <div className="feature-box highlight-diff">
            <strong>สิ่งที่ไม่ได้เรียนลึกเหมือน {data.targetAbbr}:</strong>
            <p>{data.slide4.notLearn}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide5 = ({ data }) => (
  <div className="glass-panel text-center conclusion-panel" key={data.targetAbbr}>
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Summary</motion.h2>
    <div className="conclusion-grid">
      <motion.div 
        className="conclusion-box box-cpe"
        initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
      >
        <h3><data.slide3.icon className="inline-icon"/> วิศวกรรม{data.targetAbbr === 'CPE' ? 'คอมพิวเตอร์' : data.targetAbbr === 'MCT' ? 'เมคคาทรอนิกส์' : 'เกษตรอัจฉริยะ'}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{data.slide5.targetDesc}</p>
      </motion.div>
      <motion.div 
        className="conclusion-box box-vs"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }}
      >
        <span>VS</span>
      </motion.div>
      <motion.div 
        className="conclusion-box box-ai"
        initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
      >
        <h3><BrainCircuit className="inline-icon"/> วิศวกรรมปัญญาประดิษฐ์</h3>
        <p>นำระบบคอมพิวเตอร์<br/>มาตัดสินใจแทนมนุษย์ในโลกจริง</p>
      </motion.div>
    </div>
  </div>
);

const OverviewSlide = () => (
  <div className="overview-slide">
    <motion.h2 
      className="slide-title"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      โครงสร้างหลักสูตร AI Engineering (100%)
    </motion.h2>
    <p style={{color: '#aaa', marginBottom: '2rem'}}>สัดส่วนความเชื่อมโยงกับศาสตร์วิศวกรรมแขนงต่างๆ</p>

    <div className="overview-wrapper">
      <motion.div 
         className="donut-chart"
         initial={{ scale: 0, rotate: -180 }}
         animate={{ scale: 1, rotate: 0 }}
         transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
      >
        <div className="donut-hole">
          <BrainCircuit size={48} className="ai-color" />
          <h3>AI Engineering</h3>
          <p>100%</p>
        </div>
      </motion.div>

      {/* Labels */}
      <motion.div 
        className="label-card label-top-right"
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
      >
         <h4><Server size={18}/> Computer Eng.</h4>
         <div className="percent">15%</div>
         <p>Network, OS, Software Engineering</p>
      </motion.div>

      <motion.div 
        className="label-card label-mid-right"
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
      >
         <h4><Combine size={18}/> Mechatronics</h4>
         <div className="percent">15%</div>
         <p>Microcontrollers, Sensors, Basic Hardware</p>
      </motion.div>

      <motion.div 
        className="label-card label-bottom-right"
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
      >
         <h4>Smart Agriculture <Sprout size={18}/></h4>
         <div className="percent">15%</div>
         <p>Smart Farming Apps, Remote Sensing</p>
      </motion.div>

      <motion.div 
        className="label-card label-bottom-left"
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
      >
         <h4>Industrial Eng. <Factory size={18}/></h4>
         <div className="percent">10%</div>
         <p>Optimization, Operations Research</p>
      </motion.div>

      <motion.div 
        className="label-card label-mid-left"
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}
      >
         <h4>Business & Analytics <Activity size={18}/></h4>
         <div className="percent">10%</div>
         <p>DSS, BI, Supply Chain, Product Design</p>
      </motion.div>

      <motion.div 
        className="label-card label-top-left"
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
      >
         <h4><BrainCircuit size={18}/> Exclusive to AI</h4>
         <div className="percent">35%</div>
         <p>Deep Learning, Agentic AI, Generative AI</p>
      </motion.div>
    </div>
  </div>
);

/* เทียบเคียงหลักสูตรวิศวกรรม AI ในประเทศไทย พร้อมลิงก์ไปเว็บทางการของแต่ละสถาบัน
   ข้อมูลจาก Labor_Growth_Report_Vault/05_Benchmark_AI_Programs_TH */
const BenchmarkSlide = () => (
  <div className="benchmark-slide">
    <motion.h2 className="slide-title"
      initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      เทียบหลักสูตรวิศวกรรม AI ในประเทศไทย
    </motion.h2>
    <p className="benchmark-sub">
      หลักสูตรระดับปริญญาตรี 5 แห่งที่นำมาเทียบเคียงกับหลักสูตร มกส. พ.ศ. 2570 · {BENCHMARK_UPDATED}
    </p>

    <div className="benchmark-table-wrap">
      <table className="benchmark-table">
        <thead>
          <tr>
            <th className="dim-col">มิติ</th>
            {PROGRAMS.map(p => (
              <th key={p.id} className={p.self ? "self-col" : ""}>
                <span className="mark">{p.mark}</span>
                <b>{p.institution}</b>
                <span className="campus">{p.campus}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="row-program">
            <td className="dim-col">หลักสูตร</td>
            {PROGRAMS.map(p => (
              <td key={p.id} className={p.self ? "self-col" : ""}>{p.program}</td>
            ))}
          </tr>
          {DIMENSIONS.map(d => (
            <tr key={d.key}>
              <td className="dim-col">{d.label}</td>
              {PROGRAMS.map(p => (
                <td key={p.id} className={p.self ? "self-col" : ""}>{p[d.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="benchmark-h3"><GraduationCap size={22} /> ลิงก์หลักสูตรของแต่ละสถาบัน</h3>
    <div className="benchmark-cards">
      {PROGRAMS.map((p, i) => (
        <motion.div key={p.id} className={"benchmark-card" + (p.self ? " is-self" : "")}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
          <div className="bc-head">
            <span className="mark">{p.mark}</span>
            <div>
              <b>{p.institution}</b>
              <span className="campus">{p.campus}</span>
            </div>
          </div>
          <div className="bc-program">{p.program}</div>
          <div className="bc-en">{p.programEn}</div>
          <p className="bc-note">{p.highlight}</p>
          <ul className="bc-links">
            {p.links.map(l => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noreferrer noopener">
                  <ExternalLink size={14} /> {l.label}
                  <span className="kind">{l.kind}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <h3 className="benchmark-h3"><Lightbulb size={22} /> ข้อค้นพบร่วมจากการเทียบเคียง</h3>
    <div className="benchmark-findings">
      {FINDINGS.map((f, i) => (
        <motion.div key={f.title} className="finding-box"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
          <strong>{f.title}</strong>
          <p>{f.desc}</p>
        </motion.div>
      ))}
    </div>

    <p className="benchmark-warn">
      ⚠️ เว็บไซต์ทางการของหลายหลักสูตรไม่เปิดเผยหน่วยกิตรวม โครงสร้างรายหมวด และ PLO ต่อสาธารณะ
      ช่องที่กำกับ ⚠️ จึงยังยืนยันไม่ได้ · ก่อนอ้างอิงในเอกสาร มคอ.2 ควรขอเล่มหลักสูตรฉบับเต็มจากสถาบันต้นทาง
    </p>
  </div>
);

function App() {
  const [mode, setMode] = useState('overview'); // 'cpe', 'mct', 'agr', 'overview'
  const data = presentationData[mode];

  return (
    <div className="app-container">
      {/* SIDEBAR NAVIGATION */}
      <div className="sidebar">
        <h3>Select Comparison</h3>
        <button 
          className={`menu-btn ${mode === 'overview' ? 'active' : ''}`}
          onClick={() => setMode('overview')}
        >
          <BrainCircuit size={20}/>
          AI Overview (100%)
        </button>
        <button 
          className={`menu-btn ${mode === 'benchmark' ? 'active' : ''}`}
          onClick={() => setMode('benchmark')}
        >
          <GraduationCap size={20}/>
          เทียบหลักสูตร AI ม.อื่น
        </button>
        <button 
          className={`menu-btn ${mode === 'cpe' ? 'active' : ''}`}
          onClick={() => setMode('cpe')}
        >
          <Server size={20}/>
          AI vs Computer Eng.
        </button>
        <button 
          className={`menu-btn ${mode === 'mct' ? 'active' : ''}`}
          onClick={() => setMode('mct')}
        >
          <Combine size={20}/>
          AI vs Mechatronics Eng.
        </button>
        <button 
          className={`menu-btn ${mode === 'agr' ? 'active' : ''}`}
          onClick={() => setMode('agr')}
        >
          <Sprout size={20}/>
          AI vs Smart Agriculture Eng.
        </button>
      </div>

      {/* MAIN PRESENTATION CONTENT */}
      <div className="main-content">
        {mode === 'overview' ? (
          <OverviewSlide />
        ) : mode === 'benchmark' ? (
          <BenchmarkSlide />
        ) : (
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            modules={[Mousewheel, Keyboard, Pagination]}
            className="presentation-container"
          >
            <SwiperSlide className="slide"><Slide1 data={data} /></SwiperSlide>
            <SwiperSlide className="slide"><Slide2 data={data} /></SwiperSlide>
            <SwiperSlide className="slide"><Slide3 data={data} /></SwiperSlide>
            <SwiperSlide className="slide"><Slide4 data={data} /></SwiperSlide>
            <SwiperSlide className="slide"><Slide5 data={data} /></SwiperSlide>
          </Swiper>
        )}
      </div>

      {/* Animated Background Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>
    </div>
  );
}

export default App;
