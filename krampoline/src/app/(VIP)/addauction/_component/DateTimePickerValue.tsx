import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTimePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label="날짜와 시간을 선택해주세요"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            zIndex: 0, // DateTimePicker의 z-index 조정
            "& .MuiInputBase-root": {
              zIndex: 0, // 입력 필드의 z-index 조정
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
