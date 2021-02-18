import axios from "axios";
import localStorageService from "../../services/localStorageService";
// Create instance called instance
export const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: "https://u71h29j40k.execute-api.ap-south-1.amazonaws.com/dev",
  headers: {
    Authorization: `Bearer ${localStorageService.getItem("token")}`,
    //"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGFkNzcyMmU0NTAzMDAwOGE1MmIyZiIsImVtYWlsX2lkIjoiYWFhYWFhYWFhQGEuY29tIiwicGhvbmVfbnVtYmVyIjo5MDk2MTAxOTU3LCJnZW5kZXIiOiJtYWxlIiwibGFzdF9sb2dnZWRfb24iOiIyMDIwLTEwLTE3VDExOjQyOjM0LjAwMFoiLCJuYW1lIjoiZGYiLCJpYXQiOjE2MDI5MzQ5NTR9.xKO4E7s8va2Vup_v3Mly_G65lGO-wlbHqUJ40oSvV0Y`
  },
});
