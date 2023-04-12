import theme from "@/components/theme";
import { ThemeProvider } from "@mui/material";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridRowsProp,
  useGridApiRef,
} from "@mui/x-data-grid";
import { useCallback, useState } from "react";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

export default function MyDataGrid() {
  const initialFilter: GridFilterModel = { items: [] };
  const [filterModel, setFilterModel] = useState(initialFilter);
  const [filterEl, setFilterEl] = useState<HTMLElement | null>(null);
  const gridApiRef = useGridApiRef();

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: "Column 1",
      width: 150,
    },
    {
      field: "col2",
      headerName: "Column 2",
      width: 150,
    },
  ];
  const handleFilterModelChange = useCallback<
    (model: GridFilterModel, details: GridCallbackDetails<"filter">) => void
  >(
    (model, details) => {
      const colHeaderElement = gridApiRef.current?.getColumnHeaderElement(
        model.items.shift()?.field ?? ""
      );
      console.log(['filterModelChanged', model.items[0], colHeaderElement]);

      if (colHeaderElement) setFilterEl(colHeaderElement);
    },
    [gridApiRef]
  );

  return (
    <div style={{ height: 300, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          apiRef={gridApiRef}
          initialState={{
            filter: { filterModel },
          }}
          rows={rows}
          columns={columns}
          slotProps={{ panel: { anchorEl: filterEl } }}
          onFilterModelChange={handleFilterModelChange}
        />
      </ThemeProvider>
    </div>
  );
}
