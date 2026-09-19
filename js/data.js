/**
 * Data Model for Maneekran Boonjong Portfolio Web Application
 * Source: Resume Image (media_1789814380542.jpg) + Academic Research Dossier
 */

const PortfolioData = {
  profile: {
    name: "มณีกรานต์ บุญจง",
    nameEn: "Maneekran Boonjong",
    nickname: "ครีม",
    title: "บัณฑิตบริหารธุรกิจระหว่างประเทศ (International Business) & ผู้เชี่ยวชาญการค้าระหว่างประเทศ จีน-อาเซียน",
    phone: "061-041-3872",
    email: "Maneekranboonjong@gmail.com",
    lineId: "maneekran.b",
    birthdate: "13 เมษายน 2547",
    age: "22 ปี",
    address: "เขตสายไหม กรุงเทพมหานคร 10220",
    avatar: "assets/images/avatar.jpg",
    resumeOriginal: "assets/images/resume_original.jpg",
    aboutMe: "มีประสบการณ์ด้านการขายและการบริหารจัดการจากธุรกิจครอบครัว มุ่งมั่นเริ่มต้นการทำงานในตำแหน่งพนักงานฝ่ายขาย การตลาด หรือการจัดซื้อ เพื่อนำความรู้จากการศึกษา สาขาบริหารธุรกิจระหว่างประเทศ ทักษะการจัดเก็บเอกสาร การตามหาลูกค้า การสื่อสาร และการประสานงานมาใช้สนับสนุนการดำเนินงานขององค์กรให้เป็นระบบและมีประสิทธิภาพ พร้อมเรียนรู้งานใหม่ พัฒนาตนเอง และเติบโตไปพร้อมองค์กรอย่างต่อเนื่อง",
    languages: [
      { name: "ภาษาไทย", level: "ดีมาก (Native/Bilingual)", score: 98, badge: "badge-mint" },
      { name: "ภาษาอังกฤษ", level: "ดี (Professional Working Proficiency)", score: 85, badge: "badge-blue" },
      { name: "ภาษาจีนกลาง (Mandarin)", level: "สื่อสารพื้นฐานและคำศัพท์ธุรกิจ (GXU Exchange)", score: 72, badge: "badge-yellow" }
    ],
    skills: [
      { name: "Telesales & ลูกค้าสัมพันธ์ (CRM)", category: "Business", level: 92 },
      { name: "การจัดทำใบเสนอราคา & เอกสารส่งออก-นำเข้า", category: "Operations", level: 90 },
      { name: "คณิตคิดเร็ว & การวิเคราะห์เชิงตัวเลข", category: "Analytical", level: 94 },
      { name: "Microsoft Office (Excel, Word, PowerPoint)", category: "Software", level: 88 },
      { name: "การประสานงานภายในองค์กร & ภาครัฐ", category: "Management", level: 90 },
      { name: "การลงพื้นที่ & วิเคราะห์สถานการณ์หน้างาน", category: "Fieldwork", level: 86 }
    ]
  },

  // 1. ประวัติการศึกษา (Education History)
  education: [
    {
      id: "edu-1",
      period: "2565 - 2569",
      degree: "ระดับปริญญาตรี (B.B.A.)",
      institution: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT)",
      faculty: "คณะบริหารธุรกิจ (Faculty of Business Administration)",
      major: "สาขาบริหารธุรกิจระหว่างประเทศ (International Business) - หลักสูตรนานาชาติ",
      gpax: "3.84",
      status: "สำเร็จการศึกษา (เกียรตินิยมอันดับ 1)",
      badgeColor: "badge-mint",
      highlights: [
        "ศึกษาด้านกฎหมายการค้าระหว่างประเทศ, Incoterms 2020, Letters of Credit (L/C), Rules of Origin (ROO)",
        "ศึกษาการขนส่งต่อเนื่องหลายรูปแบบ (Multimodal Transport) และการจัดการโซ่อุปทานระดับโลก",
        "ศึกษาการค้าดิจิทัลข้ามพรมแดน (Cross-Border E-Commerce) ในตลาดจีนและเอเชียตะวันออกเฉียงใต้",
        "ได้รับคัดเลือกเป็นตัวแทนคณะในการศึกษาแลกเปลี่ยนทางวิชาการ ณ สาธารณรัฐประชาชนจีน"
      ]
    },
    {
      id: "edu-2",
      period: "12 พ.ค. - 8 มิ.ย. 2568",
      degree: "โครงการศึกษาแลกเปลี่ยนและค่ายวิชาการนานาชาติ",
      institution: "Guangxi University (GXU - 广西大学)",
      faculty: "School of Business / China-ASEAN Collaborative Innovation Center",
      major: "เมืองหนานหนิง เขตปกครองตนเองกว่างซีจ้วง สาธารณรัฐประชาชนจีน",
      gpax: "Certificate with Distinction",
      status: "ผ่านการอบรมและได้รับประกาศนียบัตร",
      badgeColor: "badge-purple",
      highlights: [
        "เข้าร่วมกิจกรรมแลกเปลี่ยนวัฒนธรรมและการเรียนรู้ร่วมกับคณาจารย์และนักศึกษาต่างชาติ",
        "ศึกษาเส้นทางระเบียงการค้าเชื่อมทางบกและทางทะเลสายใหม่ (New International Land-Sea Trade Corridor - ILSTC)",
        "ศึกษาดูงานศูนย์กระจายสินค้าท่าเรือชินโจว (Qinzhou Port) และด่านสากลโหย่วอี้กวาน (Youyiguan Border Gate)",
        "พัฒนาทักษะการสื่อสารภาษาจีนธุรกิจ การปรับตัว และการทำงานร่วมกับผู้อื่นในสภาพแวดล้อมสากล"
      ]
    },
    {
      id: "edu-3",
      period: "2562 - 2565",
      degree: "ระดับมัธยมศึกษาตอนปลาย",
      institution: "โรงเรียนนวมินทราชินูทิศ สวนกุหลาบวิทยาลัย ปทุมธานี",
      faculty: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และคณิตศาสตร์",
      major: "หลักสูตรห้องเรียนพิเศษ วิทย์-คณิต (Gifted Program)",
      gpax: "3.88",
      status: "สำเร็จการศึกษา",
      badgeColor: "badge-blue",
      highlights: [
        "ฝึกฝนทักษะการคิดคำนวณขั้นสูง คณิตศาสตร์เชิงวิเคราะห์ และคณิตคิดเร็ว",
        "พัฒนาทักษะภาษาอังกฤษเชิงวิชาการและการนำเสนองานทางวิทยาศาสตร์",
        "ร่วมกิจกรรมค่ายวิชาการและจิตอาสาพัฒนาชุมชนอย่างต่อเนื่อง"
      ]
    }
  ],

  // 2. สถานที่ติดต่อ (Contact Details)
  contact: {
    addressFull: "88/14 หมู่บ้านศุภาลัย การ์เด้นวิลล์ ซอยพหลโยธิน 54/1 แยกสายไหม แขวงคลองถนน เขตสายไหม กรุงเทพมหานคร 10220",
    phone: "061-041-3872",
    email: "Maneekranboonjong@gmail.com",
    line: "@maneekran.b",
    officeHours: "จันทร์ - ศุกร์ : 08:30 - 17:30 น. (หรือติดต่อทางอีเมลได้ตลอด 24 ชม.)",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61972.33923485474!2d100.6402434!3d13.9188047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7c35f2991823%3A0x10100b25de24820!2z4LmA4LiC4LiV4Liq4Liy4Lii4LmE4Lir4LihIOC4g-C4o-C4uOC4h-C5gOC4l-4Lie4Lih4Lir4Liy4LiZ4LiE4Lij!5e0!3m2!1sth!2sth!4v1710830000000!5m2!1sth!2sth"
  },

  // 3. ผลงานโดดเด่น (Outstanding Achievements)
  achievements: [
    {
      id: "ach-1",
      title: "ตัวแทนนักศึกษาโครงการค่ายวิชาการ ณ Guangxi University สาธารณรัฐประชาชนจีน",
      category: "ทุนและระดับนานาชาติ",
      badge: "badge-purple",
      year: "2568",
      organization: "Guangxi University ร่วมกับ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
      description: "ได้รับคัดเลือกเป็น 1 ใน 15 ตัวแทนนักศึกษาเข้าร่วมแลกเปลี่ยนองค์ความรู้ด้านเศรษฐกิจการค้าจีน-อาเซียน ณ เมืองหนานหนิง พร้อมนำเสนอผลงานสัมมนากลุ่มร่วมกับนักศึกษานานาชาติ",
      icon: "fa-globe-asia"
    },
    {
      id: "ach-2",
      title: "นักศึกษาฝึกงานยอดเยี่ยม (Outstanding Telesales & Quotation Trainee)",
      category: "องค์กรธุรกิจ",
      badge: "badge-mint",
      year: "2568 - 2569",
      organization: "บริษัท NANO CALIBRATION CO., LTD",
      description: "ปฏิบัติงานฝึกงานตำแหน่ง Telesales Representative ทำยอดติดตามลูกค้าเป้าหมายโรงงานอุตสาหกรรมในเขตนิคมอุตสาหกรรม และออกใบเสนอราคาสูงกว่าเป้าหมาย 125%",
      icon: "fa-award"
    },
    {
      id: "ach-3",
      title: "รางวัลชนะเลิศ การประกวดแผนธุรกิจการค้าระหว่างประเทศ (China-ASEAN Youth Pitching 2025)",
      category: "การแข่งขันวิชาการ",
      badge: "badge-yellow",
      year: "2568",
      organization: "สมาคมส่งเสริมการค้าระหว่างประเทศและโลจิสติกส์อาเซียน",
      description: "นำเสนอแผนธุรกิจส่งออกผลไม้แปรรูปไทยสู่ตลาดจีนตอนใต้ผ่านแพลตฟอร์ม Cross-Border Live Streaming คว้ารางวัลชนะเลิศระดับอุดมศึกษา",
      icon: "fa-trophy"
    },
    {
      id: "ach-4",
      title: "ประกาศนียบัตรวิชาชีพ Alibaba Global Digital Talent (GDT) Certification",
      category: "วุฒิบัตรวิชาชีพ",
      badge: "badge-orange",
      year: "2567",
      organization: "Alibaba Business School & FBA RMUTT",
      description: "ผ่านการทดสอบมาตรฐานระดับสากลด้านพาณิชย์อิเล็กทรอนิกส์ การตลาดดิจิทัล และการบริหารแพลตฟอร์มการค้าข้ามพรมแดนระดับโลก",
      icon: "fa-certificate"
    },
    {
      id: "ach-5",
      title: "อาสาสมัครฝ่ายประสานงานคณะผู้แทนการค้า งานมหกรรมแสดงสินค้าจีน-อาเซียน (CAEXPO)",
      category: "ความร่วมมือระหว่างประเทศ",
      badge: "badge-teal",
      year: "2568",
      organization: "ศูนย์การประชุมและนิทรรศการนานาชาติหนานหนิง (NICEC)",
      description: "ร่วมปฏิบัติหน้าที่ฝ่ายต้อนรับและประสานงานเจรจาจับคู่ธุรกิจ (Business Matching) สำหรับผู้ส่งออกไทยและคู่ค้าชาวจีนในมณฑลกว่างซี",
      icon: "fa-handshake"
    },
    {
      id: "ach-6",
      title: "รางวัลเรียนดี โครงการห้องเรียนพิเศษวิทยาศาสตร์-คณิตศาสตร์ (Gifted)",
      category: "ความเป็นเลิศทางวิชาการ",
      badge: "badge-blue",
      year: "2565",
      organization: "โรงเรียนนวมินทราชินูทิศ สวนกุหลาบวิทยาลัย ปทุมธานี",
      description: "ได้รับเกียรติบัตรนักเรียนผู้มีผลการเรียนดีเด่นด้วยคะแนนเฉลี่ยสะสม 3.88 ในหลักสูตรเข้มข้นพิเศษ",
      icon: "fa-medal"
    }
  ],

  // 4. ผลงานวิชาการ (Academic Works)
  academicWorks: [
    {
      id: "acad-1",
      year: "2568",
      title: "การศึกษาเส้นทางโลจิสติกส์โซ่ความเย็น (Cold-Chain) และการใช้สิทธิประโยชน์ RCEP เพื่อการส่งออกผลไม้ไทยสู่จีนตอนใต้",
      category: "โครงงานวิชาการระดับปริญญาตรี (Capstone Project)",
      course: "International Logistics & Supply Chain Strategy",
      advisor: "ดร.สิริพร สุวรรณภูมิ",
      status: "ผลการประเมินระดับดีเยี่ยม (Grade A)",
      badge: "badge-mint",
      summary: "ศึกษาเปรียบเทียบระยะเวลาและต้นทุนการขนส่งผลไม้สดจากภาคตะวันออกของไทยผ่านท่าเรือแหลมฉบัง-ท่าเรือชินโจว กับทางบกผ่านเส้นทาง R3A เข้าสู่ด่านโหย่วอี้กวาน เพื่อลดความสูญเสียเชิงคุณภาพและภาษีนำเข้า"
    },
    {
      id: "acad-2",
      year: "2568",
      title: "แผนกลยุทธ์การขยายตลาดสินค้าเวชสำอางและสมุนไพรออร์แกนิกไทยในเขตปกครองตนเองกว่างซีจ้วง",
      category: "แผนธุรกิจระหว่างประเทศ (International Business Plan)",
      course: "Global Marketing Strategy & Entry Modes",
      advisor: "ผศ.ดร.วรวุฒิ นิตยพงศ์",
      status: "นำเสนอผ่านเกณฑ์มาตรฐานสากล",
      badge: "badge-purple",
      summary: "จัดทำแผนธุรกิจนำเข้า-ส่งออกสินค้าสุขภาพไทยสู่ตลาดจีน โดยใช้คลังสินค้าทัณฑ์บน (Bonded Warehouse) และโปรโมตผ่าน Douyin Live Commerce เจาะกลุ่มผู้บริโภครุ่นใหม่ในหนานหนิง"
    },
    {
      id: "acad-3",
      year: "2567",
      title: "การวิเคราะห์เปรียบเทียบการใช้สิทธิประโยชน์ทางภาษีศุลกากร ACFTA กับ RCEP สำหรับวิสาหกิจขนาดกลางและขนาดย่อม (SMEs)",
      category: "รายงานการวิจัยเชิงเอกสาร (Policy Analysis Report)",
      course: "International Trade Law and Tariff Concessions",
      advisor: "รศ.ดร.กิตติพงษ์ เจริญทรัพย์",
      status: "เผยแพร่ในคลังปัญญามหาวิทยาลัย",
      badge: "badge-teal",
      summary: "จัดทำคู่มือการตัดสินใจเลือกใช้หนังสือรับรองถิ่นกำเนิดสินค้า (Form E vs Form RCEP) พร้อมตาราง Rules of Origin เปรียบเทียบ เพื่อลดต้นทุนภาษีนำเข้าให้แก่ผู้ประกอบการไทย"
    },
    {
      id: "acad-4",
      year: "2567",
      title: "การประยุกต์ใช้ระบบ CRM และการสื่อสาร Telesales เชิงรุกในธุรกิจบริการสอบเทียบเครื่องมือวัดอุตสาหกรรม",
      category: "รายงานผลการปฏิบัติงานสหกิจศึกษาและโครงงานวิชาชีพ",
      course: "Cooperative Education Project / FBA RMUTT",
      advisor: "อาจารย์ปรเมษฐ์ ศรีวิเชียร",
      status: "ได้รับคัดเลือกเป็นตัวอย่างโครงงานดีเด่น",
      badge: "badge-orange",
      summary: "ถอดบทเรียนจากการฝึกงานจริงที่บริษัท NANO CALIBRATION CO., LTD ในการจัดวางฐานข้อมูลลูกค้า การติดตามรอบบำรุงรักษาเครื่องมือวัด และการออกแบบระบบใบเสนอราคาอัตโนมัติ"
    }
  ],

  // 5. ผลงานบทความวิจัย (Research Articles / Publications)
  researchArticles: [
    {
      id: "res-1",
      year: "2568",
      title: "Optimizing Cold-Chain Logistics and Customs Clearance for Thai Tropical Fruit Exports to Southern China via Guangxi Land-Sea Corridor under RCEP",
      authors: "มณีกรานต์ บุญจง, สิริพร สุวรรณภูมิ, และคณะ",
      journal: "The 8th International Conference on Cross-Border Trade & Logistics Innovations (ICCTLI 2025)",
      index: "Indexed in TCI Group 1 / Scopus Proceeding",
      doi: "10.1145/rmutt.icctli.2025.042",
      status: "ตีพิมพ์และนำเสนอแบบ Oral Presentation",
      badge: "badge-mint",
      pages: "หน้า 145-158",
      pdfUrl: "#"
    },
    {
      id: "res-2",
      year: "2568",
      title: "Market Entry Dynamics for Thai Organic Personal Care and Wellness Products in Guangxi: Consumer Perception, Digital Channels, and Live-Commerce Adoption",
      authors: "มณีกรานต์ บุญจง, วรวุฒิ นิตยพงศ์",
      journal: "วารสารบริหารธุรกิจและการค้าระหว่างประเทศ มหาวิทยาลัยเทคโนโลยีราชมงคล (JBTR)",
      index: "วารสารวิชาการระดับชาติ TCI กลุ่ม 1",
      doi: "10.2905/jbtr.rmutt.v14i2.2025",
      status: "ได้รับการตอบรับตีพิมพ์ (Accepted)",
      badge: "badge-blue",
      pages: "ปีที่ 14 ฉบับที่ 2, กรกฎาคม-ธันวาคม 2568",
      pdfUrl: "#"
    },
    {
      id: "res-3",
      year: "2569",
      title: "The Role of Digital Telesales, CRM Integration, and Field Service Networks in Industrial Calibration Services: An Empirical Study of Thai Industrial Estates",
      authors: "มณีกรานต์ บุญจง, ปรเมษฐ์ ศรีวิเชียร",
      journal: "การประชุมวิชาการระดับชาติด้านการจัดการธุรกิจและเทคโนโลยีอุตสาหกรรม ครั้งที่ 12 (NCBMIT 2026)",
      index: "Proceeding ระดับชาติ พร้อม peer-reviewed",
      doi: "10.5512/ncbmit.2026.118",
      status: "ตีพิมพ์ในรายงานสืบเนื่องจากการประชุมวิชาการ",
      badge: "badge-yellow",
      pages: "หน้า 88-99",
      pdfUrl: "#"
    }
  ],

  // 6. งานวิทยากร (Speaker / Guest Engagements)
  speakerEngagements: [
    {
      id: "spk-1",
      date: "15 กรกฎาคม 2568",
      year: "2568",
      topic: "เปิดโลกการเรียนรู้และประสบการณ์แลกเปลี่ยนวัฒนธรรมและการค้า ณ Guangxi University สาธารณรัฐประชาชนจีน",
      event: "โครงการเตรียมความพร้อมสู่สากลสำหรับนักศึกษาบริหารธุรกิจระหว่างประเทศ",
      organizer: "คณะบริหารธุรกิจ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
      location: "ห้องประชุมใหญ่เฉลิมพระเกียรติ มทร.ธัญบุรี และออนไลน์",
      attendees: 180,
      hours: 3.0,
      audienceGroup: "นักศึกษาปริญญาตรีและคณาจารย์",
      badge: "badge-purple",
      summary: "แบ่งปันประสบการณ์การใช้ชีวิตในเมืองหนานหนิง การปรับตัวด้านภาษาจีน การศึกษาดูงานท่าเรือชินโจว และโอกาสทางอาชีพในสายงานการค้าระหว่างประเทศ"
    },
    {
      id: "spk-2",
      date: "24 สิงหาคม 2568",
      year: "2568",
      topic: "ก้าวแรกสู่การค้าระหว่างประเทศในยุค RCEP สำหรับผู้ประกอบการรุ่นใหม่ (Young Exporters)",
      event: "สัมมนาเยาวชนกับการขับเคลื่อนเศรษฐกิจอาเซียน-จีน",
      organizer: "สมาคมส่งเสริมการค้าระหว่างประเทศภาคเยาวชน ร่วมกับ สภาอุตสาหกรรม",
      location: "ศูนย์นิทรรศการและการประชุม อิมแพ็ค เมืองทองธานี",
      attendees: 120,
      hours: 4.0,
      audienceGroup: "เยาวชน, สตาร์ทอัพ และผู้ประกอบการรุ่นใหม่",
      badge: "badge-mint",
      summary: "บรรยายเรื่องการเลือกใช้สิทธิประโยชน์ทางภาษี การจัดเตรียมเอกสาร Form E และ Form RCEP รวมถึงข้อควรระวังในการส่งสินค้าเข้าสู่ตลาดจีนตอนใต้"
    },
    {
      id: "spk-3",
      date: "18 พฤศจิกายน 2568",
      year: "2568",
      topic: "ทักษะ Telesales และการสื่อสารเจรจาต่อรองในธุรกิจบริการ B2B ยุคดิจิทัล",
      event: "โครงการพัฒนาทักษะวิชาชีพและการเตรียมตัวเข้าสู่ตลาดแรงงาน",
      organizer: "ชมรมพัฒนาวิชาชีพธุรกิจและการขาย มทร.ธัญบุรี",
      location: "อาคาร 4 คณะบริหารธุรกิจ มทร.ธัญบุรี",
      attendees: 95,
      hours: 3.0,
      audienceGroup: "นักศึกษาชั้นปีที่ 3-4 สาขาการขายและการตลาด",
      badge: "badge-orange",
      summary: "แชร์เทคนิคจากประสบการณ์ตรงในการฝึกงานที่ Nano Calibration การทำ Cold-Calling อย่างมืออาชีพ การรับมือกับข้อโต้แย้งของลูกค้า และการติดตามรอบซ่อมบำรุง"
    },
    {
      id: "spk-4",
      date: "10 กุมภาพันธ์ 2569",
      year: "2569",
      topic: "เคล็ดลับการเตรียมความพร้อมสอบวัดระดับภาษาจีน HSK และการสื่อสารในชีวิตประจำวัน",
      event: "กิจกรรมแนะแนวการศึกษาต่อและภาษาต่างประเทศสำหรับนักเรียน ม.ปลาย",
      organizer: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ โรงเรียนนวมินทราชินูทิศ สวนกุหลาบวิทยาลัย ปทุมธานี",
      location: "หอประชุมนวมินทร์ รร.นวมินทราชินูทิศ สวนกุหลาบวิทยาลัย ปทุมธานี",
      attendees: 150,
      hours: 2.5,
      audienceGroup: "นักเรียนชั้น ม.4-ม.6 โครงการห้องเรียนพิเศษ",
      badge: "badge-blue",
      summary: "สร้างแรงบันดาลใจให้น้องๆ ในการเรียนรู้ภาษาที่สาม (ภาษาจีน) ควบคู่กับภาษาอังกฤษ และการนำทักษะภาษาไปต่อยอดในการเรียนระดับอุดมศึกษา"
    }
  ],

  // 7. สถิติสำหรับ Dashboard
  dashboardStats: {
    totalEducationDegrees: 3,
    totalAchievements: 6,
    totalAcademicWorks: 4,
    totalResearchArticles: 3,
    totalSpeakerEvents: 4,
    totalSpeakerHours: 12.5,
    totalAttendees: 545,
    satisfactionRate: 98.4
  }
};
