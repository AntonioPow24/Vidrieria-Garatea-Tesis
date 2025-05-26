import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const BarChart = ({ data }) => {
  useEffect(() => {
    let root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
        layout: root.verticalLayout
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      text: "{category.slice(0,3)}"
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: 'month',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.setAll({ strokeOpacity: 0.1 });
    xRenderer.grid.template.setAll({ strokeOpacity: 0. });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#",
        extraMin: 0,
        extraMax: 0,
        calculateTotals: false,
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    yAxis.set("step", 10);

    let salesSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Ventas realizadas',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'totalSalesByMonth',
        categoryXField: 'month',
        clustered: true,
        fill: am5.color("#54BFE1"),
        stroke: am5.color("#54BFE1"),
        tooltip: am5.Tooltip.new(root, { labelText: '{name}: {valueY}' })
      })
    );
    salesSeries.columns.template.setAll({
      fill: am5.color("#54BFE1"),
      stroke: am5.color("#54BFE1")
    });
    salesSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true
        })
      });
    });

    let productsSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Productos Vendidos',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'totalProductsByMonth',
        categoryXField: 'month',
        clustered: true,
        fill: am5.color("#9D78E5"),
        stroke: am5.color("#9D78E5"),
        tooltip: am5.Tooltip.new(root, { labelText: '{name}: {valueY}' })
      })
    );
    productsSeries.columns.template.setAll({
      fill: am5.color("#9D78E5"),
      stroke: am5.color("#9D78E5")
    });
    productsSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true
        })
      });
    });

    xAxis.data.setAll(data);
    salesSeries.data.setAll(data);
    productsSeries.data.setAll(data);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50,
      layout: root.horizontalLayout
    }));

    return () => root.dispose();
  }, [data]);

  return <div id="chartdiv" style={{ width: '100%', height: '400px' }}></div>;
};

export default BarChart;
