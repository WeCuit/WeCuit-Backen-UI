import{a as e}from"./index.b07bde12.js";const t=()=>e.get("/article/list"),a=t=>e.get(`/article/detail/${t}`),i=t=>e.post("/article/publish",t),s=t=>e.put(`/article/edit/${t.id}`,t),l=t=>e.delete(`/article/delete/${t}`);export{a,s as b,l as d,t as g,i as p};
