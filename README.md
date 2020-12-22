## React-Readux Blog
一個串接 Lidemy API 的部落格系統，註冊用戶可以檢視、上傳、編輯及刪除文章。
- [Demo](https://zoeaeen13.github.io/lidemy-week24-redux-blog/#/)
- [Lidemy API](https://github.com/Lidemy/lidemy-student-json-api-server)
![](https://i.imgur.com/WFnDbxX.gif)

---

### 功能
- 顯示所有文章列表
- 點擊顯示單頁文章內容（標題、發文時間以及文章內容）
- 註冊/登入功能，密碼預設「Lidemy」
- Token 機制
- 發布文章功能：登入狀態下，顯示發布文章的頁面按鈕，輸入標題及內容即可新增文章
- 編輯及刪除功能：登入狀態下顯示刪除及編輯按鈕
- 分頁功能，archive 排序從新到舊，以 5 筆為一頁

![](https://i.imgur.com/pFBBXTI.jpg)

![](https://i.imgur.com/HJNrABu.jpg)

![](https://i.imgur.com/8IckzGK.jpg)

---

### 使用技術
- 以 React 搭配 Redux、React-router 建立具備會員系統的部落格
- 以 JSX 語法撰寫元件
- 支援 RWD，使用 styled-component、SASS 進行排版
- 使用 funciton component 及 hooks
- 以 Redux 進行狀態管理，透過 reducer、action 及 dispatch 更新 data，使用 Redux-toolkit 標準化流程
- React-router-dom 做 SPA 頁面導向
- 導入 Prettier 讓程式碼格式統一
- 組織 React app 檔案結構

---
