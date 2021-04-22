整理蒐集的 SVG Code 和 Canvas Code 並改寫

SVG：

- PieChartSing
  -- 可輸入百分比形成圓餅圖

- PieChartPercent
  -- 可輸入多個百分比組成圓餅圖

Canvas：

- PieChartPercentCanvas
  -- 可輸入多個百分比組成圓餅圖，並加上文字資訊

-- 小筆記
(以下 table 取自https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/384410/)

<table>
  <tr>
    <th>Canvas</th>
    <th>SVG</th>
  </tr>
  <tr>
    <td>基於畫素（動態 .png）</td>
    <td>基於形狀</td>
  </tr>
  <tr>
    <td>單個 HTML 元素</td>
    <td>多個圖形元素，這些元素成為 DOM部分</td></tr><tr><td>僅通過指令</td><td>通過指令碼和 CSS 修改</td>
  </tr>
  <tr>
    <td>事件模型/使用者互動顆粒化 (x,y)</td>
    <td>事件模型/使用者互動抽象化 (recpath)</td>
  </tr>
  <tr>
    <td>圖面較小時、物件數量較大 (&gt;1（或同時滿足這二者）時效能更佳</td>
    <td>物件數量較小 (&lt;10k)、圖面更同時滿足這二者）時效能更佳</td>
  </tr>
</table>
