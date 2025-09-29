import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const Linechart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: false }, // hides extra toolbar
        animations: { enabled: true, easing: "easeinout", speed: 800 }
      },
      stroke: {
        curve: "smooth", // smooth lines
        width: 3
      },
      markers: {
        size: 5,
        colors: ["#adadad"], // points
        strokeColors: "#adadad"
      },
      series: [
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          style: { colors: "#a1a1aa", fontSize: "12px" }
        }
      },
      yaxis: {
        labels: {
          style: { colors: "#a1a1aa", fontSize: "12px" }
        }
      },
      grid: {
        borderColor: "#a1a1aa",
        strokeDashArray: 4
      },
      tooltip: {
        theme: "dark"
      },
      colors: ["#0ba9dc"] // Tailwind green-500
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef} className="w-full" />;
};

export default Linechart;
