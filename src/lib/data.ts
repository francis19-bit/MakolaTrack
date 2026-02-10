import type { User, Produce, UserRole } from './definitions';

export const users: User[] = [
  { uid: 'user-01', name: 'Yaw Manu', email: 'yaw.manu@example.com', role: 'Farmer' },
  { uid: 'user-02', name: 'Adwoa Adjei', email: 'adwoa.adjei@example.com', role: 'Trader' },
  { uid: 'user-03', name: 'Kofi Mensah', email: 'kofi.mensah@example.com', role: 'Transporter' },
  { uid: 'user-04', name: 'System Admin', email: 'admin@makolatrack.com', role: 'Admin' },
  { uid: 'user-05', name: 'Ama Serwaa', email: 'ama.serwaa@example.com', role: 'Farmer' },
  { uid: 'user-06', name: 'Femi Ojo', email: 'femi.ojo@example.com', role: 'Trader' },
];

export const produce: Produce[] = [
  {
    id: 'prod-001',
    name: 'Tomatoes',
    category: 'Vegetables',
    quantity: 50, // in boxes
    farmLocation: 'Ada Foah',
    harvestDate: '2024-07-20T08:00:00Z',
    status: 'At Market',
    farmerId: 'user-01',
    farmerName: 'Yaw Manu',
    createdAt: '2024-07-20T08:00:00Z',
    history: [
      { status: 'Harvested', timestamp: '2024-07-20T08:00:00Z', updatedBy: 'Yaw Manu' },
      { status: 'In Transit', timestamp: '2024-07-20T10:00:00Z', updatedBy: 'Kofi Mensah' },
      { status: 'At Market', timestamp: '2024-07-20T14:00:00Z', updatedBy: 'Kofi Mensah' },
    ],
  },
  {
    id: 'prod-002',
    name: 'Maize',
    category: 'Grains',
    quantity: 200, // in kg
    farmLocation: 'Dodowa',
    harvestDate: '2024-07-18T09:00:00Z',
    status: 'Sold',
    farmerId: 'user-05',
    farmerName: 'Ama Serwaa',
    createdAt: '2024-07-18T09:00:00Z',
    history: [
        { status: 'Harvested', timestamp: '2024-07-18T09:00:00Z', updatedBy: 'Ama Serwaa' },
        { status: 'In Transit', timestamp: '2024-07-18T11:00:00Z', updatedBy: 'Kofi Mensah' },
        { status: 'At Market', timestamp: '2024-07-18T15:00:00Z', updatedBy: 'Kofi Mensah' },
        { status: 'Sold', timestamp: '2024-07-21T12:00:00Z', updatedBy: 'Adwoa Adjei' },
    ],
  },
  {
    id: 'prod-003',
    name: 'Mangoes',
    category: 'Fruits',
    quantity: 30, // in boxes
    farmLocation: 'Somanya',
    harvestDate: '2024-07-21T07:00:00Z',
    status: 'In Transit',
    farmerId: 'user-01',
    farmerName: 'Yaw Manu',
    createdAt: '2024-07-21T07:00:00Z',
    history: [
      { status: 'Harvested', timestamp: '2024-07-21T07:00:00Z', updatedBy: 'Yaw Manu' },
      { status: 'In Transit', timestamp: '2024-07-21T09:30:00Z', updatedBy: 'Kofi Mensah' },
    ],
  },
  {
    id: 'prod-004',
    name: 'Cassava',
    category: 'Tubers',
    quantity: 150, // in kg
    farmLocation: 'Nsawam',
    harvestDate: '2024-07-22T06:00:00Z',
    status: 'Harvested',
    farmerId: 'user-05',
    farmerName: 'Ama Serwaa',
    createdAt: '2024-07-22T06:00:00Z',
    history: [
      { status: 'Harvested', timestamp: '2024-07-22T06:00:00Z', updatedBy: 'Ama Serwaa' },
    ],
  },
    {
    id: 'prod-005',
    name: 'Cabbage',
    category: 'Vegetables',
    quantity: 40, // in boxes
    farmLocation: 'Ada Foah',
    harvestDate: '2024-07-22T08:00:00Z',
    status: 'At Market',
    farmerId: 'user-01',
    farmerName: 'Yaw Manu',
    createdAt: '2024-07-22T08:00:00Z',
    history: [
      { status: 'Harvested', timestamp: '2024-07-22T08:00:00Z', updatedBy: 'Yaw Manu' },
      { status: 'In Transit', timestamp: '2024-07-22T10:00:00Z', updatedBy: 'Kofi Mensah' },
      { status: 'At Market', timestamp: '2024-07-22T14:00:00Z', updatedBy: 'Kofi Mensah' },
    ],
  },
];
