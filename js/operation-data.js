/* ============================================================
 * 作业监测数据 — 移植自 JF-B (YuBoo/JF-B) device-beidou.html
 * 含：作业类型、区域×类型统计、区域×类型设备明细、作业详情(轨迹+抓拍)
 * 全部为静态 Mock 数据，真实可信。
 * ============================================================ */

/* ── 8 类作业（今日/昨日/累计）── */
window.OP_TYPES = [
  { name: '旋耕',     color: '#1890ff', today: 910,  yesterday: 1240, total: 28600 },
  { name: '插秧',     color: '#52c41a', today: 550,  yesterday: 780,  total: 15200 },
  { name: '植保喷洒', color: '#13c2c2', today: 500,  yesterday: 630,  total: 18400 },
  { name: '施肥',     color: '#722ed1', today: 630,  yesterday: 870,  total: 21300 },
  { name: '播种',     color: '#faad14', today: 1200, yesterday: 960,  total: 32800 },
  { name: '收割',     color: '#fa8c16', today: 890,  yesterday: 1050, total: 24600 },
  { name: '巡检',     color: '#2f54eb', today: 1580, yesterday: 1340, total: 45200 },
  { name: '灌溉',     color: '#096dd9', today: 420,  yesterday: 560,  total: 12800 },
];

/* ── 8 个乡镇 ── */
window.OP_REGIONS = ['高塘岭镇','桥驿镇','丁字镇','茶亭镇','东城镇','铜官镇','靖港镇','乔口镇'];

/* ── 区域 × 类型 统计：area/qualified/doubtful/overlap/duration ── */
window.OP_REGION_DATA = {
  '旋耕': [
    { region: '高塘岭镇', area: 1420, qualified: 1380, doubtful: 25, overlap: 15, duration: '86h' },
    { region: '桥驿镇',   area: 1180, qualified: 1140, doubtful: 30, overlap: 10, duration: '72h' },
    { region: '丁字镇',   area: 980,  qualified: 950,  doubtful: 18, overlap: 12, duration: '58h' },
    { region: '茶亭镇',   area: 860,  qualified: 830,  doubtful: 20, overlap: 10, duration: '52h' },
    { region: '东城镇',   area: 720,  qualified: 695,  doubtful: 15, overlap: 10, duration: '44h' },
    { region: '铜官镇',   area: 540,  qualified: 520,  doubtful: 12, overlap: 8,  duration: '33h' },
    { region: '靖港镇',   area: 460,  qualified: 445,  doubtful: 10, overlap: 5,  duration: '28h' },
    { region: '乔口镇',   area: 380,  qualified: 365,  doubtful: 8,  overlap: 7,  duration: '23h' },
  ],
  '插秧': [
    { region: '高塘岭镇', area: 820,  qualified: 790,  doubtful: 18, overlap: 12, duration: '124h' },
    { region: '桥驿镇',   area: 680,  qualified: 655,  doubtful: 15, overlap: 10, duration: '98h' },
    { region: '丁字镇',   area: 560,  qualified: 540,  doubtful: 12, overlap: 8,  duration: '82h' },
    { region: '茶亭镇',   area: 490,  qualified: 470,  doubtful: 14, overlap: 6,  duration: '71h' },
    { region: '东城镇',   area: 380,  qualified: 365,  doubtful: 10, overlap: 5,  duration: '55h' },
    { region: '铜官镇',   area: 320,  qualified: 305,  doubtful: 8,  overlap: 7,  duration: '46h' },
    { region: '靖港镇',   area: 280,  qualified: 268,  doubtful: 8,  overlap: 4,  duration: '40h' },
    { region: '乔口镇',   area: 220,  qualified: 210,  doubtful: 6,  overlap: 4,  duration: '32h' },
  ],
  '植保喷洒': [
    { region: '高塘岭镇', area: 1050, qualified: 1020, doubtful: 20, overlap: 10, duration: '64h' },
    { region: '桥驿镇',   area: 880,  qualified: 855,  doubtful: 15, overlap: 10, duration: '53h' },
    { region: '丁字镇',   area: 720,  qualified: 700,  doubtful: 12, overlap: 8,  duration: '44h' },
    { region: '茶亭镇',   area: 640,  qualified: 618,  doubtful: 14, overlap: 8,  duration: '39h' },
    { region: '东城镇',   area: 520,  qualified: 502,  doubtful: 10, overlap: 8,  duration: '31h' },
    { region: '铜官镇',   area: 410,  qualified: 395,  doubtful: 8,  overlap: 7,  duration: '25h' },
    { region: '靖港镇',   area: 350,  qualified: 338,  doubtful: 8,  overlap: 4,  duration: '21h' },
    { region: '乔口镇',   area: 290,  qualified: 280,  doubtful: 6,  overlap: 4,  duration: '18h' },
  ],
  '施肥': [
    { region: '高塘岭镇', area: 1280, qualified: 1240, doubtful: 22, overlap: 18, duration: '78h' },
    { region: '桥驿镇',   area: 1060, qualified: 1025, doubtful: 20, overlap: 15, duration: '65h' },
    { region: '丁字镇',   area: 870,  qualified: 842,  doubtful: 16, overlap: 12, duration: '53h' },
    { region: '茶亭镇',   area: 760,  qualified: 735,  doubtful: 14, overlap: 11, duration: '46h' },
    { region: '东城镇',   area: 620,  qualified: 598,  doubtful: 12, overlap: 10, duration: '38h' },
    { region: '铜官镇',   area: 480,  qualified: 462,  doubtful: 10, overlap: 8,  duration: '29h' },
    { region: '靖港镇',   area: 410,  qualified: 395,  doubtful: 8,  overlap: 7,  duration: '25h' },
    { region: '乔口镇',   area: 340,  qualified: 328,  doubtful: 7,  overlap: 5,  duration: '21h' },
  ],
  '播种': [
    { region: '高塘岭镇', area: 1850, qualified: 1800, doubtful: 28, overlap: 22, duration: '112h' },
    { region: '桥驿镇',   area: 1520, qualified: 1475, doubtful: 25, overlap: 20, duration: '92h' },
    { region: '丁字镇',   area: 1260, qualified: 1220, doubtful: 22, overlap: 18, duration: '76h' },
    { region: '茶亭镇',   area: 1080, qualified: 1045, doubtful: 20, overlap: 15, duration: '65h' },
    { region: '东城镇',   area: 880,  qualified: 850,  doubtful: 18, overlap: 12, duration: '53h' },
    { region: '铜官镇',   area: 690,  qualified: 665,  doubtful: 14, overlap: 11, duration: '42h' },
    { region: '靖港镇',   area: 580,  qualified: 560,  doubtful: 12, overlap: 8,  duration: '35h' },
    { region: '乔口镇',   area: 470,  qualified: 452,  doubtful: 10, overlap: 8,  duration: '28h' },
  ],
  '收割': [
    { region: '高塘岭镇', area: 1350, qualified: 1310, doubtful: 24, overlap: 16, duration: '82h' },
    { region: '桥驿镇',   area: 1120, qualified: 1085, doubtful: 20, overlap: 15, duration: '68h' },
    { region: '丁字镇',   area: 930,  qualified: 900,  doubtful: 18, overlap: 12, duration: '56h' },
    { region: '茶亭镇',   area: 810,  qualified: 782,  doubtful: 16, overlap: 12, duration: '49h' },
    { region: '东城镇',   area: 660,  qualified: 638,  doubtful: 14, overlap: 8,  duration: '40h' },
    { region: '铜官镇',   area: 510,  qualified: 492,  doubtful: 10, overlap: 8,  duration: '31h' },
    { region: '靖港镇',   area: 430,  qualified: 415,  doubtful: 10, overlap: 5,  duration: '26h' },
    { region: '乔口镇',   area: 360,  qualified: 347,  doubtful: 8,  overlap: 5,  duration: '22h' },
  ],
  '巡检': [
    { region: '高塘岭镇', area: 2400, qualified: 2350, doubtful: 30, overlap: 20, duration: '148h' },
    { region: '桥驿镇',   area: 1980, qualified: 1935, doubtful: 28, overlap: 17, duration: '122h' },
    { region: '丁字镇',   area: 1640, qualified: 1600, doubtful: 22, overlap: 18, duration: '101h' },
    { region: '茶亭镇',   area: 1400, qualified: 1365, doubtful: 20, overlap: 15, duration: '86h' },
    { region: '东城镇',   area: 1140, qualified: 1108, doubtful: 18, overlap: 14, duration: '70h' },
    { region: '铜官镇',   area: 890,  qualified: 865,  doubtful: 14, overlap: 11, duration: '55h' },
    { region: '靖港镇',   area: 750,  qualified: 728,  doubtful: 14, overlap: 8,  duration: '46h' },
    { region: '乔口镇',   area: 620,  qualified: 600,  doubtful: 12, overlap: 8,  duration: '38h' },
  ],
  '灌溉': [
    { region: '高塘岭镇', area: 680,  qualified: 660,  doubtful: 12, overlap: 8,  duration: '42h' },
    { region: '桥驿镇',   area: 560,  qualified: 542,  doubtful: 10, overlap: 8,  duration: '35h' },
    { region: '丁字镇',   area: 460,  qualified: 445,  doubtful: 8,  overlap: 7,  duration: '28h' },
    { region: '茶亭镇',   area: 400,  qualified: 386,  doubtful: 8,  overlap: 6,  duration: '25h' },
    { region: '东城镇',   area: 320,  qualified: 308,  doubtful: 6,  overlap: 6,  duration: '20h' },
    { region: '铜官镇',   area: 250,  qualified: 240,  doubtful: 5,  overlap: 5,  duration: '15h' },
    { region: '靖港镇',   area: 210,  qualified: 202,  doubtful: 5,  overlap: 3,  duration: '13h' },
    { region: '乔口镇',   area: 170,  qualified: 164,  doubtful: 4,  overlap: 2,  duration: '10h' },
  ],
};

/* ── 区域 × 类型 设备明细（高塘岭镇、桥驿镇 手写；其余 6 镇由 fillDeviceData 生成）── */
window.OP_DEVICE_DATA = {
  '高塘岭镇': {
    '旋耕': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 320, duration: '18.5h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 280, duration: '16.2h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 245, duration: '14.8h' },
      { owner: '赵国安', plate: '湘A·农机0328', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0315', area: 210, duration: '12.6h' },
      { owner: '刘建成', plate: '湘A·农机0330', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0318', area: 185, duration: '11.2h' },
      { owner: '陈德华', plate: '湘A·农机0333', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0320', area: 180, duration: '12.7h' },
    ],
    '插秧': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 210, duration: '28.3h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 185, duration: '25.1h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 165, duration: '22.6h' },
      { owner: '赵国安', plate: '湘A·农机0328', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0315', area: 140, duration: '19.4h' },
      { owner: '刘建成', plate: '湘A·农机0330', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0318', area: 120, duration: '16.8h' },
    ],
    '植保喷洒': [
      { owner: '周立平', plate: '湘A·无人机0001', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'UAV-2025-0001', area: 350, duration: '22.4h' },
      { owner: '吴国辉', plate: '湘A·无人机0005', region: '高塘岭镇', coop: '望城飞防队', device: 'UAV-2025-0005', area: 280, duration: '18.1h' },
      { owner: '郑建伟', plate: '湘A·无人机0012', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'UAV-2025-0012', area: 240, duration: '15.6h' },
      { owner: '孙明远', plate: '湘A·无人机0018', region: '高塘岭镇', coop: '望城飞防队', device: 'UAV-2025-0018', area: 180, duration: '11.9h' },
    ],
    '施肥': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 290, duration: '17.2h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 260, duration: '15.8h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 230, duration: '14.0h' },
      { owner: '赵国安', plate: '湘A·农机0328', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0315', area: 200, duration: '12.4h' },
      { owner: '陈德华', plate: '湘A·农机0333', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0320', area: 300, duration: '18.6h' },
    ],
    '播种': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 420, duration: '25.3h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 380, duration: '22.8h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 340, duration: '20.5h' },
      { owner: '赵国安', plate: '湘A·农机0328', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0315', area: 310, duration: '18.7h' },
      { owner: '刘建成', plate: '湘A·农机0330', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0318', area: 250, duration: '15.2h' },
      { owner: '陈德华', plate: '湘A·农机0333', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0320', area: 150, duration: '9.5h' },
    ],
    '收割': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 310, duration: '19.2h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 290, duration: '17.8h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 260, duration: '16.1h' },
      { owner: '赵国安', plate: '湘A·农机0328', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0315', area: 230, duration: '14.4h' },
      { owner: '刘建成', plate: '湘A·农机0330', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0318', area: 260, duration: '15.5h' },
    ],
    '巡检': [
      { owner: '周立平', plate: '湘A·无人机0001', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'UAV-2025-0001', area: 650, duration: '38.5h' },
      { owner: '吴国辉', plate: '湘A·无人机0005', region: '高塘岭镇', coop: '望城飞防队', device: 'UAV-2025-0005', area: 580, duration: '34.2h' },
      { owner: '郑建伟', plate: '湘A·无人机0012', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'UAV-2025-0012', area: 520, duration: '31.0h' },
      { owner: '孙明远', plate: '湘A·无人机0018', region: '高塘岭镇', coop: '望城飞防队', device: 'UAV-2025-0018', area: 650, duration: '38.3h' },
    ],
    '灌溉': [
      { owner: '张建军', plate: '湘A·农机0321', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0301', area: 240, duration: '14.8h' },
      { owner: '李志强', plate: '湘A·农机0322', region: '高塘岭镇', coop: '高塘岭镇农业合作社', device: 'MAC-2024-0302', area: 210, duration: '13.2h' },
      { owner: '王大明', plate: '湘A·农机0325', region: '高塘岭镇', coop: '望城农机服务队', device: 'MAC-2024-0310', area: 230, duration: '14.0h' },
    ],
  },
  '桥驿镇': {
    '旋耕': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 280, duration: '16.8h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 250, duration: '15.1h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 220, duration: '13.4h' },
      { owner: '马建伟', plate: '湘A·农机0408', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0408', area: 200, duration: '12.2h' },
      { owner: '黄德胜', plate: '湘A·农机0410', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0410', area: 230, duration: '14.5h' },
    ],
    '插秧': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 180, duration: '24.5h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 160, duration: '22.0h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 140, duration: '19.2h' },
      { owner: '马建伟', plate: '湘A·农机0408', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0408', area: 200, duration: '27.3h' },
    ],
    '植保喷洒': [
      { owner: '林国栋', plate: '湘A·无人机0020', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'UAV-2025-0020', area: 300, duration: '18.2h' },
      { owner: '徐建华', plate: '湘A·无人机0025', region: '桥驿镇', coop: '桥驿飞防队', device: 'UAV-2025-0025', area: 260, duration: '15.8h' },
      { owner: '罗志伟', plate: '湘A·无人机0030', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'UAV-2025-0030', area: 320, duration: '19.0h' },
    ],
    '施肥': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 250, duration: '15.3h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 230, duration: '14.1h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 200, duration: '12.4h' },
      { owner: '黄德胜', plate: '湘A·农机0410', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0410', area: 380, duration: '23.2h' },
    ],
    '播种': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 350, duration: '21.2h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 320, duration: '19.5h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 290, duration: '17.6h' },
      { owner: '马建伟', plate: '湘A·农机0408', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0408', area: 270, duration: '16.4h' },
      { owner: '黄德胜', plate: '湘A·农机0410', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0410', area: 290, duration: '17.3h' },
    ],
    '收割': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 270, duration: '16.5h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 240, duration: '14.8h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 210, duration: '13.0h' },
      { owner: '马建伟', plate: '湘A·农机0408', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0408', area: 190, duration: '11.7h' },
      { owner: '黄德胜', plate: '湘A·农机0410', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0410', area: 210, duration: '13.0h' },
    ],
    '巡检': [
      { owner: '林国栋', plate: '湘A·无人机0020', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'UAV-2025-0020', area: 520, duration: '30.8h' },
      { owner: '徐建华', plate: '湘A·无人机0025', region: '桥驿镇', coop: '桥驿飞防队', device: 'UAV-2025-0025', area: 480, duration: '28.5h' },
      { owner: '罗志伟', plate: '湘A·无人机0030', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'UAV-2025-0030', area: 510, duration: '30.2h' },
      { owner: '何伟',   plate: '湘A·无人机0035', region: '桥驿镇', coop: '桥驿飞防队', device: 'UAV-2025-0035', area: 470, duration: '28.0h' },
    ],
    '灌溉': [
      { owner: '何建平', plate: '湘A·农机0401', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0401', area: 190, duration: '11.8h' },
      { owner: '杨志明', plate: '湘A·农机0402', region: '桥驿镇', coop: '桥驿镇农机服务队', device: 'MAC-2024-0402', area: 170, duration: '10.6h' },
      { owner: '邓国强', plate: '湘A·农机0405', region: '桥驿镇', coop: '桥驿农业合作社', device: 'MAC-2024-0405', area: 200, duration: '12.6h' },
    ],
  },
};

/* 为其余 6 镇按区域统计自动生成设备明细（与 JF-B fillDeviceData 一致）*/
(function fillDeviceData() {
  var regions = ['丁字镇', '茶亭镇', '东城镇', '铜官镇', '靖港镇', '乔口镇'];
  var types = ['旋耕', '插秧', '植保喷洒', '施肥', '播种', '收割', '巡检', '灌溉'];
  var coops = { '丁字镇':'丁字镇农机合作社', '茶亭镇':'茶亭镇农技站', '东城镇':'东城镇农业合作社', '铜官镇':'铜官镇农机服务队', '靖港镇':'靖港镇农业合作社', '乔口镇':'乔口镇农技站' };
  var surnames = ['周','吴','郑','王','李','张','赵','刘','陈','杨'];
  var given = ['志强','建平','国强','明远','德华','建伟','国安','立平','国辉','建伟'];
  /* 确定性伪随机，保证每次渲染一致 */
  function rnd(seed){ var x = Math.sin(seed*999.137+1.7)*43758.5453; return x - Math.floor(x); }
  var rs = 1234;
  regions.forEach(function (r, ri) {
    if (!window.OP_DEVICE_DATA[r]) window.OP_DEVICE_DATA[r] = {};
    types.forEach(function (t, ti) {
      if (!window.OP_DEVICE_DATA[r][t]) {
        var rd = window.OP_REGION_DATA[t] ? window.OP_REGION_DATA[t].find(function (x) { return x.region === r; }) : null;
        var totalArea = rd ? rd.area : 500;
        var count = 3 + Math.floor(rnd(rs++) * 3);
        var rows = [];
        for (var i = 0; i < count; i++) {
          var deviceType = (t === '植保喷洒' || t === '巡检') ? 'UAV' : 'MAC';
          var deviceNum = (deviceType === 'UAV' ? '2025' : '2024') + '-' + String(100 + Math.floor(rnd(rs++) * 900)).padStart(4, '0').slice(-4);
          var plateSuffix = String(500 + i * 10 + Math.floor(rnd(rs++) * 10));
          rows.push({
            owner: surnames[(ri+i) % surnames.length] + given[(ti+i) % given.length],
            plate: '湘A·' + (deviceType === 'UAV' ? '无人机' : '农机') + plateSuffix,
            region: r,
            coop: coops[r],
            device: deviceType + '-' + deviceNum,
            area: Math.round(totalArea / count * (0.8 + rnd(rs++) * 0.4)),
            duration: (totalArea / count * 0.06 + rnd(rs++) * 2).toFixed(1) + 'h',
          });
        }
        window.OP_DEVICE_DATA[r][t] = rows;
      }
    });
  });
})();

/* ── 作业详情数据：14 条 OP 记录（含轨迹点 + 抓拍时间线）── */
window.opDetailData = {
  'OP-20260602-0001': { id:'OP-20260602-0001', type:'植保喷洒', owner:'张大力', plate:'川A·农37821', terminal:'BD-TML-2025-0312', startTime:'2026-06-02 06:30', endTime:'2026-06-02 08:45', area:320, qualified:312, overlap:8, depth:'—', location:'湖南省长沙市望城区高塘岭镇杨柳村 PLOT-047', status:'已完成', track:[[80,60],[110,75],[145,90],[180,100],[220,105],[260,98],[300,85],[330,95],[360,120],[370,155],[355,190],[320,210],[280,215],[240,200],[200,185],[165,165],[130,140],[100,110],[85,80]], trackDist:'4.2km', trackArea:'320亩', trackCount:19, photos:[{time:'06:32',tag:'auto',label:'作业开始',location:'杨柳村 PLOT-047 东侧'},{time:'07:15',tag:'auto',label:'喷洒作业中',location:'杨柳村 PLOT-047 中心'},{time:'07:48',tag:'manual',label:'人工巡检',location:'杨柳村 PLOT-047 西侧'},{time:'08:20',tag:'auto',label:'收尾阶段',location:'杨柳村 PLOT-047 北侧'},{time:'08:44',tag:'auto',label:'作业完成',location:'杨柳村 PLOT-047 出口'}] },
  'OP-20260602-0089': { id:'OP-20260602-0089', type:'施肥', owner:'王小明', plate:'川A·农45602', terminal:'BD-TML-2025-0287', startTime:'2026-06-02 07:15', endTime:'2026-06-02 09:30', area:280, qualified:275, overlap:5, depth:'8cm', location:'湖南省长沙市望城区桥驿镇双堰村 PLOT-061', status:'已完成', track:[[90,70],[130,85],[170,95],[210,100],[250,95],[290,88],[320,100],[340,130],[330,165],[300,185],[260,190],[220,178],[180,160],[140,138],[105,110],[92,82]], trackDist:'3.8km', trackArea:'280亩', trackCount:16, photos:[{time:'07:18',tag:'auto',label:'施肥开始',location:'双堰村 PLOT-061 南侧'},{time:'08:05',tag:'auto',label:'施肥作业中',location:'双堰村 PLOT-061 中心'},{time:'09:10',tag:'manual',label:'质量抽检',location:'双堰村 PLOT-061 北侧'},{time:'09:28',tag:'auto',label:'作业完成',location:'双堰村 PLOT-061 出口'}] },
  'OP-20260602-0152': { id:'OP-20260602-0152', type:'巡检', owner:'赵永强', plate:'—', terminal:'BD-UAV-2025-0047', startTime:'2026-06-02 08:00', endTime:'—', area:860, qualified:780, overlap:12, depth:'—', location:'湖南省长沙市望城区丁字镇石岭村 PLOT-052', status:'进行中', track:[[60,40],[100,55],[150,70],[200,80],[260,85],[320,75],[380,65],[430,80],[470,110],[480,155],[460,200],[420,235],[370,260],[310,270],[250,265],[190,250],[140,225],[100,190],[75,150],[65,105]], trackDist:'8.6km', trackArea:'860亩', trackCount:20, photos:[{time:'08:02',tag:'auto',label:'起飞巡检',location:'东城镇 PLOT-052 起飞点'},{time:'08:25',tag:'auto',label:'航拍中',location:'东城镇 PLOT-052 上空'},{time:'09:10',tag:'auto',label:'异常发现',location:'东城镇 PLOT-052 东南角'},{time:'10:30',tag:'manual',label:'现场核实',location:'东城镇 PLOT-052 东侧田埂'},{time:'11:15',tag:'auto',label:'二次巡检',location:'东城镇 PLOT-052 西侧'},{time:'12:40',tag:'auto',label:'巡检继续',location:'东城镇 PLOT-052 北侧'}] },
  'OP-20260602-0203': { id:'OP-20260602-0203', type:'植保喷洒', owner:'张大力', plate:'川A·农37821', terminal:'BD-TML-2025-0312', startTime:'2026-06-02 14:00', endTime:'—', area:180, qualified:0, overlap:0, depth:'—', location:'湖南省长沙市望城区茶亭镇青山村 PLOT-073', status:'待作业', track:[[380,90],[400,110],[410,140],[395,170],[370,190],[345,175],[355,140],[375,105]], trackDist:'1.5km', trackArea:'180亩', trackCount:8, photos:[{time:'—',tag:'auto',label:'待作业',location:'铜官镇 PLOT-073 待命点'}] },
  'OP-20260602-0045': { id:'OP-20260602-0045', type:'旋耕', owner:'周大勇', plate:'川A·农51230', terminal:'BD-TML-2025-0156', startTime:'2026-06-02 05:40', endTime:'2026-06-02 08:20', area:520, qualified:515, overlap:5, depth:'25cm', location:'湖南省长沙市望城区高塘岭镇赵镇社区 PLOT-033', status:'已完成', track:[[50,180],[80,170],[120,160],[165,155],[210,158],[255,165],[295,175],[325,190],[340,220],[320,250],[285,265],[245,260],[205,248],[165,235],[125,218],[90,200],[60,190]], trackDist:'5.1km', trackArea:'520亩', trackCount:17, photos:[{time:'06:35',tag:'auto',label:'旋耕开始',location:'高塘岭镇 PLOT-033 东侧'},{time:'07:20',tag:'auto',label:'旋耕作业中',location:'高塘岭镇 PLOT-033 中心'},{time:'08:10',tag:'manual',label:'深度抽检',location:'高塘岭镇 PLOT-033 北侧'},{time:'08:50',tag:'auto',label:'作业完成',location:'高塘岭镇 PLOT-033 出口'}] },
  'OP-20260602-0067': { id:'OP-20260602-0067', type:'旋耕', owner:'陈志刚', plate:'川A·农62401', terminal:'BD-TML-2025-0178', startTime:'2026-06-02 06:10', endTime:'2026-06-02 09:00', area:390, qualified:385, overlap:5, depth:'22cm', location:'湖南省长沙市望城区东城镇红光村 PLOT-019', status:'已完成', track:[[100,280],[140,270],[185,265],[230,268],[270,280],[305,295],[320,320],[300,345],[265,355],[225,350],[185,340],[150,320],[115,300]], trackDist:'3.6km', trackArea:'390亩', trackCount:13, photos:[{time:'06:12',tag:'auto',label:'旋耕启动',location:'红光村 PLOT-019 南侧'},{time:'07:30',tag:'auto',label:'旋耕中',location:'红光村 PLOT-019 中心'},{time:'08:45',tag:'auto',label:'收尾阶段',location:'红光村 PLOT-019 北侧'}] },
  'OP-20260602-0110': { id:'OP-20260602-0110', type:'插秧', owner:'刘长顺', plate:'川A·农71055', terminal:'BD-TML-2025-0223', startTime:'2026-06-02 06:00', endTime:'2026-06-02 08:30', area:240, qualified:238, overlap:2, depth:'—', location:'湖南省长沙市望城区铜官镇文武村 PLOT-041', status:'已完成', track:[[200,140],[230,150],[265,148],[300,140],[330,150],[345,175],[330,200],[300,210],[265,208],[235,198],[210,180],[200,160]], trackDist:'2.8km', trackArea:'240亩', trackCount:12, photos:[{time:'06:02',tag:'auto',label:'插秧开始',location:'文武村 PLOT-041 东侧'},{time:'07:15',tag:'auto',label:'插秧作业中',location:'文武村 PLOT-041 中心'},{time:'08:10',tag:'manual',label:'行距抽检',location:'文武村 PLOT-041 西侧'},{time:'08:28',tag:'auto',label:'作业完成',location:'文武村 PLOT-041 北端'}] },
  'OP-20260602-0135': { id:'OP-20260602-0135', type:'插秧', owner:'刘长顺', plate:'川A·农71055', terminal:'BD-TML-2025-0223', startTime:'2026-06-02 08:30', endTime:'—', area:310, qualified:260, overlap:3, depth:'—', location:'湖南省长沙市望城区靖港镇松林村 PLOT-055', status:'进行中', track:[[320,240],[350,250],[385,248],[420,240],[450,255],[465,280],[450,310],[420,325],[385,320],[350,310],[325,290],[315,265]], trackDist:'3.2km', trackArea:'310亩', trackCount:12, photos:[{time:'08:32',tag:'auto',label:'插秧开始',location:'松林村 PLOT-055 南侧'},{time:'09:20',tag:'auto',label:'插秧进行中',location:'松林村 PLOT-055 中心'},{time:'10:05',tag:'auto',label:'半程记录',location:'松林村 PLOT-055 北侧'}] },
  'OP-20260602-0098': { id:'OP-20260602-0098', type:'收割', owner:'马海峰', plate:'川A·农88201', terminal:'BD-TML-2025-0308', startTime:'2026-06-02 07:00', endTime:'2026-06-02 10:30', area:480, qualified:476, overlap:4, depth:'—', location:'湖南省长沙市望城区乔口镇龙桥村 PLOT-066', status:'已完成', track:[[420,280],[450,270],[485,275],[510,295],[520,325],[505,355],[475,370],[440,365],[415,345],[400,315],[405,290]], trackDist:'4.5km', trackArea:'480亩', trackCount:11, photos:[{time:'07:02',tag:'auto',label:'收割开始',location:'龙桥村 PLOT-066 西侧'},{time:'08:30',tag:'auto',label:'收割中',location:'龙桥村 PLOT-066 中心'},{time:'09:45',tag:'manual',label:'损失率抽检',location:'龙桥村 PLOT-066 东侧'},{time:'10:28',tag:'auto',label:'收割完成',location:'龙桥村 PLOT-066 出口'}] },
  'OP-20260602-0178': { id:'OP-20260602-0178', type:'播种', owner:'孙文涛', plate:'—', terminal:'BD-UAV-2025-0089', startTime:'2026-06-02 09:20', endTime:'—', area:680, qualified:0, overlap:0, depth:'3cm', location:'湖南省长沙市望城区高塘岭镇黄角树村 PLOT-029', status:'待作业', track:[[70,100],[120,90],[180,85],[240,88],[300,95],[350,110],[380,140],[370,180],[335,200],[290,205],[240,195],[190,180],[140,160],[100,135],[75,115]], trackDist:'6.1km', trackArea:'680亩', trackCount:15, photos:[{time:'—',tag:'auto',label:'待作业',location:'黄角树村 PLOT-029 待命点'}] },
  'OP-20260602-0190': { id:'OP-20260602-0190', type:'播种', owner:'孙文涛', plate:'—', terminal:'BD-UAV-2025-0093', startTime:'2026-06-02 10:45', endTime:'—', area:520, qualified:0, overlap:0, depth:'3cm', location:'湖南省长沙市望城区桥驿镇白云村 PLOT-082', status:'待作业', track:[[180,200],[220,190],[265,195],[310,205],[350,220],[370,250],[355,280],[320,295],[280,290],[240,278],[200,260],[175,235]], trackDist:'4.8km', trackArea:'520亩', trackCount:12, photos:[{time:'—',tag:'auto',label:'待作业',location:'白云村 PLOT-082 待命点'}] },
  'OP-20260602-0220': { id:'OP-20260602-0220', type:'施肥', owner:'王小明', plate:'川A·农45602', terminal:'BD-TML-2025-0287', startTime:'2026-06-02 15:30', endTime:'—', area:350, qualified:0, overlap:0, depth:'10cm', location:'湖南省长沙市望城区丁字镇凉水井村 PLOT-014', status:'待作业', track:[[130,120],[170,130],[215,135],[260,128],[305,120],[340,135],[355,165],[340,200],[305,215],[265,210],[225,195],[185,175],[150,150]], trackDist:'3.5km', trackArea:'350亩', trackCount:13, photos:[{time:'—',tag:'auto',label:'待作业',location:'凉水井村 PLOT-014 待命点'}] },
  'OP-20260602-0240': { id:'OP-20260602-0240', type:'收割', owner:'马海峰', plate:'川A·农88201', terminal:'BD-TML-2025-0308', startTime:'2026-06-02 13:00', endTime:'—', area:410, qualified:380, overlap:6, depth:'—', location:'湖南省长沙市望城区茶亭镇金鸡山村 PLOT-078', status:'进行中', track:[[430,140],[460,155],[490,170],[510,195],[500,230],[475,255],[445,265],[415,255],[395,230],[390,200],[400,170],[420,150]], trackDist:'4.0km', trackArea:'410亩', trackCount:12, photos:[{time:'13:02',tag:'auto',label:'收割开始',location:'金鸡山村 PLOT-078 西侧'},{time:'14:15',tag:'auto',label:'收割中',location:'金鸡山村 PLOT-078 中心'},{time:'15:00',tag:'manual',label:'质量检查',location:'金鸡山村 PLOT-078 东侧'}] },
  'OP-20260602-0265': { id:'OP-20260602-0265', type:'巡检', owner:'赵永强', plate:'—', terminal:'BD-UAV-2025-0056', startTime:'2026-06-02 16:00', endTime:'—', area:720, qualified:0, overlap:0, depth:'—', location:'湖南省长沙市望城区铜官镇回龙桥村 PLOT-091', status:'待作业', track:[[240,300],[280,310],[325,308],[370,300],[410,315],[440,340],[430,370],[400,385],[360,380],[320,370],[280,355],[250,335]], trackDist:'5.8km', trackArea:'720亩', trackCount:12, photos:[{time:'—',tag:'auto',label:'待作业',location:'回龙桥村 PLOT-091 待命点'}] },
};

/* ── 抓拍图片（农田实景，与 JF-B 一致）── */
window.FARM_IMAGES = [
  'https://images.unsplash.com/photo-1625761128964-3fa466c04120?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1619719826894-89d6c4fd5739?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509110646989-7ca4308edb3e?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1625761129006-d9f6d0ee001c?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1664972114299-c1f829f6d1e3?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506947411487-a56738267384?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1738085463042-faec958d704a?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1621928372414-30e144d51d49?w=600&h=450&fit=crop&q=80',
];
window.getPhotoUrl = function (seed) { return window.FARM_IMAGES[Math.abs(seed) % window.FARM_IMAGES.length]; };

/* ============================================================
 * 以下为接口协议附录字典 + 补充数据
 * ============================================================ */

/* ── 7.1 农机类型码 ── */
window.MACHINE_TYPE_MAP = {
  '10':'拖拉机','04':'收获机','02':'插秧机','03':'植保机(含无人机)','020304':'抛秧机','99':'其他',
  '11':'运输车','12':'无人机','13':'中耕机','14':'自走式喷药机','15':'大豆联合收割机','16':'小麦联合收割机',
  '17':'镇压机','18':'水稻联合收割机','19':'粮食烘干塔','20':'玉米联合收割机','21':'花生联合收割机',
  '22':'深松机','23':'旋耕机','24':'起垄机','25':'联合整地机','26':'秸秆还田联合整地机',
  '27':'深松整地联合作业机','28':'精量播种机','29':'深松施肥播种机','30':'旋耕播种机',
  '31':'深松旋耕播种机','32':'整地施肥播种机','33':'水稻插秧机','34':'收割机','35':'施肥机',
  '36':'自走式玉米收获机','37':'玉米收获机','38':'棉花收获机','39':'油菜籽收获机','40':'花生收获机',
  '41':'大豆收获机','42':'药材挖掘机','43':'割草机','44':'搂草机','45':'液压榨油机','46':'药材烘干机',
  '47':'轮式拖拉机','48':'手扶拖拉机','49':'履带式拖拉机','50':'船式拖拉机','51':'田间运输机',
  '52':'平地机','53':'甘蔗收获机','54':'打捆机'
};

/* ── 7.2 作业类型码 ── */
window.JOB_TYPE_MAP = {
  '1':'深松','2':'深翻','3':'旋耕','4':'耙地','5':'条播','6':'单粒(精密)播种','7':'穴播','8':'免耕播种',
  '9':'插秧(移栽)','10':'抛秧','11':'施肥','12':'植保','13':'收获','14':'秸秆还田','15':'秸秆打捆','16':'播种',
  '17':'施药','19':'插秧','20':'平地','21':'青贮','22':'镇压','23':'残膜回收','24':'捡拾作业','25':'抛洒',
  '26':'滴灌带','27':'起垄','28':'茎穗兼收','29':'烘干','30':'测产','31':'溯源','32':'通用计亩','33':'深耕',
  '34':'中耕','35':'灌溉','36':'除草','37':'灭茬','38':'覆膜','39':'运输','40':'碎土','41':'翻晒',
  '42':'地磅计重','43':'摘果','44':'保护性耕作','45':'统防统治','46':'开行','47':'水肥一体化',
  '48':'起垄一体化','49':'碎混还田','50':'粪肥还田','51':'秸秆收储','52':'搂草','53':'滴灌','54':'喷灌',
  '55':'果园开沟','56':'筑埂管理','57':'培土','58':'秸秆回收'
};

/* ── 7.3 作物类型码 ── */
window.CROP_TYPE_MAP = {
  '1':'小麦','2':'玉米','3':'水稻','4':'甘蔗','5':'花生','6':'大豆','7':'高粱','8':'马铃薯','9':'谷物',
  '10':'红薯','11':'油沙豆','12':'茶叶','13':'藜麦','14':'棉花','15':'燕麦','16':'药材','17':'油菜',
  '18':'莜麦','19':'大麦','20':'甜菜','21':'甜叶菊','22':'辣椒','23':'番茄','24':'玉米大豆','25':'孜然',
  '26':'烟草','27':'黍子','28':'油葵','29':'油麦','30':'葵花','31':'杂粮','32':'牧草','33':'薯类','34':'大蒜'
};

/* ── 作业类型分类组（58 种按大类分组 + 折叠展开）── */
window.OP_CATEGORIES = [
  { id:'till', name:'耕作类', color:'#1890ff', icon:'M4.5 12a7.5 7.5 0 0 0 7.5 7.5m7.5-7.5a7.5 7.5 0 0 0-7.5-7.5M4.5 12l3-3m-3 3l3 3m12-3l-3-3m3 3l-3 3',
    types:['旋耕','深松','深耕','耙地','平地','镇压','起垄','中耕','灭茬','覆膜','碎土','开行','起垄一体化','果园开沟','筑埂管理','培土','深翻'] },
  { id:'plant', name:'种植类', color:'#52c41a', icon:'M12 5c0 4-3 7-7 7 0-4 3-7 7-7zm0 0c0 4 3 7 7 7 0-4-3-7-7-7zm0 0v15',
    types:['插秧','播种','条播','单粒(精密)播种','穴播','免耕播种','插秧(移栽)','抛秧'] },
  { id:'protect', name:'植保类', color:'#13c2c2', icon:'M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z',
    types:['植保','施药','除草','统防统治'] },
  { id:'fertigate', name:'水肥灌溉类', color:'#096dd9', icon:'M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0',
    types:['施肥','灌溉','水肥一体化','滴灌','喷灌','滴灌带'] },
  { id:'harvest', name:'收获与秸秆类', color:'#fa8c16', icon:'M12 22V8m0 0a3 3 0 1 0-3-3m3 3a3 3 0 1 1 3-3M12 12c-2 0-4-1.5-4-1.5M12 12c2 0 4-1.5 4-1.5',
    types:['收获','秸秆还田','秸秆打捆','青贮','残膜回收','捡拾作业','抛洒','茎穗兼收','摘果','碎混还田','粪肥还田','秸秆收储','搂草','秸秆回收'] },
  { id:'transport', name:'运输类', color:'#722ed1', icon:'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-4v2m0 14v2m9-9h-2M5 12H3m15.4-6.4l-1.4 1.4M7 17l-1.4 1.4m12.8 0L17 17M7 7L5.6 5.6',
    types:['运输'] },
  { id:'other', name:'其他类', color:'#8c8c8c', icon:'M12 21s-6-4.5-6-10a6 6 0 1 1 12 0c0 5.5-6 10-6 10zm0-8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    types:['烘干','测产','溯源','通用计亩','翻晒','地磅计重','保护性耕作'] }
];
/* 反向：分类名 → 分类对象 */
window.OP_CAT_MAP = {};
window.OP_CATEGORIES.forEach(function(cat){
  cat.types.forEach(function(t){ window.OP_CAT_MAP[t] = cat; });
});

/* ── 反向：中文类型 → 码 ── */
window.JOB_TYPE_REV = {}; Object.keys(window.JOB_TYPE_MAP).forEach(function(k){ window.JOB_TYPE_REV[window.JOB_TYPE_MAP[k]] = k; });
window.CROP_TYPE_REV = {}; Object.keys(window.CROP_TYPE_MAP).forEach(function(k){ window.CROP_TYPE_MAP[k] = window.CROP_TYPE_MAP[k]; });
/* 简单反向（仅覆盖 OP_TYPES 中的名字）*/
window.OP_TYPE_CODE = {'旋耕':'3','插秧':'9','植保喷洒':'17','施肥':'11','播种':'16','收割':'13','巡检':'34','灌溉':'35'};

/* ── 终端信息（基于接口协议字段）── */
window.TERMINAL_INFO = {
  'MAC-2024-0301':{OrgVMEID:'X22000001',VMEModel:'xxdz999',AmNo:'湘A·农机0321',AmType:'23',brand:'东方红',VehicleNum:'拖拉机001',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'高塘岭镇',VillName:'高塘岭镇农业合作社',OwnerName:'张建军',OwnerTelNum:'13800138001',orgName:'东方红',Chassis:'LF1234567890',Engine:'WD615.68',InstallMan:'安装员',onlineStatus:1},
  'MAC-2024-0302':{OrgVMEID:'X22000002',VMEModel:'xxdz999',AmNo:'湘A·农机0322',AmType:'23',brand:'东方红',VehicleNum:'拖拉机002',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'高塘岭镇',VillName:'高塘岭镇农业合作社',OwnerName:'李志强',OwnerTelNum:'13800138002',orgName:'东方红',Chassis:'LF1234567891',Engine:'WD615.69',InstallMan:'安装员',onlineStatus:1},
  'MAC-2024-0310':{OrgVMEID:'X22000010',VMEModel:'xxdz999',AmNo:'湘A·农机0325',AmType:'23',brand:'东方红',VehicleNum:'拖拉机003',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'高塘岭镇',VillName:'望城农机服务队',OwnerName:'王大明',OwnerTelNum:'13800138010',orgName:'东方红',Chassis:'LF1234567892',Engine:'WD615.70',InstallMan:'安装员',onlineStatus:1},
  'MAC-2024-0401':{OrgVMEID:'X22000041',VMEModel:'xxdz888',AmNo:'湘A·农机0401',AmType:'23',brand:'雷沃',VehicleNum:'拖拉机004',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'桥驿镇',VillName:'桥驿镇农机服务队',OwnerName:'何建平',OwnerTelNum:'13800138041',orgName:'雷沃重工',Chassis:'LF9876543210',Engine:'WD615.71',InstallMan:'安装员',onlineStatus:1},
  'UAV-2025-0001':{OrgVMEID:'U22100001',VMEModel:'nongniav10',AmNo:'湘A·无人机0001',AmType:'12',brand:'大疆',VehicleNum:'T50',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'高塘岭镇',VillName:'高塘岭镇农业合作社',OwnerName:'周立平',OwnerTelNum:'13800138201',orgName:'大疆农业',Chassis:'DJI-T50-H001',Engine:'—',InstallMan:'飞手',onlineStatus:1},
  'UAV-2025-0005':{OrgVMEID:'U22100005',VMEModel:'nongniav10',AmNo:'湘A·无人机0005',AmType:'12',brand:'大疆',VehicleNum:'T50',ProName:'湖南省',CItyName:'长沙市',CountyName:'望城区',TownName:'高塘岭镇',VillName:'望城飞防队',OwnerName:'吴国辉',OwnerTelNum:'13800138205',orgName:'大疆农业',Chassis:'DJI-T50-H002',Engine:'—',InstallMan:'飞手',onlineStatus:1},
};

/* ── 实时位置（基于 queryVehiclePos 返回字段）── */
window.VEHICLE_POSITIONS = {
  'MAC-2024-0301':{VMEID:'X22000001',Lon:112.83250000,Lat:28.35680000,PTime:'2026-07-03 09:42:00',Elevation:42.5,Speed:4.8,Course:135,IsWork:1,isOnline:1,JobType:3,CropsType:3,JobWidth:200,WorkDeep:250,Alert:'正常'},
  'MAC-2024-0401':{VMEID:'X22000041',Lon:112.81560000,Lat:28.37120000,PTime:'2026-07-03 09:40:00',Elevation:38.2,Speed:5.2,Course:270,IsWork:1,isOnline:1,JobType:3,CropsType:3,JobWidth:200,WorkDeep:240,Alert:'正常'},
  'UAV-2025-0001':{VMEID:'U22100001',Lon:112.84500000,Lat:28.34050000,PTime:'2026-07-03 09:45:00',Elevation:85.0,Speed:8.5,Course:45,IsWork:1,isOnline:1,JobType:12,CropsType:3,JobWidth:800,WorkDeep:0,Alert:'正常'},
  'UAV-2025-0005':{VMEID:'U22100005',Lon:112.82200000,Lat:28.35500000,PTime:'2026-07-03 09:38:00',Elevation:72.0,Speed:7.2,Course:180,IsWork:1,isOnline:1,JobType:12,CropsType:3,JobWidth:800,WorkDeep:0,Alert:'电池电量低'},
};

/* ── 扩充作业详情数据字段（VMEID/作物/不合格面积/重叠/遗漏/跨区/存疑状态）── */
(function enrichOpDetailData(){
  var codes = {'旋耕':{jt:'3',ct:'3'},'插秧':{jt:'9',ct:'3'},'植保喷洒':{jt:'12',ct:'3'},'施肥':{jt:'11',ct:'3'},'播种':{jt:'16',ct:'3'},'收割':{jt:'13',ct:'3'},'巡检':{jt:'34',ct:'3'},'灌溉':{jt:'35',ct:'3'}};
  Object.keys(window.opDetailData).forEach(function(k){
    var d = window.opDetailData[k];
    var c = codes[d.type] || {jt:'3',ct:'3'};
    d.VMEID = d.terminal;
    d.JobTypeCode = c.jt;
    d.CropsTypeCode = c.ct;
    d.CropsName = window.CROP_TYPE_MAP[c.ct] || '水稻';
    d.JobAreaNG = Math.round(d.area * (0.01 + (d.area % 5) / 100));
    d.PlotArea = Math.round(d.area * 1.05 + 3);
    d.OverlapArea = d.overlap;
    d.HistOverlapArea = Math.round(d.overlap * 0.3);
    d.LeakArea = Math.max(0, Math.round(d.area * 0.005));
    d.AcrossDistrict = d.owner === '马海峰' ? 1 : 0;
    d.impeach = (d.type === '旋耕' && d.area > 400) ? 0 : 1;
    d.cause = d.impeach === 0 ? '深度不足' : '';
    d.JobHour = parseFloat(d.status === '已完成' ? ((d.area / 80) * 1.2).toFixed(1) : '0');
    d.AvgDeep = d.depth === '—' ? 0 : parseInt(d.depth);
    d.workDist = parseInt(d.trackDist) * 1000 || 0;
    d.Alert = '';
  });
})();

/* ── 车辆位置获取函数 ── */
window.getVehiclePos = function(deviceNo){
  var pos = window.VEHICLE_POSITIONS[deviceNo];
  if(!pos) return null;
  var now = new Date();
  pos.PTime = now.getFullYear()+'-'+p2(now.getMonth()+1)+'-'+p2(now.getDate())+' '+p2(now.getHours())+':'+p2(now.getMinutes())+':00';
  return pos;
};
