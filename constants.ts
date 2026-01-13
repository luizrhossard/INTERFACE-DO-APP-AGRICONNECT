
export const IMAGES = {
  profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxowD3D720SRQwzaFL5SkU38K0IEDCqrjV54l233bYQb7RymCBBwNsODNlrYOOjtclXgGdHiOPj5eL89qBcgAr3vddqVI1uPz_8JuRAotFrDoagBcgJJLTQafrGRpvLl4poDDOGyBb2JG3lb8YlINpyWZhX-e2lGDHkB_rFgWHdiel9poO-QVpFH7zaTwNF0zCyRvWDnv1OP8tTD_YSXgt5L2Yvo8LgGS0eHyJ4lU25QD9rrsMW77-zhIcWCHi7pkQsArRNbIVGOg",
  field1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoFmqtzkirwSz1KXcx9jNdSKRhPRh3XYuRrc9W5hSPVGJdO1j2xB0Ax1UizcgW5ZSsoL5CYjr2Qs9n7gU7xnag0KUTM7ASPx78_FbMTx6kX7cD7mU2gO-hNVj0-TJbM3x5U-H6j5GLe6cLQhTSVNoXKzn1zRn6hWTzgP9SBUKWzCtAIFQFsOlJ9YtRCwwFwaWwYwHKLkiKqWLH98tsfi-MlIrXFDTv70sSl5xPoJbinJO3P0_z647aGxFuwDu49Pq0hGaWVUS8Kps",
  field2: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Zuot7JCeCzZxN-_y7HtsoFAfJ9dNA94ifTxrlv_R_oq6AhJ49qynmuMbvPc-zr5pL_207d8mPvNjRwQ00w81MC7ocSVdp6YILs9FLizCxVSLtrytbZ9cIBhE1dssQ2DzbGfOBEH3U1w6OrZm2bEC6nItJHUISpiUnShiiy7EisbzQRnrn-vlsnAb7IeMk8UIyKIO1XdZUyvC5GzI229H2Kq5ZVB5vDQlJpZkXjxSlhflas-e8OulxXdeESxi0OywTVXhGJ86Bno",
  employee1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiqpu2auB-W0FEWrppEW2WSIGWVQ_WYzQUhUNZeJO1QfHVWlHLoYlExpNlR1iB5-0Q_0N6FJCTQwwgLsHE4WcsdJoSWbq4mKa6SiMvKEC_LQOa33ue5Ol0IlOCiMAWIyYDPu1CwYAfbNYyLFGbQDR5N9Rs4BmgWYj5Re1XQf9iaQUMWte9KwhPWt45IoGhH8O6fO7zFQapmLchV4nGcXyfr_0mFxjoN-xUNbmi_ZxQlV-MaN9NaAbHZJDxIVqBZTsemZuggQA2xvE",
  employee2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvG0lN_kPhYpY9pTOSN7yQMI1xWkuj1774A1iqnhJsFbR_B4OqI42HURmGDqNENyFABjskxvhTtYl-KOPP9L0HCzNTar8ayyzL-DtlUU2biFm5U5jlcUR3SuKYtUd7nrb1IlFmd3uRAbxwgYZL17l9CZARaffknHuHk864bl6_wU7H1R9Q9ODUc0jOyWvkafriAaO_ESdNjI6hvOnZOuKtGxWCeTeC4x2k_5NVwxX9UlO15WLcLj8_BieS3pj0YXmJqXq0fLN_fFc"
};

export const MOCK_FIELDS = [
  {
    id: '01',
    name: 'Talhão 01',
    crop: 'Milho',
    season: 'Safra Verão 2024',
    health: 'excelente',
    progress: 80,
    soilStatus: 'Úmido',
    weather: '28°C Sol',
    imageUrl: IMAGES.field1,
    irrigationActive: true,
  },
  {
    id: '02',
    name: 'Talhão 02',
    crop: 'Soja',
    season: 'Safra Inverno 2024',
    health: 'atencao',
    progress: 22,
    soilStatus: 'Seco',
    weather: '32°C Seco',
    imageUrl: IMAGES.field2,
    irrigationActive: false,
  },
];

export const MOCK_TASKS = [
  {
    id: 't1',
    title: 'Aplicação de NPK - Talhão 04',
    priority: 'urgente',
    assignee: { name: 'João Silva', avatar: IMAGES.employee1 },
    time: '08:00 AM',
    status: 'pendente',
  },
  {
    id: 't2',
    title: 'Manutenção Trator JD-40',
    priority: 'medio',
    assignee: { name: 'Oficina', avatar: IMAGES.employee2 }, // Reusing employee avatar as placeholder
    time: '10:30 AM',
    status: 'pendente',
  },
  {
    id: 't3',
    title: 'Colheita Soja - Área Norte',
    priority: 'baixo',
    assignee: { name: 'Ricardo Santos', avatar: IMAGES.employee2 },
    time: '07:00 AM',
    status: 'concluida',
  }
];
