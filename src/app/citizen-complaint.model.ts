export interface CitizenComplaintRecord {
  [fieldName: string]: any;
  id: number;
  complaint: string;
  notes: string;
}

export const citizenComplaintDefaultValue: CitizenComplaintRecord = {
  id: 0,
  complaint: '',
  notes: '',
};

export interface RecordMetadata {
  fields: FieldMetadata[];
}

export interface FieldMetadata {
  name: string;
  type: 'number' | 'string' | 'dropdown';
  dropdownOptions: string[];
  required: boolean;
  hidden: boolean;
}

export const CitizenComplaintMetadata: RecordMetadata = {
  fields: [
    {
      name: 'id',
      type: 'number',
      dropdownOptions: [],
      required: false,
      hidden: true,
    },
    {
      name: 'complaint',
      type: 'dropdown',
      dropdownOptions: ['Pothole', 'Street Light Out', 'Other'],
      required: true,
      hidden: false,
    },
    {
      name: 'notes',
      type: 'string',
      dropdownOptions: [],
      required: false,
      hidden: false,
    },
  ],
};
