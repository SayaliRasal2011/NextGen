import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/api';
import { useLanguage } from '../context/LanguageContext';
import {
  Users,
  Plus,
  CalendarCheck,
  DollarSign,
  Phone,
  MapPin,
  X,
  Eye,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
  BriefcaseBusiness,
  Wallet,
  ArrowUpRight,
  UserRound,
  FileImage,
  Search,
  RefreshCw,
  Trash2,
  Pencil
} from 'lucide-react';

export default function LaborPage() {
  const { t, lang } = useLanguage();

  const translateRole = role => {
    const roleKeys = {
      Mason: 'mason',
      Electrician: 'electrician',
      Plumber: 'plumber',
      Helper: 'helper',
      'Bar Bender': 'barBender'
    };

    return roleKeys[role] ? t(roleKeys[role]) : role;
  };
  const [activeSubTab, setActiveSubTab] = useState('directory');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedLaborProfile, setSelectedLaborProfile] = useState(null);
  const [editingLaborId, setEditingLaborId] = useState(null);
  const [labors, setLabors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Attendance date range: Previous 5 days to Next 5 days
  const getLocalDate = (date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const getMinMaxDates = () => {
    const today = new Date();

    const minD = new Date();
    minD.setDate(today.getDate() - 5);

    const maxD = new Date();
    maxD.setDate(today.getDate() + 5);

    return {
      min: getLocalDate(minD),
      max: getLocalDate(maxD)
    };
  };

  const { min: minDate, max: maxDate } = getMinMaxDates();

  // Last 7 days
  const getLast7Days = () => {
    const dates = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dates.push(getLocalDate(d));
    }

    return dates;
  };

  const past7Days = getLast7Days();

  const [selectedDate, setSelectedDate] = useState(getLocalDate());

  // Add Labor Form State
  const [formName, setFormName] = useState('');
  const [formMobile, setFormMobile] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRole, setFormRole] = useState('Mason');
  const [customRoles, setCustomRoles] = useState([]);
const [showAddRole, setShowAddRole] = useState(false);
const [newRole, setNewRole] = useState('');
  const [formWage, setFormWage] = useState(700);

  const [formProfilePhoto, setFormProfilePhoto] = useState('');
  const [formPanPhoto, setFormPanPhoto] = useState('');
  const [formAadharPhoto, setFormAadharPhoto] = useState('');
const handleDeleteLabor = async (labor) => {
    if (!window.confirm(`Are you sure you want to delete ${labor.name}?`)) {
        return;
    }

    try {
        const response = await fetch(
            `${API_BASE_URL}/api/labors/${encodeURIComponent(labor._id)}`,
            {
                method: 'DELETE'
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to delete labor');
        }

        setLabors(prev =>
            prev.filter(item => item._id !== labor._id)
        );

        alert('Labor deleted successfully');

    } catch (error) {
        console.error('Delete Labor Error:', error);
        alert(`Unable to delete labor: ${error.message}`);
    }
};


const handleEditLabor = (labor) => {
  setEditingLaborId(labor._id);

  setFormName(labor.name || '');
  setFormMobile(labor.mobile || '');
  setFormLocation(labor.location || '');
  setFormRole(labor.role || 'Mason');
  setFormWage(labor.dailyWage || 700);

  setFormProfilePhoto(labor.profilePhoto || '');
  setFormPanPhoto(labor.panPhoto || '');
  setFormAadharPhoto(labor.aadharPhoto || '');

  setSelectedLaborProfile(null);
  setShowAddModal(true);
};
  // Fetch Labor Members
  const fetchLabors = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/labors');

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      const data = await res.json();

      console.log('Fetched Labors:', data);

      setLabors(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch labors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabors();
  }, []);

  // File Upload
  const handleFileUpload = (e, setter) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setter(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Reset Add Labor Form
  const resetLaborForm = () => {
    setFormName('');
    setFormMobile('');
    setFormLocation('');
    setFormRole('Mason');
    setFormWage(700);

    setFormProfilePhoto('');
    setFormPanPhoto('');
    setFormAadharPhoto('');
  };


  const handleAddRole = () => {
  const role = newRole.trim();

  if (!role) {
    alert('Please enter a role name');
    return;
  }

  const exists = ['Mason', 'Electrician', 'Plumber', 'Helper', 'Bar Bender', ...customRoles]
    .some(item => item.toLowerCase() === role.toLowerCase());

  if (exists) {
    alert('This role already exists');
    return;
  }

  setCustomRoles(prev => [...prev, role]);
  setFormRole(role);
  setNewRole('');
  setShowAddRole(false);
};


  // Add New Labor
  const handleAddLabor = async (e) => {
    e.preventDefault();

    const newLaborData = {
      name: formName,
      mobile: formMobile,
      location: formLocation,
      role: formRole,
      dailyWage: Number(formWage),
      profilePhoto:
        formProfilePhoto ||
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      panPhoto: formPanPhoto || 'Verified',
      aadharPhoto: formAadharPhoto || 'Verified',
      attendanceRecords: {}
    };

    try {
  const isEditing = Boolean(editingLaborId);

  const res = await fetch(
    isEditing
      ? `${API_BASE_URL}/api/labors/${editingLaborId}`
      : `${API_BASE_URL}/api/labors`,
    {
      method: isEditing ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLaborData)
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || result.error || 'Unable to save labor');
  }

  await fetchLabors();

  setShowAddModal(false);
  setEditingLaborId(null);
  resetLaborForm();

  alert(isEditing ? 'Worker updated successfully' : 'Worker added successfully');

} catch (err) {
  console.error('Failed to save labor:', err);
  alert(t('unableToSaveWorker') + err.message);
}
  };

  // Update Attendance
  const handleAttendanceChange = async (laborId, targetDate, status) => {
    try {
      if (!laborId || !targetDate || !status) {
        console.error('Missing attendance data:', {
          laborId,
          targetDate,
          status
        });

        return;
      }

      const res = await fetch(
        `http://localhost:5000/api/labors/${laborId}/attendance`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            date: targetDate,
            status: status
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Attendance update failed');
      }

      await fetchLabors();

      console.log('Attendance saved:', data);
    } catch (err) {
      console.error('Failed to update attendance:', err);
      alert(t('unableToSaveAttendance') + err.message);
    }
  };

  // Safe Attendance Records Getter
  const getAttendanceRecords = (labor) => {
    if (!labor?.attendanceRecords) {
      return {};
    }

    if (labor.attendanceRecords instanceof Map) {
      return Object.fromEntries(labor.attendanceRecords);
    }

    return labor.attendanceRecords;
  };

  // Get Attendance Status
  const getAttendanceStatus = (labor, date) => {
    const records = getAttendanceRecords(labor);

    return records[date] || 'Not Marked';
  };

  // Calculate Earnings
  // Present = 1x, Half Day = 0.5x
  const calculateLaborEarnings = (labor) => {
    let totalDaysWorked = 0;

    const records = getAttendanceRecords(labor);

    Object.values(records).forEach(status => {
      if (status === 'Present') {
        totalDaysWorked += 1;
      } else if (status === 'Half Day') {
        totalDaysWorked += 0.5;
      }
    });

    const totalEarned =
      totalDaysWorked * Number(labor.dailyWage || 0);

    return {
      totalDaysWorked,
      totalEarned
    };
  };

  // Filter Workers
  const filteredLabors = labors.filter(labor => {
    const search = searchTerm.toLowerCase();

    return (
      (labor.name || '').toLowerCase().includes(search) ||
      (labor.mobile || '').toLowerCase().includes(search) ||
      (labor.role || '').toLowerCase().includes(search) ||
      (labor.location || '').toLowerCase().includes(search)
    );
  });

  // Dashboard Statistics
  const totalWorkers = labors.length;

  const totalDailyWages = labors.reduce(
    (total, labor) => total + Number(labor.dailyWage || 0),
    0
  );

  const presentToday = labors.filter(
    labor => getAttendanceStatus(labor, getLocalDate()) === 'Present'
  ).length;

  const halfDayToday = labors.filter(
    labor => getAttendanceStatus(labor, getLocalDate()) === 'Half Day'
  ).length;

  const totalPayment = labors.reduce((total, labor) => {
    return total + calculateLaborEarnings(labor).totalEarned;
  }, 0);

  // Currency Formatter
  const formatCurrency = amount => {
    return Number(amount || 0).toLocaleString(lang === 'mr' ? 'mr-IN' : 'en-IN', {
      maximumFractionDigits: 2
    });
  };

  // Document Preview
  const renderDocument = (document, label) => {
    const isImage =
      typeof document === 'string' &&
      (document.startsWith('data:image') ||
        document.startsWith('http://') ||
        document.startsWith('https://'));

    return (
      <div className="nextgen-labor-document">
        <div className="nextgen-labor-document-heading">
          <FileImage size={17} />
          <span>{label}</span>
        </div>

        {isImage ? (
          <a href={document} target="_blank" rel="noreferrer">
            <img
              src={document}
              alt={label}
              className="nextgen-labor-document-image"
            />
            <span className="nextgen-labor-document-link">
              {t('viewDocument')} <ArrowUpRight size={13} />
            </span>
          </a>
        ) : (
          <div className="nextgen-labor-document-status">
            <CheckCircle2 size={16} />
            <span>{document || t('notUploaded')}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="nextgen-labor-page">

      {/* PAGE STYLES */}
      <style>{`

        .nextgen-labor-page {
          --labor-dark: #211b17;
          --labor-dark-2: #30251e;
          --labor-bronze: #a45e30;
          --labor-bronze-light: #c58b60;
          --labor-beige: #e8c29f;
          --labor-bg: #f5f1eb;
          --labor-card: #ffffff;
          --labor-text: #302820;
          --labor-muted: #92877c;
          --labor-border: #e9e1d8;
          width: 100%;
          min-height: 100%;
          padding: 28px;
          background: var(--labor-bg);
          color: var(--labor-text);
          font-family: inherit;
        }

        .nextgen-labor-page * {
          box-sizing: border-box;
        }

        .labor-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .labor-heading-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .labor-heading-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--labor-dark);
          color: var(--labor-beige);
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(33, 27, 23, .13);
        }

        .labor-heading-title {
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -.6px;
          color: var(--labor-dark);
          margin: 0;
        }

        .labor-heading-subtitle {
          margin: 5px 0 0;
          color: var(--labor-muted);
          font-size: 12px;
        }

        .labor-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: var(--labor-dark);
          color: #fff;
          border: 1px solid var(--labor-dark);
          border-radius: 11px;
          padding: 12px 18px;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
          box-shadow: 0 5px 12px rgba(33, 27, 23, .12);
        }

        .labor-primary-btn:hover {
          background: var(--labor-bronze);
          border-color: var(--labor-bronze);
          transform: translateY(-1px);
        }

        .labor-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 25px;
        }

        .labor-stat-card {
          position: relative;
          overflow: hidden;
          background: var(--labor-card);
          border: 1px solid var(--labor-border);
          border-radius: 16px;
          padding: 19px;
          min-height: 125px;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .035);
        }

        .labor-stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .labor-stat-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #f3e8dc;
          color: var(--labor-bronze);
        }

        .labor-stat-label {
          color: var(--labor-muted);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .65px;
        }

        .labor-stat-value {
          color: var(--labor-dark);
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -.6px;
          line-height: 1.2;
        }

        .labor-stat-note {
          color: #a69a8e;
          font-size: 10px;
          margin-top: 5px;
        }

        .labor-tabs-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          padding: 7px;
          background: #eae2d8;
          border: 1px solid #e2d8cc;
          border-radius: 14px;
        }

        .labor-tabs {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .labor-tab {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 15px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: #776b60;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-tab:hover {
          background: rgba(255,255,255,.55);
          color: var(--labor-dark);
        }

        .labor-tab.active {
          background: var(--labor-dark);
          color: #fff;
          box-shadow: 0 3px 8px rgba(33, 27, 23, .15);
        }

        .labor-search {
          position: relative;
          min-width: 220px;
          max-width: 280px;
          flex: 1;
        }

        .labor-search input {
          width: 100%;
          height: 38px;
          padding: 0 13px 0 37px;
          border: 1px solid #e0d5c8;
          border-radius: 9px;
          background: #fff;
          outline: none;
          font-size: 11px;
          color: var(--labor-dark);
        }

        .labor-search input:focus {
          border-color: var(--labor-bronze);
          box-shadow: 0 0 0 3px rgba(164, 94, 48, .08);
        }

        .labor-search-icon {
          position: absolute;
          top: 11px;
          left: 12px;
          color: #a39484;
        }

        .labor-section-card {
          background: #fff;
          border: 1px solid var(--labor-border);
          border-radius: 17px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .035);
        }

        .labor-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding: 20px 22px;
          border-bottom: 1px solid var(--labor-border);
        }

        .labor-section-title {
          margin: 0;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 800;
        }

        .labor-section-description {
          margin: 5px 0 0;
          font-size: 11px;
          color: var(--labor-muted);
        }

        .labor-count-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 11px;
          background: #f4ece3;
          color: var(--labor-bronze);
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-directory-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .labor-worker-card {
          background: #fff;
          border: 1px solid var(--labor-border);
          border-radius: 16px;
          padding: 18px;
          transition: .2s ease;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .025);
        }

        .labor-worker-card:hover {
          border-color: #cba17f;
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(53, 42, 31, .07);
        }

        .labor-worker-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .labor-worker-identity {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .labor-worker-avatar {
          width: 49px;
          height: 49px;
          flex-shrink: 0;
          border-radius: 14px;
          object-fit: cover;
          border: 2px solid #ead5c1;
          background: #f2e8de;
        }

        .labor-worker-name {
          margin: 0;
          color: var(--labor-dark);
          font-size: 14px;
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .labor-worker-role {
          display: inline-block;
          margin-top: 5px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #f4ece3;
          color: var(--labor-bronze);
          font-size: 9px;
          font-weight: 800;
        }

        .labor-worker-id {
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 6px 8px;
          border-radius: 7px;
          background: #f5f2ee;
          color: #8c8075;
          font-family: monospace;
          font-size: 9px;
        }

        .labor-worker-details {
          display: grid;
          gap: 11px;
          margin-top: 20px;
          padding: 14px 0;
          border-top: 1px solid #f0ebe5;
          border-bottom: 1px solid #f0ebe5;
        }

        .labor-worker-detail {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #786d63;
          font-size: 11px;
          min-width: 0;
        }

        .labor-worker-detail svg {
          flex-shrink: 0;
          color: #b27b52;
        }

        .labor-worker-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
        }

        .labor-wage-label {
          color: #a2978b;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .labor-wage-value {
          display: block;
          margin-top: 4px;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 850;
        }

        .labor-outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 11px;
          background: #f5f1eb;
          color: var(--labor-dark);
          border: 1px solid #e9dfd4;
          border-radius: 9px;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-outline-btn:hover {
          background: var(--labor-dark);
          border-color: var(--labor-dark);
          color: #fff;
        }

        .labor-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 65px 20px;
          text-align: center;
          background: #fff;
          border: 1px dashed #d9cfc3;
          border-radius: 16px;
        }

        .labor-empty-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3e9de;
          color: var(--labor-bronze);
          border-radius: 18px;
          margin-bottom: 14px;
        }

        .labor-empty-state h3 {
          margin: 0;
          color: var(--labor-dark);
          font-size: 14px;
          font-weight: 800;
        }

        .labor-empty-state p {
          margin: 7px 0 0;
          color: var(--labor-muted);
          font-size: 11px;
        }

        .labor-attendance-date-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          padding: 17px 19px;
          background: #f5eee6;
          border: 1px solid #e8d8c7;
          border-radius: 13px;
        }

        .labor-date-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .labor-date-icon {
          width: 41px;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--labor-beige);
          background: var(--labor-dark);
          border-radius: 11px;
        }

        .labor-date-label {
          display: block;
          color: #90775f;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .labor-date-picker {
          margin-top: 4px;
          padding: 5px 8px;
          border: 1px solid #dfc9b3;
          border-radius: 7px;
          background: #fff;
          color: var(--labor-dark);
          font-size: 11px;
          font-weight: 750;
          outline: none;
        }

        .labor-attendance-summary {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .labor-attendance-summary span {
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-summary-present {
          background: #e5f2e9;
          color: #39734b;
        }

        .labor-summary-half {
          background: #f8edda;
          color: #9b6b24;
        }

        .labor-summary-absent {
          background: #f8e5e2;
          color: #a44d43;
        }

        .labor-roster-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 23px 0 13px;
        }

        .labor-roster-heading h3 {
          margin: 0;
          font-size: 13px;
          color: var(--labor-dark);
          font-weight: 800;
        }

        .labor-roster-heading span {
          color: #a29588;
          font-size: 10px;
        }

        .labor-roster-list {
          display: grid;
          gap: 10px;
        }

        .labor-roster-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          padding: 13px 15px;
          border: 1px solid #eee8e1;
          border-radius: 12px;
          background: #fff;
          transition: .2s ease;
        }

        .labor-roster-row:hover {
          border-color: #d8b99c;
          background: #fdfbf8;
        }

        .labor-roster-worker {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .labor-roster-worker img {
          width: 39px;
          height: 39px;
          border-radius: 11px;
          object-fit: cover;
          border: 1px solid #ead8c6;
        }

        .labor-roster-worker h4 {
          margin: 0;
          font-size: 12px;
          color: var(--labor-dark);
          font-weight: 800;
        }

        .labor-roster-worker p {
          margin: 4px 0 0;
          color: #988c80;
          font-size: 10px;
        }

        .labor-status-buttons {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .labor-status-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 10px;
          border: 1px solid #e7dfd6;
          border-radius: 8px;
          background: #fff;
          color: #7c7167;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-status-btn.present.active {
          background: #39734b;
          color: #fff;
          border-color: #39734b;
        }

        .labor-status-btn.half.active {
          background: #b17a2d;
          color: #fff;
          border-color: #b17a2d;
        }

        .labor-status-btn.absent.active {
          background: #a44d43;
          color: #fff;
          border-color: #a44d43;
        }

        .labor-status-btn:not(.active):hover {
          background: #f5f1eb;
        }

        .labor-matrix-section {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid var(--labor-border);
        }

        .labor-matrix-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .labor-matrix-heading h3 {
          margin: 0;
          font-size: 13px;
          color: var(--labor-dark);
          font-weight: 850;
        }

        .labor-matrix-heading span {
          color: #a3978a;
          font-size: 10px;
        }

        .labor-table-scroll {
          width: 100%;
          overflow-x: auto;
        }

        .labor-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .labor-table th {
          padding: 13px 14px;
          background: #f5f1eb;
          color: #897b6d;
          font-size: 9px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .5px;
          white-space: nowrap;
          border-bottom: 1px solid #e9e1d8;
        }

        .labor-table td {
          padding: 13px 14px;
          color: #5e544a;
          font-size: 11px;
          border-bottom: 1px solid #f0ebe5;
          vertical-align: middle;
        }

        .labor-table tbody tr:hover {
          background: #fdfbf8;
        }

        .labor-table-worker {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--labor-dark);
          font-weight: 750;
          white-space: nowrap;
        }

        .labor-table-worker img {
          width: 29px;
          height: 29px;
          border-radius: 9px;
          object-fit: cover;
        }

        .labor-matrix-select {
          padding: 7px 8px;
          border: 1px solid #e5ded6;
          border-radius: 7px;
          outline: none;
          font-size: 9px;
          font-weight: 750;
          cursor: pointer;
          max-width: 105px;
        }

        .labor-matrix-select.present {
          background: #e5f2e9;
          color: #39734b;
          border-color: #c5dfcb;
        }

        .labor-matrix-select.half {
          background: #f8edda;
          color: #9b6b24;
          border-color: #ead7ad;
        }

        .labor-matrix-select.absent {
          background: #f8e5e2;
          color: #a44d43;
          border-color: #e9c6c1;
        }

        .labor-matrix-select.unmarked {
          background: #f5f2ee;
          color: #81766c;
        }

        .labor-wage-summary-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          padding: 19px 21px;
          background: #fff;
          border-bottom: 1px solid var(--labor-border);
        }

        .labor-wage-summary {
          padding: 14px;
          border-radius: 11px;
          background: #f7f3ee;
        }

        .labor-wage-summary span {
          display: block;
          color: #96897d;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .labor-wage-summary strong {
          display: block;
          margin-top: 7px;
          color: var(--labor-dark);
          font-size: 19px;
          font-weight: 850;
        }

        .labor-wage-summary.highlight {
          background: var(--labor-dark);
        }

        .labor-wage-summary.highlight span {
          color: #c9aa8c;
        }

        .labor-wage-summary.highlight strong {
          color: #f1d3b6;
        }

        .labor-payment-amount {
          color: var(--labor-bronze) !important;
          font-weight: 850;
          font-size: 14px !important;
        }

        .labor-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background: rgba(22, 17, 13, .65);
          backdrop-filter: blur(5px);
        }

        .labor-modal {
          width: 100%;
          max-width: 590px;
          max-height: 91vh;
          overflow-y: auto;
          background: #fff;
          border-radius: 19px;
          box-shadow: 0 25px 70px rgba(0,0,0,.25);
          animation: laborModalIn .22s ease;
        }

        @keyframes laborModalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .labor-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 19px 22px;
          background: var(--labor-dark);
          color: #fff;
          border-radius: 19px 19px 0 0;
        }

        .labor-modal-header h3 {
          margin: 0;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
        }

        .labor-modal-header p {
          margin: 5px 0 0;
          color: #c7b5a4;
          font-size: 10px;
        }

        .labor-modal-close {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 9px;
          background: rgba(255,255,255,.08);
          color: #fff;
          cursor: pointer;
        }

        .labor-modal-close:hover {
          background: var(--labor-bronze);
        }

        .labor-modal-body {
          padding: 22px;
        }

        .labor-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .labor-form-group {
          min-width: 0;
        }

        .labor-form-group.full {
          grid-column: 1 / -1;
        }

        .labor-form-group label {
          display: block;
          margin-bottom: 7px;
          color: #685b4e;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-form-group input,
        .labor-form-group select {
          width: 100%;
          min-height: 41px;
          padding: 10px 12px;
          border: 1px solid #e5ddd4;
          border-radius: 9px;
          background: #fff;
          color: var(--labor-dark);
          outline: none;
          font-size: 11px;
          transition: .2s ease;
        }

        .labor-form-group input:focus,
        .labor-form-group select:focus {
          border-color: var(--labor-bronze);
          box-shadow: 0 0 0 3px rgba(164, 94, 48, .08);
        }

        .labor-upload-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 20px;
        }

        .labor-upload-box {
          min-width: 0;
          padding: 13px 10px;
          border: 1px dashed #d9c9b8;
          border-radius: 11px;
          background: #fbf8f4;
          text-align: center;
        }

        .labor-upload-box svg {
          color: var(--labor-bronze);
          margin-bottom: 6px;
        }

        .labor-upload-box strong {
          display: block;
          margin-bottom: 9px;
          color: #6e5e4e;
          font-size: 9px;
        }

        .labor-upload-box input {
          width: 100%;
          font-size: 9px;
          color: #8c8176;
        }

        .labor-uploaded-label {
          display: block;
          margin-top: 7px;
          color: #428056;
          font-size: 9px;
          font-weight: 800;
        }

        .labor-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
          padding-top: 18px;
          margin-top: 20px;
          border-top: 1px solid #eee8e1;
        }

        .labor-cancel-btn {
          padding: 10px 16px;
          border: 1px solid #e2d9cf;
          border-radius: 9px;
          background: #fff;
          color: #75685c;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
        }

        .labor-save-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 17px;
          border: 1px solid var(--labor-dark);
          border-radius: 9px;
          background: var(--labor-dark);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .labor-save-btn:hover {
          background: var(--labor-bronze);
          border-color: var(--labor-bronze);
        }

        .labor-profile-info {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          background: #f7f3ee;
          border: 1px solid #eee5da;
          border-radius: 12px;
          margin-bottom: 18px;
        }

        .labor-profile-info img {
          width: 65px;
          height: 65px;
          object-fit: cover;
          border-radius: 15px;
          border: 2px solid #dfc2a6;
        }

        .labor-profile-info h4 {
          margin: 0;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 850;
        }

        .labor-profile-info p {
          margin: 5px 0 0;
          color: #938477;
          font-size: 10px;
        }

        .labor-documents-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .nextgen-labor-document {
          padding: 12px;
          border: 1px solid #eee6dd;
          border-radius: 11px;
          background: #fff;
        }

        .labor-document-profile {
          grid-column: 1 / -1;
        }

        .nextgen-labor-document-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
          color: #756354;
          font-size: 10px;
          font-weight: 800;
        }

        .nextgen-labor-document-heading svg {
          color: var(--labor-bronze);
        }

        .nextgen-labor-document-image {
          display: block;
          width: 100%;
          height: 130px;
          object-fit: contain;
          border-radius: 8px;
          background: #f5f1eb;
        }

        .nextgen-labor-document-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 8px;
          color: var(--labor-bronze);
          font-size: 9px;
          font-weight: 800;
        }

        .nextgen-labor-document-status {
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 40px;
          color: #54835d;
          font-size: 10px;
          font-weight: 750;
        }

        .labor-loading {
          padding: 60px 20px;
          text-align: center;
          color: #8f8173;
          font-size: 12px;
        }

        .labor-loading svg {
          margin: 0 auto 10px;
          color: var(--labor-bronze);
          animation: laborSpin 1.2s linear infinite;
        }

        @keyframes laborSpin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1100px) {
          .labor-directory-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .labor-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .nextgen-labor-page {
            padding: 16px;
          }

          .labor-heading-title {
            font-size: 19px;
          }

          .labor-heading-icon {
            width: 45px;
            height: 45px;
          }

          .labor-directory-grid {
            grid-template-columns: 1fr;
          }

          .labor-tabs-wrapper {
            align-items: stretch;
          }

          .labor-tabs {
            width: 100%;
          }

          .labor-tab {
            flex: 1;
            padding: 10px 8px;
            font-size: 9px;
          }

          .labor-search {
            max-width: none;
          }

          .labor-wage-summary-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .labor-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
          }

          .labor-stat-card {
            padding: 13px;
            min-height: 110px;
          }

          .labor-stat-value {
            font-size: 20px;
          }

          .labor-stat-label {
            font-size: 9px;
          }

          .labor-status-buttons {
            width: 100%;
          }

          .labor-status-btn {
            flex: 1;
            justify-content: center;
            padding: 8px 6px;
            font-size: 9px;
          }

          .labor-form-grid {
            grid-template-columns: 1fr;
          }

          .labor-form-group.full {
            grid-column: auto;
          }

          .labor-upload-grid {
            grid-template-columns: 1fr;
          }

          .labor-documents-grid {
            grid-template-columns: 1fr;
          }

          .labor-document-profile {
            grid-column: auto;
          }

          .labor-modal-body {
            padding: 16px;
          }

          .labor-attendance-summary {
            width: 100%;
          }
        }

      `}</style>

      {/* PAGE HEADER */}
      <div className="labor-page-header">

        <div className="labor-heading-left">
          <div className="labor-heading-icon">
            <Users size={25} />
          </div>

          <div>
            <h2 className="labor-heading-title">
              {t('laborPageTitle')}
            </h2>

            <p className="labor-heading-subtitle">
              {t('laborPageSub')}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="labor-primary-btn"
        >
          <Plus size={16} />
          {t('addNewLabor')}
        </button>

      </div>

      {/* STATISTICS */}
      <div className="labor-stats-grid">

        <div className="labor-stat-card">
          <div className="labor-stat-top">
            <span className="labor-stat-label">{t('totalWorkers')}</span>
            <div className="labor-stat-icon">
              <Users size={18} />
            </div>
          </div>

          <div className="labor-stat-value">
            {totalWorkers}
          </div>

          <div className="labor-stat-note">
            {t('registeredLaborMembers')}
          </div>
        </div>

        <div className="labor-stat-card">
          <div className="labor-stat-top">
            <span className="labor-stat-label">{t('presentToday')}</span>
            <div className="labor-stat-icon">
              <CalendarCheck size={18} />
            </div>
          </div>

          <div className="labor-stat-value">
            {presentToday}
          </div>

          <div className="labor-stat-note">
            {halfDayToday} {t('halfDayAttendance')}
          </div>
        </div>

        <div className="labor-stat-card">
          <div className="labor-stat-top">
            <span className="labor-stat-label">{t('dailyWageTotal')}</span>
            <div className="labor-stat-icon">
              <Wallet size={18} />
            </div>
          </div>

          <div className="labor-stat-value">
            ₹{formatCurrency(totalDailyWages)}
          </div>

          <div className="labor-stat-note">
            {t('combinedDailyWages')}
          </div>
        </div>

        <div className="labor-stat-card">
          <div className="labor-stat-top">
            <span className="labor-stat-label">{t('totalEarnings')}</span>
            <div className="labor-stat-icon">
              <DollarSign size={18} />
            </div>
          </div>

          <div className="labor-stat-value">
            ₹{formatCurrency(totalPayment)}
          </div>

          <div className="labor-stat-note">
            {t('savedAttendanceRecords')}
          </div>
        </div>

      </div>

      {/* TABS */}
      <div className="labor-tabs-wrapper">

        <div className="labor-tabs">

          {[
            {
              id: 'directory',
              label: t('laborDirectory'),
              icon: Users
            },
            {
              id: 'attendance',
              label: t('attendance'),
              icon: CalendarCheck
            },
            {
              id: 'wages',
              label: t('wageReports'),
              icon: DollarSign
            }
          ].map(tab => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`labor-tab ${
                  activeSubTab === tab.id ? 'active' : ''
                }`}
              >
                <Icon size={15} />

                {tab.label}

                {tab.id === 'directory' && (
                  <span>({labors.length})</span>
                )}
              </button>
            );
          })}

        </div>

        {activeSubTab === 'directory' && (
          <div className="labor-search">
            <Search
              size={15}
              className="labor-search-icon"
            />

            <input
              type="text"
              placeholder={t('searchWorkers')}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        )}

      </div>

      {/* LOADING */}
      {loading ? (
        <div className="labor-section-card">
          <div className="labor-loading">
            <RefreshCw size={25} />
            <div>{t('loadingLaborRecords')}</div>
          </div>
        </div>
      ) : (
        <>

          {/* DIRECTORY */}
          {activeSubTab === 'directory' && (
            <div>

              {filteredLabors.length === 0 ? (
                <div className="labor-empty-state">
                  <div className="labor-empty-icon">
                    <Users size={28} />
                  </div>

                  <h3>
                    {searchTerm
                      ? t('noMatchingWorkers')
                      : t('noWorkerProfiles')}
                  </h3>

                  <p>
                    {searchTerm
                      ? t('searchWorkerHint')
                      : t('addFirstWorkerHint')}
                  </p>
                </div>
              ) : (
                <div className="labor-directory-grid">

                  {filteredLabors.map(l => (
                    <div
                      key={l._id}
                      className="labor-worker-card"
                    >

                      <div className="labor-worker-top">

                        <div className="labor-worker-identity">

                          <img
                            src={
                              l.profilePhoto ||
                              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                            }
                            alt={l.name}
                            className="labor-worker-avatar"
                          />

                          <div>
                            <h3 className="labor-worker-name">
                              {l.name}
                            </h3>

                            <span className="labor-worker-role">
                              {translateRole(l.role)}
                            </span>
                          </div>

                        </div>

                        {l.laborId && (
                          <span className="labor-worker-id">
                            {l.laborId}
                          </span>
                        )}

                      </div>

                      <div className="labor-worker-details">

                        <div className="labor-worker-detail">
                          <Phone size={14} />
                          <span>{l.mobile || t('notProvided')}</span>
                        </div>

                        <div className="labor-worker-detail">
                          <MapPin size={14} />
                          <span>
                            {l.location || t('locationNotProvided')}
                          </span>
                        </div>

                        <div className="labor-worker-detail">
                          <BriefcaseBusiness size={14} />
                          <span>{translateRole(l.role) || t('worker')}</span>
                        </div>

                      </div>

                     <div className="labor-worker-footer">

  <div>
    <span className="labor-wage-label">
      {t('dailyCharges')}
    </span>

    <strong className="labor-wage-value">
      ₹{formatCurrency(l.dailyWage)} {t('perDay')}
    </strong>
  </div>

  <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>

    <button
      onClick={() => setSelectedLaborProfile(l)}
      className="labor-outline-btn"
    >
      <Eye size={14} />
      {t('viewProfile')}
    </button>

    <button
      onClick={() => handleDeleteLabor(l)}
      className="labor-outline-btn"
      style={{
        color: '#c0392b',
        borderColor: '#f0c9c5',
        background: '#fff5f4'
      }}
      title="Delete Worker"
    >
      <Trash2 size={14} />
    </button>

  </div>

</div>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

          {/* ATTENDANCE */}
          {activeSubTab === 'attendance' && (
            <div className="labor-section-card">

              <div className="labor-section-header">
                <div>
                  <h3 className="labor-section-title">
                    {t('attendanceManagement')}
                  </h3>

                  <p className="labor-section-description">
                    {t('markAttendanceHint')}
                  </p>
                </div>

                <span className="labor-count-label">
                  <Users size={13} />
                  {labors.length} {t('workers')}
                </span>
              </div>

              <div style={{ padding: '20px' }}>

                {/* DATE SELECTOR */}
                <div className="labor-attendance-date-box">

                  <div className="labor-date-info">

                    <div className="labor-date-icon">
                      <Calendar size={20} />
                    </div>

                    <div>
                      <label className="labor-date-label">
                        {t('selectAttendanceDate')}
                      </label>

                      <input
                        type="date"
                        value={selectedDate}
                        min={minDate}
                        max={maxDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="labor-date-picker"
                      />
                    </div>

                  </div>

                  <div className="labor-attendance-summary">

                    <span className="labor-summary-present">
                      {t('present')}: {labors.filter(
                        l => getAttendanceStatus(l, selectedDate) === 'Present'
                      ).length}
                    </span>

                    <span className="labor-summary-half">
                      {t('halfDay')}: {labors.filter(
                        l => getAttendanceStatus(l, selectedDate) === 'Half Day'
                      ).length}
                    </span>

                    <span className="labor-summary-absent">
                      {t('absent')}: {labors.filter(
                        l => getAttendanceStatus(l, selectedDate) === 'Absent'
                      ).length}
                    </span>

                  </div>

                </div>

                {/* DAILY ROSTER */}
                <div className="labor-roster-heading">
                  <h3>{t('workerAttendanceRoster')}</h3>

                  <span>{selectedDate}</span>
                </div>

                {labors.length === 0 ? (
                  <div className="labor-empty-state">
                    <div className="labor-empty-icon">
                      <CalendarCheck size={27} />
                    </div>

                    <h3>{t('noWorkersAvailable')}</h3>

                    <p>{t('addWorkersBeforeAttendance')}</p>
                  </div>
                ) : (
                  <div className="labor-roster-list">

                    {labors.map(l => {
                      const currentStatus = getAttendanceStatus(
                        l,
                        selectedDate
                      );

                      return (
                        <div
                          key={l._id}
                          className="labor-roster-row"
                        >

                          <div className="labor-roster-worker">

                            <img
                              src={
                                l.profilePhoto ||
                                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                              }
                              alt={l.name}
                            />

                            <div>
                              <h4>{l.name}</h4>

                              <p>
                                {translateRole(l.role)} · {t('dailyWage')}: ₹
                                {formatCurrency(l.dailyWage)}
                              </p>
                            </div>

                          </div>

                          <div className="labor-status-buttons">

                            <button
                              onClick={() =>
                                handleAttendanceChange(
                                  l._id,
                                  selectedDate,
                                  'Present'
                                )
                              }
                              className={`labor-status-btn present ${
                                currentStatus === 'Present' ? 'active' : ''
                              }`}
                            >
                              <CheckCircle2 size={13} />
                              {t('present')}
                            </button>

                            <button
                              onClick={() =>
                                handleAttendanceChange(
                                  l._id,
                                  selectedDate,
                                  'Half Day'
                                )
                              }
                              className={`labor-status-btn half ${
                                currentStatus === 'Half Day' ? 'active' : ''
                              }`}
                            >
                              <Clock size={13} />
                              {t('halfDay')}
                            </button>

                            <button
                              onClick={() =>
                                handleAttendanceChange(
                                  l._id,
                                  selectedDate,
                                  'Absent'
                                )
                              }
                              className={`labor-status-btn absent ${
                                currentStatus === 'Absent' ? 'active' : ''
                              }`}
                            >
                              <XCircle size={13} />
                              {t('absent')}
                            </button>

                          </div>

                        </div>
                      );
                    })}

                  </div>
                )}

                {/* PAST 7 DAYS MATRIX */}
                <div className="labor-matrix-section">

                  <div className="labor-matrix-heading">
                    <h3>{t('past7DaysAttendance')}</h3>

                    <span>
                      {t('selectStatusToUpdate')}
                    </span>
                  </div>

                  <div className="labor-table-scroll">

                    <table className="labor-table">

                      <thead>
                        <tr>
                          <th>{t('worker')}</th>

                          {past7Days.map(dateStr => (
                            <th key={dateStr} style={{ textAlign: 'center' }}>
                              {dateStr.slice(5)}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>

                        {labors.map(l => (
                          <tr key={l._id}>

                            <td>
                              <div className="labor-table-worker">

                                <img
                                  src={
                                    l.profilePhoto ||
                                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                                  }
                                  alt={l.name}
                                />

                                <span>{l.name}</span>

                              </div>
                            </td>

                            {past7Days.map(dateStr => {
                              const status = getAttendanceStatus(l, dateStr);

                              let selectClass = 'unmarked';

                              if (status === 'Present') {
                                selectClass = 'present';
                              }

                              if (status === 'Half Day') {
                                selectClass = 'half';
                              }

                              if (status === 'Absent') {
                                selectClass = 'absent';
                              }

                              return (
                                <td
                                  key={dateStr}
                                  style={{ textAlign: 'center' }}
                                >

                                  <select
                                    value={status}
                                    onChange={e =>
                                      handleAttendanceChange(
                                        l._id,
                                        dateStr,
                                        e.target.value
                                      )
                                    }
                                    className={`labor-matrix-select ${selectClass}`}
                                  >
                                    <option value="Not Marked">
                                      {t('notMarked')}
                                    </option>

                                    <option value="Present">
                                      {t('present')}
                                    </option>

                                    <option value="Half Day">
                                      {t('halfDay')}
                                    </option>

                                    <option value="Absent">
                                      {t('absent')}
                                    </option>

                                  </select>

                                </td>
                              );
                            })}

                          </tr>
                        ))}

                        {labors.length === 0 && (
                          <tr>
                            <td
                              colSpan="8"
                              style={{ textAlign: 'center' }}
                            >
                              {t('noAttendanceRecords')}
                            </td>
                          </tr>
                        )}

                      </tbody>

                    </table>

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* WAGE REPORTS */}
          {activeSubTab === 'wages' && (
            <div className="labor-section-card">

              <div className="labor-section-header">
                <div>
                  <h3 className="labor-section-title">
                    {t('laborPaymentReports')}
                  </h3>

                  <p className="labor-section-description">
                    {t('paymentCalculationHint')}
                  </p>
                </div>

                <span className="labor-count-label">
                  <Wallet size={13} />
                  {t('wageSummary')}
                </span>
              </div>

              <div className="labor-wage-summary-grid">

                <div className="labor-wage-summary">
                  <span>{t('registeredWorkers')}</span>
                  <strong>{labors.length}</strong>
                </div>

                <div className="labor-wage-summary">
                  <span>{t('combinedDailyWages')}</span>
                  <strong>₹{formatCurrency(totalDailyWages)}</strong>
                </div>

                <div className="labor-wage-summary highlight">
                  <span>{t('totalPaymentDue')}</span>
                  <strong>₹{formatCurrency(totalPayment)}</strong>
                </div>

              </div>

              <div className="labor-table-scroll">

                <table className="labor-table">

                  <thead>
                    <tr>
                      <th>{t('laborName')}</th>
                      <th>{t('dailyWage')}</th>
                      <th>{t('totalDaysCount')}</th>
                      <th style={{ textAlign: 'right' }}>
                        {t('totalPaymentDue')}
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {labors.length === 0 ? (
                      <tr>
                        <td
                          colSpan="4"
                          style={{ textAlign: 'center', padding: '30px' }}
                        >
                          {t('noLaborRegistered')}
                        </td>
                      </tr>
                    ) : (
                      labors.map(l => {
                        const {
                          totalDaysWorked,
                          totalEarned
                        } = calculateLaborEarnings(l);

                        return (
                          <tr key={l._id}>

                            <td>
                              <div className="labor-table-worker">

                                <img
                                  src={
                                    l.profilePhoto ||
                                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                                  }
                                  alt={l.name}
                                />

                                <div>
                                  <div>{l.name}</div>

                                  <span
                                    style={{
                                      display: 'block',
                                      marginTop: '3px',
                                      color: '#a09488',
                                      fontSize: '9px',
                                      fontWeight: 500
                                    }}
                                  >
                                    {translateRole(l.role)}
                                  </span>
                                </div>

                              </div>
                            </td>

                            <td>
                              <strong>
                                ₹{formatCurrency(l.dailyWage)}
                              </strong>
                            </td>

                            <td>
                              <strong style={{ color: '#a45e30' }}>
                                {totalDaysWorked} {t('days')}
                              </strong>
                            </td>

                            <td style={{ textAlign: 'right' }}>
                              <strong className="labor-payment-amount">
                                ₹{formatCurrency(totalEarned)}
                              </strong>
                            </td>

                          </tr>
                        );
                      })
                    )}

                  </tbody>

                </table>

              </div>

            </div>
          )}

        </>
      )}

      {/* VIEW LABOR PROFILE MODAL */}
      {selectedLaborProfile && (
        <div
          className="labor-modal-overlay"
          onClick={() => setSelectedLaborProfile(null)}
        >

          <div
            className="labor-modal"
            onClick={e => e.stopPropagation()}
          >

            <div className="labor-modal-header">

              <div>
                <h3>{t('workerVerificationProfile')}</h3>

                <p>
                  {t('personalInfoDocuments')}
                </p>
              </div>

              <button
                onClick={() => setSelectedLaborProfile(null)}
                className="labor-modal-close"
              >
                <X size={17} />
              </button>

            </div>

            <div className="labor-modal-body">

              <div className="labor-profile-info">

                <img
                  src={
                    selectedLaborProfile.profilePhoto ||
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                  }
                  alt={t('profile')}
                />

                <div>
                  <h4>{selectedLaborProfile.name}</h4>

                  <p>
                    {translateRole(selectedLaborProfile.role)} ·{' '}
                    {selectedLaborProfile.mobile}
                  </p>

                  <p>
                    {t('dailyWage')}: ₹
                    {formatCurrency(selectedLaborProfile.dailyWage)}
                  </p>
                </div>

              </div>

              <div className="labor-documents-grid">

                <div className="labor-document-profile">
                  {renderDocument(
                    selectedLaborProfile.profilePhoto,
                    t('profilePhoto')
                  )}
                </div>

                {renderDocument(
                  selectedLaborProfile.panPhoto,
                  t('panCard')
                )}

                {renderDocument(
                  selectedLaborProfile.aadharPhoto,
                  t('aadhaarCard')
                )}

              </div>

             <div className="labor-modal-footer">

  <button
    onClick={() => setSelectedLaborProfile(null)}
    className="labor-cancel-btn"
  >
    {t('closeProfile')}
  </button>

  <button
    type="button"
    onClick={() => handleEditLabor(selectedLaborProfile)}
    className="labor-save-btn"
  >
    <Pencil size={14} />
    Edit Worker
  </button>

</div>

            </div>

          </div>

        </div>
      )}

      {/* ADD NEW LABOR MODAL */}
      {showAddModal && (
        <div
          className="labor-modal-overlay"
          onClick={() => setShowAddModal(false)}
        >

          <div
            className="labor-modal"
            onClick={e => e.stopPropagation()}
          >

            <div className="labor-modal-header">

              <div>
                <h3>
  {editingLaborId ? 'Edit Worker Details' : t('addNewLaborWorker')}
</h3>

                <p>
                  {t('enterWorkerDetails')}
                </p>
              </div>

              <button
                onClick={() => setShowAddModal(false)}
                className="labor-modal-close"
              >
                <X size={17} />
              </button>

            </div>

            <div className="labor-modal-body">

              <form onSubmit={handleAddLabor}>

                {/* BASIC DETAILS */}
                <div className="labor-form-grid">

                  <div className="labor-form-group">
                    <label>{t('fullName')} *</label>

                    <input
                      type="text"
                      required
                      placeholder={t('exampleName')}
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                    />
                  </div>

                  <div className="labor-form-group">
                    <label>{t('mobileNumber')} *</label>

                    <input
                      type="tel"
                      required
                      placeholder="+91 9823000000"
                      value={formMobile}
                      onChange={e => setFormMobile(e.target.value)}
                    />
                  </div>

                  <div className="labor-form-group">
                    <label>{t('locationNative')}</label>

                    <input
                      type="text"
                      placeholder="Baramati"
                      value={formLocation}
                      onChange={e => setFormLocation(e.target.value)}
                    />
                  </div>

                <div className="labor-form-group">
  <label>{t('roleTrade')}</label>

  <div style={{ display: 'flex', gap: '7px' }}>
    <select
      value={formRole}
      onChange={e => setFormRole(e.target.value)}
      style={{ flex: 1 }}
    >
      <option value="Mason">{t('mason')}</option>
      <option value="Electrician">{t('electrician')}</option>
      <option value="Plumber">{t('plumber')}</option>
      <option value="Helper">{t('helper')}</option>
      <option value="Bar Bender">{t('barBender')}</option>

      {customRoles.map(role => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>

    <button
      type="button"
      onClick={() => setShowAddRole(!showAddRole)}
      style={{
        width: '42px',
        minWidth: '42px',
        border: 'none',
        borderRadius: '9px',
        background: '#211b17',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      title="Add new role"
    >
      <Plus size={18} />
    </button>
  </div>

  {showAddRole && (
    <div style={{ display: 'flex', gap: '7px', marginTop: '9px' }}>
      <input
        type="text"
        placeholder="Enter new role"
        value={newRole}
        onChange={e => setNewRole(e.target.value)}
      />

      <button
        type="button"
        onClick={handleAddRole}
        className="labor-save-btn"
      >
        Add
      </button>
    </div>
  )}
</div>

                  <div className="labor-form-group full">
                    <label>{t('dailyWageRequired')} *</label>

                    <input
                      type="number"
                      required
                      min="100"
                      value={formWage}
                      onChange={e => setFormWage(e.target.value)}
                    />
                  </div>

                </div>

                {/* DOCUMENT UPLOADS */}
                <div className="labor-upload-grid">

                  <div className="labor-upload-box">

                    <UserRound size={19} />

                    <strong>{t('profilePhoto')}</strong>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={e =>
                        handleFileUpload(e, setFormProfilePhoto)
                      }
                    />

                    {formProfilePhoto && (
                      <span className="labor-uploaded-label">
                        ✓ {t('uploaded')}
                      </span>
                    )}

                  </div>

                  <div className="labor-upload-box">

                    <FileImage size={19} />

                    <strong>{t('panCardPhoto')}</strong>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={e =>
                        handleFileUpload(e, setFormPanPhoto)
                      }
                    />

                    {formPanPhoto && (
                      <span className="labor-uploaded-label">
                        ✓ {t('uploaded')}
                      </span>
                    )}

                  </div>

                  <div className="labor-upload-box">

                    <FileImage size={19} />

                    <strong>{t('aadhaarCardPhoto')}</strong>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={e =>
                        handleFileUpload(e, setFormAadharPhoto)
                      }
                    />

                    {formAadharPhoto && (
                      <span className="labor-uploaded-label">
                        ✓ {t('uploaded')}
                      </span>
                    )}

                  </div>

                </div>

                {/* FORM ACTIONS */}
                <div className="labor-modal-footer">

                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                        setEditingLaborId(null);

                      resetLaborForm();
                    }}
                    className="labor-cancel-btn"
                  >
                    {t('cancel')}
                  </button>

                 <button
  type="submit"
  className="labor-save-btn"
>
  {editingLaborId ? <Pencil size={14} /> : <Plus size={14} />}
  {editingLaborId ? 'Update Worker' : t('saveWorker')}
</button>

                </div>

              </form>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}