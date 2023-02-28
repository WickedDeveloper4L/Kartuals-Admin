export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 238,
    renderCell: (params) => {
      return (
        <div className="cellwithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone Number", width: 200 },

  { field: "country", headerName: "Country", width: 150 },
  { field: "displayName", headerName: "Full Name", width: 150 },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 238,
    renderCell: (params) => {
      return (
        <div className="cellwithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone Number", width: 200 },

  { field: "country", headerName: "Country", width: 150 },
  { field: "displayName", headerName: "Full Name", width: 150 },
];
