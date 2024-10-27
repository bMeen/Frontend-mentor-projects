import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--cream);
`;

const ToolTipBox = styled.div`
  background-color: var(--dark-brown);
  color: var(--cream);
  border-radius: 5px;
  padding: 0.8rem;
  font-weight: 700;
`;

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <ToolTipBox style={{ transform: "translate(-60%,-100%)" }}>
        ${payload[0].value}
      </ToolTipBox>
    );
  }
  return null;
}

function BarChartContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("./data.json");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const maxValue = Math.max(...data.map((item) => item.amount));

  return (
    <StyledContainer>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Bar
            dataKey="amount"
            fill="#ec775f"
            radius={[4, 4, 4, 4]}
            label={({ x, y, width, height, value }) => (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={5}
                ry={5}
                fill={value === maxValue ? "#76b5bc" : "#ec775f"}
              />
            )}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </StyledContainer>
  );
}

export default BarChartContainer;
