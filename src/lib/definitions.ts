export type UserRole = 'Farmer' | 'Trader' | 'Transporter' | 'Admin';

export type User = {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
};

export type ProduceStatus = 'Harvested' | 'In Transit' | 'At Market' | 'Sold';
export type ProduceCategory = 'Vegetables' | 'Grains' | 'Fruits' | 'Tubers';

export type HistoryEntry = {
  status: ProduceStatus;
  timestamp: string; // ISO 8601 date string
  updatedBy: string; // User's name
};

export type Produce = {
  id: string;
  name: string;
  category: ProduceCategory;
  quantity: number; // e.g., in kg, boxes, or units
  farmLocation: string;
  harvestDate: string; // ISO 8601 date string
  status: ProduceStatus;
  history: HistoryEntry[];
  farmerId: string;
  farmerName: string;
  createdAt: string; // ISO 8601 date string
};
