import React, { useEffect, useState } from "react";
import {
  Menu, X, Bell, Leaf, Building2, House, ReceiptText,
  FileText, HardHat, FolderKanban, ChevronRight,
  Plus, ArrowUpRight, Clock3, CheckCircle2,
  CircleUserRound, Settings, LogOut, CalendarDays, Languages
} from "lucide-react";

import QuotationPage from "./pages/QuotationPage.jsx";
import BillingPage from "./pages/BillingPage.jsx";
import LaborPage from "./pages/LaborPage.jsx";
import ProjectHandlingPage from "./pages/ProjectHandlingPage.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";

/* =========================================
   MODULE DATA
========================================= */

const modules = [
  {
    id: "billing",
    titleKey: "billingTitle",
    descKey: "billingDesc",
    icon: ReceiptText,
    color: "billing",
    image: "/billing.png"
  },
  {
    id: "quotations",
    titleKey: "quotationsTitle",
    descKey: "quotationsDesc",
    icon: FileText,
    color: "quotation",
    image: "/quotation.png"
  },
  {
    id: "labors",
    titleKey: "labourTitle",
    descKey: "labourDesc",
    icon: HardHat,
    color: "labour",
    image: "/labour.png"
  },
  {
    id: "projects",
    titleKey: "projectsTitle",
    descKey: "projectsDesc",
    icon: FolderKanban,
    color: "projects",
    image: "/reports.png"
  }
];

/* =========================================
   DASHBOARD STYLES
========================================= */

const dashboardStyles = `

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --eco-primary: #a87950;
  --eco-dark: #252d27;
  --eco-bg: #f5f3ef;
  --eco-white: #ffffff;
  --eco-text: #292e28;
  --eco-muted: #85847c;
  --eco-border: #e9e4dc;
}

* {
  box-sizing: border-box;
}

.eco-dashboard {
  min-height: 100vh;
  display: flex;
  background: var(--eco-bg);
  color: var(--eco-text);
  font-family: 'DM Sans', sans-serif;
}

.eco-dashboard button {
  font-family: inherit;
  cursor: pointer;
}

/* SIDEBAR */

.eco-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 27px 18px 20px;
  background: #222b25;
  color: white;
  transition: transform .3s ease;
}

.eco-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 6px 25px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

.eco-brand-symbol {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #354138;
  border: 1px solid rgba(196,154,115,.4);
  border-radius: 12px;
}

.eco-brand-logo {
  width: 100%;
  height: 100%;
  padding: 5px;
  object-fit: contain;
}

.eco-brand-text h2 {
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
}

.eco-brand-text span {
  display: block;
  margin-top: 3px;
  color: #c49a73;
  font-size: 8px;
  letter-spacing: 1.7px;
}

.eco-sidebar-close {
  display: none;
  margin-left: auto;
  border: 0;
  background: transparent;
  color: white;
}

.eco-sidebar-caption {
  padding: 30px 11px 13px;
  color: #a9aea5;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.eco-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.eco-nav-link {
  position: relative;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 13px;
  color: #c3c9c0;
  background: transparent;
  border: 0;
  border-radius: 10px;
  text-align: left;
  transition: .2s ease;
}

.eco-nav-link span {
  font-size: 12px;
  font-weight: 600;
}

.eco-nav-link:hover {
  color: white;
  background: rgba(255,255,255,.07);
}

.eco-nav-link.active {
  color: white;
  background: linear-gradient(120deg,#a87950,#805d40);
  box-shadow: 0 5px 15px rgba(0,0,0,.15);
}

.eco-nav-active-dot {
  width: 6px;
  height: 6px;
  margin-left: auto;
  background: white;
  border-radius: 50%;
}

.eco-sidebar-bottom {
  margin-top: auto;
}

.eco-sidebar-art {
  margin-bottom: 20px;
  padding: 20px 10px;
  color: #c49a73;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,.1);
}

.eco-building-art {
  display: grid;
  place-items: center;
}

.eco-sidebar-art p {
  margin: 5px 0;
  color: #e0d3c5;
  font-size: 10px;
  letter-spacing: 1px;
}

.eco-main {
  min-width: 0;
  width: calc(100% - 250px);
  margin-left: 250px;
}

/* TOPBAR */

.eco-topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 34px;
  background: rgba(255,255,255,.94);
  border-bottom: 1px solid var(--eco-border);
  backdrop-filter: blur(15px);
}

.eco-topbar-left,
.eco-topbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.eco-menu-button,
.eco-sidebar-overlay,
.eco-mobile-brand {
  display: none;
}

.eco-topbar-links {
  display: flex;
  gap: 23px;
}

.eco-topbar-links span {
  color: #777c72;
  font-size: 11px;
  font-weight: 600;
}

.eco-date-display {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #777c72;
  font-size: 11px;
  font-weight: 600;
}

.eco-notification,
.eco-settings-button,
.eco-lang-button {
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: #596154;
  background: #f7f5f1;
  border: 1px solid #eee9e1;
  border-radius: 11px;
}

.eco-lang-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f7f5f1;
  border: 1px solid #eee9e1;
  border-radius: 11px;
  color: #596154;
  font-size: 11px;
  font-weight: 700;
}

.eco-notification span {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 7px;
  height: 7px;
  background: #b47b4c;
  border: 1px solid white;
  border-radius: 50%;
}

.eco-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 16px;
  border-left: 1px solid var(--eco-border);
}

.eco-profile-avatar {
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  color: #946e4c;
  background: #f0e5d9;
  border-radius: 12px;
}

.eco-profile-info strong,
.eco-profile-info span {
  display: block;
}

.eco-profile-info strong {
  font-size: 11px;
}

.eco-profile-info span {
  margin-top: 3px;
  color: #99958d;
  font-size: 9px;
}

/* CONTENT */

.eco-content {
  width: 100%;
  max-width: 1600px;
  margin: auto;
  padding: 30px 35px 25px;
}

/* WELCOME */

.eco-welcome {
  position: relative;
  min-height: 235px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 38px 42px;
  background:
    radial-gradient(circle at 85% 30%,rgba(196,154,115,.23),transparent 30%),
    linear-gradient(115deg,#26332c,#3e493d 65%,#554a3c);
  border-radius: 19px;
  box-shadow: 0 12px 30px rgba(36,43,35,.08);
}

.eco-welcome::before {
  content: "";
  position: absolute;
  top: -170px;
  right: 10%;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 50%;
  box-shadow: 0 0 0 35px rgba(255,255,255,.025),
              0 0 0 70px rgba(255,255,255,.02);
}

.eco-welcome-content {
  position: relative;
  z-index: 2;
  max-width: 550px;
}

.eco-eyebrow {
  color: #b1845f;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.eco-welcome .eco-eyebrow {
  color: #d5b18c;
}

.eco-welcome h2 {
  margin: 13px 0;
  color: #fffaf2;
  font-family: Manrope, sans-serif;
  font-size: clamp(30px,3vw,42px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.eco-welcome p {
  max-width: 440px;
  color: #d5d8cf;
  font-size: 12px;
  line-height: 1.8;
}

.eco-welcome-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 19px;
}

.eco-welcome-tags span {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  color: #f0e6d9;
  background: rgba(255,255,255,.09);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 30px;
  font-size: 9px;
}

.eco-welcome-decoration {
  position: absolute;
  right: 8%;
  bottom: -45px;
  color: #d5b28b;
  opacity: .2;
}

/* MODULE SECTION */

.eco-modules-section {
  margin-top: 35px;
}

.eco-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
}

.eco-section-heading h2 {
  margin: 7px 0 0;
  color: #252923;
  font-family: Manrope, sans-serif;
  font-size: 22px;
  font-weight: 800;
}

.eco-module-count {
  padding: 9px 12px;
  color: #866346;
  background: #eee5da;
  border: 1px solid #e6d9c9;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

.eco-modules-grid {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 15px;
}

.eco-module-card {
  position: relative;
  min-width: 0;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 19px;
  overflow: hidden;
  text-align: left;
  background: #fff;
  border: 1px solid var(--eco-border);
  border-radius: 16px;
  transition: .3s ease;
}

.eco-module-card:hover {
  transform: translateY(-6px);
  border-color: #c9aa8d;
  box-shadow: 0 14px 30px rgba(45,47,38,.09);
}

.eco-module-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.eco-module-icon {
  width: 61px;
  height: 61px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #f3ede5;
  border: 1px solid #eee4d8;
  border-radius: 14px;
}

.eco-module-image {
  width: 43px;
  height: 43px;
  object-fit: contain;
}

.eco-module-arrow {
  color: #a87950;
  transition: transform .2s;
}

.eco-module-card:hover .eco-module-arrow {
  transform: translate(3px,-3px);
}

.eco-module-details {
  margin-top: 20px;
}

.eco-module-details h3 {
  margin: 0;
  color: #292e28;
  font-size: 13px;
  font-weight: 800;
}

.eco-module-details p {
  margin: 7px 0 0;
  color: #85847c;
  font-size: 10px;
  line-height: 1.7;
}

.eco-module-open {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: 14px;
  color: #a87950;
  font-size: 10px;
  font-weight: 800;
}

/* OVERVIEW */

.eco-overview-grid {
  display: grid;
  grid-template-columns: minmax(0,1.55fr) minmax(280px,.85fr);
  gap: 18px;
  margin-top: 26px;
}

.eco-right-column {
  min-width: 0;
}

.eco-panel {
  min-width: 0;
  padding: 22px;
  background: white;
  border: 1px solid var(--eco-border);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(37,41,35,.025);
}

.eco-panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 17px;
  border-bottom: 1px solid #efebe5;
}

.eco-panel-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.eco-heading-icon {
  width: 41px;
  height: 41px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #f3ece3;
  border-radius: 11px;
}

.eco-panel-title h2 {
  margin: 0;
  color: #292e28;
  font-size: 13px;
  font-weight: 800;
}

.eco-panel-title p {
  margin: 5px 0 0;
  color: #929087;
  font-size: 9px;
}

.eco-text-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  color: #a87950;
  background: transparent;
  border: 0;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.eco-workspace-message {
  min-height: 140px;
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 19px;
  padding: 17px;
  background: #f8f6f1;
  border: 1px solid #eee8df;
  border-radius: 12px;
}

.eco-workspace-illustration {
  width: 68px;
  height: 68px;
  flex: 0 0 68px;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #eee5d9;
  border-radius: 15px;
}

.eco-workspace-message h3 {
  margin: 0;
  color: #30362f;
  font-size: 12px;
  font-weight: 800;
}

.eco-workspace-message p {
  margin: 7px 0 0;
  color: #85847c;
  font-size: 10px;
  line-height: 1.8;
}

/* QUICK ACTIONS */

.eco-quick-actions {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 8px;
  margin-top: 18px;
}

.eco-quick-action {
  min-width: 0;
  min-height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 4px;
  color: #53564d;
  background: #f8f6f1;
  border: 1px solid #eee8df;
  border-radius: 11px;
  transition: .2s ease;
}

.eco-quick-action:hover {
  background: #f0e6da;
  border-color: #d9c2a9;
  transform: translateY(-3px);
}

.eco-quick-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #eee5d9;
  border-radius: 11px;
}

.eco-quick-icon img {
  width: 27px;
  height: 27px;
  object-fit: contain;
}

.eco-quick-action > span:last-child {
  font-size: 9px;
  font-weight: 800;
  text-align: center;
  overflow-wrap: anywhere;
}

/* FOOTER */

.eco-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  padding: 18px 2px 5px;
  color: #929087;
  border-top: 1px solid #e7e2d9;
  font-size: 10px;
}

.eco-footer span:last-child {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #a87950;
}

/* OTHER PAGES */

.eco-module-view {
  min-width: 0;
  min-height: calc(100vh - 76px);
}

/* BUTTON ACCESSIBILITY */

.eco-dashboard button:focus-visible {
  outline: 3px solid #c49a73;
  outline-offset: 3px;
}

/* TABLET */

@media (max-width: 1200px) {
  .eco-content {
    padding: 25px 22px;
  }

  .eco-modules-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .eco-overview-grid {
    grid-template-columns: 1fr;
  }
}

.eco-mobile-bottom-nav {
  display: none;
}

/* MOBILE */

@media (max-width: 760px) {
  .eco-dashboard {
    display: block;
    padding-bottom: 72px;
  }
  .eco-mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 80;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    background: white;
    border-top: 1px solid #e9e4dc;
    box-shadow: 0 -5px 20px rgba(0,0,0,.04);
  }
  .eco-sidebar {
    width: min(285px,85vw);
    transform: translateX(-105%);
  }

  .eco-sidebar.eco-sidebar-open {
    transform: translateX(0);
  }

  .eco-sidebar-close {
    display: grid;
    place-items: center;
  }

  .eco-sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 90;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.45);
    border: 0;
  }

  .eco-main {
    width: 100%;
    margin-left: 0;
  }

  .eco-topbar {
    min-height: 65px;
    padding: 0 14px;
  }

  .eco-menu-button {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    color: #394238;
    background: #f5f2ed;
    border: 0;
    border-radius: 10px;
  }

  .eco-mobile-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #313a31;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .eco-topbar-links,
  .eco-date-display,
  .eco-settings-button {
    display: none;
  }

  .eco-topbar-left,
  .eco-topbar-right {
    gap: 9px;
  }

  .eco-profile {
    padding-left: 9px;
  }

  .eco-profile-info {
    display: none;
  }

  .eco-content {
    padding: 18px 14px;
  }

  .eco-welcome {
    min-height: 225px;
    padding: 26px 22px;
    border-radius: 15px;
  }

  .eco-welcome h2 {
    font-size: 30px;
  }

  .eco-welcome p {
    max-width: 290px;
    font-size: 10px;
  }

  .eco-welcome-decoration {
    right: -70px;
    opacity: .1;
  }

  .eco-modules-section {
    margin-top: 27px;
  }

  .eco-section-heading h2 {
    font-size: 19px;
  }

  .eco-modules-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 10px;
  }

  .eco-module-card {
    min-height: 195px;
    padding: 13px;
  }

  .eco-module-icon {
    width: 49px;
    height: 49px;
  }

  .eco-module-image {
    width: 34px;
    height: 34px;
  }

  .eco-module-details h3 {
    font-size: 11px;
  }

  .eco-module-details p {
    font-size: 9px;
  }

  .eco-overview-grid {
    margin-top: 20px;
    gap: 13px;
  }

  .eco-panel {
    padding: 15px;
  }

  .eco-workspace-message {
    align-items: flex-start;
    padding: 12px;
    gap: 11px;
  }

  .eco-workspace-illustration {
    width: 48px;
    height: 48px;
    flex-basis: 48px;
  }

  .eco-workspace-message h3 {
    font-size: 10px;
  }

  .eco-workspace-message p {
    font-size: 9px;
  }

  .eco-quick-actions {
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 5px;
  }

  .eco-quick-action {
    min-height: 80px;
    padding: 7px 2px;
  }

  .eco-quick-icon {
    width: 32px;
    height: 32px;
  }

  .eco-quick-icon img {
    width: 23px;
    height: 23px;
  }

  .eco-quick-action > span:last-child {
    font-size: 8px;
  }

  .eco-footer {
    font-size: 9px;
  }

  .eco-mobile-bottom-nav button {
    min-width: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 7px;
    color: #85847c;
    background: transparent;
    border: 0;
    border-radius: 9px;
  }

  .eco-mobile-bottom-nav button span {
    font-size: 9px;
    font-weight: 700;
  }

  .eco-mobile-bottom-nav button.active {
    color: #a87950;
    background: #f5eee7;
  }

  .eco-module-view {
    min-height: calc(100vh - 65px);
  }
}

/* VERY SMALL PHONES */

@media (max-width: 390px) {
  .eco-modules-grid {
    grid-template-columns: 1fr;
  }

  .eco-module-card {
    min-height: 175px;
  }

  .eco-quick-actions {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .eco-welcome h2 {
    font-size: 27px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .eco-dashboard *,
  .eco-dashboard *::before,
  .eco-dashboard *::after {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
`;

/* =========================================
   MAIN APP
========================================= */

export default function App() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setCurrentDate(
      today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    );
  }, []);

  const sidebarLinks = [
    { id: "home", title: t("dashboardNav"), icon: House },
    { id: "billing", title: t("billingInvoices"), icon: ReceiptText },
    { id: "quotations", title: t("quotations"), icon: FileText },
    { id: "labors", title: t("laborManagement"), icon: HardHat },
    { id: "projects", title: t("projectHandling"), icon: FolderKanban }
  ];

  const quickActions = [
    { title: t("newBill"), id: "billing", icon: ReceiptText },
    { title: t("newQuotation"), id: "quotations", icon: FileText },
    { title: t("addLabour"), id: "labors", icon: HardHat },
    { title: t("openProjects"), id: "projects", icon: Plus }
  ];

  const openModule = (id) => {
    setActiveTab(id);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    alert(t("logoutAlert"));
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case "quotations":
        return <QuotationPage />;
      case "billing":
        return <BillingPage />;
      case "labors":
        return <LaborPage />;
      case "projects":
        return <ProjectHandlingPage />;
      default:
        return null;
    }
  };

  return (
    <div className="eco-dashboard">

      <style>{dashboardStyles}</style>

      {sidebarOpen && (
        <button
          className="eco-sidebar-overlay"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`eco-sidebar ${
          sidebarOpen ? "eco-sidebar-open" : ""
        }`}
      >

        <div className="eco-sidebar-brand">

          <div className="eco-brand-symbol">
            <img
              src="/logo.png"
              alt="NextGen Logo"
              className="eco-brand-logo"
            />
          </div>

          <div className="eco-brand-text">
            <h2>{t("appName")}</h2>
            <span>{t("appSubtitle")}</span>
          </div>

          <button
            className="eco-sidebar-close"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={21} />
          </button>

        </div>

        <div className="eco-sidebar-caption">
          {t("workspace")}
        </div>

        <nav className="eco-sidebar-nav">

          {sidebarLinks.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              className={`eco-nav-link ${
                activeTab === id ? "active" : ""
              }`}
              onClick={() => openModule(id)}
            >
              <Icon size={19} strokeWidth={2} />

              <span>{title}</span>

              {activeTab === id && (
                <span className="eco-nav-active-dot" />
              )}
            </button>
          ))}

        </nav>

        <div className="eco-sidebar-bottom">

          <div className="eco-sidebar-art">
            <div className="eco-building-art">
              <Building2 size={76} strokeWidth={1.1} />
            </div>

            <p>{t("buildToday")}</p>
            <p>{t("betterTomorrow")}</p>
          </div>

          <button
            className="eco-nav-link"
            onClick={handleLogout}
          >
            <LogOut size={19} />
            <span>{t("logout")}</span>
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="eco-main">

        {/* TOPBAR */}

        <header className="eco-topbar">

          <div className="eco-topbar-left">

            <button
              className="eco-menu-button"
              aria-label="Open navigation menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={23} />
            </button>

            <div className="eco-mobile-brand">
              <Building2 size={22} />
              <span>{t("appName")}</span>
            </div>

            <div className="eco-topbar-links">
              <span>{t("topPlan")}</span>
              <span>{t("topTrack")}</span>
              <span>{t("topBuild")}</span>
              <span>{t("topGrow")}</span>
            </div>

          </div>

          <div className="eco-topbar-right">

            <button
              onClick={toggleLanguage}
              className="eco-lang-pill"
              title="Switch Language / भाषा बदला"
            >
              <Languages size={15} />
              <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
            </button>

            <div className="eco-date-display">
              <CalendarDays size={16} />
              <span>{currentDate}</span>
            </div>

            <button
              className="eco-notification"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span />
            </button>

            <div className="eco-profile">

              <div className="eco-profile-avatar">
                <CircleUserRound size={25} />
              </div>

              <div className="eco-profile-info">
                <strong>{t("siteManager")}</strong>
                <span>{t("workspaceSub")}</span>
              </div>

            </div>

            <button
              className="eco-settings-button"
              aria-label="Settings"
              onClick={() => console.log("Settings selected")}
            >
              <Settings size={19} />
            </button>

          </div>

        </header>

        {/* DASHBOARD HOME */}

        {activeTab === "home" ? (

          <div className="eco-content">

            {/* WELCOME */}

            <section className="eco-welcome">

              <div className="eco-welcome-content">

                <span className="eco-eyebrow">
                  {t("yourWorkspace")}
                </span>

                <h2>{t("welcomeBack")}</h2>

                <p>
                  {t("welcomeDesc")}
                </p>

                <div className="eco-welcome-tags">

                  <span>
                    <CheckCircle2 size={14} />
                    {t("workOrganized")}
                  </span>

                  <span>
                    <Leaf size={14} />
                    {t("buildSustainably")}
                  </span>

                </div>

              </div>

              <div
                className="eco-welcome-decoration"
                aria-hidden="true"
              >
                <Building2 size={190} strokeWidth={0.8} />
              </div>

            </section>

            {/* MODULES */}

            <section className="eco-modules-section">

              <div className="eco-section-heading">

                <div>
                  <span className="eco-eyebrow">
                    {t("getThingsDone")}
                  </span>

                  <h2>{t("exploreModules")}</h2>
                </div>

                <span className="eco-module-count">
                  {String(modules.length).padStart(2, "0")} {t("modulesLabel")}
                </span>

              </div>

              <div className="eco-modules-grid">

                {modules.map(
                  ({ id, titleKey, descKey, image, color }) => (

                    <button
                      className={`eco-module-card ${color}`}
                      key={id}
                      onClick={() => openModule(id)}
                    >

                      <div className="eco-module-card-top">

                        <div className="eco-module-icon">
                          <img
                            src={image}
                            alt={t(titleKey)}
                            className="eco-module-image"
                          />
                        </div>

                        <ArrowUpRight
                          className="eco-module-arrow"
                          size={19}
                        />

                      </div>

                      <div className="eco-module-details">
                        <h3>{t(titleKey)}</h3>
                        <p>{t(descKey)}</p>
                      </div>

                      <span className="eco-module-open">
                        {t("openModule")}
                        <ChevronRight size={15} />
                      </span>

                    </button>

                  )
                )}

              </div>

            </section>

            {/* PROJECT WORKSPACE */}

            <section className="eco-overview-grid">

              <div className="eco-panel eco-project-panel">

                <div className="eco-panel-heading">

                  <div className="eco-panel-title">

                    <div className="eco-heading-icon">
                      <FolderKanban size={19} />
                    </div>

                    <div>
                      <h2>{t("projectWorkspace")}</h2>
                      <p>{t("projectWorkspaceSub")}</p>
                    </div>

                  </div>

                  <button
                    className="eco-text-button"
                    onClick={() => openModule("projects")}
                  >
                    {t("openProjects")}
                    <ArrowUpRight size={15} />
                  </button>

                </div>

                <div className="eco-workspace-message">

                  <div className="eco-workspace-illustration">
                    <Building2 size={42} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3>
                      {t("workspaceBannerTitle")}
                    </h3>

                    <p>
                      {t("workspaceBannerDesc")}
                    </p>
                  </div>

                </div>

              </div>

              {/* QUICK ACTIONS */}

              <div className="eco-right-column">

                <div className="eco-panel eco-quick-panel">

                  <div className="eco-panel-heading">

                    <div className="eco-panel-title">

                      <div className="eco-heading-icon">
                        <Clock3 size={19} />
                      </div>

                      <div>
                        <h2>{t("quickActions")}</h2>
                        <p>{t("quickActionsSub")}</p>
                      </div>

                    </div>

                  </div>

                  <div className="eco-quick-actions">

                    {quickActions.map(
                      ({ title, id, icon: Icon }) => {

                        const images = {
                          billing: "/billing.png",
                          labors: "/labour.png",
                          quotations: "/quotation.png",
                          projects: "/reports.png"
                        };

                        return (
                          <button
                            className="eco-quick-action"
                            key={id}
                            onClick={() => openModule(id)}
                          >

                            <span className="eco-quick-icon">

                              <img
                                src={images[id]}
                                alt={title}
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />

                              <Icon
                                size={21}
                                style={{ display: "none" }}
                              />

                            </span>

                            <span>{title}</span>

                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

              </div>

            </section>

            {/* FOOTER */}

            <footer className="eco-footer">

              <span>
                © {new Date().getFullYear()} {t("footerTitle")}
              </span>

              <span>
                <Leaf size={14} />
                {t("footerSlogan")}
              </span>

            </footer>

          </div>

        ) : (

          <div className="eco-module-view">
            {renderActivePage()}
          </div>

        )}

      </main>

      {/* MOBILE NAVIGATION */}

      <nav className="eco-mobile-bottom-nav">

        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => openModule("home")}
        >
          <House size={20} />
          <span>{t("navHome")}</span>
        </button>

        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => openModule("projects")}
        >
          <FolderKanban size={20} />
          <span>{t("navProjects")}</span>
        </button>

        <button
          className={activeTab === "labors" ? "active" : ""}
          onClick={() => openModule("labors")}
        >
          <HardHat size={20} />
          <span>{t("navLabour")}</span>
        </button>

        <button
          className={activeTab === "billing" ? "active" : ""}
          onClick={() => openModule("billing")}
        >
          <ReceiptText size={20} />
          <span>{t("navBilling")}</span>
        </button>

      </nav>

    </div>
  );
}